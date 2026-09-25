const SKILLS = [
  "Python", "Bash / Shell", "PowerShell", "SQL", "JavaScript / TypeScript", "REST APIs", "React", "Next.js", ".NET", "PHP",
  "AWS", "Azure", "EC2", "ECS / Fargate", "EKS", "ECR", "VPC", "IAM", "RDS", "S3", "Lambda", "CloudWatch",
  "Azure DevOps", "Azure Pipelines", "VNets", "IoT Hub", "Event Hubs", "Key Vault", "Entra ID", "Azure Monitor", "Databricks", "Functions",
  "Terraform", "Bicep", "Ansible", "GitHub Actions", "GitLab CI/CD", "Jenkins", "Docker", "Docker Compose", "Kubernetes", "Helm", "Trivy",
  "Linux / Ubuntu", "Windows Server", "IIS", "Nginx", "PostgreSQL", "SQL Server", "MongoDB", "Prometheus", "Grafana", "KQL",
  "TCP/IP", "DNS", "VPN", "Fortinet 40F", "IAM / RBAC", "MFA", "SSL/TLS", "SOC 2", "Drata", "AI Technical Evaluation"
]

const SYMBOLS: Record<string, string> = {
  Python: "Py", "Bash / Shell": "$_", PowerShell: ">_", SQL: "DB", "JavaScript / TypeScript": "JS",
  "REST APIs": "API", React: "⚛", "Next.js": "N", ".NET": ".N", PHP: "php", AWS: "AWS", Azure: "AZ",
  EC2: "EC2", "ECS / Fargate": "ECS", EKS: "K8s", ECR: "ECR", VPC: "VPC", IAM: "IAM", RDS: "RDS", S3: "S3",
  Lambda: "λ", CloudWatch: "CW", "Azure DevOps": "AZ", "Azure Pipelines": "CI", VNets: "VNet", "IoT Hub": "IoT",
  "Event Hubs": "EH", "Key Vault": "KV", "Entra ID": "ID", "Azure Monitor": "AM", Databricks: "DBX", Functions: "ƒ",
  Terraform: "TF", Bicep: "B", Ansible: "A", "GitHub Actions": "GH", "GitLab CI/CD": "GL", Jenkins: "J",
  Docker: "▣", "Docker Compose": "DC", Kubernetes: "K8s", Helm: "H", Trivy: "TV", "Linux / Ubuntu": "⌁",
  "Windows Server": "⊞", IIS: "IIS", Nginx: "N", PostgreSQL: "PG", "SQL Server": "SQL", MongoDB: "MDB",
  Prometheus: "P", Grafana: "G", KQL: "KQL", "TCP/IP": "↔", DNS: "DNS", VPN: "VPN", "Fortinet 40F": "FT",
  "IAM / RBAC": "RB", MFA: "MFA", "SSL/TLS": "TLS", "SOC 2": "SOC", Drata: "D", "AI Technical Evaluation": "AI"
}

export function SkillsSection() {
  return (
    <section id="skills" className="mx-auto max-w-4xl border-t border-border px-6 py-16">
      <div className="flex items-end justify-between gap-4">
        <div>
          <h2 className="text-sm font-semibold uppercase tracking-wider text-primary">Skills</h2>
          <p className="mt-2 max-w-xl text-sm leading-6 text-muted-foreground">Tools and technologies I use to build, automate, secure, and evaluate modern systems.</p>
        </div>
        <span className="hidden text-xs font-medium uppercase tracking-widest text-muted-foreground sm:block">Technology stack</span>
      </div>
      <ul aria-label="Technology skills" className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
        {SKILLS.map((skill) => (
          <li key={skill} className="group flex min-h-16 items-center gap-3 rounded-xl border border-border bg-primary/[0.04] px-3 py-3 transition-colors hover:border-primary/50 hover:bg-primary/[0.09]">
            <span aria-hidden="true" className="flex size-9 shrink-0 items-center justify-center rounded-lg border border-primary/25 bg-primary/10 font-mono text-[10px] font-bold text-primary">
              {SYMBOLS[skill]}
            </span>
            <span className="text-xs font-medium leading-4 text-foreground sm:text-sm">{skill}</span>
          </li>
        ))}
      </ul>
    </section>
  )
}
