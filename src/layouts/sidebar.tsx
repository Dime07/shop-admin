import { cn } from "@/lib/utils";
import { Link, useLocation } from "react-router-dom";

const ROUTES = [
  {
    pathname: "/",
    name: "dashboard",
  },
  {
    pathname: "/product",
    name: "product",
  },
];

const Sidebar = () => {
  const location = useLocation();
  return (
    <div className="min-h-screen w-60 shadow-md p-4 bg-viridian-50/50">
      <ul className="flex flex-col gap-4">
        {ROUTES.map((route) => (
          <li className="flex">
            <Link
              to={route.pathname}
              className={cn(
                "p-2 w-full font-medium rounded-md text-viridian-950 cursor-pointer transition-all duration-500 capitalize",
                {
                  "bg-viridian-400 text-white":
                    location.pathname === route.pathname,
                }
              )}
            >
              {route.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
