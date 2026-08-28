import './TicketList.scss'
import { tickets } from '../../data/tickets'
import type { TicketListProps } from './TicketList.types'


function TicketList({ selectedTicketId, onSelectTicket }: TicketListProps) {

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
                            ticket.id === selectedTicketId
                                ? 'ticket-card ticket-card--active'
                                : 'ticket-card'
                        }
                        type="button"
                        key={ticket.id}
                        onClick={() => onSelectTicket(ticket.id)}
                    >
                        <div className="ticket-card__top">
                            <span className="ticket-card__customer">{ticket.customer}</span>
                            <span
                                className={
                                    ticket.priority === 'high'
                                        ? 'badge badge--danger'
                                        : ticket.priority === 'medium'
                                            ? 'badge badge--warning'
                                            : 'badge badge--success'
                                }
                            >
                                {ticket.priority}
                            </span>
                        </div>
                        <p className="ticket-card__subject">{ticket.subject}</p>
                        <p className="ticket-card__preview">
                            {ticket.messages.map((ticket) =>
                                <div key={ticket.id}>
                                    <div className='message'>
                                        <div className='message__meta'>
                                            <div
                                                className={
                                                    ticket.role === 'customer'
                                                        ? 'message'
                                                        : ticket.role === 'agent'
                                                            ? 'message message--agent'
                                                }>
                                                {ticket.author}
                                            </div>
                                        </div>
                                    </div>
                                    <div className='message__body'>{ticket.body}</div>
                                    <div>{ticket.time}</div>
                                </div>)}
                        </p>
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
