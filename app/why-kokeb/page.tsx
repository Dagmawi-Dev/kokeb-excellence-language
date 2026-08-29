import type { Metadata } from "next";
import Link from "next/link";
import {
  BookOpenCheck,
  CalendarDays,
  Globe2,
  HeartHandshake,
  MessageCircle,
  MessagesSquare,
  Sparkles,
  UserRoundCheck,
  UsersRound,
} from "lucide-react";

import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { TrialDialog } from "@/components/trial-dialog";

export const metadata: Metadata = {
  title: "Why Kokeb",
  description:
    "Why families choose Kokeb Excellence for live one to one Ethiopian language learning.",
};

const reasons = [
  {
    icon: UserRoundCheck,
    title: "Truly one to one",
    text: "Your child gets the teacher’s full attention for the whole class. There is no waiting for a group to catch up.",
  },
  {
    icon: MessagesSquare,
    title: "Speaking comes first",
    text: "Lessons are built around listening, answering and useful conversation from the beginning.",
  },
  {
    icon: BookOpenCheck,
    title: "The lesson adapts live",
    text: "The teacher can repeat, simplify or add challenge immediately as confidence changes.",
  },
  {
    icon: HeartHandshake,
    title: "Culture is part of class",
    text: "Children practise language they can use with parents, grandparents and relatives instead of isolated vocabulary.",
  },
  {
    icon: CalendarDays,
    title: "Flexible for family life",
    text: "Choose any days and times that fit. We recommend two lessons each week, with weekends popular but optional.",
  },
  {
    icon: UsersRound,
    title: "Progress families can feel",
    text: "The real measure is a child answering more easily, trying without fear and joining family conversations.",
  },
];

const journey = [
  ["First lessons", "Build safety, listening and useful everyday responses."],
  ["Growing confidence", "Use longer answers, ask questions and speak with less prompting."],
  ["Real connection", "Bring the language into family calls, visits and everyday home life."],
];

export default function WhyKokebPage() {
  return (
    <main>
      <SiteHeader />

      <section className="why-page-hero">
        <div className="section-shell why-page-hero-grid">
          <div>
            <div className="eyebrow eyebrow-dark"><Sparkles aria-hidden="true" /> Why Kokeb</div>
            <h1>Language learning that leads back to family.</h1>
            <p>
              Kokeb combines private teaching, practical speaking and cultural
              connection so children can use their language with the people who matter.
            </p>
            <div className="hero-actions">
              <TrialDialog label="Try one week free" className="button button-gold" />
              <Link className="button button-glass" href="/testimonials">See family stories</Link>
            </div>
          </div>
          <div className="why-page-photo">
            <img
              src="/images/kokeb-culture-connection.webp"
              alt="An Ethiopian child using a family language with a relative"
              decoding="async"
            />
            <span><Globe2 aria-hidden="true" /> From class to connection</span>
          </div>
        </div>
      </section>

      <section className="section-shell section-pad why-page-reasons">
        <div className="section-heading split-heading">
          <div>
            <span className="section-kicker">The Kokeb difference</span>
            <h2>Six reasons personal learning works.</h2>
          </div>
          <p>Focused enough for real progress, flexible enough for real family schedules, and warm enough for children to keep trying.</p>
        </div>
        <div className="why-detail-grid">
          {reasons.map(({ icon: Icon, title, text }, index) => (
            <article className="why-detail-card" key={title}>
              <span className="why-detail-number">0{index + 1}</span>
              <Icon aria-hidden="true" />
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="why-journey-section">
        <div className="section-shell why-journey-grid">
          <div>
            <span className="section-kicker">What progress can look like</span>
            <h2>Confidence grows one conversation at a time.</h2>
            <p>No two learners move at exactly the same speed. One to one teaching lets the path follow the child.</p>
          </div>
          <ol className="why-journey-list">
            {journey.map(([title, text], index) => (
              <li key={title}>
                <span>{index + 1}</span>
                <div><h3>{title}</h3><p>{text}</p></div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="section-shell why-page-cta-wrap">
        <div className="why-page-cta">
          <MessageCircle aria-hidden="true" />
          <div><span>Start without pressure</span><h2>Meet the teacher with a one week free trial.</h2></div>
          <TrialDialog label="Choose a trial time" className="button button-gold" />
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
