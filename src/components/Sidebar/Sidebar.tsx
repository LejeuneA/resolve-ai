import { useState } from 'react'
import './Sidebar.scss'
import type { NavItem } from './Sidebar.types'

const navItems: NavItem[] = [
    {
        id: 'inbox',
        label: 'Inbox',
    },
    {
        id: 'all-tickets',
        label: 'All tickets',
    },
    {
        id: 'analytics',
        label: 'Analytics',
    },
    {
        id: 'settings',
        label: 'Settings',
    },
]

function Sidebar() {
    const [activeItemId, setActiveItemId] = useState('inbox')

    return (
        <aside className="sidebar">
            <div className="sidebar__brand">
                <div className="sidebar__title">Resolve AI</div>
                <p className="sidebar__subtitle">Support Assistant</p>
            </div>

            <nav className="sidebar__nav" aria-label="Primary navigation">
                {navItems.map((item) => (
                    <button className={
                        item.id === activeItemId
                            ? 'sidebar__link sidebar__link--active'
                            : 'sidebar__link'
                    } type="button" key={item.id} onClick={() => setActiveItemId(item.id)}>{item.label}
                    </button>
                ))}
            </nav>
        </aside>
    )
}

export default Sidebar
