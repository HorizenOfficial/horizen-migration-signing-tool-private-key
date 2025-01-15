import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

const formSchema = z.object({
  privateKey: z.string().min(64, {
    message: "Private key must be 64 characters long",
  }),
  destinationAddress: z.string().min(34, {
    message: "Destination address must be 34 characters long",
  }),
  testnet: z.boolean(),
  compressed: z.boolean(),
});

type FormValues = z.infer<typeof formSchema>;

function useSigningForm() {
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      privateKey: "",
      destinationAddress: "",
      testnet: false,
      compressed: false,
    },
  });

  return form;
}

export type { FormValues };
export default useSigningForm;
