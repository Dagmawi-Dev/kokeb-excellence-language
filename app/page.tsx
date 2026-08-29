import Link from "next/link";
import {
  ArrowRight,
  CalendarDays,
  Clock3,
  Globe2,
  HeartHandshake,
  Languages,
  MessageCircle,
  MessagesSquare,
  Phone,
  PhoneCall,
  Quote,
  ShieldCheck,
  Sparkles,
  UserRoundCheck,
  Video,
} from "lucide-react";

import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { CountUpStat } from "@/components/count-up-stat";
import { TrialDialog } from "@/components/trial-dialog";
import { familyStories } from "@/lib/family-stories";

const whatsappOne =
  "https://wa.me/251959137573?text=Hello%20Kokeb%20Excellence%2C%20I%20would%20like%20to%20book%20the%201-week%20free%20language%20trial.";
const whatsappTwo =
  "https://wa.me/251945238739?text=Hello%20Kokeb%20Excellence%2C%20I%20would%20like%20to%20book%20the%201-week%20free%20language%20trial.";
const telegram = "https://t.me/KokebExcellence_ET";
const viberOne = "viber://chat?number=%2B251959137573";
const viberTwo = "viber://chat?number=%2B251945238739";

const languages = [
  { name: "Amharic", native: "አማርኛ", accent: "language-red" },
  { name: "Tigrinya", native: "ትግርኛ", accent: "language-gold" },
  { name: "Afaan Oromo", native: "Afaan Oromoo", accent: "language-green" },
  { name: "Other Ethiopian languages", native: "Ask us", accent: "language-blue" },
];

const benefits = [
  {
    icon: UserRoundCheck,
    title: "One learner. One young teacher.",
    text: "Your child gets full attention from a friendly teacher who follows their pace, level and goals.",
  },
  {
    icon: MessagesSquare,
    title: "Learning that feels active",
    text: "Conversation, games and guided practice keep young learners involved instead of simply watching.",
  },
  {
    icon: HeartHandshake,
    title: "Language with connection",
    text: "Lessons help children speak with family and stay connected to Ethiopian language and culture.",
  },
  {
    icon: CalendarDays,
    title: "Flexible around family life",
    text: "Choose the days and times that work. We recommend two lessons a week, with weekends a popular option.",
  },
];

const steps = [
  {
    number: "01",
    title: "Tell us the language",
    text: "Share the learner’s age, level and preferred schedule.",
  },
  {
    number: "02",
    title: "Meet the teacher",
    text: "Join a live one to one lesson made around the learner.",
  },
  {
    number: "03",
    title: "Try one week free",
    text: "Experience the class first, then decide whether to continue.",
  },
];

function NumberContactCard({
  number,
  whatsapp,
  viber,
  call,
}: {
  number: string;
  whatsapp: string;
  viber: string;
  call: string;
}) {
  return (
    <div className="number-contact-card">
      <div className="number-contact-heading">
        <span className="contact-option-icon"><Phone aria-hidden="true" /></span>
        <span><small>Choose how to contact this number</small><strong>{number}</strong></span>
      </div>
      <div className="number-contact-actions">
        <a className="channel-button channel-whatsapp" href={whatsapp} target="_blank" rel="noopener noreferrer">
          <MessageCircle aria-hidden="true" /> WhatsApp
        </a>
        <a className="channel-button channel-viber" href={viber} target="_blank" rel="noopener noreferrer">
          <PhoneCall aria-hidden="true" /> Viber
        </a>
        <a className="channel-button channel-call" href={call} aria-label={`Call ${number}`}>
          <Phone aria-hidden="true" /> Call
        </a>
      </div>
    </div>
  );
}

function StoryVisual({ story, duplicate = false }: { story: (typeof familyStories)[number]; duplicate?: boolean }) {
  if (story.image) {
    return (
      <img
        src={story.image}
        alt={duplicate ? "" : story.alt}
        loading="lazy"
        decoding="async"
      />
    );
  }

  return <div className={`story-avatar avatar-${story.tone}`}>{story.initials}</div>;
}

