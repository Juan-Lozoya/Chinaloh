from app.core.security import create_access_token


def login_user(username: str, password: str):
    if username != "chinaloh":
        return None
    
    if password != "654321":
        return None

    token = create_access_token({"sub": username})
    return token