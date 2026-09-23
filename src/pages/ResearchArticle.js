import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { getArticleBySlug } from '../data/researchData';

/**
 * Renders **double-asterisk** spans in body text as bold, so articles can be
 * written as plain strings in researchData.js.
 */
function RichText({ text }) {
  const parts = text.split(/\*\*(.+?)\*\*/g);

  return (
    <>
      {parts.map((part, index) =>
        // Odd indices are the captured groups, i.e. the bolded spans.
        index % 2 === 1 ? (
          <strong key={index} className="font-semibold text-white">
            {part}
          </strong>
        ) : (
          <React.Fragment key={index}>{part}</React.Fragment>
        )
      )}
    </>
  );
}

function ContentBlock({ block }) {
  switch (block.type) {
    case 'heading':
      return <h2 className="text-2xl font-bold text-orange-500 mt-12 mb-4">{block.text}</h2>;

    case 'list':
      return (
        <ul className="my-6 space-y-3">
          {block.items.map((item, index) => (
            <li key={index} className="flex items-start text-gray-300 leading-relaxed">
              <svg
                className="w-5 h-5 mr-3 mt-1 flex-shrink-0 text-orange-500"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>
                <RichText text={item} />
              </span>
            </li>
          ))}
        </ul>
      );

    case 'quote':
      return (
        <blockquote className="my-8 pl-6 border-l-4 border-orange-500 text-lg italic text-gray-300 leading-relaxed">
          <RichText text={block.text} />
        </blockquote>
      );

    case 'image':
      return (
        <figure className="my-10">
          <img
            src={block.src}
            alt={block.caption || ''}
            className="w-full rounded-2xl shadow-2xl border border-gray-700"
            loading="lazy"
          />
          {block.caption && (
            <figcaption className="mt-3 text-center text-sm text-gray-500">
              {block.caption}
            </figcaption>
          )}
        </figure>
      );

    case 'paragraph':
    default:
      return (
        <p className="text-gray-300 leading-relaxed mb-6 text-lg">
          <RichText text={block.text} />
        </p>
      );
  }
}

function ResearchArticle() {
  const { slug } = useParams();
  const article = getArticleBySlug(slug);

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = article
      ? `${article.title} | Janith Chathusanka Edirisinghe`
      : 'Research | Janith Chathusanka Edirisinghe';
  }, [article]);

  if (!article) {
    return (
      <main className="min-h-screen pt-32 pb-20 bg-gray-900 text-white flex items-center justify-center px-4">
        <div className="text-center">
          <h1 className="text-4xl font-extrabold mb-4 text-red-700">Article not found</h1>
          <p className="text-gray-400 mb-8">
            That research article doesn&apos;t exist, or the link is out of date.
          </p>
          <Link
            to="/research"
            className="inline-flex items-center gap-2 py-3 px-6 bg-gradient-to-r from-red-700 to-orange-600 hover:from-red-600 hover:to-orange-500 text-white font-bold rounded-lg transition-all duration-300 transform hover:scale-105"
          >
            View all research
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen pt-32 pb-20 bg-gray-900 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-red-900/10 via-transparent to-orange-900/10 pointer-events-none"></div>

      <article className="container mx-auto relative z-10 px-4">
        <div className="max-w-3xl mx-auto">
          {/* Breadcrumb */}
          <Link
            to="/research"
            className="inline-flex items-center gap-2 mb-8 text-sm text-gray-400 hover:text-orange-400 transition-colors duration-300"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16l-4-4m0 0l4-4m-4 4h18" />
            </svg>
            All research
          </Link>

          {/* Title block */}
          <header className="mb-12 pb-10 border-b border-gray-800">
            <div className="flex flex-wrap items-center gap-3 mb-5 text-xs">
              <span className="px-3 py-1 bg-orange-500/20 text-orange-300 font-semibold rounded-full border border-orange-500/50">
                {article.type}
              </span>
              <span className="text-gray-500">{article.date}</span>
            </div>

            <h1 className="text-3xl md:text-4xl font-extrabold text-white mb-5 leading-tight">
              {article.title}
            </h1>

            <p className="text-orange-400 text-base leading-relaxed">{article.venue}</p>
          </header>

          {/* Cover image (optional) */}
          {article.coverImage && (
            <img
              src={article.coverImage}
              alt={article.title}
              className="w-full rounded-2xl shadow-2xl border border-gray-700 mb-12 object-cover"
              style={{ maxHeight: '460px' }}
            />
          )}

          {/* Body */}
          <div>
            {article.content.map((block, index) => (
              <ContentBlock key={index} block={block} />
            ))}
          </div>

          {/* Key areas */}
          {article.tags && article.tags.length > 0 && (
            <div className="mt-12 pt-8 border-t border-gray-800">
              <h3 className="text-xs font-semibold tracking-widest uppercase text-gray-500 mb-4">
                Key areas
              </h3>
              <div className="flex flex-wrap gap-2">
                {article.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 bg-orange-900/30 text-orange-300 text-xs rounded-full border border-orange-800/50"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Paper link */}
          {article.paperUrl && (
            <div className="mt-10">
              <a
                href={article.paperUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 py-4 px-8 bg-gradient-to-r from-red-700 to-orange-600 hover:from-red-600 hover:to-orange-500 text-white font-bold rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:shadow-red-500/50"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
                View Published Paper
              </a>
            </div>
          )}

          {/* Footer nav */}
          <div className="mt-14 pt-8 border-t border-gray-800">
            <Link
              to="/research"
              className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-orange-400 transition-colors duration-300"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16l-4-4m0 0l4-4m-4 4h18" />
              </svg>
              Back to all research
            </Link>
          </div>
        </div>
      </article>
    </main>
  );
}

export default ResearchArticle;
