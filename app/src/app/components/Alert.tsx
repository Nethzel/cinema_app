


export default function Alert({ message }: { message: string}) { 

    return(
        <div className="border-destructive/50 text-destructive dark:border-destructive relative rounded-lg border p-4 sm:w-[40vw] md:w-[40vw] lg:w-[20vw]  mt-5">
            <h5 className="mb-1 font-medium leading-none tracking-tight">
                Error
            </h5>
            <div className="text-sm ">
                {message}
            </div>
        </div>
    )
}