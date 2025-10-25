"use client";

import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { UseFormType } from "../send-message-form";

import { Textarea } from "@/components/ui/textarea";

function Message({ form }: UseFormType) {
  return (
    <FormField
      name="message"
      control={form.control}
      render={({ field }) => (
        <FormItem>
          <FormLabel>Message</FormLabel>
          <FormControl>
            <Textarea placeholder="Your message" {...field} />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
}
export default Message;
