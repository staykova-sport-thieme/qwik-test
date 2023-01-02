import { component$ } from "@builder.io/qwik";
import { DocumentHead, Link } from "@builder.io/qwik-city";

import { BreedsList } from "../components/breedsList/breedsList";

export default component$(() => {
  return (
    <div
      style={{
        padding: "20px",
      }}
    >
      <BreedsList />
      <Link href="/flower">Flower</Link>
    </div>
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
