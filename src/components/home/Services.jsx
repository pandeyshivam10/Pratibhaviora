import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { SERVICES } from '../../utils/constants';

// Icons
const WrenchIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path>
  </svg>
);

const CodeIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="16 18 22 12 16 6"></polyline>
    <polyline points="8 6 2 12 8 18"></polyline>
  </svg>
);

const ArrowRightIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="5" y1="12" x2="19" y2="12"></line>
    <polyline points="12 5 19 12 12 19"></polyline>
  </svg>
);

const services = [
  {
    key: 'hardwareRepair',
    icon: <WrenchIcon />,
    data: SERVICES.hardwareRepair,
  },
  {
    key: 'softwareDevelopment',
    icon: <CodeIcon />,
    data: SERVICES.softwareDevelopment,
  },
];

const Services = () => {
  const navigate = useNavigate();

  return (
    <section className="py-24 lg:py-32 bg-[var(--color-bg-secondary)]">
      <div className="container mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          className="text-center max-w-3xl mx-auto mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[var(--color-text-primary)] mb-4">
            Our <span className="gradient-text">Services</span>
          </h2>
          <p className="text-lg text-[var(--color-text-secondary)]">
            Comprehensive technology solutions for all your hardware and software needs
          </p>
        </motion.div>

        {/* Service Cards */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {services.map((service, index) => (
            <motion.div
              key={service.key}
              className="group relative rounded-2xl overflow-hidden cursor-pointer bg-[var(--color-bg-card)] border border-[var(--color-border)]"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              whileHover={{ y: -10 }}
              onClick={() => navigate(service.data.path)}
            >
              {/* Image Container */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={service.data.image}
                  alt={service.data.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
                
                {/* Icon */}
                <div className="absolute top-6 left-6 w-14 h-14 rounded-xl bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-secondary)] flex items-center justify-center text-white shadow-lg">
                  {service.icon}
                </div>
              </div>

              {/* Content */}
              <div className="p-8">
                <h3 className="text-2xl font-bold text-[var(--color-text-primary)] mb-3">
                  {service.data.title}
                </h3>
                <p className="text-[var(--color-text-secondary)] mb-6 leading-relaxed">
                  {service.data.description}
                </p>

                {/* Service Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {service.data.items.slice(0, 4).map((item, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 text-sm rounded-full bg-[var(--color-bg-tertiary)] text-[var(--color-text-secondary)]"
                    >
                      {item.title}
                    </span>
                  ))}
                </div>

                {/* CTA */}
                <motion.div
                  className="flex items-center gap-2 text-[var(--color-primary)] font-medium"
                  whileHover={{ x: 5 }}
                >
                  Learn More
                  <ArrowRightIcon />
                </motion.div>
              </div>

              {/* Hover Glow Effect */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-primary)]/5 to-[var(--color-secondary)]/5" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
