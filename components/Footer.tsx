import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mt-auto w-full h-[100px] border-solid border-t border-[#eaeaea] flex justify-center items-center">
      <Link href="https://next.new"><a>Created with&nbsp;<b>Typescript, Next.js & Tailwind</b>&nbsp;⚡️</a></Link>
    </footer>
  );
}
