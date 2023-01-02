import { component$, useSignal } from "@builder.io/qwik";
import { Breeds } from "../breeds/breeds";

export const BreedsList = component$(() => {
  const state = useSignal("");

  return (
    <>
      <div class="flex-items" style={{ alignItems: "center" }}>
        <p>Filter breeds list</p>
        <input
          value={state.value}
          onInput$={(e) => (state.value = (e.target as HTMLInputElement).value)}
        />
      </div>
      <Breeds breed={state.value} />
    </>
  );
});
