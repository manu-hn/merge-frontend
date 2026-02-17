import { FileX, Brain, Users, Trophy } from "lucide-react"

const features = [
  {
    icon: FileX,
    title: "No Resumes. No Cold DMs.",
    description: "Skip the awkward intros and recruiter spam. Match based on what you actually build, not credentials.",
  },
  {
    icon: Brain,
    title: "Skill-Based Intelligent Matching",
    description: "Our algorithm understands tech stacks, interests, and working styles to find your perfect collaborators.",
  },
  {
    icon: Users,
    title: "Built for Collaboration, Not Dating",
    description: "This isn't Tinder for tech. It's a purpose-built platform for serious builders who want to ship.",
  },
  {
    icon: Trophy,
    title: "Perfect for Hackathons & Startups",
    description: "Find your dream team for the next hackathon, or discover a co-founder for your startup idea.",
  },
]

const WhyMerge = () => {
  return (
    <section id="why-merge" className="py-20 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          {/* Left side - Content */}
          <div>
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-gray-100 px-4 py-1.5">
              <span className="text-xs font-medium uppercase tracking-wider text-primary">Why Merge</span>
            </div>
            <h2 className="mb-6 text-3xl font-bold text-foreground md:text-4xl lg:text-5xl text-balance">
              Networking That Actually Works
            </h2>
            <p className="mb-8 text-muted-foreground md:text-lg leading-relaxed">
              Traditional networking is broken. LinkedIn is noisy. Twitter is chaotic. Merge cuts through the noise to connect you with the right people.
            </p>

            {/* Features list */}
            <div className="space-y-6">
              {features.map((feature) => (
                <div key={feature.title} className="flex gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <feature.icon className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="mb-1 font-semibold text-foreground">{feature.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right side - Visual */}
          <div className="relative">
            <div className="relative rounded-2xl border border-border bg-card p-8 shadow-2xl shadow-primary/5">
              {/* Mock profile cards stack */}
              <div className="space-y-4">
                {/* Card 1 */}
                <div className="rounded-xl border border-border bg-secondary/50 p-4 transition-transform hover:-translate-y-1">
                  <div className="flex items-center gap-4">
                    <div className="h-12 w-12 rounded-full bg-linear-to-br from-primary to-accent" />
                    <div>
                      <div className="font-semibold text-foreground">Alex Chen</div>
                      <div className="text-sm text-muted-foreground">Full-Stack Developer</div>
                    </div>
                  </div>
                  <div className="mt-3 flex flex-wrap gap-2">
                    <span className="rounded-full bg-primary/10 px-2.5 py-0.5 text-xs text-primary">React</span>
                    <span className="rounded-full bg-primary/10 px-2.5 py-0.5 text-xs text-primary">Node.js</span>
                    <span className="rounded-full bg-accent/10 px-2.5 py-0.5 text-xs text-accent">AI/ML</span>
                  </div>
                </div>

                {/* Card 2 */}
                <div className="rounded-xl border border-primary/30 bg-primary/5 p-4 ring-2 ring-primary/20">
                  <div className="flex items-center gap-4">
                    <div className="h-12 w-12 rounded-full bg-linear-to-br from-accent to-chart-4" />
                    <div>
                      <div className="font-semibold text-foreground">Sarah Kim</div>
                      <div className="text-sm text-muted-foreground">UX Designer & Founder</div>
                    </div>
                  </div>
                  <div className="mt-3 flex flex-wrap gap-2">
                    <span className="rounded-full bg-accent/10 px-2.5 py-0.5 text-xs text-accent">Figma</span>
                    <span className="rounded-full bg-chart-3/10 px-2.5 py-0.5 text-xs text-chart-3">Product</span>
                    <span className="rounded-full bg-chart-4/10 px-2.5 py-0.5 text-xs text-chart-4">SaaS</span>
                  </div>
                  <div className="mt-4 flex gap-2">
                    <div className="flex-1 rounded-lg bg-secondary py-2 text-center text-sm font-medium text-muted-foreground">Skip</div>
                    <div className="flex-1 rounded-lg bg-primary py-2 text-center text-sm font-medium text-primary-foreground">Connect</div>
                  </div>
                </div>

                {/* Card 3 */}
                <div className="rounded-xl border border-border bg-secondary/50 p-4 opacity-60">
                  <div className="flex items-center gap-4">
                    <div className="h-12 w-12 rounded-full bg-linear-to-br from-chart-3 to-chart-5" />
                    <div>
                      <div className="font-semibold text-foreground">Marcus Johnson</div>
                      <div className="text-sm text-muted-foreground">Backend Engineer</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Match indicator */}
              <div className="absolute -top-3 -right-3 rounded-full bg-accent px-3 py-1 text-xs font-bold text-accent-foreground shadow-lg">
                92% Match
              </div>
            </div>

            {/* Background glow */}
            <div className="absolute -inset-4 -z-10 rounded-3xl bg-linear-to-r from-primary/10 to-accent/10 blur-2xl" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default WhyMerge;