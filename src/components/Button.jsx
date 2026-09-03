import { Link } from 'react-router-dom';

const baseStyles =
  'inline-flex items-center justify-center gap-2 font-semibold rounded-full transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 select-none';

const sizes = {
  sm: 'px-5 py-2.5 text-sm',
  md: 'px-7 py-3.5 text-base',
  lg: 'px-9 py-4 text-lg',
};

const variants = {
  primary:
    'bg-forest text-white hover:bg-forest-dark hover:scale-[1.03] focus-visible:ring-forest shadow-soft',
  terracotta:
    'bg-terracotta text-white hover:bg-terracotta-dark hover:scale-[1.03] focus-visible:ring-terracotta shadow-soft',
  outline:
    'border-2 border-forest/70 text-forest hover:bg-forest hover:text-white hover:scale-[1.03] focus-visible:ring-forest',
  outlineLight:
    'border-2 border-white/80 text-white hover:bg-white hover:text-forest hover:scale-[1.03] focus-visible:ring-white',
  white:
    'bg-white text-forest hover:bg-cream hover:scale-[1.03] focus-visible:ring-white shadow-soft',
  ghost:
    'text-forest hover:bg-forest/10 hover:scale-[1.02] focus-visible:ring-forest',
};

export default function Button({
  children,
  to,
  href,
  variant = 'primary',
  size = 'md',
  className = '',
  type,
  onClick,
  icon: Icon,
  ...rest
}) {
  const classes = `${baseStyles} ${sizes[size]} ${variants[variant]} ${className}`;

  if (to) {
    return (
      <Link to={to} className={classes} {...rest}>
        {children}
        {Icon && <Icon size={18} />}
      </Link>
    );
  }
  if (href) {
    return (
      <a href={href} className={classes} {...rest}>
        {children}
        {Icon && <Icon size={18} />}
      </a>
    );
  }
  return (
    <button type={type || 'button'} onClick={onClick} className={classes} {...rest}>
      {children}
      {Icon && <Icon size={18} />}
    </button>
  );
}