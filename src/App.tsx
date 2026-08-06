import './App.scss'
import Sidebar from './components/Sidebar/Sidebar'

function App() {
    return (

        <main className="app-shell">
            <Sidebar />

            <section className="workspace">
                <h1>Resolve AI</h1>
                <p>AI-powered customer support workspace</p>
            </section>
        </main>
    )
}

export default App
