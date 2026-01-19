import { forwardRef } from 'react';
import { motion } from 'framer-motion';

const Input = forwardRef(({
  label,
  error,
  type = 'text',
  className = '',
  containerClassName = '',
  ...props
}, ref) => {
  const baseStyles = `
    w-full px-4 py-3 rounded-lg
    bg-[var(--color-bg-secondary)]
    border border-[var(--color-border)]
    text-[var(--color-text-primary)]
    placeholder:text-[var(--color-text-tertiary)]
    transition-all duration-200
    focus:outline-none focus:border-[var(--color-primary)]
    focus:ring-2 focus:ring-[var(--color-primary)]/20
  `;

  const errorStyles = error 
    ? 'border-[var(--color-error)] focus:border-[var(--color-error)] focus:ring-[var(--color-error)]/20' 
    : '';

  const inputElement = type === 'textarea' ? (
    <motion.textarea
      ref={ref}
      className={`${baseStyles} ${errorStyles} ${className} min-h-[120px] resize-y`}
      whileFocus={{ scale: 1.01 }}
      {...props}
    />
  ) : type === 'select' ? (
    <motion.select
      ref={ref}
      className={`${baseStyles} ${errorStyles} ${className} cursor-pointer`}
      whileFocus={{ scale: 1.01 }}
      {...props}
    />
  ) : (
    <motion.input
      ref={ref}
      type={type}
      className={`${baseStyles} ${errorStyles} ${className}`}
      whileFocus={{ scale: 1.01 }}
      {...props}
    />
  );

  return (
    <div className={`space-y-1.5 ${containerClassName}`}>
      {label && (
        <label className="block text-sm font-medium text-[var(--color-text-primary)]">
          {label}
          {props.required && <span className="text-[var(--color-error)] ml-1">*</span>}
        </label>
      )}
      
      {inputElement}
      
      {error && (
        <motion.p 
          className="text-sm text-[var(--color-error)]"
          initial={{ opacity: 0, y: -5 }}
          animate={{ opacity: 1, y: 0 }}
        >
          {error}
        </motion.p>
      )}
    </div>
  );
});

Input.displayName = 'Input';

export default Input;
