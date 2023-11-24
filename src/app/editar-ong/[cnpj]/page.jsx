"use client";
import { useParams } from "next/navigation";
import { useState } from "react";

// ...

export default function Dashboard() {
  // ... (seu código existente)
const {cnpj} = useParams();
const cpf = sessionStorage.getItem("token");
  // Estado para controlar a exibição do formulário de alteração
  const [showEditForm, setShowEditForm] = useState(false);
  // Estado para armazenar os dados editados
  const [editedOng, setEditedOng] = useState({
    cpf: cpf,
    nome: "",
    localidade: "",
    telefone: "",
    email: "",
    cnpj: `${cnpj}`,
  });

  const handleChangedOng = (e) => {
    const {name,value} = e.target;
    setEditedOng({...editedOng, [name]: value});
    }


  // Função para lidar com o envio do formulário de edição
  const handleEditFormSubmit = async () => {
    try {
      // Realize a lógica de alteração aqui, por exemplo, uma solicitação PUT para o servidor
      const response = await fetch(`http://localhost:8080/hydrovital/ong/`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(editedOng),
      });

      if (response.ok) {
        // Se a alteração for bem-sucedida, atualize o estado local ou faça uma nova solicitação para obter os dados atualizados
        console.log('Ong alterada com sucesso!');
        // Ocultar o formulário de edição após o envio bem-sucedido
        setShowEditForm(false);
        window.location.href = `/dashboard/${cpf}`;
      } else {
        window.location.href = `/error/${response.status}`;
      }
    } catch (error) {
      console.error('Erro na solicitação de alteração:', error);
    }
  };

  return (
    <form onSubmit={handleEditFormSubmit} className="max-w-md mx-auto mt-16  p-6 bg-white rounded-md shadow-md">
      <div className="mb-6">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="idNome">
          Nome:
        </label>
        <input
          className="w-full px-3 py-2 leading-tight border border-gray-300 rounded-md focus:outline-none focus:shadow-outline"
          id="idNome"
          name="nome"
          type="text"
          value={editedOng.nome}
          onChange={handleChangedOng}
        />
      </div>

      <div className="mb-6">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="idLocalidade">
          Localidade:
        </label>
        <input
          className="w-full px-3 py-2 leading-tight border border-gray-300 rounded-md focus:outline-none focus:shadow-outline"
          id="idLocalidade"
          name="localidade"
          type="text"
          value={editedOng.localidade}
          onChange={handleChangedOng}
        />
      </div>

      <div className="mb-6">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="idTelefone">
          Telefone:
        </label>
        <input
          className="w-full px-3 py-2 leading-tight border border-gray-300 rounded-md focus:outline-none focus:shadow-outline"
          id="idTelefone"
          name="telefone"
          type="text"
          value={editedOng.telefone}
          onChange={handleChangedOng}
        />
      </div>

      <div className="mb-6">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="idEmail">
          Email:
        </label>
        <input
          className="w-full px-3 py-2 leading-tight border border-gray-300 rounded-md focus:outline-none focus:shadow-outline"
          id="idEmail"
          name="email"
          type="email"
          value={editedOng.email}
          onChange={handleChangedOng}
        />
      </div>

      <div className="flex items-center justify-between">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          type="submit"
        >
          Atualizar Água
        </button>
      </div>
    </form>
  );
}
