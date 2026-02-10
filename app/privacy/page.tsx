import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-background px-4 py-32">
      <div className="container mx-auto max-w-4xl">
        <Link
          href="/"
          className="mb-8 inline-flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Home
        </Link>

        <article className="prose prose-invert max-w-none">
          <h1>Privacy Policy</h1>
          <p className="text-xl text-muted-foreground">
            Last updated: February 10, 2026
          </p>

          <h2>Overview</h2>
          <p>
            AI Vision Forum Paris 2026 is committed to protecting the privacy of event participants, speakers, and website visitors. This policy outlines how we collect, use, and safeguard your information.
          </p>

          <h2>Information We Collect</h2>
          <ul>
            <li>
              <strong>Registration data:</strong> Name, email, affiliation, professional background
            </li>
            <li>
              <strong>Event participation:</strong> Session attendance, questions asked (under Chatham House Rule protections)
            </li>
            <li>
              <strong>Website analytics:</strong> Anonymous usage data via privacy-respecting tools
            </li>
          </ul>

          <h2>Chatham House Rule</h2>
          <p>
            All event discussions are governed by the Chatham House Rule. We do not publicly attribute statements to individuals or their organizations without explicit consent.
          </p>

          <h2>Data Usage</h2>
          <p>Your information is used solely for:</p>
          <ul>
            <li>Event logistics and communication</li>
            <li>Connecting participants with shared interests (opt-in only)</li>
            <li>Post-event surveys and follow-up</li>
          </ul>

          <h2>Data Protection</h2>
          <p>
            We comply with GDPR and French data protection laws. Your data is stored securely and never sold to third parties.
          </p>

          <h2>Your Rights</h2>
          <p>You have the right to:</p>
          <ul>
            <li>Access your personal data</li>
            <li>Request corrections or deletion</li>
            <li>Opt out of communications</li>
            <li>Export your data</li>
          </ul>

          <h2>Contact</h2>
          <p>
            For privacy inquiries: <a href="mailto:privacy@visionforum.ai">privacy@visionforum.ai</a>
          </p>
        </article>
      </div>
    </div>
  );
}
