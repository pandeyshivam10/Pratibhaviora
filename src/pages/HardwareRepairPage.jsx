import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import PageTransition from '../components/common/PageTransition';
import ServiceHero from '../components/services/ServiceHero';
import ServiceGrid from '../components/services/ServiceGrid';
import ProcessTimeline from '../components/services/ProcessTimeline';
import Button from '../components/common/Button';
import { SERVICES } from '../utils/constants';

const HardwareRepairPage = () => {
  const navigate = useNavigate();
  const { hardwareRepair } = SERVICES;

  return (
    <PageTransition>
      {/* Hero Section */}
      <ServiceHero
        title={hardwareRepair.title}
        subtitle="Professional repair solutions for all your IT equipment. Fast, reliable, and affordable."
        image="https://images.unsplash.com/photo-1597872200969-2b65d56bd16b?w=1920"
      />

      {/* Services Grid */}
      <ServiceGrid services={hardwareRepair.items} />

      {/* Process Timeline */}
      <ProcessTimeline 
        steps={hardwareRepair.process} 
        title="Our Repair Process"
      />

      {/* Pricing Section */}
      <section className="py-20 lg:py-28 bg-[var(--color-bg-primary)]">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            className="text-center max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[var(--color-text-primary)] mb-4">
              Affordable <span className="gradient-text">Pricing</span>
            </h2>
            <p className="text-lg text-[var(--color-text-secondary)] mb-8">
              Quality repairs at competitive prices. No hidden charges.
            </p>
            
            <div className="bg-[var(--color-bg-card)] rounded-2xl p-8 border border-[var(--color-border)] inline-block">
              <p className="text-[var(--color-text-secondary)] mb-2">Starting from</p>
              <p className="text-5xl font-bold gradient-text mb-4">₹500</p>
              <p className="text-[var(--color-text-tertiary)] text-sm mb-6">
                Final price depends on the type of repair needed
              </p>
              <Button
                variant="gradient"
                size="lg"
                onClick={() => navigate('/contact?service=repair')}
              >
                Get Custom Quote
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

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
              Need Your Device Fixed?
            </h2>
            <p className="text-lg text-white/80 mb-10">
              Don't let technical issues slow you down. Get professional repair services today!
            </p>
            <Button
              variant="secondary"
              size="lg"
              onClick={() => navigate('/contact?service=repair')}
            >
              Request Repair Service
            </Button>
          </motion.div>
        </div>
      </section>
    </PageTransition>
  );
};

export default HardwareRepairPage;
