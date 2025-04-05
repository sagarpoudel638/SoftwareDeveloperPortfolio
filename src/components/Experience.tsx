
import { useSectionAnimation, useStaggeredAnimation } from '@/lib/animations';
const experiences = [
  {
    id: 1,
    title: "Full Stack Developer",
    company: "Dhurbatara Education Infosys",
    period: "2023 - Present",
    description: "Designed, developed, and currently maintain the official website for Dhurbatara Education Infosys, a professional education institute based in Nepal. The website serves as an informational and promotional platform for students preparing for government and professional exams.",
    achievements: [
      "Built and deployed a fully responsive WordPress site at dhurbatara.edu.np",
      "Integrated course details, notices, and updates with dynamic content",
      "Managed domain and hosting via Amazon Lightsail",
      "Provided ongoing updates, optimizations, and SEO improvements"
    ]
  },
  {
    id: 2,
    title: "Software Developer (Training)",
    company: "Dented Code Academy",
    period: "Jul 2024 – Jan 2025",
    description: "Completed a comprehensive job-ready training program focused on modern full stack development tools and practices. Participated in real-world projects under mentorship to build production-ready web applications.",
    achievements: [
      "Built React and Node.js applications with MongoDB integration",
      "Practiced Git, Agile workflow, and REST API development",
      "Contributed to team projects with frontend and backend collaboration",
      "Gained hands-on experience with deployment and debugging techniques"
    ]
  },
  {
    id: 3,
    title: "Academic Projects & Freelance Work",
    company: "Freelance & University",
    period: "2019 – 2024",
    description: "Developed multiple projects as part of Bachelor’s and Master’s programs, including web apps, management systems, and mobile prototypes using various tech stacks.",
    achievements: [
      "Created a customer management system using Laravel and MySQL",
      "Built a Bookstore Management system in Java and a Library System in Python",
      "Developed a portfolio site using HTML, CSS, JavaScript",
      "Explored mobile development using Flutter for Android and iOS"
    ]
  }
];

