import React from 'react';

function Articles() {
  return (
    <section id="articles" className="py-20 bg-gray-100">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-4">Articles</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold mb-2">Article 1</h3>
            <p className="text-gray-700">Summary of Article 1</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold mb-2">Article 2</h3>
            <p className="text-gray-700">Summary of Article 2</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold mb-2">Article 3</h3>
            <p className="text-gray-700">Summary of Article 3</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Articles;
