
interface InputProps{
    placeholder?: string
}

export function Input({ placeholder }: InputProps){
    return(
        <input type="text" placeholder={placeholder} className="px-2 py-1 w-full border border-neutral-300 rounded shadow-[0_0.5px_1px_rgb(0,0,0,0.2)] focus:outline-4 outline-neutral-300/70"/>
    )
}