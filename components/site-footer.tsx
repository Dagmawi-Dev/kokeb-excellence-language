import Link from "next/link";
import { CalendarDays, Clock3, Globe2, Mail, MessageCircle, Phone } from "lucide-react";
import { TrialDialog } from "@/components/trial-dialog";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <img className="footer-watermark" src="/images/logo-navbar.png" alt="" aria-hidden="true" />
      <div className="section-shell footer-cta">
        <div>
          <span>Ready when your family is</span>
          <h2>Meet the teacher with one week free.</h2>
          <p>Choose WhatsApp, Viber, Telegram or email. We will help you find the right language and time.</p>
        </div>
        <TrialDialog label="Book the free trial" className="button button-gold" />
      </div>
      <div className="section-shell footer-grid">
        <div className="footer-brand">
          <span className="brand-mark">
            <img src="/images/logo-navbar.png" alt="" />
          </span>
          <div>
            <strong><span>Kokeb</span> Excellence</strong>
            <p>Live one to one Ethiopian language learning that helps children speak with confidence and stay close to family culture.</p>
            <div className="footer-badges">
              <span><Globe2 aria-hidden="true" /> Learn from anywhere</span>
              <span><Clock3 aria-hidden="true" /> Flexible family schedule</span>
            </div>
          </div>
        </div>
        <div>
          <span className="footer-label">Programs</span>
          <Link href="/#languages">Languages</Link>
          <Link href="/why-kokeb">Why Kokeb</Link>
          <Link href="/#how-it-works">How it works</Link>
          <Link href="/testimonials">Testimonials</Link>
        </div>
        <div>
          <span className="footer-label">Schedule</span>
          <span className="footer-info"><CalendarDays aria-hidden="true" /> Flexible days</span>
          <span className="footer-info">2 lessons each week recommended</span>
          <span className="footer-info">Weekend friendly</span>
        </div>
        <div>
          <span className="footer-label">Contact</span>
          <a href="https://t.me/KokebExcellence_ET" target="_blank" rel="noopener noreferrer">
            <MessageCircle aria-hidden="true" /> Telegram
          </a>
          <a href="tel:+251959137573">
            <Phone aria-hidden="true" /> +251 959 137 573
          </a>
          <a href="tel:+251945238739">
            <Phone aria-hidden="true" /> +251 945 238 739
          </a>
          <a href="mailto:Academykokeb@gmail.com" target="_blank" rel="noopener noreferrer">
            <Mail aria-hidden="true" /> Academykokeb@gmail.com
          </a>
        </div>
      </div>
      <div className="section-shell footer-bottom">
        <span>© 2026 Kokeb Excellence. All rights reserved.</span>
        <span>Learn the language. Keep the connection.</span>
      </div>
    </footer>
  );
}
