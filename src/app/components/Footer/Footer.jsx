"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Footer(){

    const url = usePathname();

    var cpf = sessionStorage.getItem("token");

    return (
        <footer className={url.includes("/sign") ? "bg-slate-800 text-white py-3 absolute w-full bottom-0" :  "bg-slate-800 text-white py-3"}>
          <div className="flex flex-col items-center justify-around">
            <div className="logo cursor-pointer mb-4">
              <Link href="/">
                <Image src="/img/logo.png" width={220} height={123} alt="logo" />
              </Link>
            </div>
    
            <nav className="mb-4">
              <ul className="flex justify-between gap-4">
              <li className={url == "/" ? "text-blue-300" : "text-base"}><Link href="/">Home</Link></li>
                <li className={url == "/servico" ? "text-blue-300" : "text-base"}><Link href="/servico">Serviço</Link></li>
                <li className={url == `/dashboard/${cpf}` ? "text-blue-300" : "text-base"}><Link href={`/dashboard/${cpf}`}>dashboard</Link></li>
              </ul>
            </nav>
    
            <hr className="w-96 border-gray-600 mb-4" />
    
            <p className="text-sm">&copy; 2023 HydroVital . Todos os direitos reservados.</p>
          </div>
        </footer>
      );
};

