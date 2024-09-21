import PropTypes from 'prop-types'

const ChatBox = ({ messages }) => {
  const user = localStorage.getItem('user')
  const SenderMessage = ({ message, username, avatar }) => {
    return (
      <div className='flex items-start gap-2 justify-end'>
        {/* <div className='group'>
          <div className='avatar bg-gray-200 w-9 h-9 rounded-full'>
            <img
              src={avatar}
              alt={avatar}
              className=' bg-gray-200 w-9 h-9 rounded-full'
            />
          </div>
          <small>
            {new Date().toLocaleTimeString([], { timeStyle: 'short' })}
          </small>
        </div> */}
        <div className='message bg-[#2C8BF2] text-white font-semibold text-sm rounded-full px-3 py-2 inline-block mb-2'>
          {/* <div>User: {username}</div> */}
          <span>{message}</span>
        </div>
      </div>
    )
  }
  const ReceiverMessage = ({ message, username, avatar }) => {
    return (
      <div className='flex items-start gap-2 justify-start'>
        <div className='group'>
          <div className='avatar bg-gray-200 w-9 h-9 rounded-full'>
            <img
              src={avatar}
              alt={avatar}
              className=' bg-gray-200 w-9 h-9 rounded-full'
            />
          </div>
          <small>
            {new Date().toLocaleTimeString([], { timeStyle: 'short' })}
          </small>
        </div>
        <div className='message bg-[#2C8BF2] text-white font-semibold text-sm rounded-full px-3 py-2 inline-block mb-2'>
          {/* <span>{username}</span> */}
          <span>{message}</span>
        </div>
      </div>
    )
  }
  ReceiverMessage.propTypes = {
    message: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired,
    avatar: PropTypes.string
  }
  SenderMessage.propTypes = {
    message: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired,
    avatar: PropTypes.string
  }
  return (
    <div className='chat-container flex-1'>
      <div className='message-list max-h-[75dvh] h-full overflow-y-scroll '>
        {messages.map((message, index) => {
          if (message.user === user) {
            return (
              <SenderMessage
                key={index}
                message={message.message}
                username={message.user}
                avatar={message.avatar}
              />
            )
          }
          return (
            <ReceiverMessage
              key={index}
              message={message.message}
              username={message.user}
              avatar={message.avatar}
            />
          )
        })}
      </div>
    </div>
  )
}
ChatBox.propTypes = {
  messages: PropTypes.arrayOf(
    PropTypes.shape({
      message: PropTypes.string.isRequired,
      user: PropTypes.string.isRequired,
      avatar: PropTypes.string
    })
  ).isRequired
}

export default ChatBox
