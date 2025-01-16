import { isAddress } from "viem";
import { z } from "zod";
import { isValidPrivateKey } from "./privateKeysUtilities";

const privateKeyValidator = z.string().refine(isValidPrivateKey, {
  message: "Private key is not a valid WIF or hex format",
});

const destinationAddressValidator = z.string().refine(isAddress, {
  message: "Destination address is not a valid ethereum address",
});

const testnetValidator = z.boolean();
const compressedValidator = z.boolean();

export {
  compressedValidator,
  destinationAddressValidator,
  privateKeyValidator,
  testnetValidator,
};
