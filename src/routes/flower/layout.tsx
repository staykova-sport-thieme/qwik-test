import { component$, Slot } from "@builder.io/qwik";

export default component$(() => {
  return (
    <section id="flower">
      <Slot />
    </section>
  );
});
