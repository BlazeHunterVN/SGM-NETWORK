import { createClient } from '@supabase/supabase-js';
const supabaseUrl = 'https://biedzzdbjdleuiejuyhi.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJpZWR6emRiamRsZXVpZWp1eWhpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Njc0NTAzNjUsImV4cCI6MjA4MzAyNjM2NX0.Sc81H_kpxy4GFw1x9QHibkGkRgO469BZLlmCHQEpoGE';
const supabase = createClient(supabaseUrl, supabaseAnonKey);
async function run() {
    const { data, error } = await supabase.from('admin_access').select('*');
    console.log(JSON.stringify({ data, error }, null, 2));
}
run();
