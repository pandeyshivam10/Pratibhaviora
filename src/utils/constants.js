import member1 from '../assets/1.png';
import member2 from '../assets/2.png';
import member3 from '../assets/3.png';
import member4 from '../assets/4.png';
import member5 from '../assets/5.png';

// Company Information
export const COMPANY = {
  name: 'Pratibhaviora Tech LLP',
  tagline: 'Your Trusted Technology Partner',
  taglineEnglish: 'Technology That Works as Hard as You Do.',
  description: 'PRATIBHAVIORA TECH LLP is a professionally managed technology service organization providing complete technical support across Information Technology infrastructure, consumer home appliances, and modern software development.',
  subDescription: 'When your technology stops, business stops. We are here to ensure that never happens.',
  motto: 'Technology • Service • Innovation',

  // Contact Information
  contact: {
    address: 'Sarnath, Varanasi Uttar Pradesh 221007 | 602 6th floor, madhuban building, 55, Nehru Place, New Delhi, Delhi 110019',
    email: 'pratibhaviora@gmail.com',
    supportEmail: 'pratibhaviora@gmail.com',
    phone: '+91-9838644528',
    altPhone: '+91-9838644528',
    phone3: '+91-7905492457',
    whatsapp: '+919838644528',
    website: 'www.pratibhaviora.com',
  },

  businessHours: {
    weekdays: 'Monday - Saturday: 9:00 AM - 7:00 PM',
    weekend: 'Sunday: Emergency Support Only',
  },

  social: {
    facebook: 'https://facebook.com/pratibhaviora',
    twitter: 'https://twitter.com/pratibhaviora',
    linkedin: 'https://linkedin.com/company/pratibhaviora',
    instagram: 'https://instagram.com/pratibhaviora',
  },

  // Vision & Mission
  vision: 'To become India\'s most trusted technology and service brand, where customers rely on us without hesitation for fast, professional, and consistent quality service nationwide.',
  mission: [
    'Deliver quick solutions to reduce downtime',
    'Use skilled technicians and modern tools',
    'Provide affordable pricing and transparent communication',
    'Ensure customer satisfaction after every job',
  ],
  coreValues: [
    { title: 'Integrity', description: 'Honest and ethical business practices' },
    { title: 'Quality', description: 'High standards in every service' },
    { title: 'Speed', description: 'Quick response and closure' },
    { title: 'Commitment', description: 'Taking full responsibility' },
    { title: 'Innovation', description: 'Using modern technology' },
    { title: 'Customer First', description: 'Client satisfaction is our priority' },
  ],
};

// Navigation Links
export const NAV_LINKS = [
  { name: 'Home', path: '/' },
  { name: 'About Us', path: '/about' },
  {
    name: 'Services',
    path: '/services',
    children: [
      { name: 'IT Infrastructure', path: '/services/hardware-repair' },
      { name: 'Home Appliances', path: '/services/home-appliances' },
      { name: 'Software Development', path: '/services/software-development' },
    ]
  },
  { name: 'Contact Us', path: '/contact' },
];

