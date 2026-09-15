import { Link } from 'react-router-dom';

export default function CourseCard({ course, progress }) {
  return (
    <Link to={`/courses/${course.slug}`} className="glass-card block overflow-hidden group">
      <div className="h-48 overflow-hidden relative">
        <img 
          src={course.coverImage} 
          alt={course.title} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/80 to-transparent"></div>
      </div>
      <div className="p-6 relative">
        <h3 className="text-xl font-bold mb-2 group-hover:text-purple-400 transition-colors">{course.title}</h3>
        <p className="text-zinc-400 text-sm line-clamp-2 mb-4">{course.description}</p>
        
        {progress && (
          <div className="mt-4">
            <div className="flex justify-between text-xs text-zinc-400 mb-1">
              <span>Progress</span>
              <span>{Math.round((progress.completedLessons.length / course.modules[0].lessons.length) * 100)}%</span>
            </div>
            <div className="w-full bg-white/10 rounded-full h-2">
              <div 
                className="bg-gradient-to-r from-purple-500 to-pink-500 h-2 rounded-full" 
                style={{ width: `${(progress.completedLessons.length / course.modules[0].lessons.length) * 100}%` }}
              ></div>
            </div>
          </div>
        )}
      </div>
    </Link>
  );
}
