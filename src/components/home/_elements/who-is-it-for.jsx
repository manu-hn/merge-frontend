import { Code, Lightbulb, Palette, ClipboardList, Zap } from "lucide-react"

const personas = [
  {
    icon: Code,
    title: "Developers",
    description: "Find co-founders, teammates, or mentors who match your tech stack and passion projects.",
    gradient: "from-primary to-primary/50",
  },
  {
    icon: Lightbulb,
    title: "Startup Founders",
    description: "Discover technical co-founders and early team members who believe in your vision.",
    gradient: "from-accent to-accent/50",
  },
  {
    icon: Palette,
    title: "Designers",
    description: "Connect with developers and product minds who need your creative skills.",
    gradient: "from-chart-3 to-chart-3/50",
  },
  {
    icon: ClipboardList,
    title: "Product Managers",
    description: "Build relationships with builders who can turn your roadmap into reality.",
    gradient: "from-chart-4 to-chart-4/50",
  },
  {
    icon: Zap,
    title: "Tech Enthusiasts",
    description: "Meet like-minded explorers and turn curiosity into collaborative projects.",
    gradient: "from-chart-5 to-chart-5/50",
  },
]


const WhoIsItFor = () => {
  return (
      <section id="who-its-for" className="py-20 md:py-32 bg-[#0A0C0F]">
      <div className="mx-auto max-w-7xl px-6">
        {/* Section header */}
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-border px-4 py-1.5">
            <span className="text-xs font-medium uppercase tracking-wider text-primary">Who It{"'"}s For</span>
          </div>
          <h2 className="mb-4 text-3xl font-bold text-foreground md:text-4xl lg:text-5xl text-balance">
            Built for Builders Like You
          </h2>
          <p className="text-muted-foreground md:text-lg leading-relaxed">
            Whether you're writing code, designing interfaces, or leading products — Merge has your match.
          </p>
        </div>

        {/* Personas grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {personas.map((persona, index) => (
            <div
              key={persona.title}
              className={`group relative overflow-hidden rounded-2xl border border-border bg-card p-8 transition-all duration-300 hover:border-primary/50 hover:-translate-y-1 ${
                index === 4 ? "sm:col-span-2 lg:col-span-1" : ""
              }`}
            >
              {/* Gradient background on hover */}
              <div className={`absolute inset-0 bg-linear-to-br ${persona.gradient} opacity-0 transition-opacity duration-300 group-hover:opacity-5`} />

              <div className="relative">
                {/* Icon */}
                <div className={`mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-linear-to-br ${persona.gradient}`}>
                  <persona.icon className="h-7 w-7 text-foreground" />
                </div>

                {/* Content */}
                <h3 className="mb-3 text-xl font-semibold text-foreground">{persona.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{persona.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default WhoIsItFor;