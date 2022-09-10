import type { PropsWithChildren } from "react";

export default function MainWrapper({ children }: PropsWithChildren) {
  return (
    <div className="bg-white text-black dark:bg-zinc-900 dark:text-white min-h-screen py-0 px-2 flex flex-col justify-center items-center">
      { children }
    </div>
  );
}
