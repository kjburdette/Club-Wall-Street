import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.REACT_APP_SUPABASE_URL
const supabaseAnonKey = process.env.REACT_APP_SUPABASE_ANON_KEY

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

const refreshPage = () => {
  window.location.reload(false);
}

export const sendToSupabase = async (e, formData) => {
    e.preventDefault()
    alert("Thanks for signing up to test Club Wall Street! Make sure to follow our social media to keep track of updates.")
    const { data, error } = await supabase
  .from('SignUpForm')
  .insert([
    formData
  ])
  refreshPage()
}
