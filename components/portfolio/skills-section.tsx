const SKILLS = [
  "Python", "Bash / Shell", "PowerShell", "SQL", "JavaScript / TypeScript", "REST APIs", "React", "Next.js", ".NET", "PHP",
  "AWS", "Azure", "EC2", "ECS / Fargate", "EKS", "ECR", "VPC", "IAM", "RDS", "S3", "Lambda", "CloudWatch",
  "Azure DevOps", "Azure Pipelines", "VNets", "IoT Hub", "Event Hubs", "Key Vault", "Entra ID", "Azure Monitor", "Databricks", "Functions",
  "Terraform", "Bicep", "Ansible", "GitHub Actions", "GitLab CI/CD", "Jenkins", "Docker", "Docker Compose", "Kubernetes", "Helm", "Trivy",
  "Linux / Ubuntu", "Windows Server", "IIS", "Nginx", "PostgreSQL", "SQL Server", "MongoDB", "Prometheus", "Grafana", "KQL",
  "TCP/IP", "DNS", "VPN", "Fortinet 40F", "IAM / RBAC", "MFA", "SSL/TLS", "SOC 2", "Drata", "AI Technical Evaluation"
]

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
