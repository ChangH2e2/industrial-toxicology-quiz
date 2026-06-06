import { useState } from 'react'
import StartScreen from './components/StartScreen'
import QuizScreen from './components/QuizScreen'
import ResultScreen from './components/ResultScreen'

export default function App() {
  const [screen, setScreen] = useState('start')
  const [settings, setSettings] = useState(null)
  const [results, setResults] = useState(null)

  const handleStart = (s) => { setSettings(s); setScreen('quiz') }
  const handleFinish = (r) => { setResults(r); setScreen('result') }
  const handleRestart = () => { setScreen('start'); setSettings(null); setResults(null) }

  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-50 via-indigo-50 to-violet-50">
      {screen === 'start'  && <StartScreen onStart={handleStart} />}
      {screen === 'quiz'   && <QuizScreen settings={settings} onFinish={handleFinish} />}
      {screen === 'result' && <ResultScreen results={results} settings={settings} onRestart={handleRestart} />}
    </div>
  )
}
