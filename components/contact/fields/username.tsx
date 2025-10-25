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

function Username({ form }: UseFormType) {
  return (
    <FormField
      name="username"
      control={form.control}
      render={({ field }) => (
        <FormItem>
          <FormLabel>Username</FormLabel>
          <FormControl>
            <Input type="text" placeholder="Your Username" {...field} />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
}

export default Username;
