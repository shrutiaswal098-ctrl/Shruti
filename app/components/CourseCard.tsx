"use client";

import { Course } from "@/app/types/course";
import { motion } from "framer-motion";
import {
  BookOpen,
  Sparkles,
  Layers3,
  Database,
  Code2,
} from "lucide-react";

interface Props {
  course: Course;
}

const icons: any = {
  BookOpen,
  Sparkles,
  Layers3,
  Database,
  Code2,
};

export default function CourseCard({ course }: Props) {
  const Icon = icons[course.icon_name] || BookOpen;

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{
        scale: 1.02,
        boxShadow: "0 0 30px rgba(0,255,255,0.2)",
      }}
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 20,
      }}
      className="bg-zinc-900 rounded-3xl p-6 relative overflow-hidden"
    >
      {/* Background glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-blue-500/5" />

      <div className="relative z-10">
        <Icon size={30} className="text-cyan-400 mb-4" />

        <h3 className="text-xl font-bold text-white">
          {course.title}
        </h3>

        <div className="w-full h-3 bg-zinc-700 rounded-full mt-5 overflow-hidden">
          <motion.div
            initial={{ width: 0 }}
            animate={{
              width: `${course.progress}%`,
            }}
            transition={{
              duration: 1.5,
            }}
            className="h-full bg-cyan-400 rounded-full"
          />
        </div>

        <p className="text-zinc-400 mt-2">
          {course.progress}% completed
        </p>
      </div>
    </motion.div>
  );
}