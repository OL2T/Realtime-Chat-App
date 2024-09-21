import { useState } from 'react'
import _ from 'lodash'
import PropTypes from 'prop-types'

export default function UserLogin({ setUser, setAvatar }) {
  const [userName, setUserName] = useState('')

  const handleUserLogin = () => {
    if (!userName) return
    localStorage.setItem('user', userName)
    localStorage.setItem('isLoggedIn', true)
    localStorage.setItem(
      'avatar',
      `https://picsum.photos/id/${_.random(1, 1000)}/200/300`
    )
    setUser(userName)
    setAvatar(localStorage.getItem('avatar'))
  }

  return (
    <div>
      <h1 className='text-4xl font-bold text-center mb-8'>
        Welcome to my Chat App
      </h1>
      <form
        onSubmit={handleUserLogin}
        className='bg-white max-w-[480px] m-auto p-4 rounded-md'
      >
        <div className='flex flex-col items-center justify-center h-full'>
          <div className='mb-4'>
            <label
              htmlFor='name'
              className='block text-gray-700 font-bold mb-2'
            >
              User Name:
            </label>
            <input
              type='text'
              name='name'
              id='name'
              required
              onChange={(e) => setUserName(e.target.value)}
              className='bg-white shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
            />
          </div>
          <button
            type='submit'
            className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'
          >
            Sign in
          </button>
        </div>
      </form>
    </div>
  )
}

UserLogin.propTypes = {
  setUser: PropTypes.func,
  setAvatar: PropTypes.func
}
