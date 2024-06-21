"use client";
import * as z from "zod";

import { uploadYoutubeLink } from "@/action/admin";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { youtubeSchema } from "@/lib/zodSchema/youtube";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useTransition } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { SubmitBtn } from "./submitBtn";

export const YoutubeLinkForm = () => {
  const [pending, startTransition] = useTransition();
  const router = useRouter();
  const form = useForm<z.infer<typeof youtubeSchema>>({
    resolver: zodResolver(youtubeSchema),
    defaultValues: {
      youtubeLink: "",
      description:""
    },
  });
  const handleSubmit = (data: z.infer<typeof youtubeSchema>) => {
    try {
      startTransition(async () => {
        uploadYoutubeLink(data).then((data) => {
          toast.success("link saved");
          router.push("/youtube-video");
        });
      });
    } catch (err) {
      toast.error("something went wrong");
    }
  };
  
  return (
    <Card>
      <CardHeader>
        <CardTitle>Upload Yutube video</CardTitle>
      </CardHeader>

      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-2">
            <FormField
              control={form.control}
              name="youtubeLink"
              render={({ field }) => (
                <>
                  <FormItem>
                    <FormControl>
                      <Input placeholder="paste youtube link here" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                </>
              )}
            />
            <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <>
                  <FormItem>
                    <FormControl>
                      <textarea className="w-full border focus:border-black border-mutedforeground p-2 rounded-md" rows={6} placeholder="description " {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                </>
              )}
            />
            <div className="flex justify-end mt-2">
              <SubmitBtn label="save" pending={pending} />
            </div>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
};
