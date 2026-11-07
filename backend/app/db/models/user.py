import enum
from sqlalchemy import Column, Integer, String, Enum
from app.db.database import Base

class UserType(enum.Enum):
  ADMIN = "admin"
  USER = "user"

class User(Base):
  __tablename__ = "users"

  id = Column(Integer, primary_key=True, index=True)
  email = Column(String, unique=True, nullable=False, index=True)
  username = Column(String, unique=True, nullable=False, index=True)
  user_type = Column(
    Enum(
      UserType,
      name="user_type_enum",
      values_callable=lambda enum_cls: [
        member.value for member in enum_cls
      ],
    ),
    nullable=False,
    default=UserType.USER,
    server_default="user",
  )
  hashed_password = Column(String, nullable=False)