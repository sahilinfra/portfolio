export function SiteFooter() {
  return (
    <footer className="border-t border-border px-6 py-8">
      <p className="mx-auto max-w-4xl text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} Sahil Billowria. All rights reserved.
      </p>
    </footer>
  )
}