const Experience = () => {
  const section = useSectionAnimation({ threshold: 0.1 });
  const staggered = useStaggeredAnimation({ threshold: 0.1 });

  return (
    <section 
      id="experience" 
      ref={section.ref}
      className={`py-24 bg-secondary/50 ${section.className}`}
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <div className="bg-primary/10 rounded-full px-4 py-1 text-xs font-medium text-primary">
              Experience & Achievements
            </div>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Professional Journey
          </h2>
          
          <p className="max-w-2xl mx-auto text-muted-foreground">
            A timeline of my professional growth, key roles, and notable achievements
            throughout my career as a software developer.
          </p>
        </div>
        
        <div 
          ref={staggered.ref}
          className={`relative ${staggered.className}`}
        >
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-1 bg-primary/20 rounded-full"></div>
          
          {experiences.map((exp, idx) => (
            <div 
              key={exp.id} 
              className={`stagger-item relative flex flex-col md:flex-row ${idx !== experiences.length - 1 ? 'mb-16' : ''}`}
            >
              {/* Timeline dot */}
              <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-5 h-5 rounded-full bg-primary border-4 border-white dark:border-slate-900"></div>
              
              {/* Left side (even) or empty space (odd) */}
              <div className={`md:w-1/2 ${idx % 2 === 0 ? 'md:pr-12 text-right' : 'md:pr-12 md:text-right invisible'}`}>
                {idx % 2 === 0 && (
                  <>
                    <h3 className="text-xl font-bold">{exp.title}</h3>
                    <p className="text-sm font-semibold text-primary">{exp.company}</p>
                    <p className="text-sm text-muted-foreground mb-4">{exp.period}</p>
                    <p className="text-muted-foreground mb-4">{exp.description}</p>
                    <ul className={`space-y-2 text-sm ${idx % 2 === 0 ? 'ml-auto' : 'mr-auto'}`}>
                      {exp.achievements.map((achievement, achieveIdx) => (
                        <li key={achieveIdx} className="flex items-center justify-end">
                          <span>{achievement}</span>
                          <span className="ml-2 w-4 h-4 bg-primary/10 rounded-full flex items-center justify-center text-primary">
                            ✓
                          </span>
                        </li>
                      ))}
                    </ul>
                  </>
                )}
              </div>
              
              {/* Mobile dot (only visible on mobile) */}
              <div className="md:hidden absolute left-0 transform -translate-x-1/2 w-5 h-5 rounded-full bg-primary border-4 border-white dark:border-slate-900"></div>
              
              {/* Right side (odd) or empty space (even) */}
              <div className={`md:w-1/2 ${idx % 2 === 1 ? 'md:pl-12' : 'md:pl-12 invisible'} ${idx % 2 === 0 ? 'ml-6 md:ml-0' : 'ml-6 md:ml-0'}`}>
                {idx % 2 === 1 && (
                  <>
                    <h3 className="text-xl font-bold">{exp.title}</h3>
                    <p className="text-sm font-semibold text-primary">{exp.company}</p>
                    <p className="text-sm text-muted-foreground mb-4">{exp.period}</p>
                    <p className="text-muted-foreground mb-4">{exp.description}</p>
                    <ul className="space-y-2 text-sm">
                      {exp.achievements.map((achievement, achieveIdx) => (
                        <li key={achieveIdx} className="flex items-center">
                          <span className="mr-2 w-4 h-4 bg-primary/10 rounded-full flex items-center justify-center text-primary">
                            ✓
                          </span>
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </>
                )}
              </div>
              
              {/* Mobile content (only visible on mobile) */}
              <div className="md:hidden ml-6">
                <h3 className="text-xl font-bold">{exp.title}</h3>
                <p className="text-sm font-semibold text-primary">{exp.company}</p>
                <p className="text-sm text-muted-foreground mb-4">{exp.period}</p>
                <p className="text-muted-foreground mb-4">{exp.description}</p>
                <ul className="space-y-2 text-sm">
                  {exp.achievements.map((achievement, achieveIdx) => (
                    <li key={achieveIdx} className="flex items-center">
                      <span className="mr-2 w-4 h-4 bg-primary/10 rounded-full flex items-center justify-center text-primary">
                        ✓
                      </span>
                      <span>{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-20 frosted-glass rounded-2xl p-8 max-w-3xl mx-auto">
  <h3 className="text-2xl font-bold mb-6 text-center">Continuous Professional Development</h3>
  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
    {/* Skills & Projects */}
    <div>
      <h4 className="text-lg font-semibold mb-3">Skills in Practice</h4> 
      <ul className="space-y-3">
        <li className="flex items-center">
          <span className="mr-2 w-4 h-4 bg-primary/10 rounded-full flex items-center justify-center text-primary">✓</span>
          <span>MERN Stack Projects (React, Node.js, MongoDB)</span>
        </li>
        <li className="flex items-center">
          <span className="mr-2 w-4 h-4 bg-primary/10 rounded-full flex items-center justify-center text-primary">✓</span>
          <span>Full-Stack Development Bootcamp (Dented Code Academy)</span>
        </li>
        <li className="flex items-center">
          <span className="mr-2 w-4 h-4 bg-primary/10 rounded-full flex items-center justify-center text-primary">✓</span>
          <span>Website Development for Dhurbatara.edu.np</span>
        </li>
        <li className="flex items-center">
          <span className="mr-2 w-4 h-4 bg-primary/10 rounded-full flex items-center justify-center text-primary">✓</span>
          <span>Cloud & DevOps (Hands-on with AWS & Terraform)</span>
        </li>
      </ul>
    </div>

    {/* Learning in Progress */}
    <div>
      <h4 className="text-lg font-semibold mb-3">Currently Learning</h4>
      <ul className="space-y-3">
        <li className="flex items-center">
          <span className="mr-2 w-4 h-4 bg-primary/10 rounded-full flex items-center justify-center text-primary">✓</span>
          <span>Serverless Architecture (AWS Lambda, API Gateway)</span>
        </li>
        <li className="flex items-center">
          <span className="mr-2 w-4 h-4 bg-primary/10 rounded-full flex items-center justify-center text-primary">✓</span>
          <span>Advanced React Patterns & Performance</span>
        </li>
        <li className="flex items-center">
          <span className="mr-2 w-4 h-4 bg-primary/10 rounded-full flex items-center justify-center text-primary">✓</span>
          <span>Terraform for Cloud Infrastructure</span>
        </li>
        <li className="flex items-center">
          <span className="mr-2 w-4 h-4 bg-primary/10 rounded-full flex items-center justify-center text-primary">✓</span>
          <span>Project Deployment & CI/CD Best Practices</span>
        </li>
      </ul>
    </div>
  </div>
</div>
      </div>
    </section>
  );
};

export default Experience;
