import { createContext, useContext, useState } from "react";
import { ReactNode } from "react";
import { useNavigate } from "react-router-dom";
import api from "../Services/api";
import { toast } from "react-toastify";
import { ProjectsContext } from "./ProjectsProvider";

interface IUserContext {
    onSubmitLogin: any;
    onSubmitRegister: any;
    onSubmitOng: any;
}
interface IUserChildren {
    children: ReactNode;
}

export const UserContext = createContext<IUserContext>({} as IUserContext);

export const UserProvider = ({ children }: IUserChildren) => {
    const { handleNavigate } = useContext(ProjectsContext);
    const onSubmitLogin = (data: any) => {
        api.post("/login", data)
            .then(() => {
                toast.success("Cadastro realizado com sucesso!");
                handleNavigate("/dashboarddev");
            })
            .catch(() => toast.error("Cadastro não realizado"));
    };
    const onSubmitRegister = (data: any) => {
        api.post("/registerdev", data)
            .then(() => {
                toast.success("Cadastro realizado com sucesso!");
                handleNavigate("/registerdev");
            })
            .catch(() => toast.error("Cadastro não realizado"));
    };

    const onSubmitOng = (data: any) => {
        api.post("/registerong", data)
            .then(() => {
                toast.success("Cadastro realizado com sucesso!");
                handleNavigate("/registerong");
            })
            .catch(() => toast.error("Cadastro não realizado"));
    };
    return (
        <UserContext.Provider
            value={{
                onSubmitLogin,
                onSubmitRegister,
                onSubmitOng,
            }}
        >
            {children}
        </UserContext.Provider>
    );
};