// Services Data
export const SERVICES = {
  hardwareRepair: {
    title: 'IT Infrastructure Services',
    description: 'Reduce downtime and improve productivity with expert IT support',
    tagline: "Don't replace it if we can fix it.",
    subDescription: 'We focus on extending the life of your existing assets, saving you significant capital in the long run.',
    icon: 'wrench',
    image: 'https://images.unsplash.com/photo-1597872200969-2b65d56bd16b?w=800',
    path: '/services/hardware-repair',
    items: [
      {
        title: 'Desktop & Laptop Support',
        description: 'Motherboard repair, RAM/SSD replacement, OS installation, virus removal, performance optimization, data backup, and troubleshooting',
        image: 'https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?w=600',
        services: [
          'Motherboard Repair',
          'RAM/SSD Replacement',
          'OS Installation',
          'Virus Removal',
          'Performance Optimization',
          'Data Backup & Recovery',
        ],
      },
      {
        title: 'Printer & Networking',
        description: 'Printer installation and repair, network cabling and configuration, router and switch setup, Wi-Fi troubleshooting',
        image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600',
        services: [
          'Printer Installation & Repair',
          'Network Cabling',
          'Router & Switch Setup',
          'Wi-Fi Troubleshooting',
          'Network Configuration',
          'Cable Management',
        ],
      },
      {
        title: 'CCTV Services',
        description: 'CCTV installation, monitoring setup, and maintenance for complete security solutions',
        image: 'https://images.unsplash.com/photo-1557597774-9d273605dfa9?w=600',
        services: [
          'CCTV Installation',
          'Monitoring Setup',
          'Camera Maintenance',
          'DVR/NVR Configuration',
          'Remote Access Setup',
          'Security Consultation',
        ],
      },
      {
        title: 'IT AMC & Helpdesk',
        description: 'Annual Maintenance Contracts for complete IT support throughout the year',
        image: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?w=600',
        services: [
          'Fixed Annual Cost',
          'Priority Support',
          'Preventive Maintenance',
          'Unlimited Breakdown Calls',
          'Less Downtime',
          'Better Asset Management',
        ],
      },
    ],
    process: [
      { step: 1, title: 'Complaint', description: 'Register your issue with our support team' },
      { step: 2, title: 'Diagnosis', description: 'Expert technicians diagnose the problem' },
      { step: 3, title: 'Quote', description: 'Transparent pricing with no hidden costs' },
      { step: 4, title: 'Repair', description: 'Quick and quality repair service' },
      { step: 5, title: 'Closure', description: 'Testing and delivery with warranty' },
    ],
  },
  softwareDevelopment: {
    title: 'Software Development',
    description: 'Custom web apps, mobile apps & enterprise solutions',
    icon: 'code',
    image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800',
    path: '/services/software-development',
    items: [
      {
        title: 'Web Development',
        description: 'Modern, responsive websites and web applications',
        image: 'https://images.unsplash.com/photo-1547658719-da2b51169166?w=600',
        technologies: ['React', 'Next.js', 'Node.js', 'Full-stack Solutions'],
        services: [
          'E-commerce Websites',
          'Corporate Websites',
          'Content Management Systems',
          'Web Applications',
          'API Development',
          'Database Design',
        ],
      },
      {
        title: 'Mobile App Development',
        description: 'Native and cross-platform mobile applications',
        image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600',
        technologies: ['React Native', 'iOS', 'Android', 'Cross-platform'],
        services: [
          'iOS App Development',
          'Android App Development',
          'Cross-platform Apps',
          'App Maintenance',
          'App Store Optimization',
          'Push Notifications',
        ],
      },
      {
        title: 'Custom Software',
        description: 'Tailored business solutions for your unique needs',
        image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600',
        technologies: ['Python', 'Java', '.NET', 'Cloud Solutions'],
        services: [
          'ERP Systems',
          'CRM Solutions',
          'Inventory Management',
          'Automation Tools',
          'Data Analytics',
          'Cloud Migration',
        ],
      },
      {
        title: 'UI/UX Design',
        description: 'Beautiful, intuitive user experiences',
        image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600',
        technologies: ['Figma', 'Adobe XD', 'Prototyping', 'Design Systems'],
        services: [
          'User Research',
          'Wireframing',
          'Prototyping',
          'Visual Design',
          'Design Systems',
          'Usability Testing',
        ],
      },
    ],
    techStack: [
      { name: 'React', category: 'Frontend' },
      { name: 'Next.js', category: 'Frontend' },
      { name: 'Vue.js', category: 'Frontend' },
      { name: 'Node.js', category: 'Backend' },
      { name: 'Python', category: 'Backend' },
      { name: 'Java', category: 'Backend' },
      { name: 'MongoDB', category: 'Database' },
      { name: 'PostgreSQL', category: 'Database' },
      { name: 'AWS', category: 'Cloud' },
      { name: 'Docker', category: 'DevOps' },
      { name: 'React Native', category: 'Mobile' },
      { name: 'Flutter', category: 'Mobile' },
    ],
    process: [
      { step: 1, title: 'Discovery', description: 'Understanding your requirements and goals' },
      { step: 2, title: 'Planning', description: 'Creating detailed project roadmap' },
      { step: 3, title: 'Design', description: 'Crafting beautiful user interfaces' },
      { step: 4, title: 'Development', description: 'Building robust, scalable solutions' },
      { step: 5, title: 'Testing', description: 'Ensuring quality and performance' },
      { step: 6, title: 'Deployment', description: 'Launching your product to the world' },
      { step: 7, title: 'Support', description: 'Ongoing maintenance and updates' },
    ],
  },
  homeAppliances: {
    title: 'Home Appliance Services',
    description: 'Expert care for your daily necessities',
    tagline: 'Same-day or next-day service',
    subDescription: 'We provide doorstep repair and maintenance for consumer appliances for residential and retail customers. Our technicians carry tools and genuine spare parts to ensure quick repairs.',
    icon: 'home',
    image: 'https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=800',
    path: '/services/home-appliances',
    items: [
      {
        title: 'LED/LCD/Smart TV Repair',
        description: 'Expert repair for all types of televisions including LED, LCD, OLED, and Smart TVs',
        image: 'https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?w=600',
        services: [
          'Display Panel Repair',
          'Backlight Issues',
          'Power Problems',
          'Smart TV Software',
          'Sound Issues',
          'Remote Pairing',
        ],
      },
      {
        title: 'Washing Machine Servicing',
        description: 'Complete repair and maintenance for all washing machine brands and models',
        image: 'https://images.unsplash.com/photo-1626806787461-102c1bfaaea1?w=600',
        services: [
          'Drum Issues',
          'Motor Repair',
          'Water Leakage',
          'Spin Problems',
          'PCB Repair',
          'Regular Servicing',
        ],
      },
      {
        title: 'Refrigerator Repair',
        description: 'Gas charging, compressor repair, and complete refrigerator maintenance',
        image: 'https://images.unsplash.com/photo-1571175443880-49e1d25b2bc5?w=600',
        services: [
          'Gas Charging',
          'Compressor Repair',
          'Thermostat Issues',
          'Ice Maker Repair',
          'Door Seal Replace',
          'Cooling Problems',
        ],
      },
      {
        title: 'AC Installation & Maintenance',
        description: 'Installation, servicing, and repair for all AC types',
        image: 'https://plus.unsplash.com/premium_photo-1683134512538-7b390d0adc9e?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        services: [
          'AC Installation',
          'Gas Refilling',
          'Compressor Repair',
          'Regular Servicing',
          'PCB Repair',
          'Cooling Issues',
        ],
      },
      {
        title: 'Kitchen Appliances',
        description: 'Microwave, chimney, oven, and other kitchen appliance repairs',
        image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600',
        services: [
          'Microwave Repair',
          'Chimney Servicing',
          'Oven Repair',
          'Mixer Grinder',
          'Induction Repair',
          'Water Purifier',
        ],
      },
    ],
    process: [
      { step: 1, title: 'Call/Book', description: 'Contact us or book online' },
      { step: 2, title: 'Technician Visit', description: 'Expert visits your location' },
      { step: 3, title: 'Diagnosis', description: 'Identify the issue with your appliance' },
      { step: 4, title: 'Repair', description: 'Quick repair with genuine parts' },
      { step: 5, title: 'Testing', description: 'Thorough testing before handover' },
    ],
  },
};

