import { useEffect } from "react";
import handler from "./api/api";

export default function Home() {
  useEffect(() => {
    async function getPokemon() {
      const response = await fetch("/api/api");
      const data = await response.json();
      console.log(data);
    }
    getPokemon();
  });
  return (
    <div>
      {/* Your code goes here. Have fun! */}
      <h1>Hi</h1>
    </div>
  );
}
