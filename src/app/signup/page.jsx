

"use client";
import Link from "next/link";
import { useState } from "react";



export default function Signup() {
  
  const [usuario, setUsuario] = useState({
    nome: "",
    telefone: "",
    cpf: "",
    email: "",
    dataDeNascimento: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUsuario({ ...usuario, [name]: value });
  };

  const handleSignup = async (e) => {
    e.preventDefault();

    console.log(usuario);

    try {
        const resposta = await fetch("http://localhost:8080/hydrovital/usuario", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(usuario),
        });
        console.log(resposta);

        if (resposta.ok) {
            const contentType = resposta.headers.get("content-type");
            
            if (contentType && contentType.includes("application/json")) {
                const resultado = await resposta.json();
                console.log(resultado);
                sessionStorage.setItem("token", resultado.cpf);
                window.location.href = '/';
            } else {
                console.log("Response is not in JSON format");
            }
        } else {
            window.location.href = `/error/${resposta.status}`;
        }
    } catch (error) {
        console.log("Erro ao enviar dados para o backend", error);
    }
};

  return (
        <div className="max-w-md mx-auto mt-4 p-6 bg-white rounded-md shadow-md">
          <h2 className="text-2xl font-bold mb-6">Cadastro</h2>
          <form onSubmit={handleSignup}>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="idNome"
            >
              Nome:
            </label>
            <input
              className="w-full px-3 py-2 leading-tight border border-gray-300 rounded-md focus:outline-none focus:shadow-outline"
              id="idNome"
              name="nome"
              type="text"
              value={usuario.nome}
              onChange={handleChange}
            />
          </div>
    
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="idTelefone"
            >
              Telefone:
            </label>
            <input
              className="w-full px-3 py-2 leading-tight border border-gray-300 rounded-md focus:outline-none focus:shadow-outline"
              id="idTelefone"
              name="telefone"
              type="tel"
              value={usuario.telefone}
              onChange={handleChange}
            />
          </div>
    
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="idCpf"
            >
              CPF:
            </label>
            <input
              className="w-full px-3 py-2 leading-tight border border-gray-300 rounded-md focus:outline-none focus:shadow-outline"
              id="idCpf"
              name="cpf"
              type="text"
              value={usuario.cpf}
              onChange={handleChange}
            />
          </div>
    
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="idEmail"
            >
              Email:
            </label>
            <input
              className="w-full px-3 py-2 leading-tight border border-gray-300 rounded-md focus:outline-none focus:shadow-outline"
              id="idEmail"
              name="email"
              type="email"
              value={usuario.email}
              onChange={handleChange}
            />
          </div>
          <div className="mb-6">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="idDataDeNascimento"
            >
              Data de Nascimento:
            </label>
            <input
              className="w-full px-3 py-2 leading-tight border border-gray-300 rounded-md focus:outline-none focus:shadow-outline"
              id="idDataDeNascimento"
              name="dataDeNascimento"
              type="text"
              value={usuario.dataDeNascimento}
              onChange={handleChange}
            />
          </div>
            <div className="flex items-center justify-between">
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="submit"
              >
                Cadastrar
              </button>
              <button className="text-sm text-blue-300">
                <Link href="/signin">Já possui uma conta?</Link>
              </button>
            </div>
          </form>
        </div>
      );
}