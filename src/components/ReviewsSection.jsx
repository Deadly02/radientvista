import { Star } from "lucide-react";
import { Section } from "./Section";
import { HOTEL_FACTS, known } from "../data/facts";

// Guest reviews. Only real Google reviews are ever shown: the section stays hidden until the
// Google Business Profile URL is set in facts.js (HOTEL_FACTS.googleBusinessProfile). To embed a
// review widget later, render it inside the marked slot below. Never add self-written reviews.
export const ReviewsSection = () => {
  if (!known(HOTEL_FACTS.googleBusinessProfile)) return null;
  const profile = HOTEL_FACTS.googleBusinessProfile;
  return (
    <Section id="reviews" labelledBy="reviews-title" className="bg-hubli-light">
      <div className="container mx-auto px-4 md:px-6 max-w-3xl text-center">
        <span className="text-hubli-sunset font-bold tracking-widest uppercase text-sm">Guest Reviews</span>
        <h2 id="reviews-title" className="text-3xl md:text-4xl font-serif text-hubli-dark font-bold mt-2 mb-4">
          What our guests say
        </h2>
        <p className="text-gray-600 mb-8">Read verified reviews from our guests on Google, or share your own experience.</p>
        {/* Review widget slot: embed the Google reviews widget here once chosen. */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href={profile}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-hubli-earth text-white font-bold rounded-sm hover:bg-hubli-dark transition-all shadow-md text-sm uppercase tracking-wider"
          >
            <Star className="w-4 h-4" />
            Read our Google reviews
          </a>
        </div>
      </div>
    </Section>
  );
};
