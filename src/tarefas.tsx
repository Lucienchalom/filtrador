export interface ITarefa {
  id: number;
  descricao: string;
  finalizado?: boolean;
  tags?: string[];
  dataLimite?: string;
}

export type Coluna = "tag" | "descricao" | "finalizado" | "dataLimite";

export const tarefas: ITarefa[] = [
  {
    id: 1,
    descricao: "Estudar CSS Modules",
    finalizado: false,
    tags: ["estudo", "css"]
  },
  {
    id: 2,
    descricao: "Estudar JavaScript Generators",
    finalizado: false,
    tags: ["estudo", "javascript"]
  },
  {
    id: 3,
    descricao: "Levar o cachorro para passear",
    finalizado: true,
    tags: ["pessoal"]
  },
  {
    id: 4,
    descricao: "Comprar Queijo",
    tags: ["casa"]
  },
  {
    id: 5,
    descricao:
      "Comprar Azeite de Oliva para churrasco na casa do Gustavo dps da manifestação",
    tags: ["pessoal", "festa"],
    dataLimite: "2020-10-17"
  },
  {
    id: 6,
    descricao: "Ir na manifestação do MBL",
    finalizado: false,
    dataLimite: "2020-10-17"
  }
];
