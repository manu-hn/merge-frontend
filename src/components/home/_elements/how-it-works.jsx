import { User, Repeat, MessageCircle, Rocket } from "lucide-react"

const steps = [
  {
    icon: User,
    title: "Create Your Tech Profile",
    description: "Share your skills, interests, and goals. Tell us what you're building or want to build.",
    step: "01",
  },
  {
    icon: Repeat,
    title: "Swipe to Match",
    description: "Browse profiles of like-minded builders. Swipe right on people you'd love to work with.",
    step: "02",
  },
  {
    icon: MessageCircle,
    title: "Connect & Chat",
    description: "When you match, start a conversation. Share ideas, discuss projects, and find synergy.",
    step: "03",
  },
  {
    icon: Rocket,
    title: "Build Together",
    description: "Form teams, launch startups, collaborate on side projects, or find your next co-founder.",
    step: "04",
  },
]


const HowItWorks = () => {
  return (
     <section id="how-it-works" className="py-20 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        {/* Section header */}
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border px-4 py-1.5">
            <span className="text-xs font-medium uppercase tracking-wider text-primary">How It Works</span>
          </div>
          <h2 className="mb-4 text-3xl font-bold text-foreground md:text-4xl lg:text-5xl text-balance">
            Four Steps to Your Next Collaboration
          </h2>
          <p className="text-muted-foreground md:text-lg leading-relaxed">
            Getting started with Merge is simple. Here's how you go from solo to squad.
          </p>
        </div>

        {/* Steps grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step) => (
            <div
              key={step.step}
              className="group relative rounded-2xl border border-border bg-card p-6 transition-all duration-300 hover:border-primary/50 hover:bg-card/80"
            >
              {/* Step number */}
              <div className="absolute -top-3 right-6 rounded-full bg-primary px-3 py-1 text-xs font-bold text-primary-foreground">
                {step.step}
              </div>

              {/* Icon */}
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary/20">
                <step.icon className="h-6 w-6" />
              </div>

              {/* Content */}
              <h3 className="mb-2 text-lg font-semibold text-foreground">{step.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default HowItWorks;