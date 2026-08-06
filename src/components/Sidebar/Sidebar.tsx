import './Sidebar.scss'

function Sidebar() {
    return (
        <aside className="sidebar">
            <div className="sidebar__brand">
                <div className="sidebar__title">Resolve AI</div>
                <p>Support Assistant</p>
            </div>

            <nav className="sidebar__nav" aria-label="Primary navigation">
                <button className="sidebar__link sidebar__link--active">Inbox</button>
                <button type="button" className="sidebar__link">All tickets</button>
                <button type="button" className="sidebar__link">Analytics</button>
                <button type="button" className="sidebar__link">Settings</button>
            </nav>
        </aside>
    )
}

export default Sidebar
