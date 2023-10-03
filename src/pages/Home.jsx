import React, { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";
import { API_PORT } from "../../api/models/constants";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import NavBar from '../components/NavBar/NavBar'

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
        navigate("/login")
    }

    return (
        <>
        <NavBar/>
          <div className="home_page">
            <h3>
              Welcome {email}
            </h3>
            <button className="logout" onClick={Logout}>LOGOUT</button>
          </div>
          <ToastContainer />
        </>
      );
};

export default Home;