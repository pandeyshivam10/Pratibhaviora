import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import PageTransition from '../components/common/PageTransition';
import ServiceHero from '../components/services/ServiceHero';
import ServiceGrid from '../components/services/ServiceGrid';
import ProcessTimeline from '../components/services/ProcessTimeline';
import Button from '../components/common/Button';
import { SERVICES } from '../utils/constants';

const HomeAppliancePage = () => {
    const navigate = useNavigate();
    const { homeAppliances } = SERVICES;

    return (
        <PageTransition>
            {/* Hero Section */}
            <ServiceHero
                title={homeAppliances.title}
                subtitle="Expert care for your daily necessities. Same-day or next-day doorstep service with genuine spare parts."
                image="https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=1920"
            />

            {/* Services Grid */}
            <ServiceGrid services={homeAppliances.items} />

            {/* Process Timeline */}
            <ProcessTimeline
                steps={homeAppliances.process}
                title="Our Service Process"
            />

            {/* Features Section */}
            <section className="py-20 lg:py-28 bg-[var(--color-bg-secondary)]">
                <div className="container mx-auto px-4 lg:px-8">
                    <motion.div
                        className="text-center max-w-3xl mx-auto mb-12"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[var(--color-text-primary)] mb-4">
                            Why Choose <span className="gradient-text">Us?</span>
                        </h2>
                        <p className="text-lg text-[var(--color-text-secondary)]">
                            Doorstep repair with genuine parts and expert technicians
                        </p>
                    </motion.div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[
                            { icon: '🏠', title: 'Doorstep Service', desc: 'We come to your home' },
                            { icon: '⚡', title: 'Same Day Service', desc: 'Quick turnaround time' },
                            { icon: '🔧', title: 'Genuine Parts', desc: 'Original spare parts only' },
                            { icon: '✅', title: 'Warranty', desc: 'Service guarantee' },
                        ].map((feature, index) => (
                            <motion.div
                                key={index}
                                className="bg-[var(--color-bg-card)] p-6 rounded-xl border border-[var(--color-border)] text-center"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                            >
                                <div className="text-4xl mb-4">{feature.icon}</div>
                                <h3 className="font-bold text-[var(--color-text-primary)] mb-2">{feature.title}</h3>
                                <p className="text-sm text-[var(--color-text-secondary)]">{feature.desc}</p>
                            </motion.div>
                        ))}
                    </div>
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
                            Appliance Not Working?
                        </h2>
                        <p className="text-lg text-white/80 mb-10">
                            Book a doorstep service now. Our expert technicians will fix it in no time!
                        </p>
                        <Button
                            variant="secondary"
                            size="lg"
                            onClick={() => navigate('/contact?service=appliance')}
                        >
                            Book Service Now
                        </Button>
                    </motion.div>
                </div>
            </section>
        </PageTransition>
    );
};

export default HomeAppliancePage;
