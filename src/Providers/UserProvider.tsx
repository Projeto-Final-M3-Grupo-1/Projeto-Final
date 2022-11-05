import { createContext, useContext, useState } from "react";
import { ReactNode } from "react";
import { useNavigate } from "react-router-dom";
import api from "../Services/api";
import { toast } from "react-toastify";
import { AuthContext } from "./AuthContext";
import { ProjectsContext } from "./ProjectsProvider";

interface IUserContext {
    onSubmitLogin: any;
    onSubmitRegister: any;
    onSubmitOng: any;
    renderPublications: () => void;
    user: any;
    setUser: any;
    publications: [];
    onSubmitTech: any;
    handleCreateTech: any;
    createTech: boolean;
    requestTechs: any;
    techs: any;
    requestDeleteTech: any;
    onSubmitEditPerfil: any;
}
interface IUserChildren {
    children: ReactNode;
}

export const UserContext = createContext<IUserContext>({} as IUserContext);

export const UserProvider = ({ children }: IUserChildren) => {
    const { setDataUser } = useContext(AuthContext);
    const [createTech, setCreateTech] = useState<any>(false);
    const [techs, setTechs] = useState([]);
    const [user, setUser] = useState<any>({});
    const [token, setToken] = useState<any>({});
    const [email, setEmail] = useState<any>({});
    const [publications, setPublications] = useState<any>({});
    const { setShowModal } = useContext(ProjectsContext);

    const navigate = useNavigate();
    const handleCreateTech = () => {
        return !createTech ? setCreateTech(true) : setCreateTech(false);
    };

    const onSubmitLogin = async (data: any) => {
        await api
            .post("/login", data)
            .then((res) => {
                navigate("/dashboard");
                toast.success("Login realizado com sucesso");
                setUser(res.data.user);
                localStorage.setItem("token", res.data.accessToken);
                localStorage.setItem("userId", res.data.user.id);
            })
            .catch(() => toast.error("Email ou senha invalidos"));
    };
    const onSubmitTech = async (data: any) => {
        data.userId = Number(localStorage.userId);
        requestCreateTech(data);
    };
    const onSubmitRegister = (data: any) => {
        data.typeUser = "dev";
        api.post("/registerdev", data)
            .then(() => {
                navigate("/home");
                toast.success("Cadastro realizado com sucesso!");
            })
            .catch(() => toast.error("Cadastro não realizado"));
    };

    const onSubmitOng = (data: any) => {
        data.typeUser = "ong";
        api.post("/registerong", data)

            .then(() => {
                navigate("/home");
                toast.success("Cadastro realizado com sucesso!");
            })
            .catch(() => toast.error("Cadastro não realizado"));
    };

    const onSubmitEditPerfil = (data: any) => {
        requestEditeTech(data);
    };

    const requestTechs = () => {
        api.get("/techs", {
            headers: {
                Authorization: `Bearer ${localStorage.token}`,
            },
        })
            .then((res) => setTechs(res.data))
            .catch((res) => console.log(res));
    };
    const requestCreateTech = (data: any) => {
        api.post("/techs", data, {
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${localStorage.token}`,
            },
        })
            .then(() => {
                setCreateTech(false);
                requestTechs();
            })
            .catch((err) => console.log(err));
    };
    const requestDeleteTech = (id: any) => {
        api.delete(`/techs/${id}`, {
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${localStorage.token}`,
            },
        }).then(() => requestTechs());
    };
    const requestEditeTech = (data: any) => {
        api.patch(`/users/${localStorage.userId}`, data, {
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${localStorage.token}`,
            },
        })
            .then((res) => {
                setDataUser(res);
            })
            .catch((err) => console.log(err));
    };

    const renderPublications = () => {
        api.get("/notices").then((resp) => setPublications(resp.data));
    };

    return (
        <UserContext.Provider
            value={{
                onSubmitLogin,
                onSubmitRegister,
                onSubmitOng,
                user,
                setUser,
                publications,
                renderPublications,
                onSubmitTech,
                handleCreateTech,
                createTech,
                requestTechs,
                techs,
                requestDeleteTech,
                onSubmitEditPerfil,
            }}
        >
            {children}
        </UserContext.Provider>
    );
};
