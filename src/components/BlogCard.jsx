import { Link } from 'react-router-dom';
import { ArrowRight, Calendar } from 'lucide-react';
import AnimatedSection from './AnimatedSection';

export default function BlogCard({ blog, index = 0, big = false }) {
  return (
    <AnimatedSection direction="up" delay={index * 0.05}>
      <Link
        to={`/blog/${blog.id}`}
        className={`group flex h-full flex-col overflow-hidden rounded-3xl bg-white shadow-soft transition-all duration-300 hover:-translate-y-1.5 hover:shadow-card ${
          big ? 'lg:flex-row' : ''
        }`}
      >
        <div className={`relative overflow-hidden ${big ? 'lg:w-1/2' : ''} ${big ? 'lg:h-auto' : 'h-52'}`}>
          <img
            src={blog.image}
            alt={blog.title}
            loading="lazy"
            className={`w-full object-cover transition-transform duration-500 group-hover:scale-105 ${
              big ? 'h-56 lg:h-full' : 'h-52'
            }`}
          />
          <span className="absolute left-4 top-4 rounded-full bg-forest/90 px-3 py-1 text-xs font-bold text-white backdrop-blur">
            {blog.category}
          </span>
        </div>
        <div className={`flex flex-1 flex-col ${big ? 'lg:w-1/2' : ''} p-6`}>
          <div className="flex items-center gap-2 text-xs text-charcoal-muted">
            <Calendar size={13} />
            {new Date(blog.date).toLocaleDateString('en-US', {
              day: 'numeric',
              month: 'short',
              year: 'numeric',
            })}
            <span className="mx-1">·</span>
            <span>{blog.readTime}</span>
          </div>
          <h3
            className={`mt-3 font-bold leading-snug group-hover:text-forest transition-colors ${
              big ? 'text-2xl' : 'text-lg'
            }`}
          >
            {blog.title}
          </h3>
          <p className="mt-2.5 text-sm text-charcoal-muted leading-relaxed flex-1">
            {blog.excerpt}
          </p>
          <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-bold text-terracotta transition-all duration-300 group-hover:gap-3">
            Read Story
            <ArrowRight size={16} />
          </span>
        </div>
      </Link>
    </AnimatedSection>
  );
}