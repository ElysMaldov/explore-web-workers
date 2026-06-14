import { useEffect, useRef, useState } from 'react'
import './App.css'

function App() {
  const workerRef = useRef<Worker | null>(null)
  const [input, setInput] = useState('21')
  const [result, setResult] = useState<number | null>(null)
  const [status, setStatus] = useState('Idle')

  useEffect(() => {
    const worker = new Worker(new URL('./worker.ts', import.meta.url), {
      type: 'module',
    })

    worker.onmessage = (event: MessageEvent<number>) => {
      setResult(event.data)
      setStatus('Done')
    }

    worker.onerror = () => {
      setStatus('Worker error')
    }

    workerRef.current = worker

    return () => {
      worker.terminate()
      workerRef.current = null
    }
  }, [])

  const runWorker = () => {
    const value = Number(input)
    if (!Number.isFinite(value)) {
      setStatus('Enter a number')
      return
    }

    setStatus('Working...')
    workerRef.current?.postMessage(value)
  }

  return (
    <main id="center">
      <section className="demo-card">
        <h1>Web Worker demo</h1>
        <p>
          Send a number to <code>src/worker.ts</code> and get it doubled.
        </p>

        <label className="field">
          <span>Number</span>
          <input
            type="number"
            value={input}
            onChange={(event) => setInput(event.target.value)}
          />
        </label>

        <button type="button" className="counter" onClick={runWorker}>
          Run worker
        </button>

        <p>
          Status: <strong>{status}</strong>
        </p>
        <p>
          Result: <strong>{result ?? '—'}</strong>
        </p>
      </section>
    </main>
  )
}

export default App
