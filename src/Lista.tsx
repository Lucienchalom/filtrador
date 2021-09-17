import { FC } from "react";
import { ITarefa } from "./tarefas";

interface IProps {
  tarefas: ITarefa[];
}

export const Lista: FC<IProps> = (props: IProps) => {
  return (
    <div>
      {props.tarefas.map((tarefa) => {
        return (
          <div key={tarefa.id}>
            <p>
              <strong> Descrição: </strong>
              {tarefa.descricao}
            </p>
            <p>
              <strong> Tags: </strong> {tarefa.tags?.join(", ")}
            </p>
            <p>
              <strong> Status:</strong> {tarefa.finalizado?.toString()}
            </p>
            <p>
              <strong> Data Limite: </strong>
              {tarefa.dataLimite}
            </p>
          </div>
        );
      })}
    </div>
  );
};
