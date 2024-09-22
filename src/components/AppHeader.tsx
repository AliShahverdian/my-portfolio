"use client";

import { useRouter, usePathname } from "next/navigation";

const AppHeader = () => {
  const router = useRouter();
  const pathName = usePathname();
  console.log("pathName", pathName);

  const handleClick = (route: string) => {
    router.push(route);
  };

  return (
    <div className="flex items-center justify-between bg-teal-500 p-6">
      <div className="w-full">
        <div className="text-sm flex items-center">
          <div
            className="flex items-center text-white mr-6 cursor-pointer"
            onClick={() => handleClick("/")}
          >
            <span className="font-semibold text-xl tracking-tight">
              Ali Shahverdian
            </span>
          </div>
          <div
            className={`${
              pathName === "/projects" && "font-bold text-white"
            }   lg:mt-0 text-teal-200 hover:text-white mr-4 cursor-pointer`}
            onClick={() => handleClick("/projects")}
          >
            Projects
          </div>
          <div
            className={`${
              pathName === "/habits" && "font-bold text-white"
            }  lg:mt-0 text-teal-200 hover:text-white mr-4 cursor-pointer`}
            onClick={() => handleClick("/habits")}
          >
            Habits
          </div>
          <div
            className={`${
              pathName === "/contact" && "font-bold text-white"
            } lg:mt-0 text-teal-200 hover:text-white cursor-pointer`}
            onClick={() => handleClick("/contact")}
          >
            contact
          </div>
        </div>
      </div>
    </div>
  );
};
export default AppHeader;
