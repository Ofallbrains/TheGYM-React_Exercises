import React from "react";

type JokeProps = {
  setup: string;
  punchline: string;
};

export default function Joke({ setup, punchline }: JokeProps) {
  return (
    <div >
      <h3>{setup}</h3>
      <p>{punchline}</p>
      
    </div>
  );
}
