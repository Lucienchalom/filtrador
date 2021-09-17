import { useState, FC } from "react";
import { listarTags } from "./helpers";
import { tarefas } from "./tarefas";

interface IProps {
  onPesquisar: (filtros: IFiltros) => void;
}
export interface IFiltros {
  finalizado: string;
  tag: string;
  descricao: string;
  data: string;
}

export const Filtros: FC<IProps> = ({ onPesquisar }) => {
  const [finalizado, setFinalizado] = useState("");
  const [descricao, setDescricao] = useState("");
  const [tag, setTag] = useState("");
  const [data, setData] = useState("");

  return (
    <form action="">
      <label htmlFor="status">
        Status:
        <select
          name="status"
          id="status"
          onChange={(event) => setFinalizado(event.target.value)}
        >
          <option value="">Selecione</option>
          <option value="finalizado">Finalizado</option>
          <option value="nao_finalizado">Não Finalizado</option>
        </select>
      </label>

      <label htmlFor="descricao">
        Descrição:
        <input
          type="text"
          name="descricao"
          id="descricao"
          onChange={(event) => setDescricao(event.target.value)}
        />
      </label>

      <label htmlFor="tag">
        Tag:
        <select
          name="tag"
          id="tag"
          onChange={(event) => setTag(event.target.value)}
        >
          <option value="">Selecione</option>
          {listarTags(tarefas).map((tag) => (
            <option key={tag} value={tag}>
              {tag}
            </option>
          ))}
        </select>
      </label>

      <label htmlFor="dataLimite">
        Data Limite:
        <input
          type="date"
          name="data_limite"
          id="data_limite"
          onChange={(event) => setData(event.target.value)}
        />
      </label>

      <input
        type="button"
        id="button"
        value="Pesquisar"
        onClick={() => onPesquisar({ finalizado, tag, descricao, data })}
      />
    </form>
  );
};
