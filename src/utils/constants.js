// Company Information
export const COMPANY = {
  name: 'Pratibhaviora Tech LLP',
  tagline: 'जहाँ प्रतिभा चनाती है तकनीक',
  taglineEnglish: 'Where Talent Creates Technology',
  description: 'Professional technology services company specializing in hardware repair and software development.',
  
  // Contact Information (Placeholders)
  contact: {
    address: 'Sector 10, Gurugram, Haryana - 122001, India',
    email: 'info@pratibhavioratech.com',
    supportEmail: 'support@pratibhavioratech.com',
    phone: '+91 98765 43210',
    altPhone: '+91 98765 43211',
    whatsapp: '+919876543210',
  },
  
  businessHours: {
    weekdays: 'Monday - Saturday: 10:00 AM - 7:00 PM',
    weekend: 'Sunday: Closed',
  },
  
  social: {
    facebook: 'https://facebook.com/pratibhavioratech',
    twitter: 'https://twitter.com/pratibhavioratech',
    linkedin: 'https://linkedin.com/company/pratibhavioratech',
    instagram: 'https://instagram.com/pratibhavioratech',
  },
};

// Navigation Links
export const NAV_LINKS = [
  { name: 'Home', path: '/' },
  { 
    name: 'Services', 
    path: '/services',
    children: [
      { name: 'Hardware Repair', path: '/services/hardware-repair' },
      { name: 'Software Development', path: '/services/software-development' },
    ]
  },
  { name: 'About', path: '/about' },
  { name: 'Contact', path: '/contact' },
];

// Services Data
export const SERVICES = {
  hardwareRepair: {
    title: 'Hardware Repair Services',
    description: 'Expert repair for laptops, monitors, desktops & all IT equipment',
    icon: 'wrench',
    image: 'https://images.unsplash.com/photo-1597872200969-2b65d56bd16b?w=800',
    path: '/services/hardware-repair',
    items: [
      {
        title: 'Laptop Repair',
        description: 'Screen replacement, keyboard repair, battery replacement, overheating issues, software troubleshooting',
        image: 'https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?w=600',
        services: [
          'Screen Replacement',
          'Keyboard Repair & Replacement',
          'Battery Replacement',
          'Overheating Solutions',
          'Motherboard Repair',
          'Data Recovery',
        ],
      },
      {
        title: 'Desktop Repair',
        description: 'Hardware upgrades, component replacement, troubleshooting, performance optimization',
        image: 'https://images.unsplash.com/photo-1587831990711-23ca6441447b?w=600',
        services: [
          'Hardware Upgrades',
          'Component Replacement',
          'Performance Optimization',
          'Virus Removal',
          'OS Installation',
          'Custom PC Building',
        ],
      },
      {
        title: 'Monitor Repair',
        description: 'Display issues, power problems, color correction, backlight repair',
        image: 'https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=600',
        services: [
          'Display Issues',
          'Power Problems',
          'Color Calibration',
          'Backlight Repair',
          'Panel Replacement',
          'Cable Issues',
        ],
      },
      {
        title: 'Other Equipment',
        description: 'Printers, scanners, networking devices, and all IT peripherals',
        image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600',
        services: [
          'Printer Repair',
          'Scanner Repair',
          'Network Device Setup',
          'Router Configuration',
          'Peripheral Repair',
          'Cable Management',
        ],
      },
    ],
    process: [
      { step: 1, title: 'Diagnosis', description: 'We thoroughly diagnose the issue with your device' },
      { step: 2, title: 'Quote', description: 'Receive a transparent and fair price estimate' },
      { step: 3, title: 'Repair', description: 'Expert technicians repair your device' },
      { step: 4, title: 'Testing', description: 'Rigorous quality testing before delivery' },
      { step: 5, title: 'Delivery', description: 'Get your device back in perfect condition' },
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
};

// Why Choose Us Benefits
export const BENEFITS = [
  {
    icon: 'users',
    title: 'Expert Technicians',
    description: 'Certified professionals with years of experience',
  },
  {
    icon: 'clock',
    title: 'Quick Turnaround',
    description: 'Fast repairs without compromising quality',
  },
  {
    icon: 'wallet',
    title: 'Affordable Pricing',
    description: 'Competitive rates with no hidden charges',
  },
  {
    icon: 'shield',
    title: 'Quality Assurance',
    description: 'Warranty on all repairs and services',
  },
  {
    icon: 'settings',
    title: 'Custom Solutions',
    description: 'Tailored solutions for your unique needs',
  },
  {
    icon: 'headphones',
    title: '24/7 Support',
    description: 'Round-the-clock customer assistance',
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
    name: 'Vikram Singh',
    designation: 'Founder & CEO',
    bio: 'Visionary leader with 10+ years in tech industry',
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400',
  },
  {
    name: 'Anil Verma',
    designation: 'CTO',
    bio: 'Expert in software architecture and cloud solutions',
    image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400',
  },
  {
    name: 'Meera Kapoor',
    designation: 'Head of Operations',
    bio: 'Ensuring smooth delivery and customer satisfaction',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400',
  },
  {
    name: 'Rahul Joshi',
    designation: 'Lead Developer',
    bio: 'Full-stack developer passionate about clean code',
    image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400',
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
