"use client";

import { useParams } from "next/navigation";


const ErrorPage = () => {

    const {codigo} = useParams();
  return (
    <div className="flex items-center justify-center h-[60vh] bg-gray-100">
      <div className="p-8 bg-white border rounded-md shadow-md">
        <h1 className="text-4xl font-bold text-red-500">Erro: {codigo}</h1>
        <p className="text-gray-700">Alguma coisa de Errado</p>
      </div>
    </div>
  );
};

ErrorPage.getInitialProps = ({ res, err }) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
  return { statusCode };
};

export default ErrorPage;
