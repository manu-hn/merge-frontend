import { ArrowRight, Sparkles } from "lucide-react"

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden pt-3 pb-20 md:pt-24 md:pb-32">
      {/* Animated background gradient */}
      {/* <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/4 h-96 w-96 rounded-full bg-primary/20 blur-[128px] animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 h-96 w-96 rounded-full bg-accent/15 blur-[128px] animate-pulse [animation-delay:1s]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-64 w-64 rounded-full bg-primary/10 blur-[100px] animate-pulse [animation-delay:2s]" />
      </div> */}
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-4xl text-center">
          {/* Badge */}
          <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-border bg-50 px-4 py-2">
            <Sparkles className="h-4 w-4 text-primary" />
            <span className="text-sm text-gray-500">Now accepting early access signups</span>
          </div>

          {/* Headline */}
          <h1 className="mb-6 text-4xl font-bold tracking-tight text-foreground md:text-6xl lg:text-7xl text-balance">
            Find Your Perfect{" "}
            <span className="bg-linear-to-r from-primary to-accent bg-clip-text text-transparent">
              Tech Match
            </span>
          </h1>

          {/* Subtext */}
          <p className="mx-auto mb-10 max-w-2xl text-lg text-muted-foreground md:text-xl leading-relaxed text-balance">
            Merge connects developers, founders, and builders based on skills, interests, and goals — not resumes.
          </p>

          {/* CTAs */}
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <button size="lg" className="btn btn-primary group bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-6 text-base">
              Join the Waitlist
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </button>
            <button
              size="lg"
              variant="outline"
              className="btn btn-neutral border-border bg-transparent text-foreground hover:bg-secondary px-8 py-6 text-base"
            >
              Explore How It Works
            </button>
          </div>

          {/* Stats */}
          <div className="mt-16 flex flex-col items-center justify-center gap-8 border-t border-gray-100 pt-12 sm:flex-row sm:gap-16">
            <div className="text-center">
              <div className="text-3xl font-bold text-foreground">2,500+</div>
              <div className="text-sm text-muted-foreground">Builders Waiting</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-foreground">150+</div>
              <div className="text-sm text-muted-foreground">Teams Formed</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-foreground">98%</div>
              <div className="text-sm text-muted-foreground">Match Satisfaction</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection