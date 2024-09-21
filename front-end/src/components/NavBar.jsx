import { useState } from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
export default function NavBar({ user, avatar }) {
  return (
    <div className='bg-[#D6D7F1] p-4 h-full text-[#9EA8BB] min-w-[280px]'>
      <div className='user mb-20 text-center'>
        <img
          src={avatar}
          alt={avatar}
          className='w-[80px] h-[80px] rounded-full block mx-auto border-4 border-white mb-4'
        />
        <div className='user-info'>
          <h3 className='text-md font-semibold capitalize'>{user}</h3>
        </div>
      </div>
      <ul className='flex flex-col gap-4'>
        <li>
          <Link to={'/'} className='font-semibold uppercase text-sm'>
            home
          </Link>
        </li>
        <li>
          <Link to={'/properties'} className='font-semibold uppercase text-sm'>
            properties
          </Link>
        </li>
        <li>
          <Link to={'/properties'} className='font-semibold uppercase text-sm'>
            properties
          </Link>
        </li>
        <li>
          <Link to={'/chat'} className='font-semibold uppercase text-sm'>
            Chat
          </Link>
        </li>
        <li>
          <Link to={'/calendar'} className='font-semibold uppercase text-sm'>
            calendar
          </Link>
        </li>
        <li>
          <Link to={'/offers'} className='font-semibold uppercase text-sm'>
            offers
          </Link>
        </li>
        <li>
          <Link to={'/documents'} className='font-semibold uppercase text-sm'>
            documents
          </Link>
        </li>
        <li>
          <Link to={'/settings'} className='font-semibold uppercase text-sm'>
            settings
          </Link>
        </li>
      </ul>
    </div>
  )
}
NavBar.propTypes = {
  user: PropTypes.string,
  avatar: PropTypes.string
}
