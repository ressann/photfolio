"use client";
import { Form } from "../ui/form";
import { useForm, UseFormReturn } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "../ui/button";
import Email from "./fields/email";
import Username from "./fields/username";
import Subject from "./fields/subject";
import Message from "./fields/message";

const messageSchema = z.object({
  username: z.string().min(2, "Name must be at least 2 characters long"),
  email: z.email("Invalid email address"),
  subject: z.string().min(5, "Subject must be at least 5 characters long"),
  message: z.string().min(5, "Message must be at least 5 characters long"),
});

export type UseFormType = {
  form: UseFormReturn<z.infer<typeof messageSchema>>;
};

function SendMessageForm() {
  const form = useForm({
    resolver: zodResolver(messageSchema),
    defaultValues: {
      username: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  const onSubmit = async (data: z.infer<typeof messageSchema>) => {
    try {
      const res = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!res.ok) throw new Error("Failed to send email");

      form.reset();
    } catch (error) {
      console.error("Error sending email:", error);
    }
  };

  return (
    <section className="space-y-8">
      <h2 className="text-2xl font-light text-foreground">Send a Message</h2>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <div className="space-y-4">
            <Username form={form} />
            <Email form={form} />
            <Subject form={form} />
            <Message form={form} />
          </div>
          <Button type="submit" variant={"outline"} className="cursor-pointer">
            Send Message
          </Button>
        </form>
      </Form>
    </section>
  );
}

export default SendMessageForm;
