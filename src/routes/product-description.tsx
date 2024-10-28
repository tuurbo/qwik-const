import { component$ } from "@builder.io/qwik";

const allCertifications = [
  {
    name: "Made in USA",
  },
  {
    name: "Energy Star",
  },
  {
    name: "NSF Listed",
  },
];

export default component$(() => {
  return (
    <>
      <div>Description...</div>
      <div>
        <ul>
          {allCertifications.map((cert) => (
            <li key={cert.name}>{cert.name}</li>
          ))}
        </ul>
      </div>
    </>
  );
});
