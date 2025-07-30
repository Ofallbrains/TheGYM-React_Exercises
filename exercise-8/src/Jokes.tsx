
type JokeProps = {
  setup: string;
  punchline: string;
};

export default function Joke({ setup, punchline }: JokeProps) {
  return (
    <div >
          <h3 className="jokes">{setup}</h3>
          <p>{ punchline}</p> 
    
    </div>
  );
}
