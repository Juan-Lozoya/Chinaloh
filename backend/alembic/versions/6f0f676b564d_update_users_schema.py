"""update users schema

Revision ID: 6f0f676b564d
Revises: 897537cf989c
Create Date: 2026-11-06 00:41:30.393916

"""
from typing import Sequence, Union

from alembic import op
import sqlalchemy as sa
from sqlalchemy.dialects import postgresql


# revision identifiers, used by Alembic.
revision: str = '6f0f676b564d'
down_revision: Union[str, Sequence[str], None] = '897537cf989c'
branch_labels: Union[str, Sequence[str], None] = None
depends_on: Union[str, Sequence[str], None] = None


def upgrade():
  op.alter_column(
    "users",
    "password",
    new_column_name="hashed_password",
    existing_type=sa.String(),
    existing_nullable=False,
  )

  user_type_enum = postgresql.ENUM(
    "admin",
    "user",
    name="user_type_enum",
  )

  user_type_enum.create(op.get_bind(), checkfirst=True)

  op.add_column(
    "users",
    sa.Column(
        "user_type",
        user_type_enum,
        nullable=False,
        server_default="user",
    ),
  )


def downgrade():
  op.drop_column("users", "user_type")
  user_type_enum = postgresql.ENUM(
    "admin",
    "user",
    name="user_type_enum",
  )

  user_type_enum.drop(op.get_bind(), checkfirst=True)

  # 3. Restaurar nombre anterior
  op.alter_column(
    "users",
    "hashed_password",
    new_column_name="password",
    existing_type=sa.String(),
    existing_nullable=False,
  )