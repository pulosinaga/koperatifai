import { createClient } from '@supabase/supabase-js';

const getEnv = () => {
  return (window as any).process?.env || {};
};

const env = getEnv();
// Coba baca dari penyimpanan lokal browser terlebih dahulu (diset melalui DeploymentHub)
const localUrl = localStorage.getItem('SUPABASE_URL');
const localKey = localStorage.getItem('SUPABASE_ANON_KEY');

const supabaseUrl = localUrl || env.SUPABASE_URL || '';
const supabaseAnonKey = localKey || env.SUPABASE_ANON_KEY || '';

// Inisialisasi client dengan pengecekan aman
export const supabase = (supabaseUrl && supabaseAnonKey && supabaseUrl.startsWith('http')) 
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