import { motion } from 'framer-motion';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

const ServiceGrid = ({ services, showTechnologies = false }) => {
  return (
    <section className="py-20 lg:py-28 bg-[var(--color-bg-primary)]">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          className="grid md:grid-cols-2 gap-8 lg:gap-10"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="group bg-[var(--color-bg-card)] rounded-2xl overflow-hidden border border-[var(--color-border)] hover:border-[var(--color-primary)]/50 transition-all duration-300"
              variants={itemVariants}
              whileHover={{ y: -5, boxShadow: 'var(--shadow-xl)' }}
            >
              {/* Image */}
              <div className="relative h-56 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <h3 className="absolute bottom-4 left-6 text-2xl font-bold text-white">
                  {service.title}
                </h3>
              </div>

              {/* Content */}
              <div className="p-6">
                <p className="text-[var(--color-text-secondary)] mb-6 leading-relaxed">
                  {service.description}
                </p>

                {/* Technologies */}
                {showTechnologies && service.technologies && (
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-[var(--color-text-tertiary)] uppercase tracking-wider mb-3">
                      Technologies
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {service.technologies.map((tech, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 text-sm rounded-full bg-[var(--color-primary)]/10 text-[var(--color-primary)] font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {/* Services List */}
                <div>
                  <h4 className="text-sm font-semibold text-[var(--color-text-tertiary)] uppercase tracking-wider mb-3">
                    Services
                  </h4>
                  <ul className="grid grid-cols-2 gap-2">
                    {service.services.map((item, i) => (
                      <li
                        key={i}
                        className="flex items-center gap-2 text-sm text-[var(--color-text-secondary)]"
                      >
                        <svg
                          className="w-4 h-4 text-[var(--color-success)] flex-shrink-0"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <polyline points="20 6 9 17 4 12"></polyline>
                        </svg>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ServiceGrid;
