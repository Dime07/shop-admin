import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Settings } from "lucide-react";

const Navbar = () => {
  return (
    <div className=" p-5 shadow flex justify-between items-center">
      <p className="text-xl font-medium text-viridian-950">
        Hello, <span className="underline underline-offset-2">Morty</span> 👋
      </p>
      <div className="flex gap-2 items-center">
        <Button className="bg-transparent hover:bg-transparent">
          <Settings className="text-viridian-950" />
        </Button>
        <Avatar className="h-8 w-8">
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </div>
    </div>
  );
};

export default Navbar;
