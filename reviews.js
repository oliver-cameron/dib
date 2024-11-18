import { Supabase } from "@supabase/supabase-js/dist/module/lib/SupabaseAuthClient";
let client = Supabase.createClient("https://totqzaxwbpdihorkbadn.supabase.co", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRvdHF6YXh3YnBkaWhvcmtiYWRuIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzE5MzIyMDEsImV4cCI6MjA0NzUwODIwMX0.gpqZcSOofkKgU5uK2Lzekfk9SI4I5D5HtaKP8d8moFM");
let reviews = client.from("reviews").get().then((response) => {
    return response.body;
});
console.log(reviews);