// app/page.tsx
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowRight, Search, BarChart3, Target, TrendingUp, Shield, Users, Zap } from 'lucide-react';

const modules = [
  {
    icon: Target,
    title: 'Brand Mentions',
    description: 'Track how AI engines reference your brand across queries'
  },
  {
    icon: TrendingUp,
    title: 'Sentiment Analysis',
    description: 'Understand the tone and context of brand mentions'
  },
  {
    icon: Shield,
    title: 'E-E-A-T & Trust',
    description: 'Monitor expertise and authority signals'
  },
  {
    icon: BarChart3,
    title: 'Keyword Coverage',
    description: 'Measure visibility for non-branded search terms'
  },
  {
    icon: Users,
    title: 'Competitor Analysis',
    description: 'Compare your AI visibility against competitors'
  },
  {
    icon: Search,
    title: 'Content Gaps',
    description: 'Identify missing topics and opportunities'
  },
  {
    icon: Zap,
    title: 'Citation Tracking',
    description: 'See which sources AI models reference'
  },
];

export default function HomePage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="container py-24 md:py-32">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="mb-6 text-4xl font-bold tracking-tight sm:text-6xl">
            AI-Native SEO for the
            <span className="text-indigo-600"> AI-First Search Era</span>
          </h1>
          <p className="mb-8 text-lg text-slate-600 sm:text-xl">
            Kasparro helps brands understand and optimize their visibility across ChatGPT, Gemini, Perplexity, and other AI search engines.
          </p>
          <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
            <Link href="/app/dashboard">
              <Button size="lg" className="bg-indigo-600 hover:bg-indigo-700">
                <Search className="mr-2 h-5 w-5" />
                Run Free AI-SEO Audit
              </Button>
            </Link>
            <Link href="/platform">
              <Button size="lg" variant="outline">
                Learn More
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Why AI-SEO is Different */}
      <section className="border-y bg-slate-50 py-24">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-4 text-3xl font-bold">Why AI-SEO is Different</h2>
            <p className="mb-12 text-lg text-slate-600">
              Traditional SEO optimizes for search engine rankings. AI-SEO optimizes for how AI models understand, reference, and recommend your brand.
            </p>
          </div>

          <div className="mx-auto grid max-w-5xl gap-8 md:grid-cols-3">
            <Card>
              <CardHeader>
                <CardTitle>Traditional SEO</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2 text-sm text-slate-600">
                <p>• Keyword rankings</p>
                <p>• Backlink profiles</p>
                <p>• Page speed metrics</p>
                <p>• SERP positions</p>
              </CardContent>
            </Card>

            <Card className="border-indigo-200 bg-indigo-50">
              <CardHeader>
                <CardTitle className="text-indigo-900">AI-Native SEO</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2 text-sm text-indigo-900">
                <p>• AI mention frequency</p>
                <p>• Context & sentiment</p>
                <p>• Source citation quality</p>
                <p>• Non-branded visibility</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>The New Reality</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2 text-sm text-slate-600">
                <p>• No clickable results</p>
                <p>• AI synthesizes answers</p>
                <p>• Brand visibility ≠ traffic</p>
                <p>• Trust signals matter most</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Core Modules */}
      <section className="container py-24">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="mb-4 text-3xl font-bold">7 Core Audit Modules</h2>
          <p className="mb-12 text-lg text-slate-600">
            Comprehensive analysis of your brand's AI search presence
          </p>
        </div>

        <div className="mx-auto grid max-w-6xl gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {modules.map((module, index) => {
            const Icon = module.icon;
            return (
              <Card key={index} className="transition-shadow hover:shadow-lg">
                <CardHeader>
                  <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-lg bg-indigo-100">
                    <Icon className="h-6 w-6 text-indigo-600" />
                  </div>
                  <CardTitle className="text-lg">{module.title}</CardTitle>
                  <CardDescription>{module.description}</CardDescription>
                </CardHeader>
              </Card>
            );
          })}
        </div>
      </section>

      {/* How It Works */}
      <section className="border-t bg-slate-50 py-24">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-4 text-3xl font-bold">How Kasparro Works</h2>
            <p className="mb-12 text-lg text-slate-600">
              A data-driven pipeline that audits your AI search presence
            </p>
          </div>

          <div className="mx-auto max-w-4xl">
            <div className="grid gap-8 md:grid-cols-4">
              {[
                { step: '1', title: 'Input Assembly', desc: 'Collect brand data & target queries' },
                { step: '2', title: 'Context Pack', desc: 'Build comprehensive brand context' },
                { step: '3', title: 'Audit Modules', desc: 'Run 7 analysis modules' },
                { step: '4', title: 'Output', desc: 'Actionable insights & recommendations' },
              ].map((item, index) => (
                <div key={index} className="text-center">
                  <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-indigo-600 text-2xl font-bold text-white">
                    {item.step}
                  </div>
                  <h3 className="mb-2 font-semibold">{item.title}</h3>
                  <p className="text-sm text-slate-600">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="container py-24">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="mb-4 text-3xl font-bold">Ready to Audit Your AI Presence?</h2>
          <p className="mb-8 text-lg text-slate-600">
            Get a comprehensive view of how AI search engines see your brand
          </p>
          <Link href="/app/dashboard">
            <Button size="lg" className="bg-indigo-600 hover:bg-indigo-700">
              <Search className="mr-2 h-5 w-5" />
              Start Free Audit
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}