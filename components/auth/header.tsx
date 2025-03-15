import { cn } from "@/lib/utils";
import { Poppins } from "next/font/google";

const font = Poppins({
    subsets: ["latin"],
    weight: ["600"]
});

interface HeaderProps {
    label: string;
}

export const Header = ({ label } : HeaderProps) => {
    return (  
        <div className="flex flex-col gap-y-2.5 items-center justif-center w-full">
            <h1 className={cn(
            "text-3xl font-semibold",
            font.className,
            )}>
                UrbanFlow
            </h1>
            <p className="text-muted-foreground text-sm">
                {label}
            </p>
        </div>
    )
}