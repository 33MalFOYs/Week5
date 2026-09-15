import { Link } from 'react-router-dom';
import { Play, CheckCircle } from 'lucide-react';

export default function Sidebar({ course, currentLessonId }) {
  return (
    <div className="w-full lg:w-80 flex-shrink-0 glass rounded-2xl p-6 h-fit sticky top-24">
      <h3 className="font-bold text-lg mb-6 tracking-tight text-white/90">Curriculum</h3>
      <div className="space-y-6">
        {course.modules.map((module, i) => (
          <div key={module.id}>
            <h4 className="text-sm font-semibold text-purple-400 mb-3 uppercase tracking-wider">
              {i + 1}. {module.title}
            </h4>
            <div className="space-y-1">
              {module.lessons.map(lesson => {
                const isActive = lesson.id === currentLessonId;
                return (
                  <Link
                    key={lesson.id}
                    to={`/courses/${course.slug}/lessons/${lesson.id}`}
                    className={`flex items-center gap-3 p-3 rounded-xl transition-all duration-200 ${
                      isActive 
                        ? 'bg-white/10 text-white shadow-inner border border-white/5' 
                        : 'text-zinc-400 hover:bg-white/5 hover:text-zinc-200 border border-transparent'
                    }`}
                  >
                    <Play size={14} className={isActive ? 'text-pink-400' : 'text-zinc-500'} />
                    <span className="text-sm font-medium line-clamp-1">{lesson.title}</span>
                  </Link>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
