from fastapi import APIRouter, Depends
from app.utils.keys import MovieDB_Key
from app.utils.redis import redis_client
from app.dependencies.auth import get_current_user
from app.services.trends_service import get_trends_weekly
import json

router = APIRouter(
  dependencies=[Depends(get_current_user)]
)

@router.get("/trends")
async def getTrends():
  cached_key = "trends_movie_tv"

  cached = await redis_client.get(cached_key)

  if cached: 
    return json.loads(cached)
  
  return await get_trends_weekly(cached_key)

