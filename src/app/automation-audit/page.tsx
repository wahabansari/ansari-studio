import { AutomationAuditContent } from "@/content/automation-audit";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: { absolute: "Free Business Automation Audit | Ansari Product Engineering" },
  description:
    "Find out which repetitive tasks to automate first. A short review of your workflows and a clear plan in plain English.",
  path: "/automation-audit",
});

export default function Page() {
  return (
    <main id="main">
      <AutomationAuditContent />
    </main>
  );
}
