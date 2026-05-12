import requests
import json
from app.utils.keys import MovieDB_Key

urlMovies = "https://api.themoviedb.org/3/trending/movie/week?language=en-US"
urlTv =  "https://api.themoviedb.org/3/trending/tv/week?language=en-US"

headers = { 
  "accept": "application/json",
  "Authorization": f"Bearer {MovieDB_Key}"
}

async def get_trends_weekly(redis, cached_key):
  tmdb_response_movies = requests.get(urlMovies, headers=headers)
  tmdb_response_tv = requests.get(urlTv, headers=headers)

  await redis.setex(
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