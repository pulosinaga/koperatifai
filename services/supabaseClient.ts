
import { createClient } from '@supabase/supabase-js';

// Mengambil dari window.process yang di-shim di index.html
const getEnv = () => {
  return (window as any).process?.env || {};
};

const env = getEnv();
const supabaseUrl = env.SUPABASE_URL || '';
const supabaseAnonKey = env.SUPABASE_ANON_KEY || '';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export const getProfile = async (userId: string) => {
  try {
    const { data, error } = await supabase
      .from('profiles')
      .select('*')
      .eq('id', userId)
      .single();
      
    if (error) throw error;
    return data;
  } catch (err) {
    console.warn("Supabase profile fetch failed:", err);
    return null;
  }
};
