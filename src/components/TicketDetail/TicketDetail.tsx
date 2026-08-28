import './TicketDetail.scss'
import type { Ticket } from '../TicketList/TicketList.types'

type TicketDetailProps = {
    ticket: Ticket
}


function TicketDetail({ ticket }: TicketDetailProps) {
    return (
        <section className="ticket-detail">
            <header className="ticket-detail__header">
                <div className="ticket-detail__heading-row">
                    <h2>{ticket.subject}</h2>
                    <span>{ticket.priority}</span>
                </div>

                <div className="ticket-detail__meta">
                    <span>{ticket.customer}</span>
                    <span>{ticket.time}</span>
                </div>
            </header>

            <div className="ticket-detail__conversation">
                <p>
                    {
                        ticket.messages.map((message) =>
                            <span key={message.id}>
                                <span className='message'>
                                    <span className='message__meta'>
                                        <span
                                            className={
                                                message.role === 'customer'
                                                    ? 'message'
                                                    : 'message message--agent'
                                            }>
                                            {message.author}
                                        </span>
                                        <span>{message.time}</span>
                                    </span>
                                    <span className='message__body'>{message.body}</span>
                                </span>
                            </span>)
                    }
                </p>
            </div>
        </section>
    )
}

export default TicketDetail
