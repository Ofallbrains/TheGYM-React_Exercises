type NavProps = {
    items: string[]
}

export default function NavList({ items }: NavProps) {
    return (
        <>
            <ul className="flex ">
                {items.map((item, index) => (
                    <li
                        key={index}
                        className="text-blue-500 underline">
                        {item}
                        {index < items.length - 1 && <span className="mx-2">|</span>}
                    </li>
                ))}
            </ul>
        </>
    )
}