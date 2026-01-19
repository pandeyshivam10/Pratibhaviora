import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { motion } from 'framer-motion';
import PageTransition from '../components/common/PageTransition';
import Button from '../components/common/Button';
import Input from '../components/common/Input';
import { COMPANY } from '../utils/constants';
import { submitContactForm } from '../utils/api';

// Icons
const MapPinIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
    <circle cx="12" cy="10" r="3"></circle>
  </svg>
);

const PhoneIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
  </svg>
);

const MailIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
    <polyline points="22,6 12,13 2,6"></polyline>
  </svg>
);

const ClockIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10"></circle>
    <polyline points="12 6 12 12 16 14"></polyline>
  </svg>
);

const Contact = () => {
  const [searchParams] = useSearchParams();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors },
  } = useForm();

  // Pre-select service from URL params
  useEffect(() => {
    const service = searchParams.get('service');
    if (service === 'repair') {
      setValue('service', 'hardware');
    } else if (service === 'development') {
      setValue('service', 'software');
    }
  }, [searchParams, setValue]);

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const response = await submitContactForm(data);
      setSubmitStatus({ type: 'success', message: response.message });
      reset();
    } catch (error) {
      setSubmitStatus({ 
        type: 'error', 
        message: 'Something went wrong. Please try again later.' 
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: <MapPinIcon />,
      title: 'Visit Us',
      content: COMPANY.contact.address,
    },
    {
      icon: <PhoneIcon />,
      title: 'Call Us',
      content: (
        <>
          <a href={`tel:${COMPANY.contact.phone}`} className="hover:text-[var(--color-primary)] transition-colors">
            {COMPANY.contact.phone}
          </a>
          <br />
          <a href={`tel:${COMPANY.contact.altPhone}`} className="hover:text-[var(--color-primary)] transition-colors">
            {COMPANY.contact.altPhone}
          </a>
        </>
      ),
    },
    {
      icon: <MailIcon />,
      title: 'Email Us',
      content: (
        <>
          <a href={`mailto:${COMPANY.contact.email}`} className="hover:text-[var(--color-primary)] transition-colors">
            {COMPANY.contact.email}
          </a>
          <br />
          <a href={`mailto:${COMPANY.contact.supportEmail}`} className="hover:text-[var(--color-primary)] transition-colors">
            {COMPANY.contact.supportEmail}
          </a>
        </>
      ),
    },
    {
      icon: <ClockIcon />,
      title: 'Business Hours',
      content: (
        <>
          {COMPANY.businessHours.weekdays}
          <br />
          {COMPANY.businessHours.weekend}
        </>
      ),
    },
  ];

  return (
    <PageTransition>
      {/* Hero Section */}
      <section className="relative min-h-[40vh] flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1423666639041-f56000c27a9a?w=1920"
            alt="Contact us"
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
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
              Get In Touch
            </h1>
            <p className="text-lg md:text-xl text-white/80">
              We'd love to hear from you. Let's discuss how we can help.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 lg:py-28 bg-[var(--color-bg-primary)]">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl font-bold text-[var(--color-text-primary)] mb-6">
                Send Us a Message
              </h2>
              <p className="text-[var(--color-text-secondary)] mb-8">
                Fill out the form below and we'll get back to you as soon as possible.
              </p>

              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <Input
                    label="Full Name"
                    placeholder="John Doe"
                    {...register('name', { required: 'Name is required' })}
                    error={errors.name?.message}
                    required
                  />
                  <Input
                    label="Email Address"
                    type="email"
                    placeholder="john@example.com"
                    {...register('email', { 
                      required: 'Email is required',
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: 'Invalid email address',
                      },
                    })}
                    error={errors.email?.message}
                    required
                  />
                </div>

                <div className="grid sm:grid-cols-2 gap-6">
                  <Input
                    label="Phone Number"
                    type="tel"
                    placeholder="+91 98765 43210"
                    {...register('phone', { required: 'Phone is required' })}
                    error={errors.phone?.message}
                    required
                  />
                  <div className="space-y-1.5">
                    <label className="block text-sm font-medium text-[var(--color-text-primary)]">
                      Service Type <span className="text-[var(--color-error)]">*</span>
                    </label>
                    <select
                      className="w-full px-4 py-3 rounded-lg bg-[var(--color-bg-secondary)] border border-[var(--color-border)] text-[var(--color-text-primary)] focus:outline-none focus:border-[var(--color-primary)] focus:ring-2 focus:ring-[var(--color-primary)]/20 cursor-pointer"
                      {...register('service', { required: 'Please select a service' })}
                    >
                      <option value="">Select a service</option>
                      <option value="hardware">Hardware Repair</option>
                      <option value="software">Software Development</option>
                      <option value="general">General Inquiry</option>
                    </select>
                    {errors.service && (
                      <p className="text-sm text-[var(--color-error)]">{errors.service.message}</p>
                    )}
                  </div>
                </div>

                <Input
                  label="Message"
                  type="textarea"
                  placeholder="Tell us about your project or inquiry..."
                  {...register('message', { required: 'Message is required' })}
                  error={errors.message?.message}
                  required
                />

                {submitStatus && (
                  <motion.div
                    className={`p-4 rounded-lg ${
                      submitStatus.type === 'success'
                        ? 'bg-[var(--color-success)]/10 text-[var(--color-success)]'
                        : 'bg-[var(--color-error)]/10 text-[var(--color-error)]'
                    }`}
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                  >
                    {submitStatus.message}
                  </motion.div>
                )}

                <Button
                  type="submit"
                  variant="gradient"
                  size="lg"
                  isLoading={isSubmitting}
                  className="w-full sm:w-auto"
                >
                  Send Message
                </Button>
              </form>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl font-bold text-[var(--color-text-primary)] mb-6">
                Contact Information
              </h2>
              <p className="text-[var(--color-text-secondary)] mb-8">
                Reach out to us through any of the following channels.
              </p>

              <div className="space-y-6 mb-12">
                {contactInfo.map((item, index) => (
                  <motion.div
                    key={index}
                    className="flex items-start gap-4 p-4 rounded-xl bg-[var(--color-bg-secondary)] border border-[var(--color-border)]"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                  >
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-secondary)] flex items-center justify-center text-white flex-shrink-0">
                      {item.icon}
                    </div>
                    <div>
                      <h3 className="font-semibold text-[var(--color-text-primary)] mb-1">
                        {item.title}
                      </h3>
                      <p className="text-[var(--color-text-secondary)] text-sm">
                        {item.content}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Map Placeholder */}
              <div className="rounded-2xl overflow-hidden border border-[var(--color-border)] h-64">
                <img
                  src="https://images.unsplash.com/photo-1524661135-423995f22d0b?w=800"
                  alt="Map location"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Social Links */}
              <div className="mt-8">
                <h3 className="font-semibold text-[var(--color-text-primary)] mb-4">
                  Follow Us
                </h3>
                <div className="flex gap-4">
                  {[
                    { name: 'Facebook', href: COMPANY.social.facebook },
                    { name: 'Twitter', href: COMPANY.social.twitter },
                    { name: 'LinkedIn', href: COMPANY.social.linkedin },
                    { name: 'Instagram', href: COMPANY.social.instagram },
                  ].map((social) => (
                    <motion.a
                      key={social.name}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 rounded-lg bg-[var(--color-bg-secondary)] text-[var(--color-text-secondary)] hover:bg-[var(--color-primary)] hover:text-white transition-colors text-sm font-medium"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {social.name}
                    </motion.a>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </PageTransition>
  );
};

export default Contact;
