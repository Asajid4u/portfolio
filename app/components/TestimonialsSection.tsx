
import { FaStar } from "react-icons/fa";

export default function TestimonialsSection() {
  const testimonials = [
    {
      name: "Rahul Mehta",
      role: "Founder, TechNova",
      image:
        "https://randomuser.me/api/portraits/men/32.jpg",
      message:
        "Sajid delivered exceptional results on our web platform. His attention to detail and ability to translate ideas into scalable solutions exceeded our expectations.",
    },
    {
      name: "Ananya Sharma",
      role: "Product Manager, SoftEdge",
      image:
        "https://randomuser.me/api/portraits/women/44.jpg",
      message:
        "Working with Sajid was seamless. He combines strong technical expertise with modern UI principles, ensuring both performance and user experience.",
    },
    {
      name: "Michael Lee",
      role: "Startup Founder",
      image:
        "https://randomuser.me/api/portraits/men/65.jpg",
      message:
        "Professional, reliable, and highly skilled. Sajid consistently delivered high-quality code and maintained excellent communication throughout the project.",
    },
  ];

  return (
    <section className="max-w-7xl mx-auto px-6 py-24 text-white">

      {/* Heading */}
      <div className="text-center mb-16">
        <p className="text-blue-400 text-sm tracking-wider uppercase mb-3">
          What Clients Say
        </p>
        <h2 className="text-4xl md:text-5xl font-bold">
          Testimonials
        </h2>
      </div>

      {/* Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">

        {testimonials.map((item, index) => (
          <div
            key={index}
            className="bg-white/5 border border-white/10 rounded-3xl p-8 hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-300 group"
          >
            {/* Stars */}
            <div className="flex gap-1 mb-6 text-yellow-400">
              {[...Array(5)].map((_, i) => (
                <FaStar key={i} size={14} />
              ))}
            </div>

            {/* Message */}
            <p className="text-gray-300 leading-relaxed mb-8 text-sm">
              “{item.message}”
            </p>

            {/* User Info */}
            <div className="flex items-center gap-4">
              <img
                src={item.image}
                alt={item.name}
                className="w-12 h-12 rounded-full object-cover border border-white/20"
              />
              <div>
                <h4 className="font-semibold text-lg">
                  {item.name}
                </h4>
                <p className="text-sm text-gray-400">
                  {item.role}
                </p>
              </div>
            </div>

          </div>
        ))}

      </div>
    </section>
  );
}