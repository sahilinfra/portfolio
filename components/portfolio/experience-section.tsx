const EXPERIENCE = [
  {
    company: "GrootNet Software Solutions",
    role: "DevOps / IT / Network Engineer",
    dates: "Feb 2024 - Present",
    highlights: [
      "Design, deploy and maintain AWS and Azure infrastructure across networking, identity, storage, databases, monitoring and security; provision reusable Terraform configurations and protect state and secrets.",
      "Build and maintain GitHub Actions, GitLab CI/CD and Jenkins workflows for application builds, Docker image publishing and deployment; operate ECS Fargate, Kubernetes/EKS and Helm workloads.",
      "Configure VPC/VNet networking, subnets, routes, NAT, load balancers, IAM/RBAC, security groups, private endpoints and cloud database connectivity.",
      "Analyze repositories, source code, REST API behavior, configuration and logs to troubleshoot React/Next.js, .NET, PHP and backend applications; automate operational tasks with Python, Bash and PowerShell.",
      "Monitor services using CloudWatch, Azure Monitor, Prometheus and Grafana; support SOC 2 evidence, PHIPA/HIPAA-aligned controls, MFA, encryption and audit logging.",
    ],
  },
  {
    company: "Maxxmann Communications",
    role: "Network and DevOps Engineer",
    dates: "Apr 2023 - Jan 2024",
    highlights: [
      "Managed LAN/WAN connectivity, IP addressing, switches and Fortinet 40F firewall policies, including SD-WAN, VPN access and network segmentation.",
      "Administered Windows Server, RDP, permissions, patching and user support; supported Linux and PHP hosting through WHM/cPanel, including domains, DNS, SSL and database configuration.",
      "Diagnosed server, firewall, network, application and internet connectivity issues across production environments.",
    ],
  },
]

export function ExperienceSection() {
  return (
    <section id="experience" className="mx-auto max-w-4xl border-t border-border px-6 py-16">
      <h2 className="text-sm font-semibold uppercase tracking-wider text-primary">Experience</h2>
      <div className="mt-8 space-y-10">
        {EXPERIENCE.map((item) => (
          <article key={item.company} className="border-l-2 border-primary/30 pl-5">
            <div className="flex flex-col justify-between gap-1 sm:flex-row sm:gap-4">
              <div>
                <h3 className="text-lg font-semibold text-foreground">{item.role}</h3>
                <p className="text-sm font-medium text-primary">{item.company}</p>
              </div>
              <p className="text-sm text-muted-foreground">{item.dates}</p>
            </div>
            <ul className="mt-4 space-y-3 text-sm leading-relaxed text-muted-foreground">
              {item.highlights.map((highlight) => <li key={highlight} className="relative pl-4 before:absolute before:left-0 before:content-['•'] before:text-primary">{highlight}</li>)}
            </ul>
          </article>
        ))}
      </div>
    </section>
  )
}
