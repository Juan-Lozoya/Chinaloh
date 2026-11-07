from fastapi import Cookie, Depends
from sqlalchemy.orm import Session
from app.core.security import decode_token
from app.db.models.user import User
from app.db.database import get_db
from app.core.exceptions import (
  AuthenticationException,
  MissingTokenException,
  UserNotFoundException,
)

def get_current_user(
  access_token: str | None = Cookie(
    default = None,
    alias = "access_token_chinaloh"
  ),
  db: Session = Depends(get_db)
) -> User:

  if not access_token:
    raise MissingTokenException()

  payload = decode_token(access_token)
  user_id = payload.get("sub")

  if not user_id:
    raise AuthenticationException("Token does not contain a user ID")

  try:
    user_id = int(user_id)
  except (ValueError, TypeError):
    raise AuthenticationException("Invalid user ID in token")

  user = db.query(User).filter(User.id == user_id).first()

  if user is None:
    raise UserNotFoundException()

  return user
