import Image from "next/image"
import Layout from "@/components/Layout"

export default function ChatMLBlog() {
  return (
    <Layout>
      <div className="prose mx-auto p-6 lg:p-12">
        <h1 className="text-4xl font-bold mb-6">
          ChatML: Building Lightweight RAG Pipelines Without LangChain
        </h1>

        <p className="text-lg leading-relaxed">
          Most LLM frameworks promise speed and convenience, but in practice they often
          introduce overhead and unnecessary abstractions. While experimenting with
          scikit‑learn documentation, I wanted something simple enough to reason about
          yet flexible enough to scale into real projects. This post covers how I built
          ChatML, a minimal retrieval augmented generation pipeline paired with a direct
          executor for running machine learning experiments.
        </p>

        {/* Why Build ChatML */}
        <h2 className="mt-10 text-2xl font-semibold">Why Build This</h2>
        <p>
          LangChain and other orchestration frameworks can be great for prototypes, but
          they impose specific agent structures and add complexity when all you need is
          a few clean functions. I wanted:
        </p>
        <ul>
          <li>A small codebase that anyone can read in one sitting</li>
          <li>Explicit control over retrieval, prompt construction, and execution</li>
          <li>Easy debugging and extension without hidden magic</li>
        </ul>

        {/* Architecture */}
        <h2 className="mt-10 text-2xl font-semibold">Architecture Overview</h2>
        <p>
          The system has two core layers. The first is a lightweight RAG pipeline that
          retrieves context from scikit‑learn docs and feeds it to Gemini. The second is
          an executor that takes structured JSON from the LLM and runs quick experiments
          using scikit‑learn models. Both components are independent but can be combined
          for richer answers.
        </p>

        <div className="flex justify-center my-6">
          <Image
            src="/project/chatml-arch.png"
            alt="ChatML RAG Architecture"
            width={1000}
            height={400}
            className="rounded-lg shadow-lg"
          />
        </div>

        {/* RAG Layer */}
        <h2 className="mt-10 text-2xl font-semibold">1. RAG Layer</h2>
        <p>
          Instead of using wrappers, ChatML provides two core functions:
        </p>
        <ul>
          <li>
            <code>load_context()</code> to embed scikit‑learn documentation with FastEmbed
            and retrieve relevant sections via Qdrant
          </li>
          <li>
            <code>rag()</code> to merge context, chat history, and user queries before
            sending the final prompt to Gemini
          </li>
        </ul>

        <pre className="bg-gray-900 text-white p-4 rounded-lg overflow-x-auto text-sm">
{`async function loadContext(query) {
  const embeddings = await fastembed.embed(query)
  const results = await qdrant.query(embeddings)
  return results.context
}

async function getAnswer(question, chatHistory) {
  const context = await loadContext(question)
  const prompt = \`
Use this context to answer the question:
\${context}
Question: \${question}
\`
  const response = await gemini.generate(prompt)
  return response.text
}`}
        </pre>

        {/* Executor */}
        <h2 className="mt-10 text-2xl font-semibold">2. Executor Layer</h2>
        <p>
          The executor extends the pipeline by allowing Gemini to output structured JSON
          describing an experiment to run. This JSON is parsed and executed with scikit‑learn
          directly, producing metrics like accuracy or a classification report.
        </p>

        <pre className="bg-gray-900 text-white p-4 rounded-lg overflow-x-auto text-sm">
{`async function executor(modelName, params, X_train, y_train, X_test, y_test) {
  const model = new sklearn[modelName](params)
  model.fit(X_train, y_train)
  const predictions = model.predict(X_test)
  return {
    accuracy: accuracy_score(y_test, predictions),
    report: classification_report(y_test, predictions)
  }
}`}
        </pre>

        {/* Lessons Learned */}
        <h2 className="mt-10 text-2xl font-semibold">What I Learned</h2>
        <p>
          Building this without frameworks taught me how LLM pipelines really work under
          the hood. I gained a deeper understanding of retrieval, prompt construction,
          and structured output parsing. These are skills that translate to more complex
          agentic systems and help debug production issues that frameworks tend to hide.
        </p>

        {/* Call to Action */}
        <p className="mt-8">
          The full implementation is open source so you can try out custom prompts and experiments.
        </p>

        <a
          href="https://github.com/SnehaDharne/chatml"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-4 px-6 py-3 bg-[#4a90e2] text-white rounded-lg shadow hover:bg-[#357abd] transition"
        >
          View Code on GitHub
        </a>
      </div>
    </Layout>
  )
}
