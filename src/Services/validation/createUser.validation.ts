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
    .matches(/.{8,}/, "Deve conter no minimo 8 caracateres"),
  confirmPassword: yup
    .string()
    .required("Confirmar senha obrigatório")
    .oneOf([yup.ref("password")], "Senha não confere"),
  github: yup.string().url().required(`Campo obrigatório`),
  linkedin: yup.string().url().required(`Campo obrigatório`),
  fotoDePerfil: yup.string().url().required(`Campo obrigatório`),
});

export const schemaUserOng = yup.object().shape({
  razaoSocial: yup.string().required(`Nome obrigatório`),
  cnpj: yup
    .string()
    .required(`CNPJ obrigatorio`)
    .matches(/.{14,}/, "Deve conter no minimo 14 caracateres"),
  telefone: yup
    .string()
    .required(`Telefone obrigatório`)
    .matches(/.{11,}/, "Deve conter no minimo 11 caracateres"),
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
  fotoDePerfil: yup.string().url().required(`Campo obrigatório`),
});

export const schemaCreateTech = yup.object().shape({
  tech: yup.string().required(`Campo obrigatório`),
});

export const schemaEditePerfil = yup.object().shape({
  nome: yup.string().required(`Campo obrigatório`),
  email: yup.string().required(`Campo obrigatório`),
  github: yup.string().required(`Campo obrigatório`),
  linkedin: yup.string().required(`Campo obrigatório`),
});

export const schemaCreateProject = yup.object().shape({
    title: yup.string().required(`Campo obrigatório`),
    description: yup.string().required(`Campo obrigatório`),
});

export const schemaOngDescription = yup.object().shape({
    descricaoDaOng: yup.string().required(),
    telefone: yup
        .string()
        .matches(/.{11,}/, "Deve conter no minimo 11 caracateres"),
});
