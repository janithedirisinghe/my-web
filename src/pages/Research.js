import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import researchArticles from '../data/researchData';

function Research() {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = 'Research | Janith Chathusanka Edirisinghe';
  }, []);

  return (
    <main className="min-h-screen pt-32 pb-20 bg-gray-900 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-red-900/10 via-transparent to-orange-900/10 pointer-events-none"></div>

      <div className="container mx-auto relative z-10 px-4">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 mb-5 bg-orange-500/10 text-orange-300 text-xs font-semibold tracking-widest uppercase rounded-full border border-orange-500/40">
            Publications
          </span>
          <h1 className="text-5xl font-extrabold mb-5 text-red-700 drop-shadow-lg">Research</h1>
          <p className="text-lg text-gray-400 leading-relaxed">
            Conference papers and research projects, written up here as readable articles.
          </p>
        </div>

        {/* Article list */}
        <div className="max-w-4xl mx-auto space-y-8">
          {researchArticles.map((article) => (
            <Link
              key={article.slug}
              to={`/research/${article.slug}`}
              className="group relative block bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-8 md:p-10 shadow-2xl border-2 border-gray-700 hover:border-orange-500/70 transition-all duration-500 hover:-translate-y-1 overflow-hidden"
            >
              {/* Optional cover image */}
              {article.coverImage && (
                <img
                  src={article.coverImage}
                  alt={article.title}
                  className="w-full rounded-xl mb-7 object-cover"
                  style={{ maxHeight: '260px' }}
                  loading="lazy"
                />
              )}

              <div className="flex flex-wrap items-center gap-3 mb-4 text-xs">
                <span className="px-3 py-1 bg-orange-500/20 text-orange-300 font-semibold rounded-full border border-orange-500/50">
                  {article.type}
                </span>
                <span className="text-gray-500">{article.date}</span>
              </div>

              <h2 className="text-2xl font-bold text-white mb-3 group-hover:text-orange-400 transition-colors duration-300 leading-snug">
                {article.title}
              </h2>

              <p className="text-orange-400/80 text-sm mb-5 leading-relaxed">{article.venue}</p>

              <p className="text-gray-400 leading-relaxed mb-6">{article.excerpt}</p>

              {/* Key areas preview */}
              <div className="flex flex-wrap gap-2 mb-7">
                {article.tags.slice(0, 4).map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 bg-orange-900/30 text-orange-300 text-xs rounded-full border border-orange-800/50 group-hover:border-orange-500/60 transition-all duration-300"
                  >
                    {tag}
                  </span>
                ))}
                {article.tags.length > 4 && (
                  <span className="px-3 py-1 bg-red-900/30 text-red-300 text-xs rounded-full border border-red-800/50">
                    +{article.tags.length - 4}
                  </span>
                )}
              </div>

              <span className="inline-flex items-center text-sm font-semibold text-orange-400">
                Read article
                <svg
                  className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform duration-300"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </span>

              {/* Top accent line */}
              <div className="absolute top-0 left-0 h-1 w-0 group-hover:w-full bg-gradient-to-r from-orange-500 to-red-600 transition-all duration-500"></div>
            </Link>
          ))}
        </div>

        {/* Back link */}
        <div className="mt-16 text-center">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-gray-400 hover:text-orange-400 transition-colors duration-300"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16l-4-4m0 0l4-4m-4 4h18" />
            </svg>
            Back to portfolio
          </Link>
        </div>
      </div>
    </main>
  );
}

export default Research;
