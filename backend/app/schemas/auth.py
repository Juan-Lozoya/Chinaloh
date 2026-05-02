from pydantic import BaseModel

class LoginRequest(BaseModel):
    username: str


class UserResponse(BaseModel):
    username: str