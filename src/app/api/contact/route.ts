import { handleForm } from "@/lib/handle-form";

export async function POST(request: Request) {
  return handleForm(request, "contact");
}
