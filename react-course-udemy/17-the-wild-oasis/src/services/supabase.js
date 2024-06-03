import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://pcjazlezatyyjejkwqgl.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBjamF6bGV6YXR5eWplamt3cWdsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTcxMzA0NTQsImV4cCI6MjAzMjcwNjQ1NH0.ranfTcgHRtytNIGrlu8kmEAHRDhUd1y_P7i9tNFbN6s";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
