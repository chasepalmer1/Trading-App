import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import { API_PORT } from "../../api/models/constants";
import axios from "axios";

const Login = () => {
    const navigate = useNavigate();
    const [inputValue, setInputValue] = useState({
        email: "",
        password: ""
    })
    const { email, password } = inputValue;
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
            const { data } = await axios.post(`http://localhost:${API_PORT}/login`, {...inputValue}, {withCredentials: true})
            console.log(data)

            const { success, message } = data;

            if(success) {
                handleSuccess(message);

                setTimeout(() => {
                    navigate("/")
                }, 1000);
            } else {
                handleError(message)
            }
        }
        catch(error) {
            console.log(error)
        }

        setInputValue({
            ...inputValue,
            email: "",
            password: ""
        })
    }

    return (
        <div className="form_container_outer">
            <h2>Login Account</h2>
            <div className="form_container_inner">
                <form onSubmit={handleSubmit}>
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
                <div className="form-help">   
                    <button type="submit">Submit</button>
                    <span>
                    Don't have an account? <Link style={{marginLeft: "2%", padding: "0", borderLeft: "none", borderBottom: "1px solid rgb(65, 65, 65)"}} to={"/signup"}>Signup</Link>
                    </span>
                </div>
            </form>
            </div>
          <ToastContainer />
        </div>
      );
};

export default Login