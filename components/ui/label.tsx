interface LabelProps{
    label: string
}
export function Label({ label } : LabelProps){
    return(
        <p className="mb-1 text-neutral-600">{label}</p>
    )
}