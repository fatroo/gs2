"use client";
import { useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { redirect } from 'next/navigation';

export default function Home(){

  useEffect(() => {

    if (sessionStorage.getItem("token") !== null) {
      console.log("logado");
    }else{
      redirect('/signup')
    }
  }, []);

  return (
    <div className="bg-slate-50 h-auto">
      <div className="text-center bg-blue-300 p-1">
        <h1>
          Estamos aqui para ajudá-lo a encontrar a solução certa para você.{" "}
          <span className="underline font-semibold">
            <Link href="/servico">Saiba mais</Link>
          </span>
          .
        </h1>
      </div>

      <div className="banner flex justify-around items-center shadow-md">
        <div className="max-w-xl flex flex-col gap-3">
          <div className="border-4 p-3 max-w-md">
            <h1 className="text-3xl text-white font-semibold drop-shadow">
              Situação Atual em diversas regiões do planeta
            </h1>
          </div>
          <p className="text-white text-lg drop-shadow">
            No nosso planeta encontramos diversos locais onde a água desta
            maneira pode acarretar em muitos tipos de doenças às pessoas. Por
            isso nós da HydroVital estamos com o Projeto Horizonte Azul, para
            combater essas doenças e cuidar da saúde da nossa população.
          </p>
          
          <div className="w-1/5 text-center bg-white rounded-sm">
            <Link href="/servico">
              <p className="text-blue-300 font-semibold p-2 ">Saiba Mais</p>
            </Link>
          </div>
          
        </div>

        <div className="invisible">
          <Image src="" width={400} height={400} alt="." />
        </div>
      </div>

      <div className="mt-12">
        <div className="w-4/5 m-auto text-center">
          <h1 className="font-bold text-gray-800 text-3xl drop-shadow">Processos Realizados para o Tratamento da Água</h1>
        </div>
      </div>

      <div className="flex justify-center">
        <div className="processos m-4 p-6 w-4/5 flex flex-wrap justify-center gap-6 bg-white shadow-md">
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
          </div>        </div>
      </div>

      <div className="banner2 flex justify-around items-center shadow-md ">
        {/*  */}
      </div>
    </div>
  );
};


