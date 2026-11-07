from fastapi import Depends, APIRouter, Response, HTTPException, status
from sqlalchemy.orm import Session
from app.schemas.auth import LoginRequest
from app.services.auth_service import login_user
from app.dependencies.auth import get_current_user
from app.core.responses import response as responseret
from app.db.database import get_db

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
      max_age = 120,  # check Exp time in JWT Front
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
  

@router.post("/logout")
def logout(response: Response):
  response.delete_cookie("token")
  return {"message": "Logged out"}