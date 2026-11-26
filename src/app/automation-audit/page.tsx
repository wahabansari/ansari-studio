import { AutomationAuditContent } from "@/content/automation-audit";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "Free Automation Audit for Business Workflows",
  description:
    "A free review of your routine work, with a clear list of what to automate first. The starting point for AI integrations and workflow automation.",
  path: "/automation-audit",
});

export default function Page() {
  return (
    <main id="main">
      <AutomationAuditContent />
    </main>
  );
}
