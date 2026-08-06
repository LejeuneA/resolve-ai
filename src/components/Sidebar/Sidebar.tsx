import { useState } from 'react'
import './Sidebar.scss'
import type { NavItem } from './Sidebar.types'

const navItems: NavItem[] = [
    {
        id: '1',
        label: 'Inbox',
    },
    {
        id: '2',
        label: 'All tickets',
    },
    {
        id: '3',
        label: 'Analytics',
    },
    {
        id: '4',
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
                    } type="button" key={item.label} onClick={() => setActiveItemId(item.id)}>{item.label}
                    </button>
                ))}
            </nav>
        </aside>
    )
}

export default Sidebar
