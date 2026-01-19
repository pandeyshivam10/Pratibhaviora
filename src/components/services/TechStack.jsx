import { motion } from 'framer-motion';

const TechStack = ({ technologies }) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.3 },
    },
  };

  // Group technologies by category
  const groupedTech = technologies.reduce((acc, tech) => {
    if (!acc[tech.category]) {
      acc[tech.category] = [];
    }
    acc[tech.category].push(tech);
    return acc;
  }, {});

  return (
    <section className="py-20 lg:py-28 bg-[var(--color-bg-primary)]">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <motion.div
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[var(--color-text-primary)] mb-4">
            Our <span className="gradient-text">Technology Stack</span>
          </h2>
          <p className="text-lg text-[var(--color-text-secondary)]">
            We use the latest technologies to build robust and scalable solutions
          </p>
        </motion.div>

        {/* Tech Categories */}
        <div className="space-y-12">
          {Object.entries(groupedTech).map(([category, techs]) => (
            <div key={category}>
              <h3 className="text-lg font-semibold text-[var(--color-text-primary)] mb-6 text-center">
                {category}
              </h3>
              <motion.div
                className="flex flex-wrap justify-center gap-4"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                {techs.map((tech, index) => (
                  <motion.div
                    key={index}
                    className="px-6 py-3 rounded-xl bg-[var(--color-bg-card)] border border-[var(--color-border)] hover:border-[var(--color-primary)] transition-colors cursor-default"
                    variants={itemVariants}
                    whileHover={{ 
                      scale: 1.05, 
                      boxShadow: 'var(--shadow-md)',
                      y: -3,
                    }}
                  >
                    <span className="text-[var(--color-text-primary)] font-medium">
                      {tech.name}
                    </span>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
