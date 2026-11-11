
from fastapi import HTTPException, status

class AuthenticationException(HTTPException):
  def __init__(
    self,
    detail: str = "Authentication required",
    status_code: int = status.HTTP_401_UNAUTHORIZED,
  ):
    super().__init__(
      status_code=status_code,
      detail=detail,
    )

class InvalidTokenException(AuthenticationException):
  def __init__(self):
    super().__init__("Invalid or expired access token")

class MissingTokenException(AuthenticationException):
  def __init__(self):
    super().__init__("Access token is missing")

class UserNotFoundException(AuthenticationException):
  def __init__(self):
    super().__init__("Authenticated user not found")

class LogoutException(HTTPException):
  def __init__(self):
    super().__init__(
      status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
      detail="Could not complete logout",
    )
