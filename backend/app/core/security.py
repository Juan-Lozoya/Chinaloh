from datetime import datetime, timedelta, timezone
import jwt
from typing import Any
from app.core.exceptions import InvalidTokenException
from pwdlib import PasswordHash
from app.core.config import SECRET_KEY, ALGORITHM, ACCESS_TOKEN_EXPIRE_MINUTES

password_hash = PasswordHash.recommended()


def create_access_token(data: dict):
  to_encode = data.copy()
  expire = datetime.utcnow() + timedelta(minutes=ACCESS_TOKEN_EXPIRE_MINUTES)

  if "sub" in to_encode:
    to_encode["sub"] = str(to_encode["sub"])

  expire = datetime.now(timezone.utc) + timedelta(
    minutes=ACCESS_TOKEN_EXPIRE_MINUTES
  )

  to_encode.update({"exp": expire})

  return jwt.encode(
    to_encode,
    SECRET_KEY,
    algorithm=ALGORITHM,
  )

def verify_password(
  plain_password: str,
  hashed_password: str
) -> bool:
  return password_hash.verify(plain_password, hashed_password)

def decode_token(
  token: str
) -> dict[str, Any]:
  try:
    payload = jwt.decode(
      token,
      SECRET_KEY,
      algorithms=[ALGORITHM],
    )
    return payload
  
  except jwt.ExpiredSignatureError:
    raise InvalidTokenException()

  except jwt.InvalidTokenError:
    raise InvalidTokenException()