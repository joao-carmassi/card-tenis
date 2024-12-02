import type { IDadosTenis } from "../interface/IDadosTenis";

let dados: Promise<IDadosTenis[]>;

export default function baixaDadosTenis():
  | Promise<IDadosTenis[]>
  | IDadosTenis[] {
  if (!dados) {
    try {
      dados = chamaApi();
    } catch (error) {
      console.error(`Erro ao baixar dados da api: ${error}`);
    }
  }
  return Promise.resolve(dados);
}

function chamaApi() {
  return fetch("/db.json")
    .then((res) => {
      if (!res.ok) {
        throw new Error(`${res.status}: ${res.statusText}`);
      }
      return res.json();
    })
    .then((data) => {
      return data.dadosTenis;
    });
}
