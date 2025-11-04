


export interface Jogadora {
  id: string;
  nome: string;
  idade: number;
  posicao: string;
  foto: string;
}


export const POSICOES = [
  "GOL", // goleira
  "ZAG", // zagueira
  "LE",  // lateral esquerda
  "LD",  // lateral direita
  "VOL", // volante
  "MC",  // meio-campo
  "MD",  // meia direita
  "ME",  // meia esquerda
  "PD",  // ponta direita
  "PE",  // ponta esquerda
  "ATA", // atacante
];


export const jogadores: Jogadora[] = [];


export function salvarJogadoras(jogadoras: Jogadora[]) {
  localStorage.setItem("jogadoras", JSON.stringify(jogadoras));
}

export function carregarJogadoras(): Jogadora[] {
  const data = localStorage.getItem("jogadoras");
  return data ? JSON.parse(data) : [];
}