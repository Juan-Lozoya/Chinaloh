import os
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.api.v1.endpoints.auth import router as auth_router
from app.api.v1.endpoints.search import router as search_router
from app.api.v1.endpoints.trends import router as trends_router

app = FastAPI()
environment = os.getenv("ENVIRONMENT", "development")

if environment == "development":
    origins = ["http://localhost:5173"]
else: 
    origins = [
        origin.strip()
        for origin in os.getenv("CORS_ORIGINS", "").split(",")
        if origin.strip()
    ]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(auth_router, prefix="/api/v1/auth")
app.include_router(trends_router, prefix="/api/v1")
app.include_router(search_router, prefix="/api/v1")


@app.get("/")
def root():
  return {"message": "Backend running"}