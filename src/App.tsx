import { useState } from 'react'
import './App.scss'
import Sidebar from './components/Sidebar/Sidebar'
import TicketList from './components/TicketList/TicketList'
import TicketDetail from './components/TicketDetail/TicketDetail'
import { tickets } from './data/tickets'
import type { Ticket, Message } from './components/TicketList/TicketList.types'

function App() {
  const [selectedTicketId, setSelectedTicketId] = useState('ticket-001')

  const [ticketData, setTicketData] = useState<Ticket[]>([...tickets])


  const selectedTicket =
    ticketData.find((ticket) => ticket.id === selectedTicketId) ?? ticketData[0]

  function handleSubmitReply(reply: string) {
    const newMessage: Message = {
      id: 'msg-new',
      author: 'Support Agent',
      body: reply,
      time: 'Just now',
      role: 'agent'
    }
    console.log(reply)

    setTicketData((currentTickets) =>
      currentTickets.map((ticket) => ticket.id === selectedTicketId ? {
        ...ticket,
        messages: [...ticket.messages, newMessage]
      }
        : ticket
      )
    )
  }

  return (

    <main className="app-shell">
      <Sidebar />
      <TicketList
        selectedTicketId={selectedTicketId}
        onSelectTicket={setSelectedTicketId}
      />
      <TicketDetail ticket={selectedTicket} onSubmitReply={handleSubmitReply} />


    </main>
  )
}

export default App
