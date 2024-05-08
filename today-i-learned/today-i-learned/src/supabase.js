// import { createClient } from "@supabase/supabase-js";
// const supabaseUrl = "https://edfrtttyfhxcbixntcox.supabase.co";
// const supabaseKey =
//   "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVkZnJ0dHR5Zmh4Y2JpeG50Y294Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTQ2NzM0MTAsImV4cCI6MjAzMDI0OTQxMH0.LQJ9hiyzzsQmFiRcGmTvXZtMQAH9ID3zQpzA3AWk3zc";
// const supabase = createClient(supabaseUrl, supabaseKey);
// export default supabase;

import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://mnheagkxvjghpsjipgvw.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1uaGVhZ2t4dmpnaHBzamlwZ3Z3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODg0ODE5ODgsImV4cCI6MjAwNDA1Nzk4OH0.-q-mizwM1nwTmRSigkwgyG9mgc9xpW4FLNVS2E1UC54";

const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
