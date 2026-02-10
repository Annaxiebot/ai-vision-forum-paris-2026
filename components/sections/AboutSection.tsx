"use client";

import { Info, Users, Lock, Calendar } from "lucide-react";
import { EVENT_CONFIG, ORGANIZERS } from "@/lib/constants";

/**
 * About section with mission, advisors, and Chatham House Rule
 */
export function AboutSection() {
  return (
    <section id="about" className="py-24 px-4">
      <div className="container mx-auto max-w-6xl">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-4xl font-bold md:text-5xl lg:text-6xl">
            <span className="text-gradient-primary">About AI Vision Forum</span>
          </h2>
          <p className="mx-auto max-w-3xl text-lg text-muted-foreground md:text-xl">
            A gathering of visionaries shaping the future of agentic AI, education, governance, and open-source collaboration
          </p>
        </div>

        {/* Mission Statement */}
        <div className="mb-16 rounded-2xl border border-border bg-card p-8 md:p-12">
          <div className="mb-6 flex items-center gap-3">
            <Info className="h-6 w-6 text-primary" />
            <h3 className="text-2xl font-bold">Our Mission</h3>
          </div>
          <div className="space-y-4 text-muted-foreground">
            <p className="text-lg">
              AI Vision Forum Paris 2026 brings together thought leaders, developers, researchers, and policymakers to explore the transformative potential of agentic AI across four critical domains: <strong className="text-foreground">education</strong>, <strong className="text-foreground">autonomous development</strong>, <strong className="text-foreground">governance</strong>, and <strong className="text-foreground">digital public goods</strong>.
            </p>
            <p>
              As part of <strong className="text-secondary">GOSIM Paris 2026</strong>, we foster intimate, high-signal conversations that shape actionable frameworks for humanity's AI future.
            </p>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="mb-16 grid gap-6 md:grid-cols-4">
          <StatCard
            icon={<Users className="h-8 w-8" />}
            value="100-150"
            label="Participants"
          />
          <StatCard
            icon={<Lock className="h-8 w-8" />}
            value="Invite-Only"
            label="Exclusive Access"
          />
          <StatCard
            icon={<Calendar className="h-8 w-8" />}
            value="May 5, 2026"
            label="Paris, France"
          />
          <StatCard
            icon={<span className="text-3xl">🤝</span>}
            value="Chatham House"
            label="Rule Applied"
          />
        </div>

        {/* Board of Advisors */}
        <div className="mb-16">
          <h3 className="mb-8 text-center text-3xl font-bold">Board of Advisors</h3>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {ORGANIZERS.boardOfAdvisors.map((advisor, index) => (
              <AdvisorCard
                key={index}
                name={advisor.name}
                affiliation={advisor.affiliation}
                role={advisor.role}
              />
            ))}
            {/* TBA Placeholders */}
            <TBACard />
            <TBACard />
            <TBACard />
          </div>
        </div>

        {/* Chatham House Rule */}
        <div className="rounded-2xl border border-accent/30 bg-gradient-to-br from-accent/5 to-transparent p-8">
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0 rounded-full bg-accent/10 p-3">
              <Lock className="h-6 w-6 text-accent" />
            </div>
            <div>
              <h3 className="mb-2 text-xl font-bold">Chatham House Rule</h3>
              <p className="text-muted-foreground">
                Participants are free to use the information received, but neither the identity nor the affiliation of the speaker(s), nor that of any other participant, may be revealed. This rule encourages open dialogue and candid discussion on sensitive topics.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function StatCard({
  icon,
  value,
  label,
}: {
  icon: React.ReactNode;
  value: string;
  label: string;
}) {
  return (
    <div className="flex flex-col items-center rounded-xl border border-border bg-card p-6 text-center transition-all hover:border-primary hover:shadow-lg">
      <div className="mb-3 text-primary">{icon}</div>
      <div className="mb-1 text-2xl font-bold text-gradient-primary">{value}</div>
      <div className="text-sm text-muted-foreground">{label}</div>
    </div>
  );
}

function AdvisorCard({
  name,
  affiliation,
  role,
}: {
  name: string;
  affiliation: string;
  role: string;
}) {
  return (
    <div className="group relative rounded-xl border border-border bg-card p-6 transition-all hover:border-primary hover:shadow-xl hover:-translate-y-1">
      <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-primary to-secondary text-2xl font-bold text-primary-foreground">
        {name.split(" ").map((n) => n[0]).join("")}
      </div>
      <h4 className="mb-1 text-xl font-semibold">{name}</h4>
      <p className="mb-2 text-sm text-secondary">{affiliation}</p>
      <p className="text-xs text-muted-foreground">{role}</p>
    </div>
  );
}

function TBACard() {
  return (
    <div className="relative rounded-xl border border-dashed border-border bg-card/50 p-6 text-center">
      <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-muted text-2xl text-muted-foreground mx-auto">
        ?
      </div>
      <h4 className="mb-1 text-xl font-semibold text-muted-foreground">TBA</h4>
      <p className="text-sm text-muted-foreground">To Be Announced</p>
    </div>
  );
}
