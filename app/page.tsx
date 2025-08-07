import { Accordion } from "@/components/accordion";
import AuthCard from "@/components/auth-card";
import { Tooltip } from "@/components/tooltip";

export default function Home() {
  return (
    <div className="flex items-center justify-center h-screen gap-5">
        <Tooltip/>
        <Accordion />
      <AuthCard /> 
    </div>
  );
}
