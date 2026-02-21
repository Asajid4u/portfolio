

export default function AboutSection() {
  return (
    <section className="max-w-6xl mx-auto px-6  text-white">
      
      {/* Heading */}
      <div className="text-center mb-16 pt-25">
        <p className="text-blue-400 text-sm tracking-wider uppercase mb-3">
          Who I Am
        </p>
        <h2 className="text-4xl md:text-5xl font-bold">
          About <span className="text-blue-400">Me</span>
        </h2>
      </div>

      {/* Content */}
      <div className="grid md:grid-cols-2 gap-14 items-center">

        {/* Left Side - Bio */}
        <div className="space-y-6">
          <h3 className="text-2xl font-semibold">
            Full Stack Developer & UI Enthusiast
          </h3>

          <p className="text-gray-300 leading-relaxed">
            I am a passionate Full Stack Developer with strong expertise in 
            building scalable and user-friendly web applications. Currently 
            working as a Programmer Analyst Intern, I focus on creating clean 
            UI designs and optimized backend architectures.
          </p>

          <p className="text-gray-400 leading-relaxed">
            My approach combines performance, usability, and modern design 
            principles to deliver impactful digital experiences. I continuously 
            explore new technologies and strive to improve code quality and 
            system efficiency.
          </p>

          {/* Highlights */}
          <div className="flex flex-wrap gap-3 pt-4">
            <span className="px-4 py-2 bg-white/5 border border-white/10 rounded-full text-sm">
              MERN Stack
            </span>
            <span className="px-4 py-2 bg-white/5 border border-white/10 rounded-full text-sm">
              UI/UX Focused
            </span>
            <span className="px-4 py-2 bg-white/5 border border-white/10 rounded-full text-sm">
              API Development
            </span>
            <span className="px-4 py-2 bg-white/5 border border-white/10 rounded-full text-sm">
              Performance Optimization
            </span>
          </div>
        </div>

        {/* Right Side - Stats */}
        <div className="grid grid-cols-2 gap-8">

          <div className="bg-white/5 border border-white/10 p-8 rounded-2xl text-center">
            <h4 className="text-3xl font-bold text-blue-400">1+</h4>
            <p className="text-gray-400 mt-2">Years Experience</p>
          </div>

          <div className="bg-white/5 border border-white/10 p-8 rounded-2xl text-center">
            <h4 className="text-3xl font-bold text-blue-400">10+</h4>
            <p className="text-gray-400 mt-2">Projects Completed</p>
          </div>

          <div className="bg-white/5 border border-white/10 p-8 rounded-2xl text-center">
            <h4 className="text-3xl font-bold text-blue-400">5+</h4>
            <p className="text-gray-400 mt-2">Technologies</p>
          </div>

          <div className="bg-white/5 border border-white/10 p-8 rounded-2xl text-center">
            <h4 className="text-3xl font-bold text-blue-400">100%</h4>
            <p className="text-gray-400 mt-2">Commitment</p>
          </div>

        </div>

      </div>
    </section>
  );
}