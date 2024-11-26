import { createClient } from '@supabase/supabase-js';
import { env } from '$env/dynamic/private';

export const supabase = createClient(`https://${env.SECRET_PROJECT_ID}.supabase.co`, env.SECRET_ANON_KEY);