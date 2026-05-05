from fastapi import APIRouter, Response, Depends
from app.schemas.auth import LoginRequest
from app.services.auth_service import login_user
from app.dependencies.auth import get_current_user

router = APIRouter()


@router.post("/login")
def login(body: LoginRequest, response: Response):
    token = login_user(body.username, body.password)

    if not token:
        return {"error": "Invalid credentials"}

    response.set_cookie(
        key="token",
        value=token,
        httponly=True,
        samesite="lax",
    )

    return {"message": "Logged in", "user": "Juan"}


@router.post("/logout")
def logout(response: Response):
    response.delete_cookie("token")
    return {"message": "Logged out"}