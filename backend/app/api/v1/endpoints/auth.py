from fastapi import Depends, APIRouter, Response, HTTPException, status
from sqlalchemy.orm import Session
from app.core.config import ACCESS_TOKEN_EXPIRE_MINUTES
from app.db.models.user import User
from app.schemas.auth import LoginRequest
from app.services.auth_service import login_user
from app.dependencies.auth import get_current_user
from app.core.responses import response as responseret
from app.db.database import get_db
from app.core.exceptions import LogoutException

router = APIRouter()


@router.post("/login")
def login(body: LoginRequest, response: Response, db: Session = Depends(get_db)):
  try: 
    result = login_user(db, body.username, body.password)
    
    if not result["success"]:
      raise HTTPException(
        status_code=status.HTTP_401_UNAUTHORIZED,
        detail=result["message"],
      )
    
    token = result["data"]["access_token_chinaloh"]
  
    response.set_cookie(
      key="access_token_chinaloh",
      value=token,
      httponly=True,
      secure=True,  # Productino
      samesite="lax",
      max_age = ACCESS_TOKEN_EXPIRE_MINUTES * 60,
      path="/",
    )
  
    return responseret(
      True,
      result["message"],
      data={"user": result["data"]["user"]},
    )
  except Exception as e:
    raise HTTPException(
      status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
      detail=e
    )

@router.get("/me")
def get_me(current_user: User = Depends(get_current_user)):
  try: 
    return responseret(
      True,
      "User retrieved successfully",
      data = {
        "user": {
          "id": current_user.id,
          "username": current_user.username,
          "email": current_user.email,
          "user_type": current_user.user_type.value
          if hasattr(current_user.user_type, "value")
          else current_user.user_type,
        }
      }
    )
  except Exception as e:
    raise HTTPException(
      status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
      detail=e
    )

@router.post("/auth/logout")
def logout(response: Response):
  try: 
    response.delete_cookie(
      key = "access_token_chinaloh",
      path = "/",
      secure = True,
      httponly = True,
      samesite = "lax",
    )

    return responseret(
      True,
      "Logout Successful",
    )
  except Exception as exc:
    raise LogoutException() from exc

  