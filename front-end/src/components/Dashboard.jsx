import { useState } from 'react'
import Content from './Content'
import NavBar from './NavBar'
import UserLogin from './UserLogin'

export default function Dashboard() {
  const [user, setUser] = useState(localStorage.getItem('user'))
  const [avatar, setAvatar] = useState(localStorage.getItem('avatar'))
  return (
    <>
      {user ? (
        <div className='flex w-full h-full shadow-md '>
          <NavBar user={user} avatar={avatar} />
          <Content />
        </div>
      ) : (
        <UserLogin setUser={setUser} setAvatar={setAvatar} />
      )}
    </>
  )
}
