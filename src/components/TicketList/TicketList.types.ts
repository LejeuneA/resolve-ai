export type Ticket = {
  id: string
  customer: string
  subject: string
  preview: string
  time: string
  priority: 'low' | 'medium' | 'high'
  messages: Message[]
}


export type TicketListProps = {
  selectedTicketId: string
  onSelectTicket: (ticketId: string) => void
  tickets: Ticket[]
}


export type Message = {
  id: string
  author: string
  body: string
  time: string
  role: 'customer' | 'agent'
}
