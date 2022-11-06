import * as yup from "yup";

export const schemaCreateTask = yup.object().shape({
  title: yup.string().required("Título do Projeto obrigatório"),
  content: yup.string().required("Descrição da tarefa é obrigatória"),
});
