import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import AnalyzerForm from './components/AnalyzerForm'
import Result from './components/Result'

function App() {
  const [result, setResult] = useState(null);
  const [showForm, setShowForm] = useState(false);

  const goHome = () => {
    setShowForm(false);
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar
        onHome={goHome}
        onStart={() => { setShowForm(true); setResult(null); }}
        onShowResult={() => { if (result) setShowForm(false); }}
        hasResult={!!result}
      />

      {!showForm && !result && (
        <Home onStart={() => setShowForm(true)} />
      )}

      {showForm && (
        <div className="max-w-xl mx-auto px-4 py-16">
          <AnalyzerForm setResult={(data) => { setResult(data); setShowForm(false); }} />
        </div>
      )}

      {result && !showForm && (
        <div className="max-w-xl mx-auto px-4 py-16">
          <Result result={result} />
        </div>
      )}
    </div>
  )
}

export default App
