import { component$, Resource, useResource$, useStore } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";

export const Breeds = component$(({ breed }: { breed: string }) => {
  const breedsList = useStore<{ breeds: string[] }>({ breeds: [] });
  const callTheAPI = useResource$(async () => {
    try {
      const response = await fetch("https://dog.ceo/api/breeds/list/all", {});
      const res = await response.json();
      return res.message;
    } catch (error) {
      console.error(error);
    }
  });

  return (
    <Resource
      value={callTheAPI}
      onResolved={(data) => {
        breedsList.breeds = Object.keys(data);
        return (
          <div class="flex-items">
            {breedsList.breeds
              ?.filter((item) => item.includes(breed))
              .map((breed, i) => (
                <Link
                  key={i + breed}
                  href={`/breed/${breed}`}
                  style={{ decoration: "none" }}
                >
                  <p>{breed}</p>
                </Link>
              ))}
          </div>
        );
      }}
      onRejected={() => <div>Failed to load images</div>}
      onPending={() => <div>Loading...</div>}
    />
  );
});
