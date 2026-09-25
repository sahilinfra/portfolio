import {
  Activity,
  BrainCircuit,
  Box,
  Cloud,
  Code2,
  Cpu,
  Database,
  GitBranch,
  Globe,
  LockKeyhole,
  Monitor,
  Network,
  Server,
  ShieldCheck,
  Terminal,
} from "lucide-react"

const SKILLS = [
  { label: "Python", icon: Code2 },
  { label: "Bash / Shell", icon: Terminal },
  { label: "PowerShell", icon: Terminal },
  { label: "SQL", icon: Database },
  { label: "JavaScript / TypeScript", icon: Code2 },
  { label: "REST APIs", icon: Globe },
  { label: "React", icon: Code2 },
  { label: "Next.js", icon: Code2 },
  { label: ".NET", icon: Cpu },
  { label: "PHP", icon: Code2 },
  { label: "AWS", icon: Cloud },
  { label: "Azure", icon: Cloud },
  { label: "EC2", icon: Server },
  { label: "ECS / Fargate", icon: Box },
  { label: "EKS", icon: Box },
  { label: "ECR", icon: Box },
  { label: "VPC", icon: Network },
  { label: "IAM", icon: LockKeyhole },
  { label: "RDS", icon: Database },
  { label: "S3", icon: Cloud },
  { label: "Lambda", icon: Activity },
  { label: "CloudWatch", icon: Activity },
  { label: "Azure DevOps", icon: GitBranch },
  { label: "Azure Pipelines", icon: GitBranch },
  { label: "VNets", icon: Network },
  { label: "IoT Hub", icon: Cpu },
  { label: "Event Hubs", icon: Network },
  { label: "Key Vault", icon: LockKeyhole },
  { label: "Entra ID", icon: ShieldCheck },
  { label: "Azure Monitor", icon: Activity },
  { label: "Databricks", icon: Database },
  { label: "Functions", icon: Code2 },
  { label: "Terraform", icon: Code2 },
  { label: "Bicep", icon: Code2 },
  { label: "Ansible", icon: Terminal },
  { label: "GitHub Actions", icon: GitBranch },
  { label: "GitLab CI/CD", icon: GitBranch },
  { label: "Jenkins", icon: GitBranch },
  { label: "Docker", icon: Box },
  { label: "Docker Compose", icon: Box },
  { label: "Kubernetes", icon: Box },
  { label: "Helm", icon: Box },
  { label: "Trivy", icon: ShieldCheck },
  { label: "Linux / Ubuntu", icon: Terminal },
  { label: "Windows Server", icon: Monitor },
  { label: "IIS", icon: Server },
  { label: "Nginx", icon: Server },
  { label: "PostgreSQL", icon: Database },
  { label: "SQL Server", icon: Database },
  { label: "MongoDB", icon: Database },
  { label: "Prometheus", icon: Activity },
  { label: "Grafana", icon: Activity },
  { label: "KQL", icon: Database },
  { label: "TCP/IP", icon: Network },
  { label: "DNS", icon: Globe },
  { label: "VPN", icon: LockKeyhole },
  { label: "Fortinet 40F", icon: ShieldCheck },
  { label: "IAM / RBAC", icon: LockKeyhole },
  { label: "MFA", icon: ShieldCheck },
  { label: "SSL/TLS", icon: LockKeyhole },
  { label: "SOC 2", icon: ShieldCheck },
  { label: "Drata", icon: ShieldCheck },
  { label: "AI Technical Evaluation", icon: BrainCircuit },
]

export function SkillsSection() {
  return (
    <section id="skills" className="mx-auto max-w-4xl border-t border-border px-6 py-16">
      <h2 className="text-sm font-semibold uppercase tracking-wider text-primary">Skills</h2>
      <ul className="mt-6 flex flex-wrap gap-3" aria-label="Technology skills">
        {SKILLS.map(({ label, icon: Icon }) => (
          <li
            key={label}
            aria-label={label}
            title={label}
            className="flex size-11 items-center justify-center rounded-full border border-border bg-primary/5 text-foreground transition-colors hover:border-primary hover:bg-primary/10"
          >
            <Icon aria-hidden="true" className="size-5" strokeWidth={1.8} />
            <span className="sr-only">{label}</span>
          </li>
        ))}
      </ul>
    </section>
  )
}
