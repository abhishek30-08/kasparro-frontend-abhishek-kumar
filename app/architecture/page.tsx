export default function ArchitecturePage() {
  return (
    <div className="mx-auto max-w-5xl p-8">
      <h1 className="mb-6 text-3xl font-bold">
        Kasparro System Architecture
      </h1>

      <section className="mb-8">
        <h2 className="mb-2 text-xl font-semibold">
          1. Input Assembler
        </h2>
        <p className="text-gray-700">
          Collects brand data such as website content, entity metadata,
          competitors, and target keywords. Normalizes inputs for analysis.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="mb-2 text-xl font-semibold">
          2. Context Pack
        </h2>
        <p className="text-gray-700">
          Builds contextual understanding by combining structured inputs
          with AI-generated responses and citation patterns.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="mb-2 text-xl font-semibold">
          3. Audit Modules
        </h2>
        <p className="text-gray-700">
          Executes AI-SEO modules such as Brand Mentions, Sentiment,
          E-E-A-T, Keyword Coverage, Competitor Analysis, and Content Gaps.
        </p>
      </section>

      <section>
        <h2 className="mb-2 text-xl font-semibold">
          4. Output Surfaces
        </h2>
        <p className="text-gray-700">
          Surfaces insights via dashboards, detailed audit views, and
          prioritized recommendations for AI-first search optimization.
        </p>
      </section>
    </div>
  );
}
