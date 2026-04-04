import { Github } from "lucide-react";

import { Button } from "@/components/ui/button";

export default function GHSignin() {
  return (
    <Button variant="outline" className="w-full">
      <Github />
      Continue with GitHub
    </Button>
  );
}
