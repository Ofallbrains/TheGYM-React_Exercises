type AnimalCardProps = {
    name: string;
    
}

export default function AnimalCard({ name }: AnimalCardProps) {

    return (
        <div className="bg-purple-100 border border-purple-300 rounded p-4 m-2 text-center shadow">
      <h2 className="text-lg font-semibold capitalize">{name}</h2>
    </div> 
    )

}
