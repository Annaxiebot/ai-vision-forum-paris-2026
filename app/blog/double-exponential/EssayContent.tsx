"use client";

import Link from "next/link";
import { ArrowLeft, ArrowRight, FileText, Quote } from "lucide-react";
import { useTranslation } from "@/lib/i18n";

/**
 * Locale-aware essay body. The page route component handles metadata
 * (server boundary). We branch on `locale` here so users can toggle
 * EN / 中文 from the header globe icon and see the right version live.
 *
 * Note on approach: this essay is long and rich in inline emphasis
 * (<strong>, <em>), blockquotes, and a comparison table. Flattening
 * each paragraph into i18n string keys would shed those structural
 * cues. Parallel JSX bodies keep each language readable as prose.
 */
export function EssayContent() {
  const { locale } = useTranslation();
  if (locale === "cn") return <EssayCn />;
  return <EssayEn />;
}

function EssayEn() {
  return (
    <main className="bg-background pb-24 pt-28">
      {/* Hero */}
      <section className="border-b border-border bg-gradient-to-b from-primary/5 to-background">
        <div className="container mx-auto max-w-3xl px-4 py-14">
          <Link
            href="/report"
            className="mb-6 inline-flex items-center gap-1.5 text-sm font-medium text-muted-foreground transition hover:text-primary"
          >
            <ArrowLeft className="h-3.5 w-3.5" /> Back to the Forum Report
          </Link>
          <div className="mb-3 flex items-center gap-2">
            <span className="inline-block h-1 w-10 rounded-full bg-primary" />
            <span className="text-xs font-bold uppercase tracking-[0.18em] text-primary">
              Companion essay · May 2026
            </span>
          </div>
          <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Beyond the &ldquo;Double Exponential&rdquo;
          </h1>
          <p className="mt-2 text-xl text-foreground/75">
            5 Critical Takeaways from the 2026 AI Vision Forum
          </p>
          <p className="mt-6 text-sm text-muted-foreground">
            Published by the AI Vision Forum Organizing Committee — a companion essay to the full Forum Report.
          </p>
        </div>
      </section>

      <article className="container mx-auto max-w-3xl px-4 py-14 text-foreground/85">
        <header className="mb-10">
          <h2 className="mb-3 text-xl font-bold text-foreground">Introduction: The End of &ldquo;AI as Software&rdquo;</h2>
          <p className="mb-4">
            The pace of technological change has officially outrun our ability to forecast it, leading to a profound &ldquo;forecast error&rdquo; that has shaken the industry to its core. In 2017, a McKinsey survey of experts projected that certain AI capability benchmarks wouldn&rsquo;t be reached until 2040 or 2050. Those same benchmarks were met or exceeded by 2023 — a three-decade miscalculation in just six years.
          </p>
          <p>
            This is the &ldquo;double exponential&rdquo;: the compounding effect of Moore&rsquo;s Law, a data deluge, and accelerating algorithmic capabilities breaking every existing model of progress. At the AI Vision Forum Paris 2026 — a closed-door gathering of researchers and regulators held under the Chatham House Rule to foster <em>Engineered Trust</em> — the consensus was clear: the era of &ldquo;AI as software&rdquo; is dead. We are now entering an <strong>agentic economy</strong> where autonomous systems act, spawn sub-agents, and contribute to their own learning, moving beyond mere tools into the realm of active participants.
          </p>
        </header>

        <section className="mb-10 border-t border-border pt-10">
          <p className="mb-2 text-sm font-bold uppercase tracking-[0.18em] text-primary">Takeaway 1</p>
          <h2 className="mb-4 text-2xl font-bold text-foreground">The LAMP Stack is Dead, Long Live the &ldquo;CLAW&rdquo;</h2>
          <p className="mb-4">
            For twenty years, the LAMP stack (Linux, Apache, MySQL, PHP/Python) provided the architectural foundation of the internet. That foundation has been superseded by the <strong>CLAW stack: Compute, LLMs, Agents, and Workflow</strong>.
          </p>
          <p className="mb-4">
            While the &ldquo;open weights&rdquo; movement has made significant strides, the forum participants warned that weights alone are insufficient for true sovereignty. Sovereignty is a hollow victory if a model only speaks the dialect of the latest proprietary silicon. For instance, a flagship open-weights model released just days before the forum required specific precision found only on &ldquo;Blackwell-class&rdquo; chips, effectively stranding the world&rsquo;s existing &ldquo;Hopper-class&rdquo; inference capacity. It took a dedicated open-stack team three days to port that model across ten different chipsets using a cross-vendor substrate — a feat that highlights why we must defend the <strong>Seven Pillars of Open</strong>:
          </p>
          <ul className="mb-4 space-y-1 pl-6 marker:text-primary [&>li]:list-disc">
            <li><strong>Open Science</strong> — Published methods and reproducible results.</li>
            <li><strong>Open Data</strong> — Transparent training corpora and provenance.</li>
            <li><strong>Open Standards</strong> — Interoperable, royalty-free protocols.</li>
            <li><strong>Open Source</strong> — Code under recognized licenses.</li>
            <li><strong>Open Weights</strong> — Permissive model parameters.</li>
            <li><strong>Open Platform</strong> — Tooling and orchestration available to all.</li>
            <li><strong>Open Hardware</strong> — Specifications for silicon and accelerators.</li>
          </ul>
          <blockquote className="border-l-4 border-primary bg-primary/5 p-4 italic text-foreground/85">
            &ldquo;Open weights without an open compute substrate is a hollow victory.&rdquo;
          </blockquote>
        </section>

        <section className="mb-10 border-t border-border pt-10">
          <p className="mb-2 text-sm font-bold uppercase tracking-[0.18em] text-primary">Takeaway 2</p>
          <h2 className="mb-4 text-2xl font-bold text-foreground">&ldquo;Sovereign AI&rdquo; is Just Branding Without Cryptography</h2>
          <p className="mb-4">
            As compute costs continue their precipitous decline, the strategic &ldquo;moat&rdquo; is shifting. The value no longer accrues to those who serve the cheapest token, but to those who own the verification layer.
          </p>
          <p className="mb-4">
            The <strong>verifiability gap</strong> is widening: it is getting cheaper to run an AI, but increasingly expensive to prove what that AI actually did, what data it touched, and which chip processed the request. To bridge this gap, the forum proposed a three-tier model of verification:
          </p>
          <ol className="mb-4 space-y-1 pl-6 marker:font-bold marker:text-primary [&>li]:list-decimal">
            <li><strong>Self-verifiable</strong> — The model justifies its own output.</li>
            <li><strong>Independently verifiable</strong> — A third-party observer confirms the action.</li>
            <li><strong>Cryptographically verifiable</strong> — Tamper-resistant, contemporaneous evidence captured at hardware boundaries.</li>
          </ol>
          <blockquote className="border-l-4 border-primary bg-primary/5 p-4 italic text-foreground/85">
            &ldquo;Sovereign AI without cryptographic verification is just branding.&rdquo;
          </blockquote>
          <p className="mt-4">
            The most urgent technical requirement today is a <strong>deterministic control plane</strong>. We need binary-auditable evidence of an agent&rsquo;s behavior — captured at the moment of action — to replace model-vendor promises with mathematical certainty.
          </p>
        </section>

        <section className="mb-10 border-t border-border pt-10">
          <p className="mb-2 text-sm font-bold uppercase tracking-[0.18em] text-primary">Takeaway 3</p>
          <h2 className="mb-4 text-2xl font-bold text-foreground">The Junior Developer Pipeline is in Crisis</h2>
          <p className="mb-4">
            The job market is undergoing a radical bifurcation. While elite graduates command salaries of €150,000, the median graduate is struggling to find entry-level work. This isn&rsquo;t because models are failing; it&rsquo;s because our <em>cognitive design</em> is failing.
          </p>
          <p className="mb-4">
            <strong>Cognitive design</strong> is the discipline of fitting algorithmic tools to the way humans actually work. Currently, roughly <strong>19 out of 20</strong> enterprise AI pilots fail because they create a <em>Cognitive Black Hole</em> — a state where an organization&rsquo;s data is absorbed by an AI that never feeds insight back to the collective. The machine gets smarter, but the organization atrophies. To survive, education must shift from &ldquo;syntax&rdquo; to &ldquo;specification.&rdquo;
          </p>
          <div className="my-6 overflow-hidden rounded-lg border border-border">
            <table className="w-full border-collapse text-sm">
              <thead className="bg-primary text-primary-foreground">
                <tr>
                  <th className="p-3 text-left font-bold">Old Role: The Excavator</th>
                  <th className="p-3 text-left font-bold">New Role: The Agent Herder</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-border">
                  <td className="p-3 align-top"><strong>Focus:</strong> Syntax and syntactic fluency</td>
                  <td className="p-3 align-top"><strong>Focus:</strong> Specification and judgment</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="p-3 align-top"><strong>Task:</strong> Writing code from scratch</td>
                  <td className="p-3 align-top"><strong>Task:</strong> Orchestrating and evaluating agent output</td>
                </tr>
                <tr>
                  <td className="p-3 align-top"><strong>Skill:</strong> Solving isolated problems</td>
                  <td className="p-3 align-top"><strong>Skill:</strong> System-engineering and drift detection</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className="mb-10 border-t border-border pt-10">
          <p className="mb-2 text-sm font-bold uppercase tracking-[0.18em] text-primary">Takeaway 4</p>
          <h2 className="mb-4 text-2xl font-bold text-foreground">Friction is a Feature, Not a Bug</h2>
          <p className="mb-4">
            In the rush to make AI &ldquo;frictionless,&rdquo; we risk destroying the pedagogical basis of learning. The forum argued for <strong>friction-by-design</strong> — the intentional reintroduction of &ldquo;productive struggle&rdquo; into workflows.
          </p>
          <p className="mb-4">
            When AI removes all effort, we encounter the <em>calculator effect</em>, where essential human skills — writing, reasoning, and social negotiation — atrophy. This is particularly dangerous in adolescence, where using AI as a &ldquo;social substitute&rdquo; during identity formation can displace the critical practice of human conflict and negotiation.
          </p>
          <blockquote className="border-l-4 border-primary bg-primary/5 p-4 italic text-foreground/85">
            &ldquo;Training and learning cannot be easy. It can be fun, but not easy.&rdquo;
          </blockquote>
          <p className="mt-4">
            AI cannot yet replicate a teacher&rsquo;s <em>silent know-how</em> — the tacit craft of judging a hypothesis or sensing when a proof &ldquo;feels&rdquo; right. We must design systems that protect the struggle, ensuring the machine doesn&rsquo;t become a substitute for human growth.
          </p>
        </section>

        <section className="mb-10 border-t border-border pt-10">
          <p className="mb-2 text-sm font-bold uppercase tracking-[0.18em] text-primary">Takeaway 5</p>
          <h2 className="mb-4 text-2xl font-bold text-foreground">Tokens are the New Digital Public Good</h2>
          <p className="mb-4">
            Compute, expressed as &ldquo;tokens,&rdquo; is now a strategic resource equivalent to the electric grid. However, we must distinguish between <em>Free Tokens</em> — marketing funnels that monetize user data — and <em>Open Tokens</em> which are governed, transparent, and provenance-verifiable.
          </p>
          <p className="mb-4">
            The open-source ecosystem, currently &ldquo;held together with dental floss and gum,&rdquo; is under siege. AI-assisted code contributions have surged dramatically in just six months, burying human maintainers under an avalanche of unreviewed pull requests. To sustain this substrate, the <strong>Paris Initiative</strong> was established — a four-point commitment published on GitHub, covering:
          </p>
          <ol className="mb-4 space-y-1 pl-6 marker:font-bold marker:text-primary [&>li]:list-decimal">
            <li><strong>Tokens</strong> — Establishing neutrally-governed token pools.</li>
            <li><strong>Compute</strong> — Providing &ldquo;in-kind compute&rdquo; to students and the Global South.</li>
            <li><strong>Governance</strong> — Creating standards for environmental and provenance disclosure.</li>
            <li><strong>Global Access</strong> — Ensuring the digital substrate remains a public resource, not a corporate monopoly.</li>
          </ol>
        </section>

        <section className="border-t border-border pt-10">
          <h2 className="mb-4 text-2xl font-bold text-foreground">Conclusion: Replacing Implicit Trust with Engineered Trust</h2>
          <p className="mb-4">
            The <strong>Paris Synthesis</strong> posits that human–AI synergy is a contract, not a feeling. We cannot rely on implicit trust or the hope that autonomous systems will align with our values by default. Synergy requires explicit roles, verifiable identities, and auditable behavior.
          </p>
          <p className="mb-6">
            As we navigate the &ldquo;double exponential,&rdquo; we must build the open compute substrate and the deterministic control plane <em>now</em>. If we wait for parity between open and closed models, we will find ourselves trapped in a world where the human element has been optimized into obsolescence.
          </p>
          <div className="rounded-lg border-2 border-primary/30 bg-primary/5 p-6">
            <div className="mb-2 flex items-center gap-2 text-primary">
              <Quote className="h-4 w-4" />
              <span className="text-xs font-bold uppercase tracking-[0.18em]">Final ponderable</span>
            </div>
            <p className="text-base italic text-foreground/90">
              As AI becomes more autonomous, are we designing systems that help us grow, or are we simply building a &ldquo;cognitive black hole&rdquo; where the machine gets smarter while we disappear?
            </p>
          </div>
        </section>

        <nav className="mt-14 flex flex-wrap items-center justify-between gap-4 border-t border-border pt-8 text-sm">
          <Link
            href="/report"
            className="inline-flex items-center gap-1.5 font-semibold text-primary hover:underline"
          >
            <FileText className="h-4 w-4" /> Read the full Forum Report
          </Link>
          <Link
            href="/initiative"
            className="inline-flex items-center gap-1.5 font-semibold text-primary hover:underline"
          >
            Sign the Paris Initiative <ArrowRight className="h-4 w-4" />
          </Link>
        </nav>
      </article>
    </main>
  );
}

