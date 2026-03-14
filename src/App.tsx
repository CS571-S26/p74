import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'

function App() {
  return (
    <main className="min-h-screen bg-white font-sans">
      <Navbar />
      <div className="pt-20">
        <Hero />
      </div>
    </main>
  )
}

export default App
