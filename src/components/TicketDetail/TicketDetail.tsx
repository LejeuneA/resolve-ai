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
                <p>{ticket.preview}</p>
            </div>
        </section>
    )
}

export default TicketDetail
