import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  BookOpenCheck,
  HeartHandshake,
  MessageCircle,
  Quote,
  ShieldCheck,
  Sparkles,
  Star,
  UserRoundCheck,
} from "lucide-react";

import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { TrialDialog } from "@/components/trial-dialog";
import { familyStories } from "@/lib/family-stories";

export const metadata: Metadata = {
  title: "Testimonials",
  description:
    "Family stories and learning outcomes from Kokeb Excellence one to one Ethiopian language classes.",
};

const outcomes = [
  {
    icon: UserRoundCheck,
    title: "A teacher who adapts",
    text: "One to one attention gives the teacher space to repeat, stretch or simplify the lesson in real time.",
  },
  {
    icon: BookOpenCheck,
    title: "Language they can use",
    text: "The focus stays practical: listening, answering, asking and speaking with greater ease.",
  },
  {
    icon: HeartHandshake,
    title: "Connection that grows",
    text: "Learning a family language helps children participate in conversations and stay close to their roots.",
  },
];

function StoryVisual({ story }: { story: (typeof familyStories)[number] }) {
  if (story.image) {
    return <img src={story.image} alt={story.alt} loading="lazy" decoding="async" />;
  }

  return <div className={`story-avatar story-slot-avatar avatar-${story.tone}`}>{story.initials}</div>;
}

export default function TestimonialsPage() {
  const [featuredStory, ...moreStories] = familyStories;

  return (
    <main>
      <SiteHeader />
      <section className="testimonial-hero">
        <div className="section-shell testimonial-hero-inner">
          <div>
            <div className="eyebrow">
              <Star aria-hidden="true" /> Family stories
            </div>
            <h1>Words that feel like home.</h1>
            <p>
              Touching examples of the progress families come to Kokeb for,
              from first words to warmer conversations with grandparents.
            </p>
            <div className="verification-pill">
              <ShieldCheck aria-hidden="true" /> Representative photos and sample stories
            </div>
          </div>
          <div className="testimonial-portrait-stack" aria-label="Representative Kokeb family portraits">
            <img
              src="/images/kokeb-parent-portrait.webp"
              alt="Representative portrait of an Ethiopian parent"
              decoding="async"
            />
            <img
              src="/images/kokeb-family-portrait.webp"
              alt="Representative portrait of an Ethiopian parent and child"
              decoding="async"
            />
            <span>Family connection</span>
          </div>
        </div>
      </section>

      <section className="section-shell story-slots-section">
        <div className="section-heading split-heading story-page-heading">
          <div>
            <span className="section-kicker">Family perspectives</span>
            <h2>Small speaking wins. Big family moments.</h2>
          </div>
          <p>These are representative sample stories showing the kinds of outcomes families come to one to one lessons for.</p>
        </div>
        <article className="story-slot story-slot-featured">
          <StoryVisual story={featuredStory} />
          <div className="story-slot-copy">
            <div className="voice-card-label">
              <Quote aria-hidden="true" /> Featured family story · {featuredStory.language}
            </div>
            <blockquote>“{featuredStory.quote}”</blockquote>
            <p className="voice-person">{featuredStory.role}</p>
            <span className="review-status">Representative story</span>
          </div>
        </article>
        <div className="story-slot-grid story-slot-grid-secondary">
          {moreStories.map((story) => (
            <article className="story-slot" key={story.id}>
              <StoryVisual story={story} />
              <div className="story-slot-copy">
                <div className="voice-card-label">
                  <Quote aria-hidden="true" /> Family story · {story.language}
                </div>
                <blockquote>“{story.quote}”</blockquote>
                <p className="voice-person">{story.role}</p>
                <span className="review-status">Representative story</span>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section-shell outcome-section">
        <div className="section-heading centered-heading">
          <span className="section-kicker">What personal teaching is built to create</span>
          <h2>The changes families come to Kokeb for.</h2>
        </div>
        <div className="outcome-grid">
          {outcomes.map(({ icon: Icon, title, text }) => (
            <article className="outcome-card" key={title}>
              <Icon aria-hidden="true" />
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section-shell review-coming-wrap">
        <div className="review-coming">
          <div className="review-stars" aria-hidden="true">
            {[0, 1, 2, 3, 4].map((star) => (
              <Star key={star} />
            ))}
          </div>
          <span className="section-kicker">Share a real experience</span>
          <h2>Help another family understand what Kokeb feels like.</h2>
          <p>
            Already learning with Kokeb? Send your exact review and, if you
            choose, a photo through Telegram. We will always ask before
            publishing either one.
          </p>
          <div className="review-actions">
            <a className="button button-gold" href="https://t.me/KokebExcellence_ET" target="_blank" rel="noopener noreferrer">
              <MessageCircle aria-hidden="true" /> Share feedback
            </a>
            <TrialDialog label="Try one week free" className="button button-quiet" />
          </div>
        </div>
      </section>

      <section className="testimonial-cta">
        <div className="section-shell testimonial-cta-inner">
          <div>
            <div className="eyebrow eyebrow-dark">
              <Sparkles aria-hidden="true" /> Start your story
            </div>
            <h2>Let the first class speak for itself.</h2>
          </div>
          <Link className="button button-light" href="/#contact">
            Choose how to contact us <ArrowRight aria-hidden="true" />
          </Link>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
