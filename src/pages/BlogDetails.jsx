import { useMemo } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { Calendar, User, Clock, Share2 } from 'lucide-react';
import AnimatedSection from '../components/AnimatedSection';
import BlogCard from '../components/BlogCard';
import { blogs } from '../data/blogs';
import { useDocumentTitle, getPageTitle } from '../hooks/useDocumentTitle';

export default function BlogDetails() {
  const { id } = useParams();
  const blog = blogs.find((b) => b.id === id);

  useDocumentTitle(blog ? `${blog.title} | ${getPageTitle('Blog')}` : getPageTitle('Story'));

  const related = useMemo(
    () => blogs.filter((b) => b.id !== id && (b.category === blog?.category || b.featured)).slice(0, 3),
    [id, blog]
  );

  if (!blog) return <Navigate to="/blog" replace />;

  const shareLinks = [
    { name: 'Facebook', url: `https://www.facebook.com/sharer/sharer.php?u=${window.location.href}` },
    { name: 'Twitter', url: `https://twitter.com/intent/tweet?url=${window.location.href}` },
    { name: 'LinkedIn', url: `https://www.linkedin.com/sharing/share-offsite/?url=${window.location.href}` },
  ];

  return (
    <>
      <div className="relative h-[50vh] sm:h-[58vh] overflow-hidden">
        <img src={blog.image} alt={blog.title} className="h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-forest-dark/90 via-forest-dark/40 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0">
          <div className="container-x pb-10 pt-40">
            <div className="flex items-center gap-3 text-sm text-white/90">
              <span className="rounded-full bg-golden px-3 py-1 font-bold text-forest-dark">{blog.category}</span>
            </div>
            <h1 className="mt-4 max-w-3xl text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight">
              {blog.title}
            </h1>
            <div className="mt-5 flex flex-wrap items-center gap-5 text-sm text-white/80">
              <span className="flex items-center gap-2"><User size={16} /> {blog.author}</span>
              <span className="flex items-center gap-2"><Calendar size={16} /> {new Date(blog.date).toLocaleDateString('en-US', { day: 'numeric', month: 'long', year: 'numeric' })}</span>
              <span className="flex items-center gap-2"><Clock size={16} /> {blog.readTime}</span>
            </div>
          </div>
        </div>
      </div>

      <section className="section-pad">
        <div className="container-x grid lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            <AnimatedSection direction="up">
              <article className="prose prose-lg max-w-none">
                {blog.body.map((block, i) =>
                  block.type === 'h2' ? (
                    <h2 key={i} className="mt-10 mb-4 text-2xl font-extrabold">{block.content}</h2>
                  ) : (
                    <p key={i} className="mb-5 text-lg leading-relaxed text-charcoal-soft">
                      {block.content}
                    </p>
                  )
                )}
              </article>

              {/* Share */}
              <div className="mt-10 flex flex-wrap items-center gap-3 border-t border-cream-alt pt-8">
                <span className="flex items-center gap-2 font-bold"><Share2 size={18} /> Share this story:</span>
                <div className="flex gap-2.5">
                  {shareLinks.map((s) => (
                    <a
                      key={s.name}
                      href={s.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded-full bg-forest/10 px-5 py-2 text-sm font-semibold text-forest hover:bg-forest hover:text-white transition-colors"
                    >
                      {s.name}
                    </a>
                  ))}
                </div>
              </div>

              <div className="mt-8 flex items-center gap-3 rounded-2xl bg-cream p-5">
                <img src={blog.image} alt={blog.author} className="h-12 w-12 rounded-full object-cover" />
                <div>
                  <p className="font-bold">{blog.author}</p>
                  <p className="text-sm text-charcoal-muted">{blog.authorRole}</p>
                </div>
              </div>
            </AnimatedSection>
          </div>

          {/* Sidebar */}
          <aside>
            <div className="sticky top-28 space-y-6">
              <div className="rounded-3xl bg-forest p-7 text-white">
                <h3 className="text-xl font-extrabold">Ready to Make a Difference?</h3>
                <p className="mt-2 text-sm text-white/80">
                  Stories like these are made possible by people like you. Join us today.
                </p>
                <Link to="/donation" className="mt-5 inline-flex rounded-full bg-golden px-6 py-3 text-sm font-bold text-forest-dark hover:bg-golden-light transition-colors">
                  Support Rudra Anandha illam
                </Link>
              </div>
            </div>
          </aside>
        </div>

        {/* Related */}
        {related.length > 0 && (
          <div className="container-x mt-20">
            <h2 className="text-2xl font-extrabold mb-8">Related Stories</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {related.map((b, i) => (
                <BlogCard key={b.id} blog={b} index={i} />
              ))}
            </div>
          </div>
        )}
      </section>
    </>
  );
}