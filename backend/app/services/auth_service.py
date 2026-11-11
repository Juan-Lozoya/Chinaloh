from app.core.security import create_access_token, verify_password
from app.db.models.user import User
from app.core.responses import response

def login_user(db, username: str, password: str):
  user: User = db.query(User).filter(
    User.username == username
  ).first()

  if not user:
    return response(False, "Invalid User or Password")

  if not verify_password(password, user.hashed_password):
    return response(False, "Invalid User or Password")

  token = create_access_token({"sub": user.id})

  return response(True, "Login Successful", {
    "user": {
      "id": user.id,
      "username": user.username,
      "email": user.email,
      "user_type": user.user_type,
    },
    "access_token_chinaloh": token,
    "token_type": "bearer",
  })