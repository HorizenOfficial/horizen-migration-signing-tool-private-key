"use client";
import { Button } from "@/app/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/app/components/ui/card";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/app/components/ui/form";
import { Input } from "@/app/components/ui/input";
import { Label } from "@/app/components/ui/label";
import { Switch } from "@/app/components/ui/switch";
import { Textarea } from "@/app/components/ui/textarea";

import SignatureDialog from "@/app/components/molecules/SignatureDialog";
import { Separator } from "@/app/components/ui/separator";
import useSigningForm from "@/app/hooks/useSigningForm";
import {
  deriveZenAddressFromPrivateKey,
  isMainnetWif,
  isPrivateKeyOnWifFormat,
  isValidPrivateKey,
} from "@/app/lib/privateKeysUtilities";
import signMessageWithPrivateKey from "@/app/lib/signMessageWithPrivateKey";
import { useEffect, useState } from "react";

function SigningToolWithPrivateKey() {
  const [showDialogSignature, setShowDialogSignature] = useState(false);
  const [zenAddress, setZenAddress] = useState("");
  const [signature, setSignature] = useState("");
  const form = useSigningForm();

  const { destinationAddress, privateKey, compressed, testnet } = form.watch();
  const MESSAGE_TO_SIGN = "ZT1CLAIM" + destinationAddress;

  useEffect(() => {
    const isPrivateKeyWif = isPrivateKeyOnWifFormat(privateKey);
    if (isPrivateKeyWif) {
      form.setValue("testnet", !isMainnetWif(privateKey));
    }
  }, [form, privateKey]);

  useEffect(() => {
    if (isValidPrivateKey(privateKey)) {
      const derivatedZenAddress = deriveZenAddressFromPrivateKey({
        privateKey,
        compressed,
        testnet,
      });

      setZenAddress(derivatedZenAddress);
    }
  }, [privateKey, compressed, testnet]);

  function onSubmit() {
    const signature = signMessageWithPrivateKey({
      message: MESSAGE_TO_SIGN,
      privateKey: privateKey,
      compressed: compressed,
    });
    setSignature(signature);
    setShowDialogSignature(true);
  }

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
                    <FormDescription>
                      You can use a WIF or a HEX private key.
                    </FormDescription>
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
                    <FormMessage className="max-w-xs" />
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

              <Separator />

              <div>
                <Label htmlFor="zenAddress">Your ZEN address</Label>
                <Textarea
                  id="zenAddress"
                  disabled
                  placeholder="ZEN Address"
                  value={zenAddress}
                />
              </div>

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

      <SignatureDialog
        signature={signature}
        open={showDialogSignature}
        setOpen={setShowDialogSignature}
      />
    </Card>
  );
}

export default SigningToolWithPrivateKey;
