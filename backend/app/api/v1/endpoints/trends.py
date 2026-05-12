from fastapi import APIRouter
import redis.asyncio as redis
import json
import requests
import os

router = APIRouter()
tokenMovie = os.getenv("MovieDB_KEY")
redis_url = os.getenv("REDIS_URL")

redis_client = redis.from_url(redis_url, decode_responses=True)

@router.get("/trends")
async def getTrends():
  cached_key = "trends_movie_tv"

  cached = await redis_client.get(cached_key)

  if cached: 
    return json.loads(cached)


  urlMovies = "https://api.themoviedb.org/3/trending/movie/week?language=en-US"
  urlTv =  "https://api.themoviedb.org/3/trending/tv/week?language=en-US"

  headers = { 
    "accept": "application/json",
    "Authorization": f"Bearer {tokenMovie}"
  }

  tmdb_response_movies = requests.get(urlMovies, headers=headers)
  tmdb_response_tv = requests.get(urlTv, headers=headers)

  await redis_client.setex(
    cached_key,
    3600 * 24 * 7,
    json.dumps({
      "movies": tmdb_response_movies.json(),
      "tv": tmdb_response_tv.json()
    })
  )

  return {
    "movies": tmdb_response_movies.json(),
    "tv": tmdb_response_tv.json()
  }

