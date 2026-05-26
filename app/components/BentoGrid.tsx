import HeroTile from "./HeroTile";
import ActivityTile from "./ActivityTile";
import CourseCard from "./CourseCard";
import { Course } from "@/app/types/course";

interface Props {
  courses: Course[];
}

export default function BentoGrid({ courses }: Props) {
  return (
    <main className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
      <div className="xl:col-span-2">
        <HeroTile />
      </div>

      {courses.map((course) => (
        <CourseCard key={course.id} course={course} />
      ))}

      <div className="xl:col-span-2">
        <ActivityTile />
      </div>
    </main>
  );
}