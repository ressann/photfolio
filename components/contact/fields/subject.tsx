"use client";

import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { UseFormType } from "../send-message-form";
import { Input } from "@/components/ui/input";

function Subject({ form }: UseFormType) {
  return (
    <FormField
      name="subject"
      control={form.control}
      render={({ field }) => (
        <FormItem>
          <FormLabel>Subject</FormLabel>
          <FormControl>
            <Input type="text" placeholder="Your Subject" {...field} />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
}

export default Subject;
