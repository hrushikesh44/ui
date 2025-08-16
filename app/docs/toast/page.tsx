import { Toast } from "@/components/toast";

export default function Home(){
    return(
        <div className="flex flex-col items-center justify-center gap-10 h-screen">
            <Toast error="Error Occured" />
        </div>
    )
}