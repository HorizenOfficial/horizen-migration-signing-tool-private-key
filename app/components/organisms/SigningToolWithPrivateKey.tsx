"use client";
import { Button } from "@/app/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/app/components/ui/card";
import { Input } from "@/app/components/ui/input";
import { Label } from "@/app/components/ui/label";
import { Switch } from "@/app/components/ui/switch";
import { Textarea } from "@/app/components/ui/textarea";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/app/components/ui/form";

import useSigningForm, { FormValues } from "@/app/hooks/useSigningForm";

function SigningToolWithPrivateKey() {
  function onSubmit(values: FormValues) {
    console.log(values);
  }

  const form = useSigningForm();

  const MESSAGE_TO_SIGN = "ZENCLAIM" + form.watch("destinationAddress");

  return (
    <Card className="min-w-96 max-w-md">
      <CardHeader>
        <CardTitle>Signing Tool With Private Key</CardTitle>
        <CardDescription>
          Fill in the form below to sign a message with your private key.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <div className="grid w-full items-center gap-4">
              <FormField
                control={form.control}
                name="privateKey"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Private Key</FormLabel>
                    <FormControl>
                      <Input placeholder="Private Key..." {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="destinationAddress"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Destination Address</FormLabel>
                    <FormControl>
                      <Input placeholder="Destination Address..." {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="testnet"
                render={({ field }) => (
                  <FormItem>
                    <div className="flex items-center space-x-2">
                      <FormControl>
                        <Switch
                          checked={field.value}
                          onCheckedChange={field.onChange}
                        />
                      </FormControl>
                      <FormLabel>Testnet</FormLabel>
                      <FormMessage />
                    </div>
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="compressed"
                render={({ field }) => (
                  <FormItem>
                    <div className="flex items-center space-x-2">
                      <FormControl>
                        <Switch
                          checked={field.value}
                          onCheckedChange={field.onChange}
                        />
                      </FormControl>
                      <FormLabel>Compressed</FormLabel>
                      <FormMessage />
                    </div>
                  </FormItem>
                )}
              />

              <div>
                <Label htmlFor="message">Message to Sign</Label>
                <Textarea
                  id="message"
                  disabled
                  placeholder="Message To Sign"
                  value={MESSAGE_TO_SIGN}
                />
              </div>

              <Button type="submit">Sign Message</Button>
            </div>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
}

export default SigningToolWithPrivateKey;
