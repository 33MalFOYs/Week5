import { useParams, Link } from 'react-router-dom';
import { mockCourses } from '../data/mockData';
import { Play, CheckCircle } from 'lucide-react';

export default function CourseDetail() {
  const { slug } = useParams();
  const course = mockCourses.find(c => c.slug === slug);

  if (!course) {
    return <div className="text-center py-20 text-2xl">Course not found</div>;
  }

  return (
    <div className="max-w-4xl mx-auto animate-in fade-in duration-500">
      <div className="glass-card overflow-hidden mb-12">
        <div className="h-64 sm:h-80 w-full relative">
          <img src={course.coverImage} alt={course.title} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/50 to-transparent"></div>
          <div className="absolute bottom-0 left-0 p-8">
            <h1 className="text-4xl sm:text-5xl font-bold mb-4">{course.title}</h1>
            <p className="text-zinc-300 text-lg max-w-2xl">{course.description}</p>
          </div>
        </div>
        <div className="p-8 border-t border-white/10 bg-white/5 flex justify-between items-center">
          <div>
            <p className="text-zinc-400 text-sm">Modules</p>
            <p className="font-semibold">{course.modules.length}</p>
          </div>
          <Link 
            to={`/courses/${course.slug}/lessons/${course.modules[0].lessons[0].id}`}
            className="btn-primary flex items-center gap-2"
          >
            <Play size={18} /> Start Learning
          </Link>
        </div>
      </div>

      <h2 className="text-2xl font-bold mb-6">Course Curriculum</h2>
      <div className="space-y-6">
        {course.modules.map((module, i) => (
          <div key={module.id} className="glass p-6 rounded-2xl">
            <h3 className="text-xl font-semibold mb-4 text-purple-300">Module {i + 1}: {module.title}</h3>
            <div className="space-y-2">
              {module.lessons.map((lesson, j) => (
                <Link 
                  key={lesson.id} 
                  to={`/courses/${course.slug}/lessons/${lesson.id}`}
                  className="flex items-center justify-between p-4 rounded-xl hover:bg-white/5 transition-colors group border border-transparent hover:border-white/10"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-8 h-8 rounded-full bg-zinc-800 flex items-center justify-center text-xs text-zinc-400 group-hover:bg-purple-500/20 group-hover:text-purple-300 transition-colors">
                      {j + 1}
                    </div>
                    <span className="font-medium group-hover:text-white text-zinc-300">{lesson.title}</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className="text-sm text-zinc-500">{lesson.duration}</span>
                    <Play size={16} className="text-zinc-600 group-hover:text-purple-400 transition-colors" />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
