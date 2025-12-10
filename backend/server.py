from fastapi import FastAPI, BackgroundTasks, HTTPException, Request
from fastapi_mail import FastMail, MessageSchema, ConnectionConfig, MessageType
from pydantic import BaseModel, EmailStr
from starlette.middleware.cors import CORSMiddleware
import os
from dotenv import load_dotenv

from slowapi import Limiter, _rate_limit_exceeded_handler
from slowapi.util import get_remote_address
from slowapi.errors import RateLimitExceeded

load_dotenv()
limiter = Limiter(key_func=get_remote_address)

app = FastAPI()

app.state.limiter = limiter
app.add_exception_handler(RateLimitExceeded, _rate_limit_exceeded_handler)

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"], 
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class ContactForm(BaseModel):
    name: str
    email: EmailStr
    message: str

conf = ConnectionConfig(
    MAIL_USERNAME=os.getenv("MAIL_USERNAME"),
    MAIL_PASSWORD=os.getenv("MAIL_PASSWORD"),
    MAIL_FROM=os.getenv("MAIL_USERNAME"),
    MAIL_PORT=465,             # Changed from 587
    MAIL_SERVER="smtp.gmail.com",
    MAIL_STARTTLS=False,       # Turn OFF StartTLS
    MAIL_SSL_TLS=False,
    USE_CREDENTIALS=True,
    VALIDATE_CERTS=True
)

@app.post("/contact")
@limiter.limit("3/minute") 
async def send_contact_email(
    request: Request,
    form: ContactForm, 
    background_tasks: BackgroundTasks
):
    message = MessageSchema(
        subject=f"New Portfolio Contact from {form.name}",
        recipients=[os.getenv("Freelance_account")],
        body=f"""
        <h3>New Contact Request</h3>
        <p><strong>Name:</strong> {form.name}</p>
        <p><strong>Email:</strong> {form.email}</p>
        <p><strong>Message:</strong></p>
        <p>{form.message}</p>
        """,
        subtype=MessageType.html,
        reply_to=[form.email]
    )

    fm = FastMail(conf)
    background_tasks.add_task(fm.send_message, message)
    
    return {"message": "Email has been sent"}

@app.get("/")
def read_root():
    return {"message": f"Welcome to the Aptitude Test API. questions loaded."}
