import React ,{useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as userActions from '../redux/action'
import Link from 'next/link'
export default function Cards() {

const [user, setUser] = useState({
  id:"",
  name:"",
  password:""
})

const dispatch = useDispatch();
const inputHandler = (event) => {
  const {name, value} = event.target;
  setUser((prevItems) => {
    return {
      ...prevItems,
      [name]: value
    }
  })
}
const addUser = () => {
  dispatch(userActions.addUser(user))
  setUser({
    id:"",
    name:"",
    password:""
  })
}
return (
      <div className="pl-5 pt-5 flex flex-col gap-x-5 gap-y-5">
        
        <input type="text" className="pl-5 w-56 border-2 border-black" name="id" placeholder="id" value={user.id} onChange={inputHandler} />
        <input type="text" className="pl-5 w-56 border-2 border-black" name="name" placeholder="name" value={user.name} onChange={inputHandler} />
        <input type="text" className="pl-5 w-56 border-2 border-black" name="password" placeholder="password" value={user.password} onChange={inputHandler} />
        <button className="px-5 py-2 bg-blue-500" type="submit" onClick={addUser}>Login</button>
        <Link href="/users">
          <a>Users</a>
        </Link>
      </div>
    )
}