import zencashjs from "zencashjs";
import { isPrivateKeyOnWifFormat } from "./privateKeysUtilities";

function signMessageWithPrivateKey({
  message,
  privateKey,
  compressed,
}: {
  message: string;
  privateKey: string;
  compressed: boolean;
}) {
  let key = privateKey;

  if (isPrivateKeyOnWifFormat(privateKey)) {
    key = zencashjs.address.WIFToPrivKey(privateKey);
  }

  return zencashjs.message.sign(message, key, compressed).toString("base64");
}

export default signMessageWithPrivateKey;
