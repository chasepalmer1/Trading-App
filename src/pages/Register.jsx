import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom';

function Register() {
    const history = useNavigate()

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [first_name, setFirstName] = useState('')
    const [last_name, setLastName] = useState('')

    async function submit(e) {
        e.preventDefault();

        try {
            const res = await axios.post(`http://localhost:${API_PORT}/register`, {first_name, last_name, email, password})
            if(res.data == "EMAIL_EXISTS") {
                // Email already registered
            }
            else if(res.data == "ACCOUNT_CREATED") {
                history("/home", {state:{id:email}})
            }
        }
        catch(e) {
            console.log(e)
        }
    }

    return (
        <div className="login">
            <h1>Register</h1>

            <form action="POST">
                <input type="text" onChange={(e) => { setFirstName(e.target.value)}} placeholder="First Name" />
                <input type="text" onChange={(e) => { setLastName(e.target.value)}} placeholder="Last Name" />
                <input type="email" onChange={(e) => { setEmail(e.target.value)}} placeholder="Email" />
                <input type="password" onChange={(e) => { setPassword(e.target.value)}} placeholder="Password" />
                <input type="submit" onClick={submit} />

            </form>

            <Link to="/login">Login</Link>
        </div>
    )
}

export default Register;