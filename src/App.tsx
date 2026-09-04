import { useState } from 'react'
import './App.scss'
import Sidebar from './components/Sidebar/Sidebar'
import TicketList from './components/TicketList/TicketList'
import TicketDetail from './components/TicketDetail/TicketDetail'
import { tickets } from './data/tickets'
import type { Ticket } from './components/TicketList/TicketList.types'

function App() {
  const [selectedTicketId, setSelectedTicketId] = useState('ticket-001')

  const [ticketdata, setTicketData] = useState<Ticket[]>([])


  const selectedTicket =
    ticketdata.find((ticket) => ticket.id === selectedTicketId) ?? tickets[0]

  function handleSubmitReply(reply: string) {
    console.log(reply)
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
