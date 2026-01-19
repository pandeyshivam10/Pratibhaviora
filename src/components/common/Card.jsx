import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const Card = ({
  children,
  image,
  icon,
  title,
  description,
  onClick,
  to,
  className = '',
  hover = true,
  variant = 'default',
  ...props
}) => {
  const navigate = useNavigate();

  const handleClick = () => {
    if (to) {
      navigate(to);
    } else if (onClick) {
      onClick();
    }
  };

  const baseStyles = `
    rounded-xl overflow-hidden
    bg-[var(--color-bg-card)]
    border border-[var(--color-border)]
    transition-all duration-300
  `;

  const hoverStyles = hover ? 'cursor-pointer' : '';

  const variants = {
    default: '',
    elevated: 'shadow-lg',
    glass: 'glass',
  };

  return (
    <motion.div
      className={`${baseStyles} ${hoverStyles} ${variants[variant]} ${className}`}
      onClick={handleClick}
      whileHover={hover ? { 
        scale: 1.02, 
        boxShadow: 'var(--shadow-xl)',
        y: -5,
      } : {}}
      whileTap={hover ? { scale: 0.98 } : {}}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.3 }}
      {...props}
    >
      {image && (
        <div className="relative h-48 overflow-hidden">
          <img 
            src={image} 
            alt={title || 'Card image'} 
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
        </div>
      )}
      
      <div className="p-6">
        {icon && (
          <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-secondary)] flex items-center justify-center text-white mb-4">
            {icon}
          </div>
        )}
        
        {title && (
          <h3 className="text-xl font-semibold text-[var(--color-text-primary)] mb-2">
            {title}
          </h3>
        )}
        
        {description && (
          <p className="text-[var(--color-text-secondary)] leading-relaxed">
            {description}
          </p>
        )}
        
        {children}
      </div>
    </motion.div>
  );
};

export default Card;
