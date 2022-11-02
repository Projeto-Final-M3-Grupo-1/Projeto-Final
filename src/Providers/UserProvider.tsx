import { createContext, useContext, useState } from "react";
import { ReactNode } from "react";
import { useNavigate } from "react-router-dom";
import api from "../Services/api";
import { toast } from "react-toastify";
import { ProjectsContext } from "./ProjectsProvider";

interface IUserContext {
    onSubmitLogin: any;
}
interface IUserChildren {
    children: ReactNode;
}

export const UserContext = createContext<IUserContext>({} as IUserContext);

export const UserProvider = ({ children }: IUserChildren) => {
    const { handleNavigate } = useContext(ProjectsContext);
    const onSubmitLogin = (data: any) => {
        console.log(data);
        api.post("/login", data)
            .then((res) => {
                console.log(res);
                toast.success("Cadastro realizado com sucesso!");
                handleNavigate("/login");
            })
            .catch(() => toast.error("Cadastro não realizado"));
    };
    return (
        <UserContext.Provider
            value={{
                onSubmitLogin,
            }}
        >
            {children}
        </UserContext.Provider>
    );
};
