import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import PageTransition from '../components/common/PageTransition';
import ServiceHero from '../components/services/ServiceHero';
import ServiceGrid from '../components/services/ServiceGrid';
import ProcessTimeline from '../components/services/ProcessTimeline';
import TechStack from '../components/services/TechStack';
import Portfolio from '../components/services/Portfolio';
import Button from '../components/common/Button';
import { SERVICES } from '../utils/constants';

const SoftwareDevelopmentPage = () => {
  const navigate = useNavigate();
  const { softwareDevelopment } = SERVICES;

  return (
    <PageTransition>
      {/* Hero Section */}
      <ServiceHero
        title={softwareDevelopment.title}
        subtitle="Transforming ideas into powerful digital solutions that drive business growth."
        image="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=1920"
      />

      {/* Services Grid */}
      <ServiceGrid 
        services={softwareDevelopment.items} 
        showTechnologies={true}
      />

      {/* Tech Stack */}
      <TechStack technologies={softwareDevelopment.techStack} />

      {/* Process Timeline */}
      <ProcessTimeline 
        steps={softwareDevelopment.process} 
        title="Development Process"
      />

      {/* Portfolio */}
      <Portfolio />

      {/* CTA Section */}
      <section className="py-20 lg:py-28 bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-secondary)]">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            className="text-center max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Ready to Build Something Amazing?
            </h2>
            <p className="text-lg text-white/80 mb-10">
              Let's turn your vision into reality. Start your project with us today!
            </p>
            <Button
              variant="secondary"
              size="lg"
              onClick={() => navigate('/contact?service=development')}
            >
              Start Your Project
            </Button>
          </motion.div>
        </div>
      </section>
    </PageTransition>
  );
};

export default SoftwareDevelopmentPage;
