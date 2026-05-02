import os
from dotenv import load_dotenv

load_dotenv()

SECRET_KEY = os.getenv("SECRET_KEY", "super-secret-key-654321")
ALGORITHM = "HS256"
ACCESS_TOKEN_EXPIRE_MINUTES = 120