export default function Home() {
  return (
    <main>
      <SiteHeader />

      <section className="hero" id="home">
        <img
          className="hero-background"
          src="/images/kokeb-hero-female-teacher-boy.webp"
          alt="A young Ethiopian boy learning online with a friendly young female teacher visible on his laptop"
          fetchPriority="high"
          decoding="async"
        />
        <div className="hero-shade" aria-hidden="true" />
        <div className="section-shell hero-inner">
          <div className="hero-copy">
            <div className="eyebrow hero-eyebrow">
              <span className="live-dot" /> Young teachers · Ages 8 and above
            </div>
            <h1>
              One young teacher. One confident speaker.
              <span>Closer to home.</span>
            </h1>
            <p className="hero-lead">
              Live one to one Ethiopian language lessons that are personal,
              practical and built around your child.
            </p>

            <div className="hero-actions">
              <TrialDialog label="Book a 1 week free trial" className="button button-gold" />
              <a className="button button-glass" href="tel:+251959137573">
                <Phone aria-hidden="true" /> Call now
              </a>
            </div>

            <dl className="hero-stats" aria-label="Program highlights">
              <div><dt>Class</dt><dd>Private 1:1</dd></div>
              <div><dt>Learners</dt><dd>Ages 8+</dd></div>
              <div><dt>Trial</dt><dd>1 week free</dd></div>
            </dl>
          </div>
        </div>
      </section>

      <section className="community-proof" aria-label="Kokeb community numbers">
        <div className="section-shell community-proof-inner">
          <div className="community-proof-copy">
            <span className="section-kicker">Trusted by a growing community</span>
            <p>Confidence in their language. Connection to their culture.</p>
          </div>
          <CountUpStat value={350} suffix="+" label="Students supported" />
          <CountUpStat value={40} suffix="+" label="Teachers in the community" />
        </div>
      </section>

      <section className="benefit-strip" id="why-kokeb">
        <div className="section-shell why-showcase">
          <div className="why-showcase-copy">
            <span className="section-kicker">Why one to one works</span>
            <h2>The class moves with the learner, not the crowd.</h2>
            <p>A private teacher can slow down, repeat, challenge and celebrate progress at exactly the right moment. That means more speaking, more confidence and no pressure to keep up with a group.</p>
            <Link className="text-link" href="/why-kokeb">
              Explore why families choose Kokeb <ArrowRight aria-hidden="true" />
            </Link>
          </div>
          <div className="why-reasons-list">
            {benefits.map(({ icon: Icon, title, text }, index) => (
              <article className="why-reason-row" key={title}>
                <span className="why-reason-number">0{index + 1}</span>
                <span className="why-reason-icon"><Icon aria-hidden="true" /></span>
                <div><h3>{title}</h3><p>{text}</p></div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-shell section-pad compact-section" id="languages">
        <div className="section-heading split-heading">
          <div>
            <span className="section-kicker">Choose their language</span>
            <h2>From “I understand” to “I can speak.”</h2>
          </div>
          <p>Speaking and listening stay at the center of every live class.</p>
        </div>

        <div className="language-grid">
          {languages.map((language) => (
            <a className={`language-card ${language.accent}`} href={whatsappOne} key={language.name} target="_blank" rel="noopener noreferrer">
              <div className="language-card-top">
                <Languages aria-hidden="true" />
                <span>Live 1:1</span>
              </div>
              <p className="native-language">{language.native}</p>
              <h3>{language.name}</h3>
              <span className="card-link">Ask about classes <ArrowRight aria-hidden="true" /></span>
            </a>
          ))}
        </div>
      </section>

      <section className="connection-section section-pad" id="schedule">
        <div className="section-shell connection-grid">
          <div className="connection-photo-wrap">
            <img
              src="/images/kokeb-culture-connection.webp"
              alt="An Ethiopian child confidently using a family language with a relative"
              loading="lazy"
              decoding="async"
            />
            <span className="photo-badge"><Globe2 aria-hidden="true" /> Language becomes connection</span>
          </div>

          <div className="connection-copy">
            <span className="section-kicker">Built for real family life</span>
            <h2>From lessons to family conversations.</h2>
            <p>
              The goal is simple: help your child answer relatives, join family
              conversations and feel closer to Ethiopian culture.
            </p>

            <div className="schedule-card">
              <div className="schedule-icon"><Clock3 aria-hidden="true" /></div>
              <div>
                <span>Flexible weekly schedule</span>
                <strong>Choose any days that work.</strong>
                <p>We recommend 2 lessons a week. Weekend classes are popular, but not required.</p>
              </div>
            </div>

            <a className="text-link" href={whatsappTwo} target="_blank" rel="noopener noreferrer">
              Ask about available times <ArrowRight aria-hidden="true" />
            </a>
          </div>
        </div>
      </section>

      <section className="section-shell section-pad process-section" id="how-it-works">
        <div className="section-heading centered-heading">
          <span className="section-kicker">Simple from the first message</span>
          <h2>Start in three clear steps.</h2>
        </div>
        <ol className="steps-grid">
          {steps.map(({ number, title, text }) => (
            <li className="step-card" key={number}>
              <span>{number}</span>
              <div><h3>{title}</h3><p>{text}</p></div>
            </li>
          ))}
        </ol>
      </section>

      <section className="family-voices section-pad" id="stories">
        <div className="section-shell">
          <div className="section-heading voices-heading">
            <div>
              <span className="section-kicker">Family stories</span>
              <h2>What personal learning can feel like.</h2>
            </div>
            <Link className="button button-quiet" href="/testimonials">
              More family stories <ArrowRight aria-hidden="true" />
            </Link>
          </div>

          <div className="voice-marquee" aria-label="Sample family stories">
            <div className="voice-track">
              {[...familyStories, ...familyStories].map((story, index) => {
                const duplicate = index >= familyStories.length;
                return (
                  <article className="voice-card" key={`${story.id}-${index}`} aria-hidden={duplicate}>
                    <StoryVisual story={story} duplicate={duplicate} />
                    <div className="voice-copy">
                      <div className="voice-card-label"><Quote aria-hidden="true" /> Sample family story · {story.language}</div>
                      <blockquote>“{story.quote}”</blockquote>
                      <p>{story.role}</p>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>

          <p className="sample-note"><ShieldCheck aria-hidden="true" /> Stories move automatically and pause when you hover. Representative visuals and sample copy are shown until families approve their exact reviews.</p>
        </div>
      </section>

      <section className="section-shell section-pad contact-section" id="contact">
        <div className="contact-panel">
          <div className="contact-copy">
            <div className="eyebrow"><Sparkles aria-hidden="true" /> 1 week free</div>
            <h2>Let the first class speak for itself.</h2>
            <p>Tell us the learner’s age, language and preferred time. We’ll guide you from there.</p>
            <a className="button button-gold" href={whatsappOne} target="_blank" rel="noopener noreferrer">
              Start on WhatsApp <MessageCircle aria-hidden="true" />
            </a>
          </div>
          <div className="contact-options">
            <NumberContactCard number="+251 959 137 573" whatsapp={whatsappOne} viber={viberOne} call="tel:+251959137573" />
            <NumberContactCard number="+251 945 238 739" whatsapp={whatsappTwo} viber={viberTwo} call="tel:+251945238739" />
            <a className="telegram-contact-card" href={telegram} target="_blank" rel="noopener noreferrer">
              <span className="contact-option-icon"><Video aria-hidden="true" /></span>
              <span><small>Telegram</small><strong>@KokebExcellence_ET</strong></span>
              <span>Open <ArrowRight aria-hidden="true" /></span>
            </a>
          </div>
        </div>
      </section>

      <SiteFooter />

      <TrialDialog label="Free trial" className="floating-whatsapp" icon="message" />
    </main>
  );
}
