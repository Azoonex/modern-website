"use client"
import { NAV_LINKS } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import Button from "./Button";

function Navbar() {
    return (
        <header >
            <nav
                className="max-container px-10 flex flexBetween
           h-16 border-red-600 border-2 ">
                <Link href="/">
                    <Image src="/hilink-logo.svg" width={50} height={50} />
                </Link>
                <ul className="lg:flexCenter gap-5 hidden ">
                    {NAV_LINKS.map((item) => (
                        <Link
                            className="p-2 rounded-md hover:text-white hover:bg-green-700"
                            key={item.key}
                            href={item.href}>
                            {item.label}
                        </Link>
                    ))}
                </ul>
                <div>
                    <Button
                        title="log ing"
                        variant="btn_dark_green hidden"
                        icon="/user.svg"
                    />
                </div>
                {/* menu hamberger */}
                <div className="static lg:hidden">
                    <Image
                        className="cursor-pointer
                     hover:text-green-700 "
                        src="/menu.svg"
                        width={40}
                        height={40}
                    />
                </div>
            </nav>
        </header>
    );
}

export default Navbar;
