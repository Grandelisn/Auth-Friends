import axios from 'axios'
import React from 'react'
import {axiosWithAuth} from '../utility/axiosWithAuth'

const Friend = props => {
    const deleteFriend = (id, e) => {
        axiosWithAuth().delete(`http://localhost:5000/api/friends${id}`)
            .then(res =>{
                console.log(props.friends);
                const posts = props.friends.filter(item => item.id !== id);
                props.setFriends([posts]);
            }).catch(err =>{
                console.log('Delete error in Friend: ', err)
            })
    }
    return (
        <div>
            <h2>{props.item.name}</h2>
            <h3>{props.item.age}</h3>
            <p>{props.item.email}</p>
            <div>
                <button onClick ={()=>{
                    deleteFriend(props.friends.id)
                }}>Remove Friend</button>
            </div>
        </div>
    )
}
export default Friend;