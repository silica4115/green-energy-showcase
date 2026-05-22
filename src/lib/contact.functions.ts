import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";
import { supabaseAdmin } from "@/integrations/supabase/client.server";

const ContactSchema = z.object({
  name: z.string().trim().min(1, "이름을 입력하세요").max(100),
  phone: z.string().trim().min(1, "연락처를 입력하세요").max(40),
  email: z.string().trim().email("올바른 이메일").max(255).optional().or(z.literal("")),
  address: z.string().trim().max(255).optional().or(z.literal("")),
  message: z.string().trim().min(1, "문의 내용을 입력하세요").max(2000),
});

export const submitInquiry = createServerFn({ method: "POST" })
  .inputValidator((input: unknown) => ContactSchema.parse(input))
  .handler(async ({ data }) => {
    const { error } = await supabaseAdmin.from("contact_inquiries").insert({
      name: data.name,
      phone: data.phone,
      email: data.email || null,
      address: data.address || null,
      message: data.message,
    });

    if (error) {
      console.error("Inquiry insert failed", error);
      return { ok: false as const, error: "문의 접수에 실패했습니다. 잠시 후 다시 시도해 주세요." };
    }

    return { ok: true as const };
  });
