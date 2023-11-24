"use client";
import { useState } from "react";
import Link from "next/link";

export default function NovaOng() {
  const cpf = sessionStorage.getItem("token");
  // Estado para armazenar os dados da nova ONG
  const [novaOng, setNovaOng] = useState({
    cnpj: "",
    nome: "",
    localidade: "",
    telefone: "",
    email: "",
    cpf: "",
  });

  // Estado para armazenar mensagens de erro
  const [error, setError] = useState(null);

  // Função para lidar com mudanças nos campos do formulário
  const handleChange = (e) => {
    const { name, value } = e.target;
    setNovaOng({ ...novaOng, [name]: value });
  };

  // Função para validar o formulário
  const isValidForm = () => {
    // Adicione validações aqui conforme necessário
    return true;
  };

  // Função para lidar com o envio do formulário
  // Função para lidar com o envio do formulário
// Função para lidar com o envio do formulário
const handleCadastro = async (e) => {
  e.preventDefault();

  try {
    const resposta = await fetch("http://localhost:8080/hydrovital/ong", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(novaOng),
    });
    console.log(resposta);

    if (resposta.ok) {
        const contentType = resposta.headers.get("content-type");
        
        if (contentType && contentType.includes("application/json")) {
            const resultado = await resposta.json();
            console.log(resultado);
            window.location.href = `/dashboard/${cpf}`;
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
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-md shadow-md">
      <h2 className="text-2xl font-bold mb-6">Cadastro de Nova ONG</h2>
      <form onSubmit={handleCadastro}>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="idCnpj"
          >
            CNPJ:
          </label>
          <input
            className="w-full px-3 py-2 leading-tight border border-gray-300 rounded-md focus:outline-none focus:shadow-outline"
            id="idCnpj"
            name="cnpj"
            type="number"
            value={novaOng.cnpj}
            onChange={handleChange}
          />
        </div>

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
            value={novaOng.nome}
            onChange={handleChange}
          />
        </div>

        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="idLocalidade"
          >
            Localidade:
          </label>
          <input
            className="w-full px-3 py-2 leading-tight border border-gray-300 rounded-md focus:outline-none focus:shadow-outline"
            id="idLocalidade"
            name="localidade"
            type="text"
            value={novaOng.localidade}
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
            value={novaOng.telefone}
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
            value={novaOng.email}
            onChange={handleChange}
          />
        </div>

        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="idCpfUsuario"
          >
            CPF do Usuário:
          </label>
          <input
            className="w-full px-3 py-2 leading-tight border border-gray-300 rounded-md focus:outline-none focus:shadow-outline"
            id="idCpfUsuario"
            name="cpf"
            type="text"
            value={novaOng.cpf}
            onChange={handleChange}
          />
        </div>

        {/* Exibir mensagem de erro, se houver */}
        {error && <p className="text-red-500">{error}</p>}

        <div className="flex items-center justify-between">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
            disabled={!isValidForm()}
          >
            Cadastrar ONG
          </button>
          <button className="text-sm text-blue-300">
            <Link href="/dashboard">Cancelar</Link>
          </button>
        </div>
      </form>
    </div>
  );
}
