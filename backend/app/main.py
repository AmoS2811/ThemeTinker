from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from .routers import user
from .auth import router as auth_router
from .database import engine, Base
from dotenv import load_dotenv


load_dotenv()

Base.metadata.create_all(bind=engine)


app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(auth_router)
app.include_router(user.router)