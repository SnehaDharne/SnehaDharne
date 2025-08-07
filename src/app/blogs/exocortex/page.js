import Image from "next/image"
import Layout from "@/components/Layout"

export default function ExocortexBlog() {
  return (
    <Layout>
      <main className="min-h-screen container mx-auto px-auto mt-10 bg-gradient-to-br from-[#f0f7ff] via-[#fff5f5] to-[#f5f0ff]">
        <div className="prose mx-auto p-6 lg:p-12">
          <h1 className="text-4xl text-slate-700 font-bold mb-6">
            Exocortex: Debate-Aware Scientific Reasoning with LLM Agents
          </h1>

          <p className="text-lg text-slate-700 leading-relaxed">
            Most scientific LLM use cases today involve summarizing papers or answering static questions. But science isn’t static—it evolves through structured disagreement, evidence synthesis, and iterative refinement. Exocortex is my attempt to bring that missing rigor into LLM pipelines. Inspired by Brookhaven National Lab’s Exocortex initiative, this prototype explores multi-agent debate loops, structured input normalization, and recursive critique workflows using CrewAI.
          </p>

          {/* Why Build Exocortex */}
          <h2 className="mt-10 text-2xl text-slate-700 font-semibold">Why Build This</h2>
          <p className="text-slate-700">
            Existing agent systems rely on single-pass outputs, surface-level RAG, or hallucination-prone summaries. But scientific reasoning demands:
          </p>
          <ul className="text-slate-700">
            <li>Structured inputs that capture nuance and contradictions</li>
            <li>Agents that don’t just answer, but argue</li>
            <li>Deliberation loops that converge toward better hypotheses</li>
          </ul>

          {/* Architecture Overview */}
          <h2 className="mt-10 text-2xl text-slate-700 font-semibold">Architecture Overview</h2>
          <p className="text-slate-700">
            The Exocortex prototype includes three key pieces: input normalization, a multi-agent debate loop, and an insight synthesizer. The goal? Move from "here’s what this paper says" to "here’s what we still don’t understand, and what we should test next."
          </p>

          <div className="flex justify-center text-slate-700 my-6">
            <Image
              src="/project/exocortex-arch.png"
              alt="Exocortex Architecture"
              width={1000}
              height={400}
              className="rounded-lg shadow-lg"
            />
          </div>

          {/* Input Normalization */}
          <h2 className="mt-10 text-2xl text-slate-700 font-semibold">1. Scientific Input Normalization</h2>
          <p className="text-black">
            You can’t run reasoning on soup. Before an agent touches anything, the input corpus (literature, logs, imaging metadata, protocols) is parsed and tagged using domain-adapted LLMs and NER tools. Think BioBERT + Gemini, mapping every chunk into a structured ontology.
          </p>

          <p className="text-black">
            These entities are stored in a queryable format that agents can reason over later. Human-in-the-loop checks prevent ontological drift and hallucinations.
          </p>

          {/* Agentic Debate Loop */}
          <h2 className="mt-10 text-2xl text-slate-700 font-semibold">2. Debate Loop with Support/Oppose/Synthesis</h2>
          <p className="text-black">
            The core of Exocortex is its adversarial debate. Instead of one-shot answers, we run structured argumentation:
          </p>
          <ul className="text-black">
            <li>SupportAgent fetches literature that aligns with a hypothesis</li>
            <li>OpposeAgent finds counterexamples or conflicts</li>
            <li>SynthesisAgent compares both, highlights contradictions, and suggests new experiments</li>
          </ul>

          <p className="text-black">
            All of this is logged and traceable. The prototype currently supports 1-pass debates, but recursive multi-round loops are next.
          </p>

          <div className="flex justify-center text-slate-700 my-6">
            <Image
              src="/project/exocortex-debate.png"
              alt="Exocortex Debate Loop"
              width={1000}
              height={400}
              className="rounded-lg shadow-lg p-4 m-4"
            />
            <Image
              src="/project/exocortex-debate2.png"
              alt="Exocortex Debate Loop"
              width={1000}
              height={400}
              className="rounded-lg shadow-lg p-4 m-4"
            />
          </div>

          {/* Lessons + Future Work */}
          <h2 className="mt-10 text-2xl text-slate-700 font-semibold">What’s Next</h2>
          <p className="text-black">
            Future work includes drift-triggered recursive debates, grounding against real lab logs and simulation metadata, and evaluating novelty of proposed hypotheses. I’m also testing science-native LLMs like SciPhi and exploring contrastive embedding clusters to identify argument families.
          </p>

          <p className="text-black">
            The long-term vision? Build a swarm of agents that doesn’t just repeat what’s known — but debates what’s *uncertain*, *wrong*, or *worth testing*.
          </p>

          {/* Call to Action */}
          <p className="mt-8 text-slate-700">
            Want to try it or collaborate? Full prototype is live on GitHub.
          </p>

          <a
            href="https://github.com/SnehaDharne/exocortex"
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