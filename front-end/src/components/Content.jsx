import { Outlet } from 'react-router-dom'

export default function Content() {
  return (
    <div className='bg-white text-gray-900 flex-1'>
      <div className='flex-grow px-10 pt-4 pb-[50px] h-full'>
        {/* The Outlet renders the matching child route */}
        <Outlet />
      </div>
    </div>
  )
}
