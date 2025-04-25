import Cliente from "./Cliente";

export default interface ClienteRerpositorio {
    salvar(cliente: Cliente): Promise<Cliente>
    excluir(cliente: Cliente): Promise<void>
    obterTodos(): Promise<Cliente[]>
}