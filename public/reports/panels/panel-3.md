---
title: "Trusted Agentic AI — Governance, Safety & Sovereignty"
panel: 3
forum: "AI Vision Forum Paris 2026"
date: "4 May 2026"
location: "Paris, France"
chatham_house_rule: true
---

# Panel 3 — Trusted Agentic AI

![Panel 3 — Trusted Agentic AI: panel 3 visual summary.](infographics/panel-3.png)

## Governance, Safety & Sovereignty

*From the AI Vision Forum Paris 2026 · 4 May 2026 · Conducted under the Chatham House Rule*

---

The afternoon's third panel turned from how to build agentic systems to how to verify what they do. With perspectives spanning Europe, Asia-Pacific, and North America, the discussion produced one of the day's most lasting working artefacts: a taxonomy for what *Proof of Control* could mean in practice.

## The Frame

The panel was framed as a strategic, present-tense concern, not a future-philosophical exercise. The goal it articulated: *autonomous enough to be useful, governed enough to be safe.* Traditional, centralised, static governance — the model under which most product-safety regulation evolved — does not apply when agents routinely spawn sub-agents, recompose themselves at run time, and cross jurisdictional boundaries mid-task.

The panel deliberately spanned three regions. Each brought a different default: Europe its regulatory primacy and the AI Act; Asia-Pacific its scale and rapid deployment; North America its concentration of frontier capability. The panel's chosen artefact for the day was not a slide deck but a concrete protocol — a working, OpenFlow-style shared "conversational floor" for multi-agent message-passing, with standardised formats, on which the team had run experiments with hundreds of crafted prompts to test mitigation of hallucination and prompt injection.

The single line that anchored the panel:

> *"The problem is not automation itself. The problem is we no longer have a clear basis for trust."*

## What Trust Means When Agents Spawn Agents

The panel's substantive arguments stacked in a logical progression:

- **Agents exceed their intended purpose by construction.** "Intended purpose" is a foundational concept in product-safety regulation. Agentic systems systematically operate beyond the deployment envelope assumed at design time, so static pre-market conformity assessments cannot meaningfully validate them.

> *"Agentic AI is going beyond the deployment you had in mind when you designed the technology."*

- **The inspector-regress problem.** Multi-agent supervisor architectures introduce a recursion: the inspector cannot be the same model it inspects, and then the inspector itself must be supervised. This produces a regulatory chain without an obvious terminator.

- **Agent identity is a bundle, not a label.** It is not enough to know *which agent* acted. The accountability claim required by every major regulatory regime — EU, US, China — needs *which agent, in which role, under which policy, in which jurisdiction*. Identity must be a verifiable, multi-attribute credential, especially across open ecosystems (a bank agent calling an insurance agent calling a credit-scoring agent), not only inside closed full-stack ones.

> *"It's not enough to say an agent did it. You must know which agent, in which role, under which policy, and under which jurisdiction."*

- **Authentication is not authorisation.** OAuth was built for a human-initiated web. Agentic systems are machine-to-machine; they require delegation primitives, verifiable relationship credentials, and decentralised identity — technologies that already exist but have been siloed in the decentralised-tech world and not yet integrated into mainstream agent stacks.

> *"Authentication just tells you that we've connected. Authorization is about delegation — and OAuth was made for a human-initiated world."*

- **Open source itself is at risk.** Maintainers can no longer tell whether a pull request comes from a human or an agent. Several incidents — including ones in the Linux kernel ecosystem — have made human-versus-agent authorisation a live integrity question. *Verifiable relationship credentials* are being adopted in maintainer workflows precisely for this reason.

- **The EU AI Act collides with agentic reality.** The Act's obligations — human oversight, robustness, accuracy, fairness — interact and trade off against one another. Higher accuracy can lower the human-oversight burden; stronger fairness can collide with accuracy. There are no single thresholds that satisfy all of these obligations simultaneously for an agentic system. Harmonised standards must shift from *fixed metrics* to *process-and-procedure auditing*: the provider justifies their chosen balance and the regulator audits the justification.

- **Sovereign AI without cryptography is branding.** True sovereignty requires provable data residency, provable compute location (down to the specific chip), and tamper-evident attestation. A domestic vendor logo is not a substitute.

> *"Sovereign AI without cryptographic verification is just branding."*

- **A practical taxonomy of verification.** The panel proposed a tiered model with three categories — *self-verifiable*, *independently verifiable*, *cryptographically verifiable* — across five dimensions: privacy, portability, verifiability, security, identity. The critical structural property: the verifier must be *independent* of the operator and the model vendor. No self-attestation.

- **Logs are not enough.** Logs can be tampered with after the fact. Meaningful human oversight requires *tamper-resistant, contemporaneous, binary-auditable* evidence captured at the moments that matter — every data boundary, every authentication/delegation event, every payment settlement. The panel named this artefact a *deterministic control plane*.

