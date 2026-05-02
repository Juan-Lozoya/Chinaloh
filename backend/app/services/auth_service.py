from app.core.security import create_access_token


def login_user(username: str):
    if username != "chinaloh":
        return None

    token = create_access_token({"sub": username})
    return token