"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Footer(){

    const url = usePathname();

    var cpf = sessionStorage.getItem("token");

    return (
        <footer className={url.includes("/sign") || url.includes("adicionar-agua") || url.includes("editar-ong") || url.includes("error") ? "bg-slate-800 text-white py-2 absolute w-full bottom-0" :  "bg-slate-800 text-white py-2"}>
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
            <div className="flex gap-4 text-sm">
              <h1>Daniel Soares Delfin</h1>
              <p>rm552184</p>
              <p>1TDSPL</p>
              <p>Back-End & Banco de Dados</p>
            </div>

            <div className="flex gap-4 text-sm">
              <h1>Leonardo Blanco Pérez Ribeiro</h1>
              <p>rm99119</p>
              <p>1TDSPL</p>
              <p>Back-End</p>
            </div>

            <div className="flex gap-4 text-sm">
              <h1>Leonardo Yuuki Nakazone</h1>
              <p>rm550373</p>
              <p>1TDSPL</p>
              <p>Front/Back-End, Banco de Dados & Ai</p>
            </div>

            <div className="flex gap-4 text-sm">
              <h1>Paulo Henrrique Luchini Ferreira</h1>
              <p>rm98082</p>
              <p>1TDSPL</p>
              <p>Planejamento & Banco de Dados</p>
            </div>
    
            <p className="text-sm">&copy; 2023 HydroVital . Todos os direitos reservados.</p>
          </div>
        </footer>
      );
};

