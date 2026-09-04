import type { Ticket } from '../TicketList/TicketList.types'

export type TicketDetailProps = {
    ticket: Ticket
    onSubmitReply: (reply: string) => void
}
