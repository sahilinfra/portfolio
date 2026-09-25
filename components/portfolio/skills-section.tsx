import Image from "next/image"

type Skill = {
  name: string
  logo: string
}

const SKILLS: Skill[] = [
  { name: "AWS", logo: "/logos/aws.svg" },
  { name: "Azure", logo: "/logos/azure.svg" },
  { name: "Docker", logo: "/logos/docker.svg" },
  { name: "Kubernetes", logo: "/logos/kubernetes.svg" },
  { name: "Terraform", logo: "/logos/terraform.svg" },
  { name: "Ansible", logo: "/logos/ansible.svg" },
  { name: "GitHub Actions", logo: "/logos/github.svg" },
  { name: "GitLab CI/CD", logo: "/logos/gitlab.svg" },
  { name: "Jenkins", logo: "/logos/jenkins.svg" },
  { name: "Python", logo: "/logos/python.svg" },
  { name: "Linux", logo: "/logos/linux.svg" },
  { name: "Nginx", logo: "/logos/nginx.svg" },
  { name: "PostgreSQL", logo: "/logos/postgresql.svg" },
  { name: "MongoDB", logo: "/logos/mongodb.svg" },
  { name: "Prometheus", logo: "/logos/prometheus.svg" },
  { name: "Grafana", logo: "/logos/grafana.svg" },
]

export function SkillsSection() {
  return (
    <section id="skills" className="mx-auto max-w-4xl border-t border-border px-6 py-16">
      <div className="flex items-end justify-between gap-4">
        <div>
          <h2 className="text-sm font-semibold uppercase tracking-wider text-primary">Skills</h2>
          <p className="mt-2 max-w-xl text-sm leading-6 text-muted-foreground">
            Core tools and technologies I use to build, automate, secure, and operate modern systems.
          </p>
        </div>
        <span className="hidden text-xs font-medium uppercase tracking-widest text-muted-foreground sm:block">
          Technology stack
        </span>
      </div>
      <ul
        aria-label="Technology skills"
        className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4"
      >
        {SKILLS.map((skill) => (
          <li
            key={skill.name}
            className="group flex min-h-16 items-center gap-3 rounded-xl border border-border bg-card px-3 py-3 transition-colors hover:border-primary/50 hover:bg-primary/[0.06]"
          >
            <span className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-white p-1.5 ring-1 ring-black/5">
              <Image
                src={skill.logo || "/placeholder.svg"}
                alt={`${skill.name} logo`}
                width={28}
                height={28}
                className="size-7 object-contain"
              />
            </span>
            <span className="text-xs font-medium leading-4 text-foreground sm:text-sm">{skill.name}</span>
          </li>
        ))}
      </ul>
    </section>
  )
}
