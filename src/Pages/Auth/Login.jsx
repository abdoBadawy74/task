import { useEffect, useState } from "react";
import logo from "../../assets/navbar-logo.svg";
import { useNavigate } from "react-router-dom";
import Cookies from "universal-cookie";
import axios from "axios";

export default function Login() {
  // states
  const [email, setEmail] = useState("admin@admin.com");
  const [password, setPassword] = useState("12345678");
  const [uid, setUid] = useState("");
  const navigate = useNavigate();
  const cookies = new Cookies();

  // Get UID from the URL
  useEffect(() => {
    const queryParams = new URLSearchParams(window.location.search);
    const userId = queryParams.get("uid");

    if (userId) {
      setUid(userId);
    } else {
      console.warn("No UID found in the URL.");
    }
  }, []);


  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        `https://one-hand/login`,
        {
          email: email,
          password: password,
          uid: uid,
        },
        {
          headers: {
            "X-secret-key": "OH2024",
          },

          withCredentials: true,
        }
      );

      // Set token in cookies (static token for now)
      cookies.set("token", "one-hand1234", { path: "/" });

      // Redirect to the home page after successful login
      navigate("/home");
    } catch (error) {
      console.error("Login failed:", error);
    }
  };

  return (
    <div className="login">
      <div className="container">
        <div className="login-content">
          <h1>
            Black <img src={logo} alt="logo" />
          </h1>
          <div className="login-form-container">
            <h2 className="login-title">Log In</h2>
            <form onSubmit={handleSubmit} className="login-form">
              <div className="form-group">
                <label htmlFor="email">Email:</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder=" Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="form-group">
                <label htmlFor="pass">Password:</label>
                <input
                  type="password"
                  name="pass"
                  id="pass"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div className="form-group form-button">
                <button
                  type="submit"
                  name="login"
                  id="login"
                  className="form-submit"
                >
                  Log In
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
