import './TicketDetail.scss'
import type { Ticket } from '../TicketList/TicketList.types'
import { useState } from 'react'

type TicketDetailProps = {
    ticket: Ticket
}


function TicketDetail({ ticket }: TicketDetailProps) {
    return (
        <section className="ticket-details">
            <header className='ticket-detail_heading-row'>
                <div className='ticket-detail_heading-row'>
                    <h2>{ticket.subject}</h2>
                    <span>{ticket.priority}</span>
                </div>
                <div className='ticket-detail_meta'>
                    <span>{ticket.customer}</span>
                    <span>{ticket.time}</span>
                </div>
                <div className='ticket-detail_conversation'>
                    <p>{ticket.preview}</p>
                </div>
            </header>
        </section>
    )
}

export default TicketDetail
