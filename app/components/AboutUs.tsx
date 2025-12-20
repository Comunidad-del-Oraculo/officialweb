import { aboutus } from "@/lib/constants";
export const AboutUs = () => {
  return (
    <section
      id="aboutus"
      className="py-20 px-6 bg-linear-to-bl from-white to-accent/10"
    >
      <h2 className="text-4xl font-bold text-center mb-16 text-gray-900">
        Acerca de la <span className="text-accent">Comunidad</span>
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {aboutus.map((content) => (
          <div
            key={content.title}
            className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300 border-t-4 border-accent"
          >
            <div className="text-center mb-4">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">{content.icon}</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                {content.title}
              </h3>
            </div>
            <p className="text-gray-600 text-center leading-relaxed">
              {content.text}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};
