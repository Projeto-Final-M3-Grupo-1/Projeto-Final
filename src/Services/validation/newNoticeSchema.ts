import * as yup from "yup";

export const newNoticeSchema = yup.object().shape({
	title: yup.string().required("O título é obrigatório"),
	description: yup.string().required("A descrição é obrigatória"),
	img: yup.string().url(),
	site: yup.string().url(),
});
