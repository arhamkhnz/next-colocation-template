import { siGithub } from "simple-icons";

import { SimpleIcon } from "@/components/simple-icon";
import { Button } from "@/components/ui/button";

export default function GHSignin() {
  return (
    <Button variant="outline" className="w-full">
      <SimpleIcon icon={siGithub} />
      Continue with GitHub
    </Button>
  );
}
