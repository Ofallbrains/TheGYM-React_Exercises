import AnimalCard from "./AnimalCustom"

type NavProps = {
    items: string[]
}

export default function NavList({ items }: NavProps) {
    return (
        <>
            {/* <ul className="flex ">
                {items.map((item, index) => (
                    <li
                        key={index}
                        className="text-blue-500 underline">
                        {item}
                       
                    </li>
                ))}
            </ul> */}


             {items.map((animal) => (
        <AnimalCard key={animal} name={animal} />
      ))}
        </>
    )
}