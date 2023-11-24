"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {

    const url = usePathname();
    
    var cpf = sessionStorage.getItem("token");


  return (
    <div className="flex flex-row items-center justify-around drop-shadow shadow-md">

        <div className="logo cursor-pointer">
            <Link href="/">
                <Image src="/img/logo.png" width={220} height={123} alt="logo" />
            </Link>
        </div>

        <nav>
            <ul className="flex justify-between w-72">
                <li className={url == "/" ? "text-blue-300" : "text-base"}><Link href="/">Home</Link></li>
                <li className={url == "/servico" ? "text-blue-300" : "text-base"}><Link href="/servico">Serviço</Link></li>
                <li className={url == `/dashboard/${cpf}` ? "text-blue-300" : "text-base"}><Link href={`/dashboard/${cpf}`}>dashboard</Link></li>
            </ul>
        </nav>
    </div>
  )
}