// Why Choose Us - The Pratibhaviora Advantage
export const BENEFITS = [
  {
    icon: 'cpu',
    title: 'Technical Depth',
    description: 'We understand the electronics inside the box. Our diagnosis is accurate, reducing trial-and-error costs.',
  },
  {
    icon: 'clock',
    title: 'Response Time',
    description: 'We know downtime costs money. Our logistics network ensures we reach your site fast.',
  },
  {
    icon: 'shield',
    title: 'Genuine Spares Only',
    description: 'We never compromise on quality. Original or high-grade compatible parts with warranty support.',
  },
  {
    icon: 'headphones',
    title: 'Human Support',
    description: 'No automated bots. When you call us, you talk to a human who understands technical issues.',
  },
  {
    icon: 'wallet',
    title: 'Transparent Pricing',
    description: 'No hidden costs. Clear, upfront pricing on every service.',
  },
  {
    icon: 'users',
    title: 'Skilled Technicians',
    description: 'Certified engineers with years of experience in IT and home appliance repair.',
  },
];

// Testimonials
export const TESTIMONIALS = [
  {
    id: 1,
    name: 'Rajesh Kumar',
    designation: 'Business Owner',
    company: 'Kumar Enterprises',
    rating: 5,
    review: 'Excellent service! They fixed my laptop in just 2 hours. The team is professional and the pricing is very reasonable. Highly recommended!',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200',
  },
  {
    id: 2,
    name: 'Priya Sharma',
    designation: 'Startup Founder',
    company: 'TechStart Solutions',
    rating: 5,
    review: 'Pratibhaviora built our entire web application from scratch. The quality of work exceeded our expectations. Great communication throughout the project.',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200',
  },
  {
    id: 3,
    name: 'Amit Patel',
    designation: 'IT Manager',
    company: 'Global Corp',
    rating: 5,
    review: 'We have been using their hardware repair services for our office equipment. Fast, reliable, and cost-effective. They are our go-to tech partners.',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200',
  },
];

