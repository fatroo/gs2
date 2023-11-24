"use client";
import Image from "next/image";
import Link from "next/link";
import { redirect } from "next/navigation";
import { useEffect } from "react";

export default function Servico() {
  var cpf = sessionStorage.getItem("token");

  useEffect(() => {

    if (sessionStorage.getItem("token") !== null) {
      console.log("logado");
    }else{
      redirect('/signup')
    }
  }, []);


  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Hero Section */}
      <div className="bg-blue-400 text-white py-16 text-center">
        <h1 className="text-4xl font-bold mb-4">Soluções HydroVital</h1>
        <p className="text-lg">
          Descubra como transformamos a qualidade da água para um futuro mais saudável.
        </p>
      </div>

      {/* Detalhes das Soluções */}
      <div className="container mx-auto mt-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
          Nossas Soluções em Detalhes
        </h2>

        <p className="text-gray-600 mb-6 text-lg">
          A HydroVital é líder em oferecer soluções inovadoras e eficazes para o tratamento de água, visando melhorar a qualidade da água em diversas etapas. Nossos processos avançados garantem água limpa e saudável para comunidades em todo o mundo. Conheça mais sobre nossos principais processos:
        </p>

        {/* Processos Section */}
        <div className="flex flex-wrap gap-6 justify-center">
          {/* Processo 1 */}
          <div className="bg-white p-6 rounded-lg shadow-md w-96 mb-6">
            <Image
              src="/img/processo1.png"
              width={300}
              height={250}
              alt="Coagulação e Floculação"
            />
            <h3 className="text-xl font-bold mt-4 mb-2">Coagulação e Floculação</h3>
            <p className="text-gray-600">
              Na etapa de Coagulação e Floculação, implementamos tecnologia de automação avançada. Sensores em tempo real garantem a dosagem precisa de coagulantes, como Sulfato de Alumínio e Cloreto Férrico, otimizando a formação de flocos e resultando em água mais limpa e segura para consumo.
            </p>
          </div>

          {/* Processo 2 */}
          <div className="bg-white p-6 rounded-lg shadow-md w-96 mb-6">
            <Image
              src="/img/processo2.jpg"
              width={300}
              height={250}
              alt="Decantação"
            />
            <h3 className="text-xl font-bold mt-4 mb-2">Decantação</h3>
            <p className="text-gray-600">
              Em nossa abordagem de Decantação, maximizamos a separação de flocos da água através de automação avançada. Sensores de nível e qualidade da água controlam o processo, garantindo uma remoção eficiente de impurezas. Nosso sistema ajusta dinamicamente o tempo de retenção para otimizar os resultados.
            </p>
          </div>

          {/* Processo 3 */}
          <div className="bg-white p-6 rounded-lg shadow-md w-96 mb-6">
            <Image
              src="/img/processo3.png"
              width={300}
              height={250}
              alt="Filtração"
            />
            <h3 className="text-xl font-bold mt-4 mb-2">Filtração</h3>
            <p className="text-gray-600">
              Nossa tecnologia de Filtração Automática inova ao ajustar dinamicamente a taxa de filtração com base na qualidade da água. Asseguramos uma remoção eficaz de impurezas, melhorando significativamente a eficiência do tratamento de água com nossa solução de filtragem automatizada.
            </p>
          </div>

          {/* Processo 4 */}
          <div className="bg-white p-6 rounded-lg shadow-md w-96 mb-6">
            <Image
              src="/img/processo4.jpg"
              width={300}
              height={250}
              alt="Desinfecção"
            />
            <h3 className="text-xl font-bold mt-4 mb-2">Desinfecção</h3>
            <p className="text-gray-600">
              Nosso processo de Desinfecção Automatizada visa proteger comunidades contra microrganismos patogênicos. Monitoramos em tempo real a qualidade da água e ajustamos a dosagem de desinfetantes, como cloro, garantindo a eliminação efetiva de ameaças à saúde.
            </p>
          </div>

          {/* Processo 5 */}
          <div className="bg-white p-6 rounded-lg shadow-md w-96 mb-6">
            <Image
              src="/img/processo5.jpg"
              width={300}
              height={250}
              alt="Fluoretação"
            />
            <h3 className="text-xl font-bold mt-4 mb-2">Fluoretação</h3>
            <p className="text-gray-600">
              Comprometemo-nos com a saúde bucal da sua comunidade através da Fluoretação Automatizada. Dosamos com precisão compostos fluoretantes, contribuindo para a redução da cárie dentária. Adote nossa solução para proporcionar água mais saudável e sorridentes mais felizes.
            </p>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-blue-400 text-white py-16 text-center mt-8">
        <h2 className="text-3xl font-bold mb-4">
          Transforme a qualidade da água!
        </h2>
        <p className="text-lg mb-8">
          Entre em contrato conosco para saber mais sobre nossos serviços e como podemos ajudar.
        </p>
        <Link href={`/dashboard/${cpf}`}>
          <p className="bg-white text-blue-400 px-6 py-3 rounded-full font-semibold text-lg hover:bg-gray-200 cursor-pointer">
            Iniciar contrato
          </p>
        </Link>
      </div>
    </div>
  );
};

