import { useState } from "react";
import { Button } from "react-bootstrap";

const Login = () => {

    const[name,setName] = useState('')
    const[nameError,setNameError] = useState('')
    const[password,setPassword] = useState('')
    const[passwordError,setPasswordError] = useState('')
    const[output,setOutput] = useState('')

    const handleSubmit = (event) => {
        event.preventDefault();

        setOutput('')

        if(name.trim().length === 0 ){
            setNameError("Name cannot be empty")
            return
        }

        if(password.trim().length === 0 ){
            setPasswordError("Password cannot be empty")
            return
        }

        if(password.length < 8){
            setPasswordError("Password must be atleast 8 characters long!!!")
            return
        }

        setOutput(`Welcome ${name} !`)
    }

    return (
        <div className="login">
            <h1>Login</h1>
            <form onSubmit={handleSubmit}>
                <div>
                <label><b>Username:</b></label>
                <input type="text" id="username" name="username" value ={name}
                onChange={(event) => {
                    setName(event.target.value);
                    setNameError('')
                }}/>

                <br/>

                {nameError && <span style={{color: "red"}}>{nameError}</span>}
                </div>
                <br/>
                <div>
                <label><b>Password:</b></label>
                <input type="password" id="password" name="password" value={password}
                onChange={(event) => {
                    setPassword(event.target.value);
                    setPasswordError('')
                }}/>
                <br/>

                {passwordError && <span style={{color: "red"}}>{passwordError}</span>}
                </div>
                <br/>
                <Button type="submit">Log in</Button>
            </form>
            <h3 style ={{color : 'green'}}>{output}</h3>
        </div>
    )
}

export default Login;