function EssayCn() {
  return (
    <main className="bg-background pb-24 pt-28">
      {/* Hero */}
      <section className="border-b border-border bg-gradient-to-b from-primary/5 to-background">
        <div className="container mx-auto max-w-3xl px-4 py-14">
          <Link
            href="/report"
            className="mb-6 inline-flex items-center gap-1.5 text-sm font-medium text-muted-foreground transition hover:text-primary"
          >
            <ArrowLeft className="h-3.5 w-3.5" /> 返回论坛报告
          </Link>
          <div className="mb-3 flex items-center gap-2">
            <span className="inline-block h-1 w-10 rounded-full bg-primary" />
            <span className="text-xs font-bold uppercase tracking-[0.18em] text-primary">
              配套文章 · 2026 年 5 月
            </span>
          </div>
          <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            超越&ldquo;双指数&rdquo;
          </h1>
          <p className="mt-2 text-xl text-foreground/75">
            2026 AI Vision Forum 的五条关键启示
          </p>
          <p className="mt-6 text-sm text-muted-foreground">
            由 AI Vision Forum 组委会发布——本文是完整论坛报告的配套文章。
          </p>
        </div>
      </section>

      <article className="container mx-auto max-w-3xl px-4 py-14 text-foreground/85">
        <header className="mb-10">
          <h2 className="mb-3 text-xl font-bold text-foreground">引言：&ldquo;AI 即软件&rdquo;时代的终结</h2>
          <p className="mb-4">
            技术变革的速度已经正式超出了我们的预测能力，由此产生的深刻&ldquo;预测误差&rdquo;动摇了行业根基。2017 年，麦肯锡对专家进行的一项调查预测，某些 AI 能力基准要到 2040 年或 2050 年才能达到。而到 2023 年，这些基准已被达到或超越——三十年的预测误差，在短短六年内显现。
          </p>
          <p>
            这就是&ldquo;双指数&rdquo;：摩尔定律、数据洪流与算法能力加速三者的复合效应，打破了一切既有的进步模型。在 AI Vision Forum 巴黎 2026——一场依据查塔姆宫规则召开的研究者与监管者闭门会议，旨在培育<em>工程化信任</em>——上，共识非常清晰：&ldquo;AI 即软件&rdquo;的时代已经结束。我们正进入<strong>智能代理经济</strong>，自主系统在其中行动、产生子代理、并参与自身学习——它们已不再是工具，而是行动的参与者。
          </p>
        </header>

        <section className="mb-10 border-t border-border pt-10">
          <p className="mb-2 text-sm font-bold uppercase tracking-[0.18em] text-primary">启示一</p>
          <h2 className="mb-4 text-2xl font-bold text-foreground">LAMP 已死，&ldquo;CLAW&rdquo; 当立</h2>
          <p className="mb-4">
            二十年来，LAMP 堆栈（Linux、Apache、MySQL、PHP/Python）一直是互联网的架构基石。如今，它已被 <strong>CLAW 堆栈所取代：Compute（算力）、LLM（大模型）、Agents（智能代理）与 Workflow（工作流）</strong>。
          </p>
          <p className="mb-4">
            尽管&ldquo;开放权重&rdquo;运动取得了长足进展，论坛参与者警告说：仅有权重不足以实现真正的主权。如果一个模型只能讲最新专有芯片的方言，这种主权就是空洞的胜利。例如，就在论坛召开前几天发布的一款旗舰开放权重模型，要求使用仅在&ldquo;Blackwell 级&rdquo;芯片上才有的特定精度，实际上将全球现有的&ldquo;Hopper 级&rdquo;推理能力闲置一旁。一支专门的开放堆栈团队花了三天时间，借助跨厂商基底，将该模型移植到十种不同的芯片组上——这一壮举凸显了我们必须捍卫<strong>开放的七大支柱</strong>：
          </p>
          <ul className="mb-4 space-y-1 pl-6 marker:text-primary [&>li]:list-disc">
            <li><strong>开放科学</strong> —— 公开发布方法与可复现结果。</li>
            <li><strong>开放数据</strong> —— 透明的训练语料与数据溯源。</li>
            <li><strong>开放标准</strong> —— 可互操作、免版税的协议。</li>
            <li><strong>开放源码</strong> —— 采用公认许可证的代码。</li>
            <li><strong>开放权重</strong> —— 宽松授权的模型参数。</li>
            <li><strong>开放平台</strong> —— 所有人都能使用的工具与编排。</li>
            <li><strong>开放硬件</strong> —— 芯片与加速器的规格说明。</li>
          </ul>
          <blockquote className="border-l-4 border-primary bg-primary/5 p-4 italic text-foreground/85">
            &ldquo;没有开放算力基底的开放权重，是空洞的胜利。&rdquo;
          </blockquote>
        </section>

        <section className="mb-10 border-t border-border pt-10">
          <p className="mb-2 text-sm font-bold uppercase tracking-[0.18em] text-primary">启示二</p>
          <h2 className="mb-4 text-2xl font-bold text-foreground">没有密码学的&ldquo;主权 AI&rdquo;只是营销话术</h2>
          <p className="mb-4">
            随着算力成本急剧下降，战略&ldquo;护城河&rdquo;正在转移。价值不再归于提供最便宜 token 的人，而归于掌握验证层的人。
          </p>
          <p className="mb-4">
            <strong>可验证性鸿沟</strong>正在拉大：运行 AI 越来越便宜，但证明该 AI 实际做了什么、接触了哪些数据、由哪块芯片处理，却越来越昂贵。为了弥合这一鸿沟，论坛提出了三层验证模型：
          </p>
          <ol className="mb-4 space-y-1 pl-6 marker:font-bold marker:text-primary [&>li]:list-decimal">
            <li><strong>自我可验证</strong> —— 模型为自己的输出给出理由。</li>
            <li><strong>独立可验证</strong> —— 第三方观察者确认该行为。</li>
            <li><strong>密码学可验证</strong> —— 在硬件边界处捕获的、防篡改、同时间发生的证据。</li>
          </ol>
          <blockquote className="border-l-4 border-primary bg-primary/5 p-4 italic text-foreground/85">
            &ldquo;没有密码学验证的主权 AI，只是营销话术。&rdquo;
          </blockquote>
          <p className="mt-4">
            当前最紧迫的技术需求是一个<strong>确定性控制平面</strong>。我们需要在行动发生的当下捕获、可二进制审计的代理行为证据，以数学确定性取代模型厂商的承诺。
          </p>
        </section>

        <section className="mb-10 border-t border-border pt-10">
          <p className="mb-2 text-sm font-bold uppercase tracking-[0.18em] text-primary">启示三</p>
          <h2 className="mb-4 text-2xl font-bold text-foreground">初级开发者管道正面临危机</h2>
          <p className="mb-4">
            就业市场正在发生剧烈分化。一边是顶尖毕业生年薪 15 万欧元，一边是中位数毕业生连入门级岗位都难以找到。这不是因为模型在失灵，而是因为我们的<em>认知设计</em>在失灵。
          </p>
          <p className="mb-4">
            <strong>认知设计</strong>是把算法工具与人类实际工作方式相匹配的学科。目前，企业 AI 试点项目中大约<strong>每 20 个就有 19 个失败</strong>，原因是它们造成了<em>认知黑洞</em>——组织的数据被 AI 吸收，但洞察从未回流到集体之中。机器变得更聪明，组织却日渐衰弱。要存活下来，教育必须从&ldquo;语法&rdquo;转向&ldquo;规格&rdquo;。
          </p>
          <div className="my-6 overflow-hidden rounded-lg border border-border">
            <table className="w-full border-collapse text-sm">
              <thead className="bg-primary text-primary-foreground">
                <tr>
                  <th className="p-3 text-left font-bold">旧角色：挖掘机</th>
                  <th className="p-3 text-left font-bold">新角色：代理牧人</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-border">
                  <td className="p-3 align-top"><strong>关注：</strong>语法与句法流畅度</td>
                  <td className="p-3 align-top"><strong>关注：</strong>规格说明与判断力</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="p-3 align-top"><strong>任务：</strong>从零开始写代码</td>
                  <td className="p-3 align-top"><strong>任务：</strong>编排并评估代理产出</td>
                </tr>
                <tr>
                  <td className="p-3 align-top"><strong>技能：</strong>解决孤立的问题</td>
                  <td className="p-3 align-top"><strong>技能：</strong>系统工程与漂移检测</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className="mb-10 border-t border-border pt-10">
          <p className="mb-2 text-sm font-bold uppercase tracking-[0.18em] text-primary">启示四</p>
          <h2 className="mb-4 text-2xl font-bold text-foreground">摩擦是特性，不是缺陷</h2>
          <p className="mb-4">
            在让 AI&ldquo;无摩擦&rdquo;的狂奔中，我们有可能摧毁学习的教学根基。论坛主张<strong>有意为之的摩擦</strong>——在工作流中刻意重新引入&ldquo;有成效的挣扎&rdquo;。
          </p>
          <p className="mb-4">
            当 AI 拿走一切努力，我们就遭遇了<em>计算器效应</em>——写作、推理、社交协商等核心人类能力开始萎缩。这一现象在青春期尤为危险：在身份形成阶段把 AI 当作&ldquo;社交替代品&rdquo;，会取代人类冲突与协商这一关键的实践过程。
          </p>
          <blockquote className="border-l-4 border-primary bg-primary/5 p-4 italic text-foreground/85">
            &ldquo;训练和学习不能轻松。它可以有趣，但不能轻松。&rdquo;
          </blockquote>
          <p className="mt-4">
            AI 目前还无法复制教师的<em>沉默的知道如何</em>——那种判断一个假设、感受到一份证明是否&ldquo;对劲&rdquo;的隐性手艺。我们必须设计能保护&ldquo;挣扎&rdquo;的系统，确保机器不会成为人类成长的替代品。
          </p>
        </section>

        <section className="mb-10 border-t border-border pt-10">
          <p className="mb-2 text-sm font-bold uppercase tracking-[0.18em] text-primary">启示五</p>
          <h2 className="mb-4 text-2xl font-bold text-foreground">Token 是新的数字公共产品</h2>
          <p className="mb-4">
            以&ldquo;token&rdquo;形式表达的算力，如今已是一种战略资源，地位堪比电网。但我们必须区分<em>免费 Token</em>——本质上是变现用户数据的营销漏斗——与<em>开放 Token</em>——经过治理、透明、可溯源验证。
          </p>
          <p className="mb-4">
            开源生态目前&ldquo;靠牙线和口香糖勉强维系&rdquo;，正处于围困之中。在短短六个月里，AI 辅助的代码贡献激增，把人类维护者埋在了未经审查的 Pull Request 之下。为了维系这一基底，<strong>巴黎倡议</strong>应运而生——这是一份发布于 GitHub 的四点承诺，涵盖：
          </p>
          <ol className="mb-4 space-y-1 pl-6 marker:font-bold marker:text-primary [&>li]:list-decimal">
            <li><strong>Token</strong> —— 建立中立治理的 token 资源池。</li>
            <li><strong>算力</strong> —— 为学生和全球南方提供&ldquo;实物算力&rdquo;。</li>
            <li><strong>治理</strong> —— 为环境与溯源披露建立标准。</li>
            <li><strong>全球获取</strong> —— 确保数字基底保持为公共资源，而非企业垄断。</li>
          </ol>
        </section>

        <section className="border-t border-border pt-10">
          <h2 className="mb-4 text-2xl font-bold text-foreground">结语：用工程化信任取代隐含信任</h2>
          <p className="mb-4">
            <strong>巴黎综合论</strong>主张，人机协同是一份契约，而非一种感觉。我们不能依赖隐含的信任，也不能寄望于自主系统会默认与我们的价值观对齐。协同需要明确的角色、可验证的身份与可审计的行为。
          </p>
          <p className="mb-6">
            在我们穿越&ldquo;双指数&rdquo;的过程中，必须<em>现在</em>就构建开放算力基底与确定性控制平面。如果我们等到开放模型与封闭模型达到对等才动手，就会发现自己被困在一个&ldquo;人类要素已被优化至消失&rdquo;的世界里。
          </p>
          <div className="rounded-lg border-2 border-primary/30 bg-primary/5 p-6">
            <div className="mb-2 flex items-center gap-2 text-primary">
              <Quote className="h-4 w-4" />
              <span className="text-xs font-bold uppercase tracking-[0.18em]">最终思考</span>
            </div>
            <p className="text-base italic text-foreground/90">
              当 AI 变得越来越自主，我们究竟是在设计帮助人类成长的系统，还是仅仅在构建一个&ldquo;认知黑洞&rdquo;——机器越来越聪明，而我们日益消失？
            </p>
          </div>
        </section>

        <nav className="mt-14 flex flex-wrap items-center justify-between gap-4 border-t border-border pt-8 text-sm">
          <Link
            href="/report"
            className="inline-flex items-center gap-1.5 font-semibold text-primary hover:underline"
          >
            <FileText className="h-4 w-4" /> 阅读完整论坛报告
          </Link>
          <Link
            href="/initiative"
            className="inline-flex items-center gap-1.5 font-semibold text-primary hover:underline"
          >
            签署巴黎倡议 <ArrowRight className="h-4 w-4" />
          </Link>
        </nav>
      </article>
    </main>
  );
}
