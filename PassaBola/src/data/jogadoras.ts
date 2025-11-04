export interface Jogadora {
  id: string;
  nome: string;
  nome_usu: string;
  idade: number;
  posicao: string;
  foto: string;
  time: string;
  email: string;
  senha: string;
}

export const POSICOES = [
  "GOL", "ZAG", "LE", "LD", "VOL", "MC", "MD", "ME", "PD", "PE", "ATA"
];

export const jogadoras: Jogadora[] = [];

export function salvarJogadoras(jogadoras: Jogadora[]) {
  localStorage.setItem("jogadoras", JSON.stringify(jogadoras));
}

export function carregarJogadoras(): Jogadora[] {
  const data = localStorage.getItem("jogadoras");
  return data ? JSON.parse(data) : [];
}
