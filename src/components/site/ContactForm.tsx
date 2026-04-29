import { useState } from "react";
import { z } from "zod";
import { toast } from "sonner";

const schema = z.object({
  name: z.string().trim().min(1, "Please add your name").max(100),
  email: z.string().trim().email("Enter a valid email").max(255),
  company: z.string().trim().max(120).optional().or(z.literal("")),
  building: z.string().trim().min(1, "Tell us a little about it").max(1000),
});

type ContactValues = z.infer<typeof schema>;

async function submitContact(_values: ContactValues) {
  // Future: replace with Lovable Cloud insert. No backend in v1.
  await new Promise((r) => setTimeout(r, 400));
}

export const ContactForm = ({ id = "contact" }: { id?: string }) => {
  const [values, setValues] = useState<ContactValues>({
    name: "",
    email: "",
    company: "",
    building: "",
  });
  const [errors, setErrors] = useState<Partial<Record<keyof ContactValues, string>>>({});
  const [submitting, setSubmitting] = useState(false);

  const onChange = (k: keyof ContactValues) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setValues((v) => ({ ...v, [k]: e.target.value }));
  };

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const parsed = schema.safeParse(values);
    if (!parsed.success) {
      const next: Partial<Record<keyof ContactValues, string>> = {};
      parsed.error.issues.forEach((iss) => {
        const k = iss.path[0] as keyof ContactValues;
        if (!next[k]) next[k] = iss.message;
      });
      setErrors(next);
      return;
    }
    setErrors({});
    setSubmitting(true);
    try {
      await submitContact(parsed.data);
      toast.success("Thanks. We'll be in touch shortly.");
      setValues({ name: "", email: "", company: "", building: "" });
    } catch {
      toast.error("Something went wrong. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  const fieldClass =
    "w-full bg-transparent border-b border-hairline focus:border-sage outline-none py-3 text-ink placeholder:text-ink-subtle text-base transition-colors";

  return (
    <form id={id} onSubmit={onSubmit} className="space-y-7" noValidate>
      <div className="grid md:grid-cols-2 gap-7">
        <div>
          <label className="eyebrow block mb-1" htmlFor="name">Name</label>
          <input id="name" className={fieldClass} value={values.name} onChange={onChange("name")} autoComplete="name" maxLength={100} />
          {errors.name && <p className="text-xs text-destructive mt-2">{errors.name}</p>}
        </div>
        <div>
          <label className="eyebrow block mb-1" htmlFor="email">Email</label>
          <input id="email" type="email" className={fieldClass} value={values.email} onChange={onChange("email")} autoComplete="email" maxLength={255} />
          {errors.email && <p className="text-xs text-destructive mt-2">{errors.email}</p>}
        </div>
      </div>
      <div>
        <label className="eyebrow block mb-1" htmlFor="company">Company</label>
        <input id="company" className={fieldClass} value={values.company} onChange={onChange("company")} autoComplete="organization" maxLength={120} />
      </div>
      <div>
        <label className="eyebrow block mb-1" htmlFor="building">What are you building?</label>
        <textarea id="building" className={`${fieldClass} resize-none`} rows={4} value={values.building} onChange={onChange("building")} maxLength={1000} />
        {errors.building && <p className="text-xs text-destructive mt-2">{errors.building}</p>}
      </div>
      <div className="pt-2">
        <button
          type="submit"
          disabled={submitting}
          className="inline-flex items-center rounded-full bg-sage px-6 py-3 text-sm font-medium text-background transition-opacity hover:opacity-90 disabled:opacity-60"
        >
          {submitting ? "Sending…" : "Send message"}
        </button>
      </div>
    </form>
  );
};
