import Image from "next/image"
import Layout from "@/components/Layout"

export default function ChatMLBlog() {
  return (
    <Layout>
      <div className="prose mx-auto p-6 lg:p-12">
        <h1 className="text-4xl font-bold mb-4">
          ChatML: Crash Course on RAG and Machine Learning
        </h1>

        <p className="text-lg">
          Retrieval Augmented Generation (RAG) lets us combine language models
          with external documentation. In this example, we enhance Gemini with
          scikit‑learn docs to answer questions about model parameters and even
          run small experiments without any heavy frameworks.
        </p>

        {/* Architecture */}
        <h2 className="mt-10 text-2xl font-semibold">Architecture Overview</h2>
        <div className="flex justify-center my-6">
          <Image
            src="/project/chatml-arch.png"
            alt="ChatML RAG Architecture"
            // width={800}
            width = {1000}
            height={400}
            className="rounded-lg shadow-lg"
          />
        </div>

        <p>
          The flow has two layers: a lightweight RAG pipeline for retrieving
          relevant documentation, and an executor that can train and test models
          based on chat output.
        </p>

        {/* RAG Pipeline */}
        <h2 className="mt-10 text-2xl font-semibold">1. RAG Pipeline</h2>
        <p>
          We build two core functions instead of relying on LangChain or CrewAI:
        </p>

        <ul>
          <li>
            <code>load_context()</code> fetches and embeds scikit‑learn docs with
            FastEmbed and queries them with Qdrant.
          </li>
          <li>
            <code>rag()</code> merges retrieved context, chat history, and the
            user’s question, then passes it to Gemini.
          </li>
        </ul>

        <pre className="bg-gray-900 text-white p-4 rounded-lg overflow-x-auto text-sm">
{`def load_context(model, question):
    # Fetch relevant scikit-learn doc for given model
    # Split into chunks, embed, query with Qdrant
    return context

def rag(chat_history, question, model):
    context = load_context(model, question)
    prompt = f"Use this context to answer: {context}\\nQuestion: {question}"
    return gemini.generate(prompt)
`}
        </pre>

        {/* Executor */}
        <h2 className="mt-10 text-2xl font-semibold">2. Executor for ML Models</h2>
        <p>
          The executor parses model parameters from Gemini’s JSON output and
          runs a training/testing cycle using scikit‑learn. It returns metrics
          like accuracy and a classification report.
        </p>

        <pre className="bg-gray-900 text-white p-4 rounded-lg overflow-x-auto text-sm">
{`def run_model_from_json(json_payload):
    # Parse model type and parameters
    # Train and evaluate on sample data
    return {
        "accuracy": 0.92,
        "report": "classification report text"
    }
`}
        </pre>

        {/* Takeaway */}
        <h2 className="mt-10 text-2xl font-semibold">Key Takeaway</h2>
        <p>
          This approach keeps the pipeline modular: context loading, prompt
          building, and execution are separated so you can swap components
          without breaking the whole system. It is lightweight and easy to
          extend.
        </p>

        <a
          href="https://github.com/SnehaDharne/chatml"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-8 px-6 py-3 bg-[#4a90e2] text-white rounded-lg shadow hover:bg-[#357abd] transition"
        >
          View Full Code on GitHub
        </a>
      </div>
    </Layout>
  )
}
