from fastapi import APIRouter, Response
from app.utils.keys import MovieDB_Key
import requests
from pydantic import BaseModel

router = APIRouter()

class SearchBody(BaseModel):
    search: str

@router.post("/search")
def search(body: SearchBody, response: Response):
    
    url = "https://api.themoviedb.org/3/search/movie"
    params = {
        "query": body.search,
        "include_adult": True,
        "language": "es-MX",
        "page": 1
    }
    headers = { 
        "accept": "application/json",
        "Authorization": f"Bearer {MovieDB_Key}"
    }
    
    tmdb_response = requests.get(url, headers=headers, params=params)
    
    response.status_code = tmdb_response.status_code
    return tmdb_response.json()