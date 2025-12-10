import os
from dotenv import load_dotenv

# 1. Load env vars BEFORE importing/using other configs
load_dotenv()

from fastapi import FastAPI, Request, HTTPException
from pydantic import BaseModel, EmailStr
from starlette.middleware.cors import CORSMiddleware
from slowapi import Limiter, _rate_limit_exceeded_handler
from slowapi.util import get_remote_address
from slowapi.errors import RateLimitExceeded
import resend

# 2. Configure Resend
resend.api_key = os.getenv("RESEND_API_KEY")

# 3. Setup Limiter
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

# 4. Use 'def' (not 'async def') for synchronous libraries like Resend
# This allows FastAPI to run it in a separate thread so it doesn't block the server.
@app.post("/contact")
@limiter.limit("3/minute") 
def send_contact_email(request: Request, form: ContactForm):
    
    params: resend.Emails.SendParams = {
        "from": "onboarding@resend.dev", # Use this until you verify a domain in Resend dashboard
        "to": ["metriqwebsolutions@gmail.com"], # 👈 Must be a list
        "subject": f"Portfolio Contact: {form.name}",
        "reply_to": form.email,
        "html": f"""
        <p><strong>Name:</strong> {form.name}</p>
        <p><strong>Email:</strong> {form.email}</p>
        <p><strong>Message:</strong></p>
        <blockquote style="border-left: 4px solid #ccc; padding-left: 10px;">
            {form.message}
        </blockquote>
        """
    }

    try:
        r = resend.Emails.send(params)
        return {"message": "Email sent", "id": r.get("id")}
    except Exception as e:
        print(f"Error sending email: {e}")
        raise HTTPException(status_code=500, detail="Failed to send email")

@app.get("/")
def read_root():
    return {"message": "API is running."}