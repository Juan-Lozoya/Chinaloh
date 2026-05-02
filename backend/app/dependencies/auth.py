from fastapi import Request, HTTPException
from app.core.security import decode_token


def get_current_user(request: Request):
    token = request.cookies.get("token")

    if not token:
        raise HTTPException(status_code=401, detail="Not authenticated")

    payload = decode_token(token)

    if not payload:
        raise HTTPException(status_code=401, detail="Invalid token")

    return payload["sub"]