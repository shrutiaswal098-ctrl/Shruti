import Sidebar from "./components/Sliderbar";
import BentoGrid from "./components/BentoGrid";
import { supabase } from "./lib/supabase";

export default async function Home() {
  const { data: courses, error } = await supabase
    .from("courses")
    .select("*");

  return (
    <div className="min-h-screen bg-black text-white p-6">
     

      <div className="grid grid-cols-1 lg:grid-cols-[250px_1fr] gap-6">
        <Sidebar />
        <BentoGrid courses={courses || []} />
      </div>
    </div>
  );
}