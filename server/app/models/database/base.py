"""
Database Base Configuration - SQLite for Vercel Serverless
Uses /tmp directory for write access on Vercel
"""
import os
from sqlalchemy.ext.asyncio import create_async_engine, AsyncSession, async_sessionmaker
from sqlalchemy.orm import DeclarativeBase

# Use /tmp for Vercel serverless (only writable directory)
DB_PATH = os.path.join('/tmp', 'medivoice.db')
DATABASE_URL = f"sqlite+aiosqlite:///{DB_PATH}"

# Create async engine with pool settings for serverless
engine = create_async_engine(
    DATABASE_URL,
    echo=False,
    future=True,
    pool_size=1,
    max_overflow=0,
)

# Create async session factory
AsyncSessionLocal = async_sessionmaker(
    engine,
    class_=AsyncSession,
    expire_on_commit=False,
)


class Base(DeclarativeBase):
    """Base class for all database models"""
    pass


async def init_db():
    """Initialize database tables"""
    async with engine.begin() as conn:
        await conn.run_sync(Base.metadata.create_all)


async def get_db() -> AsyncSession:
    """Dependency to get database session"""
    async with AsyncSessionLocal() as session:
        try:
            yield session
        except Exception:
            await session.rollback()
            raise
        finally:
            await session.close()
