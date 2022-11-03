import * as yup from "yup";

export const schemaUserLogin = yup.object().shape({
  email: yup.string().email("E-mail inválido").required("E-mail obrigatório"),
  password: yup.string().required("Senha obrigatório"),
});
export const shemaUserRegister = yup.object().shape({
  nome: yup.string().required(`Nome obrigatório`),
  email: yup.string().required(`Email obrigatório`).email(`email invalido`),
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
    .required(`Cnpj obrigatorio`)
    .matches(/^\d{2}\.\d{3}\.\d{3}\/\d{4}\-\d{2}$/),
  telefone: yup
    .string()
    .required(`Telefone obrigatório`)
    .matches(/^\(\d{2}\) \d{4,5}-\d{4}$/gi),
  email: yup.string().required(`Email obrigatório`).email(`email invalido`),
  password: yup
    .string()
    .required("Senha obrigatório")
    .matches(/[a-z]/, "Deve conter ao menos 1 letra minúscula ")
    .matches(/(\d)/, "Deve conter ao menos 1 número")
    .matches(/(\W)|_/, "Deve conter ao menos 1 caracater especial")
    .matches(/.{8,}/, "Deve conter no minimo 8 caracater"),
  nomeDoResponsavel: yup.string().required(`Bio obrigatório`),
  fotoDePerfil: yup.string().required(`Campo obrigatório`),
});
