import { useState } from "react";
import { Filtros, IFiltros } from "./Filtros";
import {
  filtrarDataLimite,
  filtrarDescricao,
  filtrarFinalizado,
  filtrarTag
} from "./helpers";
import { Lista } from "./Lista";
import { tarefas as tarefasOrig } from "./tarefas";

export const Container = () => {
  const [tarefas, setTarefas] = useState(tarefasOrig);

  const handlePesquisar = (filtros: IFiltros) => {
    let tarefasFiltradas = [...tarefasOrig];
    if (filtros.finalizado) {
      tarefasFiltradas = filtrarFinalizado(
        tarefasFiltradas,
        filtros.finalizado
      );
    }
    if (filtros.tag) {
      tarefasFiltradas = filtrarTag(tarefasFiltradas, filtros.tag);
    }
    if (filtros.descricao) {
      tarefasFiltradas = filtrarDescricao(tarefasFiltradas, filtros.descricao);
    }
    if (filtros.data) {
      tarefasFiltradas = filtrarDataLimite(tarefasFiltradas, filtros.data);
    }
    setTarefas(tarefasFiltradas);
  };

  return (
    <div>
      <Filtros onPesquisar={handlePesquisar} />
      <Lista tarefas={tarefas} />
    </div>
  );
};
