export type Ticket = {
    id: string
    customer: string
    subject: string
    preview: string
    time: string
    priority: 'low' | 'medium' | 'high'
}
