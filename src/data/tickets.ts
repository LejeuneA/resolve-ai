import type { Ticket } from '../components/TicketList/TicketList.types'

export const tickets: Ticket[] = [
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

