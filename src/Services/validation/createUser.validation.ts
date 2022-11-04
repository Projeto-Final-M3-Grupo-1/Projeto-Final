import * as yup from "yup";

export const schemaUserLogin = yup.object().shape({
  email: yup.string().email("E-mail inválido").required("E-mail obrigatório"),
  password: yup.string().required("Senha é obrigatória"),
});
export const shemaUserRegister = yup.object().shape({
  nome: yup.string().required(`Nome obrigatório`),
  email: yup.string().required(`E-mail obrigatório`).email(`E-mail invalido`),
  password: yup
    .string()
    .required("Senha obrigatório")
    .matches(/[a-z]/, "Deve conter ao menos 1 letra minúscula ")
    .matches(/(\d)/, "Deve conter ao menos 1 número")
    .matches(/(\W)|_/, "Deve conter ao menos 1 caracater especial")
    .matches(/.{8,}/, "Deve conter no minimo 8 caracater"),
  confirmPassword: yup
    .string()
    .required("Confirmar senha obrigatório")
    .oneOf([yup.ref("password")], "Senha não confere"),
  github: yup.string().required(`Campo obrigatório`),
  linkedin: yup.string().required(`Campo obrigatório`),
  fotoDoPerfil: yup.string().required(`Campo obrigatório`),
  fotoDePerfil: yup.string().required(`Campo obrigatório`),
});

export const schemaUserOng = yup.object().shape({
  razaoSocial: yup.string().required(`Nome obrigatório`),
  cnpj: yup
    .string()
    .required(`CNPJ obrigatorio`)
    .matches(
      /^\d{2}\.\d{3}\.\d{3}\/\d{4}\-\d{2}$/,
      "O campo deve seguir o formato de CNPJ"
    ),
  telefone: yup
    .string()
    .required(`Telefone obrigatório`)
    .matches(
      /^\(\d{2}\) \d{4,5}-\d{4}$/gi,
      "O campo deve seguir o formato de telefone do Brasil"
    ),
  email: yup.string().required(`E-mail obrigatório`).email(`E-mail invalido`),
  password: yup
    .string()
    .required("Senha obrigatório")
    .matches(/[a-z]/, "Deve conter ao menos 1 letra minúscula ")
    .matches(/(\d)/, "Deve conter ao menos 1 número")
    .matches(/(\W)|_/, "Deve conter ao menos 1 caracater especial")
    .matches(/.{8,}/, "Deve conter no minimo 8 caracater"),
  confirmPassword: yup
    .string()
    .required("Confirmar senha obrigatório")
    .oneOf([yup.ref("password")], "Senha não confere"),
  nomeDoResponsavel: yup.string().required(`Campo obrigatório`),
  fotoDePerfil: yup.string().required(`Campo obrigatório`),
});
