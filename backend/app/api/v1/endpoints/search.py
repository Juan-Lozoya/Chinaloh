from fastapi import APIRouter, Response
from app.utils.keys import MovieDB_Key
from app.clients.tmdb_service import search_movie
from pydantic import BaseModel

router = APIRouter()
class SearchBody(BaseModel):
  search: str

@router.post("/search")
def search(body: SearchBody, response: Response):
  params = {
    "query": body.search,
    "include_adult": True,
    "language": "es-MX",
    "page": 1
  }
  return search_movie(params)