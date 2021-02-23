import React, {useState} from 'react'
import axios from 'axios'

const initFormVal = {
    username: '',
    password: ''
}
const Login = props =>{
    const [val, setVal] = useState(initFormVal);
    const handleChange = e =>{
        setVal({...val, [e.target.name]: e.target.value })
    }
    const submit = e =>{
        e.preventDefault();
        axios.post('http://localhost:5000/api/login', val)
        .then(res =>{
            console.log(res);
            localStorage.setItem('token', res.data.payload);
            window.location.href = '/getfiends'
        })
        .catch(err => {
            console.log('axios login error: ', err);
        })
    }
    return (
        <div>
            <form onSubmit = {submit}>
                <label>
                    Username
                    <input
                        type = 'text'
                        value = {val.username}
                        onChange = {handleChange}
                        name = 'username'
                    />
                </label>
                <label>
                    Password
                    <input 
                        type = 'password'
                        value = {val.password}
                        onChange = {handleChange}
                        name = 'password'
                    />
                </label>
                <button>Login</button>
            </form>
        </div>
    )
}
export default Login;