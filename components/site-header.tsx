import Link from "next/link";
import Image from "next/image";
import ThemeToggle from "@/components/theme-toggle";
export default function SiteHeader() {
  return (
    <div className="flex flex-col gap-2 md:flex-row items-center justify-between w-full">
      <Link className="flex flex-row items-center" href="/">
        <Image
          src="/logo.svg"
          alt="ethereum Logo"
          width={40}
          height={40}
          className="max-w-48"
          />
          <h1 className="text-xl lg:text-2xl font-extrabold">ethstation</h1>
      </Link>
      <div className="flex flex-row gap-2">
        <ThemeToggle />
      </div>
    </div>
  )
}