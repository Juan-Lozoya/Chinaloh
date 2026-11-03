from app.core.security import create_access_token
from app.db.models.user import User

def login_user(db, username: str, password: str):
  user = db.query(User).filter(
    User.username == username
  ).first()

  if not user:
    return None

  if username != "chinaloh":
    return None
  
  if password != "654321":
    return None

  token = create_access_token({"sub": username})
  return token