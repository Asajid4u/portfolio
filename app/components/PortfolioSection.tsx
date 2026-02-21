// export default function PortfolioSection() {
//   return (
//     <section className="max-w-5xl px-6 text-center">
//       <h2 className="text-4xl font-bold mb-10">
//         My <span className="text-blue-400">Portfolio</span>
//       </h2>

//       <div className="grid md:grid-cols-3 gap-8">
//         <div className="bg-white/5 p-6 rounded-2xl border border-white/10">
//           Project 1
//         </div>
//         <div className="bg-white/5 p-6 rounded-2xl border border-white/10">
//           Project 2
//         </div>
//         <div className="bg-white/5 p-6 rounded-2xl border border-white/10">
//           Project 3
//         </div>
//       </div>
//     </section>
//   );
// }

export default function PortfolioSection() {
  const projects = [
    {
      title: "Travel Booking Platform",
      description:
        "A full-stack travel management system with authentication, trip creation, image uploads, and admin dashboard.",
      tech: ["React", "Node.js", "MongoDB", "Express"],
      image:
        "https://images.unsplash.com/photo-1502920917128-1aa500764b9e?q=80&w=800&auto=format&fit=crop",
      live: "#",
      github: "#",
    },
    {
      title: "Astrology Web Application",
      description:
        "Dynamic astrology platform with API integration, personalized horoscope pages, and SEO optimization.",
      tech: ["Next.js", "Tailwind", "REST API"],
      image:
        "https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=800&auto=format&fit=crop",
      live: "#",
      github: "#",
    },
    {
      title: "Business Dashboard",
      description:
        "Interactive analytics dashboard with role-based authentication and performance visualization.",
      tech: ["React", "Chart.js", "JWT Auth"],
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop",
      live: "#",
      github: "#",
    },
  ];

  return (
    <section className="max-w-7xl mx-auto px-6 -pt-5 text-white">

      {/* Heading */}
      <div className="text-center mb-16">
        <p className="text-blue-400 text-sm tracking-wider uppercase mb-3">
          My Work
        </p>
        <h2 className="text-4xl md:text-5xl font-bold">
          Featured <span className="text-blue-400">Projects</span>
        </h2>
      </div>

      {/* Projects Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 ">

        {projects.map((project, index) => (
          <div
            key={index}
            className="group bg-white/5 border border-white/10 rounded-3xl overflow-hidden hover:border-blue-400/40 transition-all duration-300"
          >
            {/* Image */}
            <div className="overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-500"
              />
            </div>

            {/* Content */}
            <div className="p-8 space-y-5">
              <h3 className="text-xl font-semibold">
                {project.title}
              </h3>

              <p className="text-gray-400 text-sm leading-relaxed">
                {project.description}
              </p>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2 pt-2">
                {project.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 text-xs bg-white/10 border border-white/10 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Buttons */}
              <div className="flex gap-4 pt-4">
                <a
                  href={project.live}
                  target="_blank"
                  className="px-5 py-2 bg-blue-500 hover:bg-blue-600 rounded-full text-sm font-medium transition"
                >
                  Live Demo
                </a>

                <a
                  href={project.github}
                  target="_blank"
                  className="px-5 py-2 border border-white/20 hover:border-white rounded-full text-sm font-medium transition"
                >
                  GitHub
                </a>
              </div>
            </div>
          </div>
        ))}

      </div>
    </section>
  );
}