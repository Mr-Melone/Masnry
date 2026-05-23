"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { Send } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button, Input, Label, Textarea } from "@masnry/ui";

const inquirySchema = z.object({
  name: z.string().min(2, "Add your name"),
  email: z.string().email("Use a valid email"),
  business: z.string().min(2, "Add a project, business, or idea"),
  service: z.string().min(2, "Choose a project type"),
  budget: z.string().min(2, "Choose a budget range"),
  message: z.string().min(20, "Share a little more context")
});

type InquiryValues = z.infer<typeof inquirySchema>;

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset
  } = useForm<InquiryValues>({
    resolver: zodResolver(inquirySchema),
    defaultValues: {
      service: "Website or interface project",
      budget: "Not sure yet"
    }
  });

  function onSubmit(values: InquiryValues) {
    console.info("Email integration placeholder", values);
    setSubmitted(true);
    reset();
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="grid gap-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Name" error={errors.name?.message}>
          <Input placeholder="Your name" {...register("name")} />
        </Field>
        <Field label="Email" error={errors.email?.message}>
          <Input placeholder="you@example.com" type="email" {...register("email")} />
        </Field>
      </div>
      <Field label="Project, business, or idea" error={errors.business?.message}>
        <Input placeholder="A short name for the thing" {...register("business")} />
      </Field>
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Project type" error={errors.service?.message}>
          <select
            className="h-12 w-full rounded-lg border border-input bg-background/60 px-4 text-sm text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            {...register("service")}
          >
            <option>Website or interface project</option>
            <option>Demo customization</option>
            <option>3D printing or object work</option>
            <option>Creative technical experiment</option>
            <option>Not sure yet</option>
          </select>
        </Field>
        <Field label="Range" error={errors.budget?.message}>
          <select
            className="h-12 w-full rounded-lg border border-input bg-background/60 px-4 text-sm text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            {...register("budget")}
          >
            <option>Not sure yet</option>
            <option>$1,500 - $3,000</option>
            <option>$3,000 - $6,000</option>
            <option>$6,000+</option>
            <option>Ongoing or open-ended</option>
          </select>
        </Field>
      </div>
      <Field label="Project details" error={errors.message?.message}>
        <Textarea
          placeholder="Tell me what you are thinking about, what exists already, and what kind of help would be useful."
          {...register("message")}
        />
      </Field>
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <Button type="submit" size="lg" disabled={isSubmitting}>
          Send note <Send />
        </Button>
        <p className="text-sm text-muted-foreground">
          Calendly and email delivery can be connected with environment variables.
        </p>
      </div>
      {submitted ? (
        <p className="rounded-lg border border-primary/30 bg-primary/10 px-4 py-3 text-sm text-primary">
          Inquiry validated. Connect Resend, Formspree, HubSpot, or another provider
          when you are ready to receive live submissions.
        </p>
      ) : null}
    </form>
  );
}

function Field({
  label,
  error,
  children
}: {
  label: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="grid gap-2">
      <Label>{label}</Label>
      {children}
      {error ? <p className="text-sm text-red-400">{error}</p> : null}
    </div>
  );
}
