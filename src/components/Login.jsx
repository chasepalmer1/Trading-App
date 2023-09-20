import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { API_PORT } from "../models/constants";

function Login() {
    const history = useNavigate()

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    async function submit(e) {
        e.preventDefault()

        try {
            const res = await axios.post(`http://localhost:${API_PORT}/login`, {email, password})
            if(res.data.error == 0) {
                history("/home", {state:{id:res.data.first_name}})
            }
            else if(res.data == "NOT_FOUND") {
                // Email not registered
            }
        }
        catch(e) {
            console.log(e)
        }
    }

    return (
        <div className="login">
            <h1>Login</h1>

            <form action="POST">
                <input type="email" onChange={(e) => { setEmail(e.target.value)}} placeholder="Email" />
                <input type="password" onChange={(e) => { setPassword(e.target.value)}} placeholder="Password" />
                <input type="submit" onClick={submit} />

            </form>

            <Link to="/register">Register</Link>
        </div>
    )
}

export default Login