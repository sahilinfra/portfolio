const SKILLS = ["AWS", "Azure", "AI Technical Evaluation", "DevOps", "Cloud Engineering"]

export function SkillsSection() {
  return (
    <section id="skills" className="mx-auto max-w-4xl border-t border-border px-6 py-16">
      <h2 className="text-sm font-semibold uppercase tracking-wider text-primary">Skills</h2>
      <ul className="mt-6 flex flex-wrap gap-3">
        {SKILLS.map((skill) => (
          <li
            key={skill}
            className="rounded-full border border-border bg-primary/5 px-4 py-2 text-sm font-medium text-foreground"
          >
            {skill}
          </li>
        ))}
      </ul>
    </section>
  )
}
