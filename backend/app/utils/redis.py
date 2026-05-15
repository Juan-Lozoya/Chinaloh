import redis.asyncio as redis
import json
from app.utils.keys import Redis_URL

redis_client = redis.from_url(Redis_URL, decode_responses=True)

async def set_trends_weekly(key, object):
  await redis_client.setex(
    key,
    3600 * 24 * 7,
    json.dumps(object)
  )