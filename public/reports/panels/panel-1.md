---
title: "Agentic AI Systems — Human–AI Symbiosis"
panel: 1
forum: "AI Vision Forum Paris 2026"
date: "4 May 2026"
location: "Paris, France"
chatham_house_rule: true
---

# Panel 1 — Agentic AI Systems

![Panel 1 — Agentic AI Systems: panel 1 visual summary.](infographics/panel-1.png)

## Human–AI Symbiosis

*From the AI Vision Forum Paris 2026 · 4 May 2026 · Conducted under the Chatham House Rule*

---

The opening session of the forum was framed by a question that would echo through the rest of the day: as AI begins to act, not just answer, who is still in charge? Held first thing in the morning, the panel followed a keynote that argued for a complete redesign of the stack — and then moved from manifesto to architecture in the panel that followed.

## The Opening Argument

The morning's opening keynote traced seven decades of computing as a sequence of interface revolutions, each lasting roughly a decade: punch cards, keyboards and terminals, MS-DOS, the graphical user interface, miniaturisation, touch, and now AI. The thesis: every prior interface was "truly artificial" — it required humans to adapt to the machine — and only the AI interface is "truly natural," because the machine adapts to us. Producing natural interfaces requires enormous AI underneath the surface. The same AI also handles legacy code competently: COBOL programs that have been "untouchable" for decades can now be reasoned about by frontier models.

The speaker then layered this onto the well-known compounding curves — Moore's Law, big data, model scaling — and arrived at what he called the *double exponential*: a combined rate of change that no individual, including the field's best forecasters, can fully comprehend. He cited a 2023 McKinsey survey showing that AI capability milestones experts had projected for 2040–2050 in 2017 had, by 2023, been delivered or were considered imminent — a forecast error of two to three decades, by the same experts. Recent reversals in expectations around Go (the 2016 AlphaGo result), chess, and reasoning benchmarks were given as cautionary precedents.

From there, the argument turned normative. The "software is eating the world" thesis, extended by the recent industry slogan that "AI is software," implies that AI will eat the world. *This is unacceptable.* AI must not be the magical black box of Arthur C. Clarke's aphorism — "any sufficiently advanced technology is indistinguishable from magic" — because *magic deceives*. The demand: a white-box AI architecture, inspectable at every layer.

The keynote closed with an explicit chant the room was invited to repeat:

> *"I will not be eaten by AI."*

## The Seven Pillars of Open

The speaker offered seven dimensions of openness that must be defended together, not traded against one another:

1. **Open science** — published methods, reproducible results.
2. **Open data** — training corpora, evaluation sets, provenance.
3. **Open standards** — interoperable, royalty-free, governed in the open.
4. **Open source** — code under recognised licenses, with maintenance practices.
5. **Open weights** — model parameters under permissive terms.
6. **Open platform** — runtime, tooling, and orchestration available to all.
7. **Open hardware** — silicon, accelerators, and firmware specifications.

