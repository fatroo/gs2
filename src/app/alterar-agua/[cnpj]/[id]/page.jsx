"use client";
import { useParams } from "next/navigation";
import { useState } from "react";

// ...

export default function Dashboard() {
  // ... (seu código existente)
const {id} = useParams();
const {cnpj} = useParams();
const cpf = sessionStorage.getItem("token");
  // Estado para controlar a exibição do formulário de alteração
  const [showEditForm, setShowEditForm] = useState(false);
  // Estado para armazenar os dados editados
  const [editedAgua, setEditedAgua] = useState({
    id: id,
    qualidade: "",
    quantidadeAgua: "",
    quantidadeProd: "",
    quantidadePessoa: "",
    cnpj: `${cnpj}`,
  });

  const handleChangedAgua = (e) => {
    const {name,value} = e.target;
    setEditedAgua({...editedAgua, [name]: value});
    }


  // Função para lidar com o envio do formulário de edição
  const handleEditFormSubmit = async () => {
    try {
      // Realize a lógica de alteração aqui, por exemplo, uma solicitação PUT para o servidor
      const response = await fetch(`http://localhost:8080/hydrovital/agua/`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(editedAgua),
      });

      if (response.ok) {
        // Se a alteração for bem-sucedida, atualize o estado local ou faça uma nova solicitação para obter os dados atualizados
        console.log('Água alterada com sucesso!');
        // Ocultar o formulário de edição após o envio bem-sucedido
        setShowEditForm(false);
        window.location.href = `/aguas/${cpf}`;
      } else {
        window.location.href = `/error/${response.status}`;
      }
    } catch (error) {
      console.error('Erro na solicitação de alteração:', error);
    }
  };

  return (
    <div className="max-w-md mx-auto mt-14 p-6 bg-white rounded-md shadow-md ">
      <h2 className="text-2xl font-bold mb-6">Cadastro de Nova Água</h2>
      <form onSubmit={handleEditFormSubmit}>
      <div className="invisible">
          <input
            className="w-full px-3 py-2 leading-tight border border-gray-300 rounded-md focus:outline-none focus:shadow-outline"
            id="idId"
            name="id"
            type="number"
            value={editedAgua.id}
            onChange={handleChangedAgua}
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="idQualidade"
          >
            Qualidade:
          </label>
          <input
            className="w-full px-3 py-2 leading-tight border border-gray-300 rounded-md focus:outline-none focus:shadow-outline"
            id="idQualidade"
            name="qualidade"
            type="text"
            value={editedAgua.qualidade}
            onChange={handleChangedAgua}
          />
        </div>

        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="idQuantidadeAgua"
          >
            Quantidade de Água:
          </label>
          <input
            className="w-full px-3 py-2 leading-tight border border-gray-300 rounded-md focus:outline-none focus:shadow-outline"
            id="idQuantidadeAgua"
            name="quantidadeAgua"
            type="text"
            value={editedAgua.quantidadeAgua}
            onChange={handleChangedAgua}
          />
        </div>

        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="idQuantidadeProd"
          >
            Quantidade de Produtos:
          </label>
          <input
            className="w-full px-3 py-2 leading-tight border border-gray-300 rounded-md focus:outline-none focus:shadow-outline"
            id="idQuantidadeProd"
            name="quantidadeProd"
            type="text"
            value={editedAgua.quantidadeProd}
            onChange={handleChangedAgua}
          />
        </div>

        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="idQuantidadePessoa"
          >
            Quantidade de Pessoas:
          </label>
          <input
            className="w-full px-3 py-2 leading-tight border border-gray-300 rounded-md focus:outline-none focus:shadow-outline"
            id="idQuantidadePessoa"
            name="quantidadePessoa"
            type="number"
            value={editedAgua.quantidadePessoa}
            onChange={handleChangedAgua}
          />
        </div>

        <div className="flex items-center justify-between">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Cadastrar Água
          </button>
          <button className="text-sm text-blue-300">
            <a href="/">Cancelar</a>
          </button>
        </div>
      </form>
    </div>
  );
}
