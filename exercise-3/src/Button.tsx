type ButtonProps = {
    text: string;
    onClick: () => void;
}

export default function Button({ text, onClick }: ButtonProps) {
    return (
        <button
            className=" border-2 border-transparent bg-gray-200 rounded-sm w-20 cursor-pointer mt-10 ml-30"
            onClick={onClick}
        >
            {text}
        </button>
    )
}