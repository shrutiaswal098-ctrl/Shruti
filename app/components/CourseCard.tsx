"use client";

import { motion } from "framer-motion";
import { Course } from "@/app/types/course";

interface Props {
  course: Course;
}

export default function CourseCard({ course }: Props) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-zinc-900 p-6 rounded-3xl"
    >
      <h3 className="text-xl font-semibold text-white">
        {course.title}
      </h3>

      <div className="w-full h-3 bg-zinc-700 rounded-full mt-4 overflow-hidden">
        <div
          className="h-full bg-cyan-400"
          style={{ width: `${course.progress}%` }}
        />
      </div>

      <p className="text-zinc-400 mt-2">
        {course.progress}% completed
      </p>
    </motion.div>
  );
}