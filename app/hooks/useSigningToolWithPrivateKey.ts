"use client";
import { useState } from "react";

export const ZEND_CLAIM_MSG_PREFIX = "ZENCLAIM";

function useSigningToolWithPrivateKey() {
  const [privateKey, setPrivateKey] = useState<string>("");
  const [destinationAddress, setDestinationAddress] = useState<string>("");
  const [testnet, setTestnet] = useState<boolean>(false);
  const [compressed, setCompressed] = useState<boolean>(false);
  const [signature, setSignature] = useState<string>("");

  const messageToSign = `${ZEND_CLAIM_MSG_PREFIX}${destinationAddress}`;

  return {
    privateKey,
    setPrivateKey,
    destinationAddress,
    setDestinationAddress,
    testnet,
    setTestnet,
    compressed,
    setCompressed,
    messageToSign,
    signature,
    setSignature,
  };
}

export default useSigningToolWithPrivateKey;
