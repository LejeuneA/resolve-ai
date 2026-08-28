import type { Ticket } from '../components/TicketList/TicketList.types'

export const tickets: Ticket[] = [
    {
        id: 'ticket-001',
        customer: 'Emma Wilson',
        subject: 'Refund request',
        preview: 'I was charged twice for my subscription.',
        time: '10 min ago',
        priority: 'high',
        messages: [
            {
                id: 'msg-001',
                author: 'Emma Wilson',
                time: '12 min ago',
                body: 'I was charged twice for my subscription. Could you please refund the duplicate payment?',
                role: 'customer'
            },
            {
                id: 'msg-002',
                author: 'Support Agent',
                time: '10 min ago',
                body: 'Of course. I’ll check the duplicate charge and help you with the refund.',
                role: 'agent'
            },
        ]
    },
    {
        id: 'ticket-002',
        customer: 'Liam Carter',
        subject: 'Login issue',
        preview: 'I cannot access my account after resetting my password.',
        time: '25 min ago',
        priority: 'medium',
        messages: [
            {
                id: 'msg-003',
                author: 'Liam Carter',
                time: '30 min ago',
                body: 'I reset my password but I still cannot access my account.',
                role: 'customer'
            },
            {
                id: 'msg-004',
                author: 'Support Agent',
                time: '25 min ago',
                body: 'I can help with that. Let’s check whether the reset was completed successfully.',
                role: 'agent'
            },
        ]
    },
    {
        id: 'ticket-003',
        customer: 'Sofia Martinez',
        subject: 'Feature question',
        preview: 'Is it possible to export my reports as PDF?',
        time: '1 hour ago',
        priority: 'low',
        messages: [
            {
                id: 'msg-005',
                author: 'Sofia Martinez',
                time: '1 hour ago',
                body: 'Is it possible to export my reports as PDF?',
                role: 'customer'
            },
            {
                id: 'msg-006',
                author: 'Support Agent',
                time: '55 min ago',
                body: 'Yes. I’ll show you where to find the PDF export option.',
                role: 'agent'
            },
        ]
    },
]

