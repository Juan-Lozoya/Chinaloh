from fastapi import APIRouter
from app.utils.keys import MovieDB_Key
from app.utils.redis import redis_client
from app.services.trends_service import get_trends_weekly
import json

router = APIRouter()

@router.get("/trends")
async def getTrends():
  cached_key = "trends_movie_tv"

  cached = await redis_client.get(cached_key)

  if cached: 
    return json.loads(cached)
  
  return await get_trends_weekly(cached_key)

