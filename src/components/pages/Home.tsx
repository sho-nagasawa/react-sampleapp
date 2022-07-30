import { memo, VFC } from "react";

export const Home: VFC = memo(() => {
  console.log("home");

  return <p>Homeページです</p>;
});
