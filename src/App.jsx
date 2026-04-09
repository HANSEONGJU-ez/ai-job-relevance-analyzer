import { useState } from 'react'
import './App.css'
import Home from './pages/Home'
import AnalyzerForm from './components/AnalyzerForm'
import Result from './components/Result';

function App() {
  const [result, setResult] = useState(null);

  return (
    <>
      <Home />
      <AnalyzerForm setResult={setResult} />
      {result && <Result result={result} />}
    </>
  )
}

export default App
