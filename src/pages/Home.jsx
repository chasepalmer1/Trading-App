import React, { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";
import { API_PORT } from "../../api/models/constants";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";

const Home = () => {
    const navigate = useNavigate()

    const [cookies, removeCookie] = useCookies([])

    const [email, setEmail] = useState("")

    useEffect(() => {
        const verifyCookie = async() => {
            if(!cookies.token) {
                navigate("/login")
            }

            const { data } = await axios.post(`http://localhost:${API_PORT}`, {}, {withCredentials: true})

            const { status, user } = data;
            setEmail(user);

            return status
                ? toast(`Hello ${user}`, {
                    position: "top-right",
                    toastId: "id"
                })
                : (removeCookie("token", navigate("/login")))
        }
        verifyCookie()
    }, [cookies, navigate, removeCookie])
    const Logout = () => {
        removeCookie("token")
        navigate("/signup")
    }

    return (
        <>
          <div className="home_page">
            <h4>
              Welcome {email}
            </h4>
            <button onClick={Logout}>LOGOUT</button>
          </div>
          <ToastContainer />
        </>
      );
};

export default Home;