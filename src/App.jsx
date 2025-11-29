import { useEffect, useState } from 'react'
import { supabase } from './config/supabase'
import './App.css'

function App() {
  const [connectionStatus, setConnectionStatus] = useState('testing')

  useEffect(() => {
    const testConnection = async () => {
      try {
        // Better test - just check if we can communicate with Supabase
        const { error } = await supabase.auth.getSession()
        
        if (error && error.message !== 'JSON object requested, multiple (or no) rows returned') {
          console.error('Connection failed:', error)
          setConnectionStatus('failed')
        } else {
          console.log('✅ Supabase connected successfully!')
          setConnectionStatus('success')
        }
      } catch (error) {
        console.error('Connection failed:', error)
        setConnectionStatus('failed')
      }
    }
    
    testConnection()
  }, [])

  return (
    <div className="App">
      <h1>School Voting System</h1>
      
      {connectionStatus === 'testing' && (
        <p style={{color: 'blue'}}>🔄 Testing Supabase connection...</p>
      )}
      
      {connectionStatus === 'success' && (
        <p style={{color: 'green'}}>✅ Supabase connected successfully!</p>
      )}
      
      {connectionStatus === 'failed' && (
        <p style={{color: 'red'}}>❌ Supabase connection failed</p>
      )}
      
      <p>Check browser console for details.</p>
    </div>
  )
}

export default App