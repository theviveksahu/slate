import { useState } from "react";
import { useMutation } from "convex/react";

export const useApiMutation = (mutationFunction: any) => {
  const [pending, setPending] = useState(false);
  const apimutation = useMutation(mutationFunction);

  const mutate = async (payload: any) => {
    setPending(true);
    return await apimutation(payload)
      .finally(() => setPending(false))
      .then((result) => result)
      .catch((error) => {
        throw error;
      });
  };

  return {
    mutate,
    pending,
  };
};
