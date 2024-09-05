import { useState } from "react";
import "../styles/login.css";
import { CustomerFormField } from "../components/custom_form_field";
const Login = ()=>{
    const[email, setEmail] = useState(""); 
    const[password, setPassword] = useState("");
    const handlesSubmit = () =>{
        console.log("email = ",email);
    }
    const handleEmailChange = (event) =>{
        setEmail(event.target.value)
    }
    
    const handlePasswordChange = (event) =>{
        setPassword(event.target.value)
    }
    return (
        <>
        <form>
        <div id = "login-box">
            <h1 id="login-title">LOGIN</h1>
            <CustomerFormField
                label = "Email"
                cName = "email"
                placeholder = "Enter Your Email"
                type = "email"
                value= {email}
                onChange = {handleEmailChange}
            />

            <CustomerFormField
                label = "Password"
                cName = "password"
                placeholder = "Enter Your Password"
                type = "password"
                value= {password}
                onChange = {handlePasswordChange}
            />
            
            <div id="login-button" onClick={handlesSubmit}>
                Login
            </div>
            </div>
            </form>
            </>
    );
}
export default Login