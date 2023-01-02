import { component$, Resource, useResource$ } from "@builder.io/qwik";
import { Link, useLocation } from "@builder.io/qwik-city";

export default component$(() => {
  const location = useLocation();
  const callTheAPI = useResource$<string[]>(async () => {
    try {
      const response = await fetch(
        `https://dog.ceo/api/breed/${location.params.name}/images`,
        {}
      );
      const res = await response.json();
      return res.message;
    } catch (error) {
      console.error(error);
    }
  });

  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        gap: "12px",
        padding: "20px",
      }}
    >
      <Link href="/">Go to /</Link>
      <Resource
        value={callTheAPI}
        onResolved={(data) => {
          return (
            <div
              class="flex-items"
              style={{
                justifyContent: "space-evenly",
              }}
            >
              {data.map((img, i) => (
                <img
                  key={img + i}
                  src={img}
                  alt="dog image"
                  width="200"
                  height="200"
                />
              ))}
            </div>
          );
        }}
        onRejected={() => <div>Failed to load images</div>}
        onPending={() => <div>Loading...</div>}
      />
    </div>
  );
});
