type NavProps = {
    items: string[]
}

export default function NavList({ items }: NavProps) {
    return (
        <>
            <ul className="unordered">
                {items.map((item, index) => (
                    <li
                        key={index}
                        className="text-blue-500 underline">
                        {item}
                        
                    </li>
                ))}
            </ul>
        </>
    )
}