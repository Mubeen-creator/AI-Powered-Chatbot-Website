from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
from langchain.chains import LLMChain
from langchain.prompts import PromptTemplate
from langchain_google_genai import ChatGoogleGenerativeAI
from fastapi.middleware.cors import CORSMiddleware



app = FastAPI()



app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],  # Specify the frontend URL
    allow_credentials=True,
    allow_methods=["*"],  # Allow all HTTP methods (GET, POST, etc.)
    allow_headers=["*"],  # Allow all headers
)


# Model for user input
class QuestionRequest(BaseModel):
    question: str

# Initialize the LangChain LLM with Gemini or OpenAI model

llm = ChatGoogleGenerativeAI(
    model="gemini-1.5-flash",
    google_api_key=("AIzaSyBRQpaWo267nyVCSZ7T4GxDfG6zXDOWBAg")
)



# Define a prompt template
prompt_template = PromptTemplate(
    input_variables=["question"],
    template="You are a chatbot and you will chat with user like human and give him advices on every topic which will be asked to you. {question}"
)

# Create a LangChain LLMChain
chain = LLMChain(llm=llm, prompt=prompt_template)

@app.post("/ask-ai/")
async def ask_ai(request: QuestionRequest):
    try:
        # Process the question using LangChain
        response = chain.run(request.question)
        return {"response": response}
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))
