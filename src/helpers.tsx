import { ITarefa } from "./tarefas";

export const listarTags = (tarefas: ITarefa[]) => {
  let listaTags: string[] = [];
  tarefas.forEach((tarefa) => {
    const tags = tarefa.tags || [];
    tags.forEach((tag) => {
      if (!listaTags.includes(tag)) {
        listaTags.push(tag);
      }
    });
  });
  return listaTags;
};

export const filtrarTag = (tarefas: ITarefa[], input: string) => {
  const inputMinusculo = input.toLowerCase();
  return tarefas.filter((tarefa) => {
    return tarefa.tags?.includes(inputMinusculo);
  });
};

export const filtrarDescricao = (tarefas: ITarefa[], input: string) => {
  return tarefas.filter((tarefa) => {
    const inputMinusculo = input.toLowerCase();
    const descricaoTarefaMinusculo = tarefa.descricao.toLowerCase();
    const descricaoInclui = descricaoTarefaMinusculo.includes(inputMinusculo);
    return descricaoInclui;
  });
};

export const filtrarFinalizado = (tarefas: ITarefa[], finalizado: string) => {
  return tarefas.filter((tarefa) => {
    if (finalizado === "finalizado") {
      return tarefa.finalizado === true;
    } else {
      return tarefa.finalizado === false || tarefa.finalizado === undefined;
    }
  });
};

export const filtrarDataLimite = (tarefas: ITarefa[], input: string) => {
  return tarefas.filter((tarefa) => {
    if (tarefa.dataLimite === undefined) {
      return false;
    }
    return new Date(tarefa.dataLimite) >= new Date(input);
  });
};

// descriçao, tag, finalizado, dataLimite