- **Standards must be global; regulation can stay regional.** Ecosystems will diverge on policy. They cannot diverge on the technical standards for identity, traceability, and verification — or "sovereignty" will collapse into vendor lock-in and cross-border agent traffic will become unsafe by construction.

- **Verification is the new economic moat.** As compute cost falls, the cost and importance of verification rises. The value will accrue to whoever owns the trusted control plane, not to whoever serves the cheapest token.

> *"Verification is the new moat as the cost of compute goes down."*

## Tensions

- **Reopen the EU AI Act, or work within it?** Some argued the Act's product-safety frame structurally cannot accommodate agents; others warned that reopening invites years of political delay before existing provisions are even fully implemented.

- **Worst-case conformity assessment vs. sandboxed experimentation.** An audience contributor proposed simply forcing every agentic system into the high-risk regulatory bucket. The panel pushed back: we do not yet know enough cases to define "worst case," and a blanket high-risk classification would drive innovators out of the jurisdiction without making any system safer.

- **Is the AI Act actually the binding constraint?** A founder in the audience argued that the real blocker for deployment is *that customers don't trust the systems at all*, regulation notwithstanding. Verification infrastructure, not compliance paperwork, is the demand.

- **Investment imbalance disguised as safety posture.** Europe's roughly 10× smaller AI capital base relative to the United States was cited as the deeper reason for European risk aversion. The regulation-versus-innovation debate, on this reading, is really a capital-availability debate in disguise.

- **National-data sovereignty vs. distributional AGI.** One framing emphasised data residency and domestic stack ownership. Another emphasised that AGI-class capability will emerge from *international collaboration of specialised sub-agents*, requiring shared interoperability primitives — and that excessive national isolation will leave countries unable to participate.

## Recommendations


![Panel 3 — Recommendations: builder, regulator, and insurance-industry actions for trusted agents.](infographics/panel-3-recs.png)
- **Builders.** Treat agent identity as a bundle of verifiable claims — role, policy, jurisdiction, delegation chain — and adopt cryptographic, decentralised identity primitives rather than retrofitting OAuth.
- **Builders.** Design multi-agent systems on open, transparent message-passing protocols with shared conversational floors so coordination is portable and inspectable, not vendor-locked.
- **Regulators (EU).** Do not reopen the AI Act for agentic AI yet. Push harmonised standards toward process-and-procedure auditing with provider-justified thresholds. Use regulatory sandboxes — including reinforcement-learning-based simulated regulators — to learn empirically how obligations interact.
- **Regulators globally.** Align on technical standards (identity, traceability, verification) even where policy diverges. Fragmented standards are the real failure mode.
- **Enterprises and nation-states pursuing sovereign AI.** Demand cryptographic, tamper-evident, post-quantum-ready attestations of data residency and compute lineage. Refuse "branding sovereignty."
- **Insurance industry.** Become a first-class stakeholder in defining verifiability standards. Liability allocation is the ultimate enforcement mechanism.
- **Open-source maintainer communities.** Adopt human-versus-agent authorisation standards (verifiable relationship credentials are being integrated into the Linux kernel maintainer workflow) before agent-written PRs erode upstream trust.
- **Standards bodies.** Separate the model vendor from the verifier. No self-attestation by the operator; require independent, externally inspectable proof.

## Vocabulary Introduced

| Term | Meaning |
|---|---|
| **Trustworthy AI Services Factory** | EU HPC-based environment for pre-market testing/validation of AI systems |
| **OpenFlow protocol / conversational floor** | Open standard for multi-agent message passing and orchestration |
| **Verifiability gap** | The widening delta between falling compute cost and stable/rising cost of verifying what AI actually did |
| **Proof of Control** | Proposed standard/certification framework spanning three verification tiers (self, independent, cryptographic) and five dimensions (privacy, portability, verifiability, security, identity) |
| **Deterministic control plane** | Binary, contemporaneous, tamper-evident auditable checks at every data boundary, authentication event, and payment settlement |
| **Distributional AGI** | AGI capability conceived as emerging from international collaboration of specialised sub-agents rather than from a single sovereign model |
| **Verifiable Relationship Credentials (VRCs)** | Cryptographic primitives being adopted for human-vs-agent authorisation |
| **Branding sovereignty** | Pejorative for sovereign AI claims unsupported by cryptographic data-residency and compute-lineage proofs |
| **Regulatory regress** | The recursive supervision problem where every inspector agent itself needs an inspector |

---

*This is one of four panels at the AI Vision Forum Paris 2026. Read the full forum report — including the executive summary, the Paris Synthesis cross-cutting themes, and Looking Forward — at [paris2026.visionforum.ai](https://paris2026.visionforum.ai/).*
