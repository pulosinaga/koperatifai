
import { createClient } from '@supabase/supabase-js';

const getEnv = () => {
  return (window as any).process?.env || {};
};

const env = getEnv();
const supabaseUrl = env.SUPABASE_URL || '';
const supabaseAnonKey = env.SUPABASE_ANON_KEY || '';

// Inisialisasi client dengan pengecekan aman
export const supabase = (supabaseUrl && supabaseAnonKey && !supabaseUrl.includes('GANTI_DENGAN')) 
  ? createClient(supabaseUrl, supabaseAnonKey)
  : (null as any);

export const getProfile = async (userId: string) => {
  if (!supabase) return null;
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
