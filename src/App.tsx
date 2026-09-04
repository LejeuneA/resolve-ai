import { useState } from 'react'
import './App.scss'
import Sidebar from './components/Sidebar/Sidebar'
import TicketList from './components/TicketList/TicketList'
import TicketDetail from './components/TicketDetail/TicketDetail'
import { tickets } from './data/tickets'

function App() {
    const [selectedTicketId, setSelectedTicketId] = useState('ticket-001')

    const selectedTicket =
        tickets.find((ticket) => ticket.id === selectedTicketId) ?? tickets[0]

    function handleSubmitReply() {
        const reply = ''
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
