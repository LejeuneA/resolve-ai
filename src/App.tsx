import './App.scss'
import Sidebar from './components/Sidebar/Sidebar'
import TicketList from './components/TicketList/TicketList'

function App() {
    return (

        <main className="app-shell">
            <Sidebar />

            <TicketList />

            <section className="workspace">
                <h1>Resolve AI</h1>
                <p>AI-powered customer support workspace</p>
            </section>
        </main>
    )
}

export default App
