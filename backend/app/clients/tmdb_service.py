import requests
import json
from app.utils.keys import MovieDB_Key

BASE_URL = "https://api.themoviedb.org/3"

headers = {
  "accept": "application/json",
  "Authorization": f"Bearer {MovieDB_Key}"
}

def get_trending_movies_week():
  response = requests.get(
    f"{BASE_URL}/trending/movie/week?language=en-US",
    headers=headers
  )

  response.raise_for_status()

  return response.json()


def get_trending_tv_week():
  response = requests.get(
    f"{BASE_URL}/trending/tv/week?language=en-US",
    headers=headers
  )

  response.raise_for_status()

  return response.json()

def search_movie(params):
  response = requests.get(
    f"{BASE_URL}/search/movie",
    headers=headers, 
    params=params
  )

  response.raise_for_status()

  return response.json()