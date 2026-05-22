import { useState } from "react";
import { useServerFn } from "@tanstack/react-start";
import { submitInquiry } from "@/lib/contact.functions";
import { toast } from "sonner";
import { Loader2 } from "lucide-react";

export function ContactForm({ compact = false }: { compact?: boolean }) {
  const submit = useServerFn(submitInquiry);
  const [loading, setLoading] = useState(false);
  const [agree, setAgree] = useState(false);

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!agree) {
      toast.error("개인정보 수집 및 이용에 동의해 주세요.");
      return;
    }
    const fd = new FormData(e.currentTarget);
    const payload = {
      name: String(fd.get("name") || ""),
      phone: String(fd.get("phone") || ""),
      email: String(fd.get("email") || ""),
      address: String(fd.get("address") || ""),
      message: String(fd.get("message") || ""),
    };
    setLoading(true);
    try {
      const res = await submit({ data: payload });
      if (res.ok) {
        toast.success("문의가 접수되었습니다. 빠르게 연락드리겠습니다.");
        (e.target as HTMLFormElement).reset();
        setAgree(false);
      } else {
        toast.error(res.error);
      }
    } catch (err) {
      console.error(err);
      toast.error("입력 정보를 확인해 주세요.");
    } finally {
      setLoading(false);
    }
  };

  const input = "w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition";

  return (
    <form onSubmit={onSubmit} className={compact ? "grid md:grid-cols-2 gap-3" : "grid md:grid-cols-2 gap-4"}>
      <input name="name" placeholder="이름 *" required maxLength={100} className={input} />
      <input name="phone" placeholder="연락처 *" required maxLength={40} className={input} />
      <input name="email" type="email" placeholder="이메일 (선택)" maxLength={255} className={input} />
      <input name="address" placeholder="주소 (선택)" maxLength={255} className={input} />
      <textarea
        name="message"
        placeholder="문의 내용 *"
        required
        rows={compact ? 3 : 5}
        maxLength={2000}
        className={`${input} md:col-span-2 resize-none`}
      />
      <label className="md:col-span-2 flex items-center gap-2 text-sm text-muted-foreground">
        <input type="checkbox" checked={agree} onChange={(e) => setAgree(e.target.checked)} className="w-4 h-4 accent-primary" />
        개인정보 수집·이용·제공에 동의합니다.
      </label>
      <button
        type="submit"
        disabled={loading}
        className="md:col-span-2 py-4 rounded-full font-bold text-primary-foreground shadow-md hover:shadow-lg transition-all hover:scale-[1.01] disabled:opacity-60 flex items-center justify-center gap-2"
        style={{ background: "var(--gradient-primary)" }}
      >
        {loading && <Loader2 className="w-4 h-4 animate-spin" />}
        무료 상담 신청하기
      </button>
    </form>
  );
}
