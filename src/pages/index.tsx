import Layout from "./components/Layout";
import Tabela from "./components/Tabela";
import Cliente from "../core/Cliente";
import Botao from "./components/Botao";

export default function Home() {

  const clientes = [
    new Cliente('Ana', 23, '1'),
    new Cliente('Bia', 34, '2'),
    new Cliente('Carlos', 45, '3'),
    new Cliente('Daniel', 56, '4'),
  ]

  function clienteSelecionado(cliente: Cliente) {
    console.log(cliente.nome)
  }
  
  function clienteExcluido(cliente: Cliente) {
    console.log(`Excluir... ${cliente.nome}`)
  }

  return (
    <div className={`
    flex justify-center items-center h-screen
    bg-gradient-to-r from-blue-500 to-purple-500 text-white`}>
      <Layout titulo="Cadastro Simples">
        <div className="flex justify-end">
        <Botao cor="green" className="mb-4">Novo Cliente</Botao>
        </div>
        <Tabela clientes={clientes} 
        clienteSelecionado={clienteSelecionado}
        clienteExcluido={clienteExcluido}
        />
      </Layout>
    </div>
  )
}