import React, {useState} from 'react';
import {axiosWithAuth} from '../utility/axiosWithAuth'
const initFormVal = {
    id: Date.now(),
    name: '',
    age: '',
    email: ''
}
const AddFriend = props => {
    const [val, setVal] = useState(initFormVal);
    const handleChange = e =>{
        setVal({...val, [e.target.name]: e.target.value})
    } 
    const handleSubmit = e => {
        e.preventDefault();
        axiosWithAuth().post('http://localhost:5000/api/friends', val)
        .then(res => {
            window.alert('friend added');
        }).catch(err =>{
            console.log('Axios error in AddFriend.js: ', err)
        })
    }
    return (
        <div>
            <form onSubmit = {handleSubmit}>
                <label>
                    <input
                        type = 'text'
                        onChange = {handleChange}
                        name = 'name'
                        value = {val.name}
                    />
                </label>
                <label>
                    Age
                    <input
                        type = 'text'
                        onChange = {handleChange}
                        name = 'email'
                        value = {val.email}
                    />
                </label>
                <button>Submit Friend</button>
            </form>
        </div>
    )
}
export default AddFriend;