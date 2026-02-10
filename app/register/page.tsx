import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function RegisterPage() {
  return (
    <div className="min-h-screen bg-background px-4 py-32">
      <div className="container mx-auto max-w-2xl">
        <Link
          href="/"
          className="mb-8 inline-flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Home
        </Link>

        <div className="rounded-2xl border border-border bg-card p-8 md:p-12">
          <h1 className="mb-4 text-4xl font-bold">Request Invitation</h1>
          <p className="mb-8 text-lg text-muted-foreground">
            AI Vision Forum Paris 2026 is an invitation-only event. Complete the form below to request your invitation.
          </p>

          <div className="space-y-6">
            <div>
              <label htmlFor="name" className="mb-2 block text-sm font-medium">
                Full Name *
              </label>
              <input
                type="text"
                id="name"
                className="w-full rounded-lg border border-border bg-background px-4 py-3 transition-colors focus:border-primary focus:outline-none"
                placeholder="Your name"
              />
            </div>

            <div>
              <label htmlFor="email" className="mb-2 block text-sm font-medium">
                Email Address *
              </label>
              <input
                type="email"
                id="email"
                className="w-full rounded-lg border border-border bg-background px-4 py-3 transition-colors focus:border-primary focus:outline-none"
                placeholder="you@example.com"
              />
            </div>

            <div>
              <label htmlFor="affiliation" className="mb-2 block text-sm font-medium">
                Affiliation / Organization
              </label>
              <input
                type="text"
                id="affiliation"
                className="w-full rounded-lg border border-border bg-background px-4 py-3 transition-colors focus:border-primary focus:outline-none"
                placeholder="Your organization"
              />
            </div>

            <div>
              <label htmlFor="track" className="mb-2 block text-sm font-medium">
                Primary Track of Interest *
              </label>
              <select
                id="track"
                className="w-full rounded-lg border border-border bg-background px-4 py-3 transition-colors focus:border-primary focus:outline-none"
              >
                <option value="">Select a track</option>
                <option value="education">AI for Next-Gen Learning & Creative Pedagogy</option>
                <option value="vibe-coding">Vibe Coding & Agentic Development</option>
                <option value="governance">Anticipatory Governance</option>
                <option value="public-good">AI as Global Public Good</option>
              </select>
            </div>

            <div>
              <label htmlFor="motivation" className="mb-2 block text-sm font-medium">
                Why do you want to attend? *
              </label>
              <textarea
                id="motivation"
                rows={4}
                className="w-full rounded-lg border border-border bg-background px-4 py-3 transition-colors focus:border-primary focus:outline-none"
                placeholder="Tell us about your interest in the forum..."
              />
            </div>

            <div className="flex items-start gap-3">
              <input
                type="checkbox"
                id="chatham"
                className="mt-1 h-4 w-4 rounded border-border"
              />
              <label htmlFor="chatham" className="text-sm text-muted-foreground">
                I agree to participate under the Chatham House Rule
              </label>
            </div>

            <button
              type="submit"
              className="w-full rounded-full bg-accent py-4 font-semibold text-accent-foreground transition-all hover:scale-105 hover:shadow-xl hover:shadow-accent/30"
            >
              Submit Application
            </button>

            <p className="text-center text-xs text-muted-foreground">
              Applications are reviewed on a rolling basis. You'll hear from us within 2 weeks.
            </p>
          </div>
        </div>

        <div className="mt-8 rounded-lg border border-primary/30 bg-primary/5 p-6">
          <h3 className="mb-2 text-lg font-semibold">Note</h3>
          <p className="text-sm text-muted-foreground">
            This is a placeholder form. Full registration will open in Q2 2026 with integration to our invitation management system.
          </p>
        </div>
      </div>
    </div>
  );
}
