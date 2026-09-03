import { useMemo, useState } from 'react';
import { Search } from 'lucide-react';
import PageHero from '../components/PageHero';
import BlogCard from '../components/BlogCard';
import { blogs, blogCategories } from '../data/blogs';
import { useDocumentTitle, getPageTitle } from '../hooks/useDocumentTitle';

export default function Blog() {
  useDocumentTitle(getPageTitle('Stories & Blog'));
  const [activeCategory, setActiveCategory] = useState('All');
  const [search, setSearch] = useState('');

  const featured = blogs.find((b) => b.featured);
  const rest = blogs.filter((b) => !b.featured);

  const filteredByCategory =
    activeCategory === 'All' ? rest : rest.filter((b) => b.category === activeCategory);

  const filtered = useMemo(() => {
    const q = search.trim().toLowerCase();
    if (!q) return filteredByCategory;
    return filteredByCategory.filter(
      (b) =>
        b.title.toLowerCase().includes(q) ||
        b.excerpt.toLowerCase().includes(q) ||
        b.category.toLowerCase().includes(q)
    );
  }, [filteredByCategory, search]);

  return (
    <>
      <PageHero
        badge="Stories & Blog"
        title="Stories That Inspire Hope"
        subtitle="Real stories from our community — journeys of resilience, care, and the transformative power of kindness."
        crumb="Home / Blog"
      />

      <section className="section-pad">
        <div className="container-x">
          {/* Featured */}
          {featured && (
            <div className="mb-14">
              <span className="mb-4 inline-block rounded-full bg-terracotta px-4 py-1.5 text-sm font-bold text-white">
                Featured Story
              </span>
              <BlogCard blog={featured} big />
            </div>
          )}

          {/* Search + filters */}
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-5 mb-8">
            <div className="flex flex-wrap gap-3">
              {blogCategories.map((c) => (
                <button
                  key={c}
                  onClick={() => setActiveCategory(c)}
                  className={`rounded-full px-5 py-2.5 text-sm font-semibold transition-all link-focus ${
                    activeCategory === c
                      ? 'bg-forest text-white'
                      : 'bg-white text-charcoal-soft hover:bg-forest/10'
                  }`}
                >
                  {c}
                </button>
              ))}
            </div>
            <div className="relative w-full md:w-72">
              <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-charcoal-muted" />
              <input
                type="search"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search stories..."
                aria-label="Search stories"
                className="w-full rounded-full border border-forest/15 bg-white py-3 pl-11 pr-5 focus:outline-none focus:ring-2 focus:ring-forest"
              />
            </div>
          </div>

          {/* Grid */}
          <h2 className="text-xl font-extrabold mb-6">Latest Stories</h2>
          {filtered.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filtered.map((b, i) => (
                <BlogCard key={b.id} blog={b} index={i} />
              ))}
            </div>
          ) : (
            <div className="rounded-3xl bg-white p-14 text-center text-charcoal-muted">
              No stories found. Try a different search or category.
            </div>
          )}
        </div>
      </section>
    </>
  );
}