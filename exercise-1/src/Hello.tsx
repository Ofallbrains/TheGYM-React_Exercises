type HelloProps = {
    message: string
}

export default function Hello({ message }: HelloProps) {
    return (
        <>
            <div className="bg-yellow-400 mt-32 w-100 h-100 ml-auto mr-auto flex display items-center justify-center ">
                {message}
            </div>
        </>
    )
}