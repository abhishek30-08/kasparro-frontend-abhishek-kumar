// app/about/page.tsx
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Lightbulb, Target, Zap } from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="container py-24">
        <div className="mx-auto max-w-3xl text-center">
          <Badge className="mb-4" variant="secondary">About Kasparro</Badge>
          <h1 className="mb-6 text-4xl font-bold tracking-tight sm:text-5xl">
            Building for the AI-First Search Era
          </h1>
          <p className="text-lg text-slate-600">
            Kasparro was founded on the belief that search is fundamentally changing, and brands need new tools to thrive in an AI-native world.
          </p>
        </div>
      </section>

      {/* Mission */}
      <section className="border-y bg-slate-50 py-24">
        <div className="container">
          <div className="mx-auto max-w-4xl">
            <div className="mb-12 text-center">
              <h2 className="mb-4 text-3xl font-bold">Our Mission</h2>
              <p className="text-lg text-slate-600">
                To help brands understand, measure, and optimize their presence in AI-powered search engines.
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-3">
              <Card>
                <CardHeader>
                  <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-lg bg-indigo-100">
                    <Target className="h-6 w-6 text-indigo-600" />
                  </div>
                  <CardTitle>Transparency</CardTitle>
                </CardHeader>
                <CardContent className="text-sm text-slate-600">
                  Make AI search visibility measurable and understandable. No more black box algorithms.
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-lg bg-purple-100">
                    <Lightbulb className="h-6 w-6 text-purple-600" />
                  </div>
                  <CardTitle>Actionability</CardTitle>
                </CardHeader>
                <CardContent className="text-sm text-slate-600">
                  Provide clear, prioritized recommendations that marketing teams can actually implement.
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-lg bg-green-100">
                    <Zap className="h-6 w-6 text-green-600" />
                  </div>
                  <CardTitle>Innovation</CardTitle>
                </CardHeader>
                <CardContent className="text-sm text-slate-600">
                  Stay ahead of AI search evolution with continuous platform updates and new features.
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Product Philosophy */}
      <section className="container py-24">
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-12 text-center text-3xl font-bold">Product Philosophy</h2>
          
          <div className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle>AI-First, Not AI-Later</CardTitle>
              </CardHeader>
              <CardContent className="text-slate-600">
                <p className="mb-4">
                  Traditional SEO tools are retrofitting AI features onto platforms built for Google rankings. Kasparro was designed from day one to understand AI search engines.
                </p>
                <p>
                  We don't just track whether AI mentions your brand - we analyze how, why, and in what context those mentions occur.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Data-Driven, Not Opinion-Driven</CardTitle>
              </CardHeader>
              <CardContent className="text-slate-600">
                <p className="mb-4">
                  Every score, insight, and recommendation in Kasparro is backed by structured data from real AI search queries.
                </p>
                <p>
                  We believe in showing you the evidence, not just telling you what to do. Our audit modules are transparent and reproducible.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Built for Modern Marketing Teams</CardTitle>
              </CardHeader>
              <CardContent className="text-slate-600">
                <p className="mb-4">
                  Kasparro bridges the gap between technical SEO analysis and strategic brand positioning. Our platform is designed for:
                </p>
                <ul className="space-y-2 text-sm">
                  <li>• Marketing leaders who need executive-ready insights</li>
                  <li>• SEO specialists who want AI-native data</li>
                  <li>• Content teams looking for gap analysis</li>
                  <li>• Product marketers tracking competitive positioning</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Vision */}
      <section className="border-t bg-slate-50 py-24">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-4 text-3xl font-bold">Vision for AI-First Search</h2>
            <div className="space-y-4 text-left text-slate-600">
              <p>
                In 5 years, most online discovery won't happen through traditional search engines. Users will ask AI assistants questions and get synthesized answers - without clicking through to websites.
              </p>
              <p>
                This shift is already happening. ChatGPT has 100M+ weekly active users. Perplexity is answering millions of queries daily. Google is rolling out AI Overviews.
              </p>
              <p>
                <strong className="text-slate-900">The question isn't whether AI search will dominate - it's whether your brand will be visible when it does.</strong>
              </p>
              <p>
                Kasparro exists to ensure the answer is yes. We're building the infrastructure for brands to measure, understand, and optimize their AI search presence - today and tomorrow.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Founder Note */}
      <section className="container py-24">
        <div className="mx-auto max-w-3xl">
          <Card className="border-indigo-200 bg-indigo-50">
            <CardHeader>
              <CardTitle className="text-indigo-900">Why We Built This</CardTitle>
            </CardHeader>
            <CardContent className="text-indigo-900">
              <p className="mb-4">
                As an engineering team, we saw the writing on the wall: AI search isn't a trend, it's a paradigm shift.
              </p>
              <p className="mb-4">
                Traditional SEO metrics - rankings, backlinks, domain authority - were designed for a world where users click blue links. In an AI-first world, those metrics miss the point entirely.
              </p>
              <p className="mb-4">
                We built Kasparro because we needed it ourselves, and we knew other teams would too. This platform represents our conviction that brand visibility in AI search can be measured, understood, and optimized.
              </p>
              <p className="text-sm italic">
                — The Kasparro Team
              </p>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}