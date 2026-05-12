import redis.asyncio as redis
from app.utils.keys import Redis_URL

redis_client = redis.from_url(Redis_URL, decode_responses=True)