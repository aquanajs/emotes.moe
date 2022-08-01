/** @jsx h */
import { h } from "preact";
import { tw } from "@twind";

interface LayoutProps {
  children: Element;
}

export default function Layout({children}: LayoutProps) {
  return (
    <div
      class={tw`
      flex flex-col
      min-h-screen
      font-montserrat
      text-lg
      tracking-wide
      text-gray-900
      dark:text-gray-300 dark:bg-chaos-primary
      bg-white
      font-semibold
      dark:font-normal
      kurobg
    `}
    >
      <main
        class={tw`
        flex-1
        w-full
        max-w-7xl
        p-4
        mx-auto
        md:px-8
        py-4
        mt-24
        bg-white/70
        dark:bg-chaos-primary/80
        xl:bg-transparent
        dark:xl:bg-transparent
      `}
      >
        {children}
      </main>
      <style>
        @import
        url("https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap");
      </style>
    </div>
  );
}
