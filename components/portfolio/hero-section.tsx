import { Button } from "@/components/ui/button"
import { MapPin } from "lucide-react"

export function HeroSection() {
  return (
    <section id="top" className="mx-auto max-w-4xl px-6 pb-16 pt-20 sm:pt-28">
      <p className="mb-4 inline-flex items-center gap-1.5 rounded-full border border-border bg-primary/5 px-3 py-1 text-xs font-medium text-primary">
        <MapPin className="size-3.5" aria-hidden="true" />
        Chandigarh
      </p>
      <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">Sahil Billowris</h1>
      <p className="mt-3 text-lg font-medium text-primary sm:text-xl">
        DevOps and Cloud Engineer | AWS | Azure | AI Technical Evaluation
      </p>
      <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground">
        Building and evaluating reliable cloud infrastructure and AI systems, with hands-on expertise across AWS and
        Azure.
      </p>
      <div className="mt-8 flex flex-wrap gap-3">
        <Button
          size="lg"
          nativeButton={false}
          className="bg-primary text-primary-foreground hover:bg-primary/90"
          render={<a href="#contact">Get in touch</a>}
        />
        <Button
          size="lg"
          variant="outline"
          nativeButton={false}
          render={
            <a href="https://github.com/sahilinfra" target="_blank" rel="noopener noreferrer">
              View GitHub
            </a>
          }
        />
      </div>
    </section>
  )
}
