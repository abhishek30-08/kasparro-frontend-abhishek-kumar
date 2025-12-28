// app/platform/page.tsx
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, Database, Cpu, BarChart, FileOutput } from 'lucide-react';

export default function PlatformPage() {
  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="container py-24">
        <div className="mx-auto max-w-3xl text-center">
          <Badge className="mb-4" variant="secondary">Platform Overview</Badge>
          <h1 className="mb-6 text-4xl font-bold tracking-tight sm:text-5xl">
            How Kasparro Works
          </h1>
          <p className="text-lg text-slate-600">
            A comprehensive AI-SEO audit platform that analyzes your brand's visibility across AI search engines through a systematic, data-driven pipeline.
          </p>
        </div>
      </section>

      {/* Audit Pipeline Flow */}
      <section className="border-y bg-slate-50 py-24">
        <div className="container">
          <h2 className="mb-12 text-center text-3xl font-bold">The Audit Pipeline</h2>
          
          <div className="mx-auto max-w-5xl space-y-8">
            {/* Stage 1 */}
            <Card className="border-l-4 border-l-indigo-600">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-indigo-100">
                      <Database className="h-6 w-6 text-indigo-600" />
                    </div>
                    <div>
                      <CardTitle>1. Input Assembler</CardTitle>
                      <CardDescription>Data collection and preparation</CardDescription>
                    </div>
                  </div>
                  <Badge>Entry Point</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid gap-4 md:grid-cols-2">
                  <div>
                    <h4 className="mb-2 font-semibold text-sm">What We Collect:</h4>
                    <ul className="space-y-1 text-sm text-slate-600">
                      <li>• Brand name and domain</li>
                      <li>• Target keywords and queries</li>
                      <li>• Competitor list</li>
                      <li>• Industry context</li>
                      <li>• Existing content inventory</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="mb-2 font-semibold text-sm">Processing:</h4>
                    <ul className="space-y-1 text-sm text-slate-600">
                      <li>• Query generation (branded + non-branded)</li>
                      <li>• Competitor mapping</li>
                      <li>• Content crawling</li>
                      <li>• Data normalization</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Arrow */}
            <div className="flex justify-center">
              <ArrowRight className="h-8 w-8 text-slate-400" />
            </div>

            {/* Stage 2 */}
            <Card className="border-l-4 border-l-purple-600">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-purple-100">
                      <Cpu className="h-6 w-6 text-purple-600" />
                    </div>
                    <div>
                      <CardTitle>2. Context Pack</CardTitle>
                      <CardDescription>Structured brand intelligence assembly</CardDescription>
                    </div>
                  </div>
                  <Badge variant="secondary">Processing</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid gap-4 md:grid-cols-2">
                  <div>
                    <h4 className="mb-2 font-semibold text-sm">Context Building:</h4>
                    <ul className="space-y-1 text-sm text-slate-600">
                      <li>• Brand positioning map</li>
                      <li>• Product/service taxonomy</li>
                      <li>• Key differentiators</li>
                      <li>• Target audience profiles</li>
                      <li>• Content themes</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="mb-2 font-semibold text-sm">AI Query Simulation:</h4>
                    <ul className="space-y-1 text-sm text-slate-600">
                      <li>• Test queries across AI engines</li>
                      <li>• Capture response patterns</li>
                      <li>• Extract brand mentions</li>
                      <li>• Analyze context and sentiment</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Arrow */}
            <div className="flex justify-center">
              <ArrowRight className="h-8 w-8 text-slate-400" />
            </div>

            {/* Stage 3 */}
            <Card className="border-l-4 border-l-green-600">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-green-100">
                      <BarChart className="h-6 w-6 text-green-600" />
                    </div>
                    <div>
                      <CardTitle>3. Audit Modules (7 Parallel Analyses)</CardTitle>
                      <CardDescription>Comprehensive multi-dimensional evaluation</CardDescription>
                    </div>
                  </div>
                  <Badge variant="secondary">Core Analysis</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                  {[
                    'Brand Mentions',
                    'Sentiment Analysis',
                    'E-E-A-T & Trust',
                    'Keyword Coverage',
                    'Competitor Analysis',
                    'Content Gaps',
                    'Citation Tracking'
                  ].map((module, i) => (
                    <div key={i} className="rounded-lg border bg-white p-3">
                      <p className="text-sm font-medium">{module}</p>
                    </div>
                  ))}
                </div>
                <p className="mt-4 text-sm text-slate-600">
                  Each module runs independently, analyzing specific aspects of your AI search presence and generating scores, insights, and recommendations.
                </p>
              </CardContent>
            </Card>

            {/* Arrow */}
            <div className="flex justify-center">
              <ArrowRight className="h-8 w-8 text-slate-400" />
            </div>

            {/* Stage 4 */}
            <Card className="border-l-4 border-l-amber-600">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-amber-100">
                      <FileOutput className="h-6 w-6 text-amber-600" />
                    </div>
                    <div>
                      <CardTitle>4. Output Surfaces</CardTitle>
                      <CardDescription>Actionable insights and reporting</CardDescription>
                    </div>
                  </div>
                  <Badge>Results</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid gap-4 md:grid-cols-2">
                  <div>
                    <h4 className="mb-2 font-semibold text-sm">Dashboard Metrics:</h4>
                    <ul className="space-y-1 text-sm text-slate-600">
                      <li>• Overall AI Visibility Score</li>
                      <li>• Trust & E-E-A-T Score</li>
                      <li>• Non-branded keyword coverage</li>
                      <li>• Trend analysis over time</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="mb-2 font-semibold text-sm">Actionable Outputs:</h4>
                    <ul className="space-y-1 text-sm text-slate-600">
                      <li>• Prioritized recommendations</li>
                      <li>• Content gap opportunities</li>
                      <li>• Competitive benchmarking</li>
                      <li>• Citation improvement tactics</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* What Makes Kasparro Different */}
      <section className="container py-24">
        <h2 className="mb-12 text-center text-3xl font-bold">What Makes Kasparro Different</h2>
        
        <div className="mx-auto grid max-w-5xl gap-8 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>Traditional SEO Tools</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-sm text-slate-600">
              <p>✗ Focus on keyword rankings</p>
              <p>✗ Track backlinks and domain authority</p>
              <p>✗ Optimize for search engine algorithms</p>
              <p>✗ Measure clicks and impressions</p>
              <p>✗ Assume users click through to websites</p>
            </CardContent>
          </Card>

          <Card className="border-indigo-200 bg-indigo-50">
            <CardHeader>
              <CardTitle className="text-indigo-900">Kasparro (AI-Native)</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-sm text-indigo-900">
              <p>✓ Track brand mentions in AI responses</p>
              <p>✓ Analyze how AI models understand your brand</p>
              <p>✓ Optimize for AI comprehension and trust</p>
              <p>✓ Measure visibility without clicks</p>
              <p>✓ Designed for zero-click AI answers</p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Data Sources */}
      <section className="border-t bg-slate-50 py-24">
        <div className="container">
          <h2 className="mb-12 text-center text-3xl font-bold">What Data Kasparro Consumes</h2>
          
          <div className="mx-auto max-w-4xl">
            <div className="grid gap-6 md:grid-cols-3">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Your Brand Data</CardTitle>
                </CardHeader>
                <CardContent className="text-sm text-slate-600">
                  <ul className="space-y-2">
                    <li>• Website content</li>
                    <li>• Product pages</li>
                    <li>• Documentation</li>
                    <li>• Blog articles</li>
                    <li>• Case studies</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">AI Engine Data</CardTitle>
                </CardHeader>
                <CardContent className="text-sm text-slate-600">
                  <ul className="space-y-2">
                    <li>• ChatGPT responses</li>
                    <li>• Gemini outputs</li>
                    <li>• Perplexity results</li>
                    <li>• Claude mentions</li>
                    <li>• Other AI platforms</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Market Context</CardTitle>
                </CardHeader>
                <CardContent className="text-sm text-slate-600">
                  <ul className="space-y-2">
                    <li>• Competitor data</li>
                    <li>• Industry benchmarks</li>
                    <li>• Query patterns</li>
                    <li>• Topic trends</li>
                    <li>• Citation sources</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}