import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { ReactNode } from "react";

const ShadowCard = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => {
  return <Card className={cn("p-5 ", className)}>{children}</Card>;
};

export default ShadowCard;
