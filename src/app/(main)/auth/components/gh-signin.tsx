import { Button } from "@/components/ui/button";
import { Github } from "lucide-react";

export default function GHSignin() {
  return (
    <Button variant="outline" className="w-full">
      <Github />
      Continue with GitHub
    </Button>
  );
}
