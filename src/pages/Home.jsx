import PageTransition from '../components/common/PageTransition';
import { COMPANY, STATS, TEAM } from '../utils/constants';
import useSEO from '../hooks/useSEO';
import Hero from '../components/home/Hero';
import Services from '../components/home/Services';
import WhyChooseUs from '../components/home/WhyChooseUs';
import Testimonials from '../components/home/Testimonials';
import CTASection from '../components/home/CTASection';

const Home = () => {
  useSEO({
    title: 'Home',
    description: 'Pratibhaviora Tech LLP - Your trusted partner for IT infrastructure, home appliance repair, and custom software development in Varanasi and New Delhi.'
  });
  return (
    <PageTransition>
      <Hero />
      <Services />
      <WhyChooseUs />
      <Testimonials />
      <CTASection />
    </PageTransition>
  );
};

export default Home;
