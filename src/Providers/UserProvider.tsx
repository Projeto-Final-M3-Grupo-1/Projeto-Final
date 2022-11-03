import { createContext, useContext, useState } from "react";
import { ReactNode } from "react";
import { useNavigate } from "react-router-dom";
import api from "../Services/api";
import { toast } from "react-toastify";

interface IUserContext {
    onSubmitLogin: any;
    onSubmitRegister: any;
    onSubmitOng: any;
    user: any;
}
interface IUserChildren {
    children: ReactNode;
}

export const UserContext = createContext<IUserContext>({} as IUserContext);

export const UserProvider = ({ children }: IUserChildren) => {
    const [user, setUser] = useState<any>({});

    const navigate = useNavigate();

    const onSubmitLogin = (data: any) => {
        api.post("/login", data)
            .then((res) => {
                navigate("/dashboard");
                toast.success("Login realizado com sucesso");
                setUser(res.data.user);
                console.log(res.data.user);

                console.log(res);
            })
            .catch(() => toast.error("Email ou senha invalidos"));
    };
    const onSubmitRegister = (data: any) => {
        data.typeUser = "dev";
        api.post("/registerdev", data)
            .then(() => {
                toast.success("Cadastro realizado com sucesso!");
                navigate("/home");
            })
            .catch(() => toast.error("Cadastro não realizado"));
    };

    const onSubmitOng = (data: any) => {
        data.typeUser = "ong";
        api.post("/registerong", data)
            .then(() => {
                toast.success("Cadastro realizado com sucesso!");
                navigate("/home");
            })
            .catch(() => toast.error("Cadastro não realizado"));
    };
    return (
        <UserContext.Provider
            value={{
                onSubmitLogin,
                onSubmitRegister,
                onSubmitOng,
                user,
            }}
        >
            {children}
        </UserContext.Provider>
    );
};
