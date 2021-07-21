import React from 'react'
import { useSelector } from 'react-redux'

const Users = () => {
    const users = useSelector((state) =>{
        return state.users
    })
    console.log(users)
    return (
        <div>
            <p>Hai</p>
        </div>
    )
}

export default Users