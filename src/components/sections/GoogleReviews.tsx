import React from 'react';
import Image from 'next/image';

// Placeholder images – replace with real Google review screenshots in /public/reviews/*
const reviewImages = [
  '/reviews/review1.png',
  '/reviews/review2.png',
  '/reviews/review3.png',
];

export default function GoogleReviews() {
  return (
    <section className="bg-gray-900 py-12" id="google-reviews">
      <div className="mx-auto max-w-5xl px-5 text-center">
        <h2 className="mb-8 text-2xl font-semibold text-white">What Our Clients Say</h2>
        <div className="grid gap-6 sm:grid-cols-3">
          {reviewImages.map((src, idx) => (
            <div key={idx} className="overflow-hidden rounded-lg border border-gray-700 bg-gray-800 p-4 shadow-lg">
              <Image
                src={src}
                alt={`Google review ${idx + 1}`}
                width={400}
                height={250}
                className="object-cover"
                priority={true}
              />
            </div>
          ))}
        </div>
        {/* Optional carousel could be added below if needed */}
      </div>
    </section>
  );
}
