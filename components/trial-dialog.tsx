"use client";

import { ArrowUpRight, Mail, MessageCircle, PhoneCall, Send, Sparkles } from "lucide-react";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const contactOptions = [
  {
    label: "WhatsApp",
    note: "Message our main number",
    href: "https://wa.me/251959137573?text=Hello%20Kokeb%20Excellence%2C%20I%20would%20like%20to%20book%20the%201-week%20free%20language%20trial.",
    icon: MessageCircle,
    tone: "trial-option-whatsapp",
  },
  {
    label: "Viber",
    note: "Chat on Viber",
    href: "viber://chat?number=%2B251959137573",
    icon: PhoneCall,
    tone: "trial-option-viber",
  },
  {
    label: "Telegram",
    note: "Open @KokebExcellence_ET",
    href: "https://t.me/KokebExcellence_ET",
    icon: Send,
    tone: "trial-option-telegram",
  },
  {
    label: "Email",
    note: "Send your preferred time",
    href: "mailto:Academykokeb@gmail.com?subject=Kokeb%201-week%20free%20trial&body=Hello%20Kokeb%20Excellence%2C%20I%20would%20like%20to%20book%20a%201-week%20free%20trial.%20The%20learner%27s%20age%20and%20preferred%20language%20are%3A%20",
    icon: Mail,
    tone: "trial-option-email",
  },
];

type TrialDialogProps = {
  label?: string;
  className?: string;
  icon?: "message" | "sparkles";
};

export function TrialDialog({
  label = "Book a 1 week free trial",
  className = "button button-gold",
  icon = "sparkles",
}: TrialDialogProps) {
  const TriggerIcon = icon === "message" ? MessageCircle : Sparkles;

  return (
    <Dialog>
      <DialogTrigger asChild>
        <button className={className} type="button">
          <TriggerIcon aria-hidden="true" /> {label}
        </button>
      </DialogTrigger>
      <DialogContent className="trial-dialog-content">
        <DialogHeader className="trial-dialog-header">
          <span className="trial-dialog-icon"><Sparkles aria-hidden="true" /></span>
          <DialogTitle>Choose how to start the free trial</DialogTitle>
          <DialogDescription>
            Tell us the learner’s age, language and preferred time. Every option opens in a new tab or app.
          </DialogDescription>
        </DialogHeader>
        <div className="trial-option-grid">
          {contactOptions.map(({ label: optionLabel, note, href, icon: OptionIcon, tone }) => (
            <a
              className={`trial-option ${tone}`}
              href={href}
              key={optionLabel}
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="trial-option-icon"><OptionIcon aria-hidden="true" /></span>
              <span><strong>{optionLabel}</strong><small>{note}</small></span>
              <ArrowUpRight aria-hidden="true" />
            </a>
          ))}
        </div>
        <p className="trial-dialog-note">Prefer to call? <a href="tel:+251959137573">+251 959 137 573</a> or <a href="tel:+251945238739">+251 945 238 739</a></p>
      </DialogContent>
    </Dialog>
  );
}
