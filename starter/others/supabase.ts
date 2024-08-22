import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://innbkhhfurunrhqmpfle.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImlubmJraGhmdXJ1bnJocW1wZmxlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjA1Mzk2MTIsImV4cCI6MjAzNjExNTYxMn0.peMbAnqwY-9aXvu9tfhG-ACE_zcO0Hr3xTS3wu5_CSo";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;