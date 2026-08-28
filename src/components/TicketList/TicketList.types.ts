export type Ticket = {
    id: string
    customer: string
    subject: string
    preview: string
    time: string
    priority: 'low' | 'medium' | 'high'
    message: Message[]
}


export type TicketListProps = {
    selectedTicketId: string
    onSelectTicket: (ticketId: string) => void
}


export type Message = {
    id: string
    author: string
    body: string
    time: string
    role: 'customer' | 'agent'
}
