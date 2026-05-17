import { createClient, SupabaseClient } from '@supabase/supabase-js'

// Konfigurasi connection pooling untuk Supabase
// Pooling sudah di-handle otomatis oleh Supabase dengan:
// - pgBouncer untuk transaction pooling
// - Connection pool size: 20 (default)

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

// Singleton pattern untuk reuse connection
let supabaseInstance: SupabaseClient | null = null;

export const getSupabaseClient = () => {
  if (!supabaseInstance) {
    supabaseInstance = createClient(supabaseUrl, supabaseAnonKey, {
      auth: {
        persistSession: true,
        autoRefreshToken: true,
      },
      db: {
        schema: 'public',
      },
      global: {
        headers: { 'x-application-name': 'jagawarga' },
      },
    });
  }
  return supabaseInstance;
};

// Untuk koneksi pool yang lebih besar (production)
export const createPoolClient = () => {
  return createClient(supabaseUrl, supabaseAnonKey, {
    auth: {
      persistSession: false,
    },
    db: {
      schema: 'public',
    },
  });
};