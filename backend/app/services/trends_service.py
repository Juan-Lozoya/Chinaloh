from app.utils.redis import set_trends_weekly
from app.clients.tmdb_service import get_trending_movies_week
from app.clients.tmdb_service import get_trending_tv_week

def build_trending_response(movies, tv):
  return {
    "movies": movies,
    "tv": tv
  }

async def get_trends_weekly(cached_key):
  movies = get_trending_movies_week()
  tv = get_trending_tv_week()

  await set_trends_weekly(cached_key, build_trending_response(movies, tv))

  return build_trending_response(movies, tv)