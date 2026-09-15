import { mockCourses, mockProgress } from '../data/mockData';
import CourseCard from '../components/CourseCard';
import { useUser } from '@clerk/clerk-react';

export default function MyLearning() {
  const { user } = useUser();
  const inProgressCourses = mockCourses.filter(c => mockProgress[c.id]);

  return (
    <div className="animate-in fade-in duration-500 max-w-7xl mx-auto">
      <div className="mb-12">
        <h1 className="text-4xl font-bold mb-2 tracking-tight">Welcome back, <span className="text-gradient">{user?.firstName || 'Learner'}</span></h1>
        <p className="text-zinc-400">Pick up exactly where you left off.</p>
      </div>

      <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
        <span className="w-2 h-8 rounded-full bg-purple-500 block"></span>
        In Progress
      </h2>
      
      {inProgressCourses.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {inProgressCourses.map(course => (
            <CourseCard 
              key={course.id} 
              course={course} 
              progress={mockProgress[course.id]} 
            />
          ))}
        </div>
      ) : (
        <div className="glass p-12 text-center rounded-2xl">
          <p className="text-zinc-400 text-lg mb-6">You haven't started any courses yet.</p>
          <a href="/" className="btn-primary inline-block">Browse Catalog</a>
        </div>
      )}
    </div>
  );
}
