import { createClient } from "@supabase/supabase-js";

const SUPABASE_URL = "https://untgtsclbjlgemwljimq.supabase.co"; // Replace with your Supabase project URL
const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVudGd0c2NsYmpsZ2Vtd2xqaW1xIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mzg5MDc3MjcsImV4cCI6MjA1NDQ4MzcyN30.VzIzwguQL3roRaTThrGkyE1MA8Fj0Z752meRsUGgR2w"; // Replace with your anon key

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
