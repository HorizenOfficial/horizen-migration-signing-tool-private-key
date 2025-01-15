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

function SigningToolWithPrivateKey() {
  return (
    <Card className="min-w-96 max-w-md">
      <CardHeader>
        <CardTitle>Signing Tool With Private Key</CardTitle>
        <CardDescription>
          Fill in the form below to sign a message with your private key.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid w-full items-center gap-4">
          <div>
            <Label htmlFor="privateKey">Private Key</Label>
            <Input
              type="privateKey"
              id="privateKey"
              placeholder="Private Key..."
            />
          </div>

          <div>
            <Label htmlFor="privateKey">Destination Address</Label>
            <Input
              type="destinationAddress"
              id="destinationAddress"
              placeholder="Destination Address..."
            />
          </div>

          <div className="flex items-center space-x-2">
            <Switch id="testnet" />
            <Label htmlFor="testnet">Testnet</Label>
          </div>

          <div className="flex items-center space-x-2">
            <Switch id="compressed" />
            <Label htmlFor="compressed">Compressed</Label>
          </div>

          <div>
            <Label htmlFor="message">Message to Sign</Label>
            <Textarea id="message" disabled placeholder="Message To Sign" />
          </div>

          <Button>Sign Message</Button>
        </div>
      </CardContent>
    </Card>
  );
}

export default SigningToolWithPrivateKey;
