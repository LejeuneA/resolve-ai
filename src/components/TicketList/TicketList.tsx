import './TicketList.scss'
import type { Ticket } from './TicketList.types'
import { useState } from 'react'

const tickets: Ticket[] = [
    {
        id: 'ticket-001',
        customer: 'Emma Wilson',
        subject: 'Refund request',
        preview: 'I was charged twice for my subscription.',
        time: '10 min ago',
        priority: 'high',
    },
    {
        id: 'ticket-002',
        customer: 'Liam Carter',
        subject: 'Login issue',
        preview: 'I cannot access my account after resetting my password.',
        time: '25 min ago',
        priority: 'medium',
    },
    {
        id: 'ticket-003',
        customer: 'Sofia Martinez',
        subject: 'Feature question',
        preview: 'Is it possible to export my reports as PDF?',
        time: '1 hour ago',
        priority: 'low',
    },
]
function TicketList() {
    const [activeTicketId, setActiveTicketId] = useState('ticket-001')

    return (
        <section className="ticket-list">
            <header className="ticket-list__header">
                <h2>Tickets</h2>
                <p>Customer support inbox</p>
            </header>

            <div className="ticket-list__items">
                {tickets.map((ticket) => (
                    <button
                        className={
                            ticket.id === activeTicketId
                                ? 'ticket-card ticket-card--active'
                                : 'ticket-card'
                        }
                        type="button"
                        key={ticket.id}
                        onClick={() => setActiveTicketId(ticket.id)}
                    >
                        <div className="ticket-card__top">
                            <span className="ticket-card__customer">{ticket.customer}</span>
                            <span>{ticket.priority}</span>
                        </div>
                        <p className="ticket-card__subject">{ticket.subject}</p>
                        <p className="ticket-card__preview">{ticket.preview}</p>
                        <div className="ticket-card__meta">
                            <span className="ticket-card__time">{ticket.time}</span>
                        </div>
                    </button>
                ))}
            </div>
        </section >
    )
}

export default TicketList
