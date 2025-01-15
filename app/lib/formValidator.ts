import { isAddress } from "viem";
import { z } from "zod";

const privateKeyValidator = z.string().min(1, {
  message: "Private key must be 64 characters long",
});

const destinationAddressValidator = z.string().refine(isAddress, {
  message: "Destination address is not a valid ethereum address",
});

const testnetValidator = z.boolean();
const compressedValidator = z.boolean();

export {
  privateKeyValidator,
  destinationAddressValidator,
  testnetValidator,
  compressedValidator,
};
