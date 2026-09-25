const PROJECTS = [
  { title: "Handshake AI Project Dynamo", description: "Designed and validated terminal-based benchmark tasks for AI coding and reasoning agents, with reproducible Docker environments, reference solutions and automated verifiers." },
  { title: "Azure DevOps Pipelines and Release Governance", description: "Configured self-hosted agents, YAML validation and build stages, reusable artifacts, branch policies, reviews, environment approvals and automated Markdown release reports." },
  { title: "Azure Monitoring and Bicep Workbook Deployment", description: "Ingested JSON logs through Data Collection Rules and Endpoints, built interactive KQL Workbooks, deployed reusable Bicep modules and generated Teams Adaptive Card reports." },
  { title: "Azure Databricks Platform Provisioning", description: "Provisioned Databricks workspace, storage, access connector, Unity Catalog and workspace bindings with Terraform remote state, GitHub Actions validation and drift detection." },
  { title: "Secure Azure Function and IoT Infrastructure", description: "Built authenticated Python Functions with Entra ID and supported a secure remote patient management platform using IoT Hub, DPS/X.509, Event Hubs, Blob Storage, PostgreSQL and Key Vault." },
  { title: "AWS EKS Infrastructure and Kubernetes Delivery", description: "Created Terraform infrastructure for VPC, IAM, ECR and EKS; built Jenkins delivery for a Node.js API with Docker, Trivy and Helm, and added Prometheus/Grafana monitoring." },
  { title: "AWS ECS Fargate Application Platform", description: "Containerized and deployed applications with ECR and ECS Fargate, configuring ALB, ACM/HTTPS, Route 53, IAM, networking, CloudWatch and GitHub Actions deployments." },
  { title: "Infrastructure Automation and Troubleshooting", description: "Worked across .NET, REST APIs, MongoDB, S3, GitLab CI/CD, SQL Server to PostgreSQL migration, IIS hosting and Docker Compose environments, using logs and terminal diagnostics to resolve production issues." },
]

export function ProjectsSection() {
  return (
    <section id="projects" className="mx-auto max-w-4xl border-t border-border px-6 py-16">
      <h2 className="text-sm font-semibold uppercase tracking-wider text-primary">Projects</h2>
      <div className="mt-8 grid gap-4 sm:grid-cols-2">
        {PROJECTS.map((project) => (
          <article key={project.title} className="rounded-lg border border-border bg-card/30 p-5 transition-colors hover:border-primary/50">
            <h3 className="font-semibold text-foreground">{project.title}</h3>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{project.description}</p>
          </article>
        ))}
      </div>
    </section>
  )
}
