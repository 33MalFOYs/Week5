export const mockCourses = [
  {
    id: "1",
    slug: "intro-to-react",
    title: "Introduction to React",
    description: "Learn the basics of React, components, state, and props.",
    coverImage: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?q=80&w=800&auto=format&fit=crop",
    modules: [
      {
        id: "m1",
        title: "Getting Started",
        lessons: [
          { id: "l1", title: "What is React?", videoId: "bMknfKXIFA8", duration: "10:24" },
          { id: "l2", title: "Your First Component", videoId: "bMknfKXIFA8", duration: "15:30" }
        ]
      }
    ]
  },
  {
    id: "2",
    slug: "advanced-tailwind",
    title: "Advanced Tailwind CSS",
    description: "Master Tailwind CSS by building complex, responsive layouts.",
    coverImage: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=800&auto=format&fit=crop",
    modules: [
      {
        id: "m2",
        title: "Layouts",
        lessons: [
          { id: "l3", title: "Grid vs Flexbox", videoId: "pfaSUYaSgRo", duration: "12:00" }
        ]
      }
    ]
  }
];

export const mockProgress = {
  "1": {
    completedLessons: ["l1"],
    lastWatchedLesson: "l2",
    lastWatchedTimestamp: 120 // seconds
  }
};
