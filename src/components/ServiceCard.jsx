import {
  Heart,
  BookOpen,
  UtensilsCrossed,
  Stethoscope,
  Users,
  MessageCircleHeart,
  GraduationCap,
  Home,
  Palette,
  HandHeart,
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import AnimatedSection from './AnimatedSection';

const iconMap = {
  Heart,
  BookOpen,
  UtensilsCrossed,
  Stethoscope,
  Users,
  MessageCircleHeart,
  GraduationCap,
  Home,
  Palette,
  HandHeart,
};

export default function ServiceCard({ service, index }) {
  const Icon = iconMap[service.icon] || Heart;
  return (
    <AnimatedSection direction="up" delay={index * 0.05}>
      <Link
        to={`/services#${service.id}`}
        className="group flex h-full flex-col rounded-3xl bg-white p-8 shadow-soft transition-all duration-300 hover:-translate-y-2 hover:shadow-card"
      >
        <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-forest/10 text-forest transition-transform duration-300 group-hover:scale-110 group-hover:bg-forest group-hover:text-white">
          <Icon size={26} />
        </div>
        <h3 className="text-lg font-bold mb-2">{service.title}</h3>
        <p className="text-sm text-charcoal-muted leading-relaxed flex-1">
          {service.shortDesc}
        </p>
        <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-terracotta transition-all duration-300 group-hover:gap-3">
          Learn More
          <ArrowRight size={16} />
        </span>
      </Link>
    </AnimatedSection>
  );
}