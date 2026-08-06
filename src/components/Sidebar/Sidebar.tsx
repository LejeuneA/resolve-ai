import './Sidebar.scss'


const navItems = [
    {
        label: 'Inbox',
        isActive: true,
    },
    {
        label: 'All tickets',
        isActive: false,
    },
    {
        label: 'Analytics',
        isActive: false,
    },
    {
        label: 'Settings',
        isActive: false,
    },
]

function Sidebar() {
    return (
        <aside className="sidebar">
            <div className="sidebar__brand">
                <div className="sidebar__title">Resolve AI</div>
                <p className="sidebar__subtitle">Support Assistant</p>
            </div>

            <nav className="sidebar__nav" aria-label="Primary navigation">
                {navItems.map((item) => (
                    <button className={
                        item.isActive
                            ? 'sidebar__link sidebar__link--active'
                            : 'sidebar__link'
                    } type="button" key={item.label}>{item.label}
                    </button>
                ))}
            </nav>
        </aside>
    )
}

export default Sidebar
