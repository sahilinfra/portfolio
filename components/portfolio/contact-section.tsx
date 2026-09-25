import { Mail, Phone, MapPin, Link2 } from "lucide-react"

const CONTACT_ITEMS = [
  { icon: Mail, label: "sahilbillowria1@gmail.com", href: "mailto:sahilbillowria1@gmail.com" },
  { icon: Phone, label: "+91 7889542489", href: "tel:+917889542489" },
  { icon: MapPin, label: "Chandigarh", href: undefined },
  {
    icon: Link2,
    label: "linkedin.com/in/sahilbillowria",
    href: "https://linkedin.com/in/sahilbillowria",
  },
  { icon: Link2, label: "github.com/sahilinfra", href: "https://github.com/sahilinfra" },
]

export function ContactSection() {
  return (
    <section id="contact" className="mx-auto max-w-4xl border-t border-border px-6 py-16">
      <h2 className="text-sm font-semibold uppercase tracking-wider text-primary">Contact</h2>
      <p className="mt-4 max-w-xl text-base leading-relaxed text-muted-foreground">
        I&apos;m open to opportunities and conversations about cloud infrastructure and AI evaluation work. Reach out
        through any of the channels below.
      </p>
      <ul className="mt-8 flex flex-col gap-4">
        {CONTACT_ITEMS.map((item) => {
          const Icon = item.icon
          const content = (
            <span className="flex min-w-0 items-start gap-3 text-sm font-medium text-foreground">
              <Icon className="size-4 text-primary" aria-hidden="true" />
              {item.label}
            </span>
          )
          return (
            <li key={item.label}>
              {item.href ? (
                <a
                  href={item.href}
                  target={item.href.startsWith("http") ? "_blank" : undefined}
                  rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="inline-block transition-colors hover:text-primary"
                >
                  {content}
                </a>
              ) : (
                content
              )}
            </li>
          )
        })}
      </ul>
    </section>
  )
}
