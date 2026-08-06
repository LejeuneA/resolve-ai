import './TicketList.scss'
import type { Ticket } from './TicketList.types'

const tickets: Ticket[] = [
    {
        id: 'ticket-001',
        customer: 'Emma Wilson',
        subject: 'Refund request',
        preview: 'I was charged twice for my subscription.',
        time: '10 min ago',
        priority: 'high',
    },
]
function TicketList() {
    return (
        <section className="ticket-list">
            <header className="ticket-list__header">
                <h2>Tickets</h2>
                <p>Customer support inbox</p>
            </header>

            <div className="ticket-list__items">
                {tickets.map((ticket) => (
                    <button className="ticket-card" type="button" key={ticket.id} >
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
        </section>
    )
}

export default TicketList