Weights, the speaker argued, are now a commodity (Llama 2's release, the Mistral and DeepSeek families, the U.S. White House's recent endorsement of open source, and OpenAI's open-weight model release three days after that endorsement were all cited as evidence that the *open-weights* battle is being won). The next frontier is **open hardware**.

## The Practical Panel

The keynote was followed by a panel that moved from manifesto to architecture. Several specific arguments dominated the discussion:

- **The flagship open-weights problem.** A frontier open-weights model released ten days before the forum required FP4/FP8 precision and ran effectively only on the latest Blackwell-class chips. Hopper-class and earlier silicon — including most of the world's deployed inference capacity — was stranded. One panelist's team had spent the intervening days building a cross-vendor open stack (an LLVM-grounded compiler, a Triton-derived kernel language, and an operator library) and successfully ported the model to more than ten different AI chipsets in 2–3 days. The lesson: open weights without an open compute substrate is a hollow victory.

- **A fleet-of-models architecture for agents.** Rather than expecting a single open model to match a frontier generalist, the panel converged on an architecture in which a strong open agentic backbone orchestrates many specialised small language models — one good at comments, one good at a specific tool, one good at planning. Capability is distributed, not centralised.

> *"We don't need to be providing a recipe for carbonara and COBOL code in the same way."*

- **The open-vs-frontier gap, quantified.** Panelists estimated the current open-weight lag at 12–18 months on capability. A concrete benchmark was offered: a feature that a frontier closed model implements in roughly seven minutes takes a Kimi-class open model about thirty minutes; a 30B open model running locally on a five-year-old M1 Max needs about seven minutes "just to load the skill." History — the same closing arc visible in Llama, DeepSeek, Qwen — suggests these gaps close on an approximately eighteen-month cadence.

- **The agent contract.** The discussion of what makes an agent trustworthy was unusually concrete. Trust comes from context, goals, hooks, and a *second-opinion* pattern in which a different agent (often a different model family) reviews the first agent's output before action. One panelist argued the safer deliverable today is a *standalone, reproducible executable artefact* — code the user can keep, audit, and re-run — precisely because as long as model weights are not locally owned, code is the more durable contract.

- **The new licensing problem.** Existing open-source licenses regulate code use, modification, and distribution. They do not regulate behaviour, sub-agent spawning, or audit logs. Several panelists called for new licence categories specifically for agents that mandate auditable decision logs, behavioural constraints, and a documented chain of which sub-agents were invoked.

- **The role shift for engineers.** Software engineers are evolving from *excavators*, who dig within a small plot, to *agent herders* or *intelligence orchestrators*. Seniors must learn context engineering, MCP-style tool plumbing, and drift detection. Juniors face a harder transition: they must absorb, in the first year of their careers, the multi-tenancy, reliability, and security judgement that previously took a decade to develop, because from day one their job is *evaluating* agent output, not writing it from scratch.

- **The subsidy and data-flight problem.** Heavily subsidised usage of frontier APIs creates a quiet hand-off of private context to closed labs — context that becomes their next reasoning model's training data. The artificial smallness of today's cost gap is masking a deepening structural dependency.

## Notable Tensions

The panel did not converge on everything. Two fault lines were visible.

The first was *optimism about closing the gap*. Some panelists were confident that the 12–18-month open-vs-frontier lag is structurally bounded and will continue to close. Others noted that subsidised frontier usage, accumulating real-world reasoning data, and the deepening capital advantage of the closed-lab cohort could re-open the gap rather than close it.

The second was *agents in personal life*. One panelist enthusiastically delegated overnight workflows ("my agents in the bedroom were working for me"); another said: *"I still want to enjoy my life,"* and confined agent use to a narrow optimisation perimeter with mandatory cross-check supervision. Both views found support in the room. There was no consensus that more autonomy is automatically more progress.

## Recommendations


![Panel 1 — Recommendations: builder, foundation, and standards-body actions for the agentic stack.](infographics/panel-1-recs.png)
- Treat any black-box AI deployment as unacceptable infrastructure; demand transparency across all seven pillars of openness.
- Invest collectively in an open compute substrate — compiler, kernel DSL, operator library — so frontier open-weight models run on heterogeneous and prior-generation silicon, not only the newest chips.
- Adopt an "orchestrated fleet" agent architecture rather than chasing a single open frontier generalist.
- Pool underutilised data-centre compute into shared facilities for the Global South; the African Union ASRIC pilot across 11 countries was cited as a working seed model.
- Standardise inter-agent cooperation protocols and reliability/security guarantees through international bodies (ISO/IEC JTC1 SC42, ITU, IEEE) and national standards programmes; complement these with a new open-source licence category specifically for agents.
- Replicate frontier workflows on open-weight stacks now, even at a measurable performance penalty, to break the data-flight cycle.
- Use agents themselves to accelerate ecosystem adoption: have models learn new kernel DSLs and tooling so adoption is not gated on human developer learning curves.

## Vocabulary Introduced

| Term | Meaning |
|---|---|
| **CLAW Stack** | Compute, LLMs, Agents, Workflow — successor to LAMP |
| **Agentic Economy** | Successor framing to the SaaS / "AI is software" economy |
| **Seven Pillars of Open** | Science, data, standards, source, weights, platform, hardware |
| **White-box AI** | Inspectable algorithms and pipelines — the explicit contrast to "black box" |
| **Open Compute (agentic sense)** | Full-stack openness from compiler/LLVM through kernel DSL through operator library across heterogeneous AI chipsets, not just open weights |
| **Agent Herder / Intelligence Orchestrator** | Evolved software-engineer role |
| **Context Engineering** | The discipline of feeding agents the right context, tools, and hooks, and detecting drift |
| **Second-Opinion Agent** | Pattern of one agent (often a different model) reviewing another's output |
| **Agentic Licensing** | Proposed new open-source licence category regulating agent behaviour and mandating audit logs |

---

*This is one of four panels at the AI Vision Forum Paris 2026. Read the full forum report — including the executive summary, the Paris Synthesis cross-cutting themes, and Looking Forward — at [paris2026.visionforum.ai](https://paris2026.visionforum.ai/).*
