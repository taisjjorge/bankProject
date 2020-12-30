/*
Ser autenticavel === ter método "autenticar"
*/

export class SistemaAutenticacao {
    static login(autenticavel, senha) {
        if(SistemaAutenticacao.ehAutenticavel(autenticavel)){
            return autenticavel.autenticar(senha);
        } 
        return false;
    }

    static ehAutenticavel(autenticavel){
        //operador 'in' vai verificar se a chave "autenticar" existe dentro do obj "autenticavel"
        // um método dentro de um obj é um obj dentro de outro obj
        return "autenticar" in autenticavel && 
         autenticavel.autenticar instanceof Function
    }
}
