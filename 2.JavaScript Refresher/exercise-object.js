class Pessoa {
  sPrimeiroNome = 'Douglas Felipe';
  sSobreNome = 'da Silva';
  sSexo = 'Masculino';
  sNascimento = '19/03/1997';
  iIdade = 24;

  getNome = () => {
    console.log('Nome: ' + this.sPrimeiroNome + ' ' + this.sSobreNome);
  }
  
  getSexo = () => {
    console.log('Sexo: ' + this.sSexo);
  }
  
  getDataNascimento = () => {
    console.log('Nasceu em ' + this.sNascimento);
  }
  
  getIdade = () => {
    console.log(this.iIdade + ' anos');
  }

}

// heritage
class PessoaFisica extends Pessoa {
  sCpf = '123.456.789-01';
  
  getCpf = () => {
    console.log('CPF: ' + this.sCpf);
  }
  
  getAll = () => {
    this.getNome();
    this.getSexo();
    this.getDataNascimento();
    this.getIdade();
    this.getCpf();
  }
}

const oDouglas = new PessoaFisica();

console.log('Chamando os métodos da Classe Pessoa através da Classe PessoaFisica');

oDouglas.getNome();
oDouglas.getSexo();
oDouglas.getDataNascimento();
oDouglas.getIdade();
oDouglas.getCpf();

console.log('------------------------');

console.log('Chamando tudo através da própria classe PessoaFisica');
oDouglas.getAll();