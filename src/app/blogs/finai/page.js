import Image from "next/image"
import Layout from "@/components/Layout"

export default function FinAIBlog() {
  return (
    <Layout>
      <main className="min-h-screen container mx-auto px-auto mt-10 bg-gradient-to-br from-[#f0f7ff] via-[#fff5f5] to-[#f5f0ff]">
        <div className="prose mx-auto p-6 lg:p-12">
          <h1 className="text-4xl text-slate-700 font-bold mb-6">
            FinAI Copilot: Multi‑Agent Financial Report Generator
          </h1>

          <p className="text-lg text-slate-700 leading-relaxed">
            Analysts typically spend days pulling data and drafting financial reports from dense SEC filings—copy‑pasting, calculating KPIs, juggling spreadsheets. FinAI Copilot is my answer: a modular, multi‑agent system that automates financial insights and report generation end-to-end.
          </p>

          {/* Why Build FinAI */}
          <h2 className="mt-10 text-2xl text-slate-700 font-semibold">Why Build This</h2>
          <p className="text-slate-700">
            Standard LLM agents struggle with accuracy, math errors, and untraceable logic. FinAI Copilot was built to:
          </p>
          <ul className="text-slate-700">
            <li>Automate extraction and calculation from 10-K/10-Q documents</li>
            <li>Run structured multi-agent workflows instead of single-shot prompts</li>
            <li>Maintain audit trails so the reasoning chain stays transparent</li>
          </ul>

          {/* Architecture */}
          <h2 className="mt-10 text-2xl text-slate-700 font-semibold">Architecture Overview</h2>
          <p className="text-slate-700">
            This system uses separate agents for extraction, calculation, reporting, and logging. They work sequentially and independently to reduce hallucination and keep KPIs bulletproof.
          </p>

          {/* Agent Breakdown */}
          <h2 className="mt-10 text-2xl text-slate-700 font-semibold">Agent Roles & Flow</h2>
          <ul className="text-black">
            <li><strong>Extractor Agent</strong> — Chain‑of‑Thought parser that reads tables and metrics</li>
            <li><strong>NLU Agent</strong> — Builds calculation tasks for KPI generation</li>
            <li><strong>Graph Agent/Visualizer</strong> — Auto‑plots charts and visuals (via seaborn)</li>
            <li><strong>Transparency Agent</strong> — Logs execution lineage from extraction → calculation → insights</li>
          </ul>

          <p className="text-slate-700">
            All agents feed structured JSON output, so each step is auditable. That architecture turned a process that usually takes ~8 hours into under 30 minutes.
          </p>

          {/* Lessons Learned */}
          <h2 className="mt-10 text-2xl text-slate-700 font-semibold">What I Learned</h2>
          <p className="text-slate-700">
            Building this taught me the importance of modular design and auditability in financial AI tools. Once we separated tasks into discreet agents, debugging became easier, KPIs stayed accurate, and adding new document types or tools became seamless.
          </p>

          {/* Future roadmap */}
          <h2 className="mt-10 text-2xl text-slate-700 font-semibold">Next Steps</h2>
          <p className="text-slate-700">
            I’m working toward:
          </p>
          <ul className="text-slate-700">
            <li>Parallelizing agent runs to cut latency even further</li>
            <li>Adding external data feeds (e.g. market APIs, earnings calls transcripts)</li>
            <li>Evaluating domain‑specific embedding models & validation agents</li>
          </ul>

          {/* CTA */}
          <p className="mt-8 text-slate-700">
            If you’re curious about how AI agents can scale financial analysis or automate investor workflows—this is open‑source and ready for collab.
          </p>

          <a
            href="https://github.com/SnehaDharne/FinancialReportGeneratorGenAI"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-4 px-6 py-3 bg-[#4a90e2] text-white rounded-lg shadow hover:bg-[#357abd] transition"
          >
            View Code on GitHub
          </a>
        </div>
      </main>
    </Layout>
  )
}
