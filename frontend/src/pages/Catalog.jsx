import { mockCourses } from '../data/mockData';
import CourseCard from '../components/CourseCard';

export default function Catalog() {
  return (
    <div className="animate-in fade-in duration-500">
      <div className="text-center mb-16">
        <h1 className="text-5xl font-extrabold mb-4 tracking-tight">
          Explore <span className="text-gradient">Premium Courses</span>
        </h1>
        <p className="text-zinc-400 text-lg max-w-2xl mx-auto">
          Level up your skills with our curated collection of high-quality learning materials.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {mockCourses.map(course => (
          <CourseCard key={course.id} course={course} />
        ))}
      </div>
    </div>
  );
}
