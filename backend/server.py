from fastapi import FastAPI, BackgroundTasks, HTTPException
from fastapi_mail import FastMail, MessageSchema, ConnectionConfig, MessageType
from pydantic import BaseModel, EmailStr
from starlette.middleware.cors import CORSMiddleware
import os

app = FastAPI()

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
    MAIL_PORT=587,
    MAIL_SERVER="smtp.gmail.com",
    MAIL_STARTTLS=True,
    MAIL_SSL_TLS=False,
    USE_CREDENTIALS=True,
    VALIDATE_CERTS=True
)

@app.post("/contact")
async def send_contact_email(form: ContactForm, background_tasks: BackgroundTasks):
    # Construct the email body
    message = MessageSchema(
        subject=f"New Portfolio Contact from {form.name}",
        recipients=[os.getenv("MAIL_USERNAME")], # Send to yourself
        body=f"""
        <h3>New Contact Request</h3>
        <p><strong>Name:</strong> {form.name}</p>
        <p><strong>Email:</strong> {form.email}</p>
        <p><strong>Message:</strong></p>
        <p>{form.message}</p>
        """,
        subtype=MessageType.html
    )

    fm = FastMail(conf)
    
    background_tasks.add_task(fm.send_message, message)
    
    return {"message": "Email has been sent"}