// Statistics
export const STATS = [
  { value: 500, suffix: '+', label: 'Repairs Completed' },
  { value: 100, suffix: '+', label: 'Software Projects' },
  { value: 50, suffix: '+', label: 'Happy Clients' },
  { value: 5, suffix: '+', label: 'Years Experience' },
];

// Team Members
export const TEAM = [
  {
    name: 'Mithlesh Kr Pandey',
    designation: 'Founder & CEO',
    bio: 'Visionary leader driving innovation and business growth',
    image: member1,
  },
  {
    name: 'Sundaram Pandey',
    designation: 'Head of Operations (IIT)',
    bio: 'Managing operations and ensuring smooth execution across teams',
    image: member3,
  },
  {
    name: 'Shivam Pandey',
    designation: 'CTO (Engineer)',
    bio: 'Leading technology, architecture, and product development',
    image: member2,
  },
  {
    name: 'Ashutosh Singh',
    designation: 'Managing Director',
    bio: 'Driving company growth through strategic planning and operational excellence',
    image: member5,
  },
  {
    name: 'Satyam Pandey',
    designation: 'Managing Director (Tech)',
    bio: 'Leading technology initiatives and developing scalable software solutions',
    image: member4,
  },
];

// Portfolio Projects (Placeholder)
export const PORTFOLIO = [
  {
    id: 1,
    title: 'E-Commerce Platform',
    category: 'Web Development',
    description: 'Full-featured online store with payment integration',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600',
  },
  {
    id: 2,
    title: 'Healthcare App',
    category: 'Mobile Development',
    description: 'Patient management and appointment booking system',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=600',
  },
  {
    id: 3,
    title: 'Inventory System',
    category: 'Custom Software',
    description: 'Real-time inventory tracking for retail chain',
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=600',
  },
  {
    id: 4,
    title: 'Restaurant App',
    category: 'Mobile Development',
    description: 'Food ordering and delivery management system',
    image: 'https://images.unsplash.com/photo-1476224203421-9ac39bcb3327?w=600',
  },
];

// Service Models - How We Work
export const SERVICE_MODELS = [
  {
    title: 'On-Demand Breakdown Support',
    bestFor: 'Small offices or individuals',
    description: 'You face an issue → You call us → We visit and fix it',
    icon: 'phone',
    features: [
      'Transparent, per-visit pricing',
      'No hidden costs',
      'Quick response time',
      'Pay only when you need service',
    ],
  },
  {
    title: 'Annual Maintenance Contracts (AMC)',
    bestFor: 'Corporate offices, Schools, and Institutions',
    description: 'The "Peace of Mind" Plan - For a fixed annual fee, we take complete care of your IT assets',
    icon: 'file-text',
    features: [
      'Unlimited breakdown calls',
      'Preventive Maintenance Visits (quarterly)',
      'Priority response time',
      'Standby backup equipment (optional)',
      'Fixed annual cost',
      'Better asset management',
    ],
  },
];

// Why Clients Trust Us
export const WHY_TRUST_US = [
  'Professional approach & quick response time',
  'Skilled and certified engineers',
  'Transparent pricing & quality assurance',
  'Long-term support and customized solutions',
];
