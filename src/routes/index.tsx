import { component$, useSignal } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import ProductDescription from "./product-description";

export default component$(() => {
  const count = useSignal(0);

  return (
    <>
      <button onClick$={() => count.value++}>Increment</button>
      <div>Count: {count.value}</div>
      <ProductDescription />
    </>
  );
});

export const head: DocumentHead = {
  title: "Welcome to Qwik",
  meta: [
    {
      name: "description",
      content: "Qwik site description",
    },
  ],
};
