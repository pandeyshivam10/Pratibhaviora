import { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';
import PageTransition from '../components/common/PageTransition';
import { COMPANY, STATS, TEAM } from '../utils/constants';

// Animated Counter Component
const AnimatedCounter = ({ value, suffix = '', duration = 2 }) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    const start = 0;
    const end = value;
    const incrementTime = (duration * 1000) / end;

    let current = start;
    const timer = setInterval(() => {
      current += 1;
      setCount(current);
      if (current >= end) {
        clearInterval(timer);
      }
    }, Math.max(incrementTime, 10));

    return () => clearInterval(timer);
  }, [isVisible, value, duration]);

  return (
    <span ref={ref}>
      {count}{suffix}
    </span>
  );
};

const About = () => {
  return (
    <PageTransition>
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1920"
            alt="Team collaboration"
            className="w-full h-full object-cover"
          />
          <div
            className="absolute inset-0"
            style={{ background: 'var(--gradient-hero)' }}
          />
        </div>

        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <motion.div
            className="text-center max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <motion.h1
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              About {COMPANY.name}
            </motion.h1>
            <motion.p
              className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              "{COMPANY.tagline}" - Bridging the gap between technology and innovation
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* About Us Section */}
      <section className="py-20 lg:py-28 bg-[var(--color-bg-primary)]">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h2
              className="text-3xl md:text-4xl font-bold text-[var(--color-text-primary)] mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              About <span className="gradient-text">Us</span>
            </motion.h2>
            <motion.div
              className="space-y-6 text-[var(--color-text-secondary)] text-lg leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <p>
                Founded with a vision to democratize technology services, Pratibhaviora Tech LLP
                has grown from a small repair shop to a comprehensive technology solutions provider.
                Our journey began with a simple belief: quality technology services should be
                accessible to everyone.
              </p>
              <p>
                Today, we serve businesses and individuals across the region, offering everything
                from hardware repairs to custom software development. Our team of certified
                professionals brings years of experience and a passion for technology to every project.
              </p>
              <p>
                We believe in building lasting relationships with our clients through transparency,
                quality work, and exceptional customer service. When you choose Pratibhaviora,
                you're not just getting a service provider – you're getting a technology partner.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Founder Section */}
      <section className="py-20 lg:py-28 bg-[var(--color-bg-secondary)]">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-text-primary)] mb-6">
                Our <span className="gradient-text">Founder</span>
              </h2>
              <div className="space-y-4 text-[var(--color-text-secondary)] leading-relaxed">
                <p>
                  Mithlesh Kr Pandey is the Founder of Pratibhaviora Tech LLP, a highly experienced professional with over 15+ years of expertise in Service Operations, Customer Experience, and Strategic Leadership. With a strong background in managing large-scale service networks and operations, he has consistently delivered results by building high-performing teams and driving customer-centric growth.
                </p>
                <p>
                  Throughout his career, he has held key leadership roles such as National Head – Service & Operations, Regional Service Manager, and Area Service Manager, where he successfully managed service strategy planning, operational execution, customer satisfaction, and profitability across multiple regions.
                </p>
                <p>
                  His leadership style focuses on innovation, excellence, and continuous improvement, ensuring that every service process meets high standards and delivers outstanding customer experience. With deep knowledge in service management, technical operations, and process optimization, he plays a crucial role in shaping Pratibhaviora Tech LLP’s vision and long-term success.
                </p>
                <p>
                  At Pratibhaviora Tech LLP, Mithlesh Kr Pandey is committed to creating a company culture driven by quality, trust, efficiency, and customer satisfaction, while leading the organization towards sustainable growth and strong market presence.
                </p>
              </div>
            </motion.div>

            <motion.div
              className="relative flex justify-center"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="relative max-w-sm w-full mx-auto">
                <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl border border-[var(--color-border)]">
                  <img
                    src={TEAM[0].image}
                    alt={TEAM[0].name}
                    className="w-full h-full object-cover object-top"
                  />
                </div>
                <div className="absolute -bottom-6 -right-6 bg-[var(--color-bg-card)] rounded-xl p-6 shadow-xl border border-[var(--color-border)] hidden md:block">
                  <p className="text-4xl font-bold gradient-text">15+</p>
                  <p className="text-[var(--color-text-secondary)] text-sm">Years of Experience</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="py-20 lg:py-28 bg-[var(--color-bg-primary)]">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            className="text-center max-w-3xl mx-auto mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[var(--color-text-primary)] mb-4">
              What <span className="gradient-text">Drives Us</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Our Mission',
                description: 'To provide world-class technology services that empower businesses and individuals to achieve their goals through innovative solutions and exceptional support.',
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10"></circle>
                    <circle cx="12" cy="12" r="6"></circle>
                    <circle cx="12" cy="12" r="2"></circle>
                  </svg>
                ),
              },
              {
                title: 'Our Vision',
                description: 'To be the most trusted technology partner in the region, known for our commitment to quality, innovation, and customer satisfaction.',
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                    <circle cx="12" cy="12" r="3"></circle>
                  </svg>
                ),
              },
              {
                title: 'Our Values',
                description: 'Integrity, Excellence, Innovation, Customer Focus, and Teamwork form the foundation of everything we do at Pratibhaviora.',
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                  </svg>
                ),
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                className="bg-[var(--color-bg-card)] rounded-2xl p-8 border border-[var(--color-border)] text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5, boxShadow: 'var(--shadow-lg)' }}
              >
                <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-secondary)] flex items-center justify-center text-white mx-auto mb-6">
                  {item.icon}
                </div>
                <h3 className="text-xl font-semibold text-[var(--color-text-primary)] mb-4">
                  {item.title}
                </h3>
                <p className="text-[var(--color-text-secondary)] leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 lg:py-28 bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-secondary)]">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12">
            {STATS.map((stat, index) => (
              <motion.div
                key={index}
                className="text-center"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <p className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-2">
                  <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                </p>
                <p className="text-white/80">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 lg:py-28 bg-[var(--color-bg-primary)]">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            className="text-center max-w-3xl mx-auto mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[var(--color-text-primary)] mb-4">
              Meet Our <span className="gradient-text">Team</span>
            </h2>
            <p className="text-lg text-[var(--color-text-secondary)]">
              The talented people behind our success
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {TEAM.slice(1).map((member, index) => (
              <motion.div
                key={index}
                className="group bg-[var(--color-bg-card)] rounded-2xl overflow-hidden border border-[var(--color-border)]"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5, boxShadow: 'var(--shadow-lg)' }}
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                </div>
                <div className="p-6 text-center">
                  <h3 className="text-xl font-semibold text-[var(--color-text-primary)] mb-1">
                    {member.name}
                  </h3>
                  <p className="text-[var(--color-primary)] font-medium mb-3 text-xs md:text-sm whitespace-nowrap overflow-hidden text-ellipsis px-2" title={member.designation}>
                    {member.designation}
                  </p>
                  <p className="text-sm text-[var(--color-text-secondary)]">
                    {member.bio}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </PageTransition>
  );
};

export default About;
