import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import { API_PORT } from "../../api/models/constants";
import axios from "axios";

const Signup = () => {
    const navigate = useNavigate();
    const [inputValue, setInputValue] = useState({
        first_name: "",
        last_name: "",
        email: "",
        password: ""
    });

    const { first_name, last_name, email, password } = inputValue;

    const handleOnChange = (e) => {
        const { name, value } = e.target;
        setInputValue({
            ...inputValue,
            [name]: value
        })
    }

    const handleError = (err) => {
        toast.error(err, {
            position: "bottom-left"
        })
    }

    const handleSuccess = (msg) => {
        toast.success(msg, {
            position: "bottom-left"
        })
    }

    const handleSubmit = async(e) => {
        e.preventDefault();
        try {
            const { data } = await axios.post(`http://localhost:${API_PORT}/signup`, {...inputValue}, {withCredentials: true})

            const { success, message } = data;

            if (success) {
                handleSuccess(message);
                setTimeout(() => {
                    navigate("/")
                }, 1000);
            }
            else {
                handleError(message);
            }
        }
        catch (error) {
            console.log(error)
        }
        setInputValue({
            ...inputValue,
            first_name: "",
            last_name: "",
            email: "",
            password: "",
        })
    }
    return (
        <div className="form_container">
          <h2>Signup Account</h2>
          <form onSubmit={handleSubmit}>
            <div>
              <label htmlFor="email">First Name</label>
              <input
                type="text"
                name="first_name"
                value={first_name}
                placeholder="Enter your first name"
                onChange={handleOnChange}
              />
            </div>
            <div>
              <label htmlFor="email">Last Name</label>
              <input
                type="text"
                name="last_name"
                value={last_name}
                placeholder="Enter your last name"
                onChange={handleOnChange}
              />
            </div>
            <div>
              <label htmlFor="email">Email</label>
              <input
                type="email"
                name="email"
                value={email}
                placeholder="Enter your email"
                onChange={handleOnChange}
              />
            </div>
            <div>
              <label htmlFor="password">Password</label>
              <input
                type="password"
                name="password"
                value={password}
                placeholder="Enter your password"
                onChange={handleOnChange}
              />
            </div>
            <button type="submit">Submit</button>
            <span>
              Already have an account? <Link to={"/login"}>Login</Link>
            </span>
          </form>
          <ToastContainer />
        </div>
      );
};

export default Signup