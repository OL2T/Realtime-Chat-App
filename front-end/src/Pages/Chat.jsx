import { useEffect, useState } from 'react'
import ChatBox from '../components/ChatBox'
import SocketIOClient from 'socket.io-client'
import '../styles/Chat.scss'
import InputText from '../components/InputText'

export default function Chat() {
  const [messages, setMessages] = useState([])
  const socket = SocketIOClient('http://localhost:3001')
  console.log(messages)
  useEffect(() => {
    socket.on('chat', (senderChats) => {
      setMessages(senderChats)
    })
  })

  const sendToSocket = (chat) => {
    socket.emit('chat', chat)
  }

  const handleSendMessage = (chat) => {
    const newChat = {
      ...chat,
      user: localStorage.getItem('user'),
      avatar: localStorage.getItem('avatar')
    }
    setMessages([...messages, newChat])
    sendToSocket([...messages, newChat])
  }

  return (
    <div className='h-full flex flex-col '>
      <div className='text-2xl font-semibold text-gray-500'>Chat</div>

      <ChatBox messages={messages} />

      <InputText handleSendMessage={handleSendMessage} />
    </div>
  )
}
