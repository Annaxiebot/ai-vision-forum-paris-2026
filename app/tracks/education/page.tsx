import { TrackLayout } from "@/components/tracks/TrackLayout";

export default function EducationTrack() {
  return (
    <TrackLayout
      title="AI for Next-Gen Learning & Creative Pedagogy"
      icon="🎓"
      gradient="bg-gradient-to-br from-primary/20 via-background to-secondary/10"
      overview="Reshaping education through generative AI, creative learning experiences, and personalized pedagogy for the 21st century."
      keyTopics={[
        "Generative AI in educational content creation",
        "Personalized learning pathways powered by AI",
        "Creative pedagogy and project-based AI learning",
        "AI literacy for educators and students",
        "Ethical considerations in AI-enhanced education",
        "Measuring learning outcomes with AI analytics",
        "Collaborative learning with AI assistants",
        "Accessibility and inclusion through AI tools",
      ]}
      resources={[
        {
          title: "UNESCO's AI in Education Framework",
          url: "https://www.unesco.org/en/digital-education/artificial-intelligence",
        },
        {
          title: "MIT Media Lab - Learning Creative Learning",
          url: "https://learn.media.mit.edu/lcl/",
        },
      ]}
    >
      <div className="prose prose-invert max-w-none">
        <h2 className="text-2xl font-bold mb-4">Why This Matters</h2>
        <p className="text-muted-foreground">
          As AI transforms every sector, education must evolve to prepare learners not just to use AI, but to think critically about it, create with it, and shape its future. This track explores how generative AI can enhance creativity, personalization, and accessibility in learning environments.
        </p>
        
        <h3 className="text-xl font-bold mt-8 mb-4">Focus Areas</h3>
        <ul className="space-y-2 text-muted-foreground">
          <li>Case studies from schools and universities implementing AI tools</li>
          <li>Workshops on designing AI-enhanced curricula</li>
          <li>Discussions on student agency and AI co-creation</li>
          <li>Frameworks for responsible AI use in classrooms</li>
        </ul>
      </div>
    </TrackLayout>
  );
}
