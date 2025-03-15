import { Poppins } from "next/font/google";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { LoginButton } from "@/components/auth/login-button";

const font = Poppins({
  subsets: ["latin"],
  weight: ["600"]
})

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center h-full bg-[#EBE8DB]">
      <div className="space-y-6 text-center">
        <h1 className={cn("text-6xl font-semibold  drop-shadow-md", font.className)}>UrbanFlow</h1>
        <p className="text-lg">A Smart Utitlity Software</p>
        <div>
          <LoginButton>
            <Button
            className="cursor-pointer"
            variant="default"
            size="lg">
              Sign in
            </Button>
          </LoginButton>
        </div>
      </div>
    </main>
  );
}