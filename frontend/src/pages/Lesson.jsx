import { useParams } from 'react-router-dom';
import { mockCourses } from '../data/mockData';
import Sidebar from '../components/Sidebar';
import { CheckCircle } from 'lucide-react';

export default function Lesson() {
  const { slug, lessonId } = useParams();
  const course = mockCourses.find(c => c.slug === slug);
  
  if (!course) return <div>Course not found</div>;

  let currentLesson = null;
  course.modules.forEach(m => {
    const l = m.lessons.find(l => l.id === lessonId);
    if (l) currentLesson = l;
  });

  if (!currentLesson) return <div>Lesson not found</div>;

  return (
    <div className="flex flex-col lg:flex-row gap-8 animate-in fade-in duration-500 max-w-7xl mx-auto">
      <div className="flex-grow">
        <div className="glass-card overflow-hidden mb-6 aspect-video">
          <iframe 
            className="w-full h-full"
            src={`https://www.youtube.com/embed/${currentLesson.videoId}`} 
            title={currentLesson.title}
            frameBorder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowFullScreen
          ></iframe>
        </div>
        
        <div className="glass p-8 rounded-2xl">
          <div className="flex justify-between items-start flex-wrap gap-4 mb-6">
            <div>
              <h1 className="text-3xl font-bold mb-2">{currentLesson.title}</h1>
              <p className="text-zinc-400">Course: {course.title}</p>
            </div>
            <button className="btn-secondary flex items-center gap-2">
              <CheckCircle size={18} /> Mark Complete
            </button>
          </div>
          
          <hr className="border-white/10 my-8" />
          
          <div className="prose prose-invert max-w-none text-zinc-300">
            <h3>Lesson Notes</h3>
            <p>This is where the detailed lesson notes and transcripts would go. You can follow along with the video and take notes here.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
            molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
            numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium.</p>
          </div>
        </div>
      </div>
      
      <Sidebar course={course} currentLessonId={lessonId} />
    </div>
  );
}
