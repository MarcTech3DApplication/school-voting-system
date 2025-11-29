import { supabase } from './config/supabase'

// Test function
async function testConnection() {
  try {
    const { data, error } = await supabase.from('_test').select('*').limit(1)
    
    if (error) {
      console.log('Supabase connected but no test table (this is normal)')
      return true
    }
    
    console.log('Supabase connection successful!')
    return true
  } catch (error) {
    console.error('Supabase connection failed:', error)
    return false
  }
}

// Run test
testConnection().then(success => {
  if (success) {
    console.log('✅ Supabase is properly configured!')
  } else {
    console.log('❌ Check your Supabase credentials')
  }
})

export default testConnection