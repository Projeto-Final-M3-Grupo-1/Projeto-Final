import React, { createContext, useContext, useState } from "react";
import { ReactNode } from "react";
import { useNavigate } from "react-router-dom";
import api from "../Services/api";
import { toast } from "react-toastify";
import { AuthContext } from "./AuthContext";
import { ProjectsContext } from "./ProjectsProvider";

interface IUserContext {
    getPublication: (id: number) => void;
    onSubmitEditPubli: (data: any) => void;
    setIdPubli: React.Dispatch<React.SetStateAction<number | null>>;
    onSubmitLogin: (data: iLogin) => void;
    onSubmitRegister: (data: iDevRegister) => void;
    onSubmitOng: (data: iOngRegister) => void;
    renderPublications: () => void;
    user: iUserLogin;

    setUser: React.Dispatch<React.SetStateAction<iUserLogin>>;
    publications: iNoticeList[];
    onSubmitTech: (data: any) => void;
    handleCreateTech: () => void;
    createTech: boolean;
    requestTechs: () => void;
    requestEditeTech: (data: any) => void;
    techs: any;
    requestDeleteTech: (id: number) => void;
    onSubmitEditPerfil: (data: any) => void;
    openPerfil: boolean;
    handlePerfil: () => void;
    setOpenPerfil: React.Dispatch<React.SetStateAction<boolean>>;
    newNotice: (notice: iNotice) => void;
    onSubmitEditOngPerfil: (data: any) => void;
    openPerfilAdmin: boolean;
    setOpenPerfilAdmin: React.Dispatch<React.SetStateAction<boolean>>;
    showPerfilOngOnProject: boolean;
    handlePerfilOngOnProject: (id: number) => void;
    requestAllUsers: () => void;
    allUsers: Array<iUserOng | iUserDev>;
}
interface IUserChildren {
    children: ReactNode;
}

interface iUserLogin {
    email: string;
    id: number;
}

interface iDevRegister {
    email: string;
    nome: string;
    password: string;
    confirmPassword: string;
    github: string;
    linkedin: string;
    fotoDePerfil: string;
    typeUser?: "dev";
}

interface iOngRegister {
    email: string;
    password: string;
    razaoSocial: string;
    cnpj: string;
    telefone: string;
    confirmPassword: string;
    nomeDoResponsavel: string;
    fotoDePerfil: string;
    typeUser?: "ong";
    descricaoDaOng: string;
}

interface iLogin {
    email: string;
    password: string;
}

interface iUserOng extends iUserLogin {
    password: string;
    razaoSocial: string;
    cnpj: string;
    telefone: string;
    confirmPassword: string;
    nomeDoResponsavel: string;
    fotoDePerfil: string;
    typeUser: string;
    descricaoDaOng: string;
}

interface iUserDev extends iUserLogin {
    password: string;
    nome: string;
    confirmPassword: string;
    github: string;
    linkedin: string;
    fotoDePerfil: string;
    typeUser: string;
    projectId: number;
}

interface iNoticeList extends iNotice {
    userId: number;
    id: number;
}

interface iNotice {
    title: string;
    description: string;
    site?: string;
    img?: string;
}

export const UserContext = createContext<IUserContext>({} as IUserContext);

export const UserProvider = ({ children }: IUserChildren) => {
    const { setDataUser } = useContext(AuthContext);

    const [createTech, setCreateTech] = useState<boolean>(false);
    const [techs, setTechs] = useState([]);
    const [user, setUser] = useState<iUserLogin>({} as iUserLogin);
    const [token, setToken] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [openPerfil, setOpenPerfil] = useState<boolean>(false);
    const [publications, setPublications] = useState<iNoticeList[]>([]);
    const { setShowModal } = useContext(ProjectsContext);
    const [openPerfilAdmin, setOpenPerfilAdmin] = useState<boolean>(false);
    const [showPerfilOngOnProject, setShowPerfilOngOnProject] =
        useState<boolean>(false);
    const [idPubli, setIdPubli] = useState<number | null>(null);
    const [allUsers, setAllUsers] = useState<Array<iUserOng | iUserDev>>([]);

    const navigate = useNavigate();

    const handlePerfilOngOnProject = (id: number) => {
        localStorage.setItem("ongId", id + "");
        !showPerfilOngOnProject
            ? setShowPerfilOngOnProject(true)
            : setShowPerfilOngOnProject(false);
    };

    const handleCreateTech = () => {
        !createTech ? setCreateTech(true) : setCreateTech(false);
    };
    const handlePerfil = () => {
        !openPerfil ? setOpenPerfil(true) : setOpenPerfil(false);
    };

    const newNotice = (notice: iNotice) => {
        const userId = localStorage.userId;

        const newNotice = {
            ...notice,
            userId,
        };

        const headers = {
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${localStorage.token}`,
            },
        };
        try {
            api.post("/notices", newNotice, headers);
            toast.success("Noticia criada com sucesso!");

            setTimeout(() => {
                window.location.reload();
            }, 2000);
        } catch (error) {
            console.log(error);
        }
    };

    const onSubmitLogin = async (data: iLogin) => {
        toast.promise(
            api.post("/login", data).then((res) => {
                navigate("/dashboard");
                setUser(res.data.user);
                console.log(res.data);
                localStorage.setItem("token", res.data.accessToken);
                localStorage.setItem("userId", res.data.user.id);
                localStorage.setItem("projectId", res.data.user.projectId);
            }),
            {
                pending: "Logando...",
                success: "Login realizado com sucesso",
                error: "Email ou senha invalidos",
            }
        );
    };

    const onSubmitTech = async (data: any) => {
        data.userId = Number(localStorage.userId);
        requestCreateTech(data);
    };

    const onSubmitRegister = (data: iDevRegister) => {
        data.typeUser = "dev";
        toast.promise(
            api.post("/registerdev", data).then(() => {
                navigate("/home");
            }),
            {
                pending: "Criando...",
                success: "Cadastro realizado com sucesso!",
                error: "Cadastro não realizado",
            }
        );
    };

    const onSubmitOng = (data: iOngRegister) => {
        data.typeUser = "ong";
        toast.promise(
            api.post("/registerong", data).then(() => {
                navigate("/home");
            }),
            {
                pending: "Criando...",
                success: "Cadastro realizado com sucesso!",
                error: "Cadastro não realizado",
            }
        );
    };

    const onSubmitEditPubli = (data: any) => {
        api.patch(`notices/${idPubli}`, data, {
            headers: {
                Authorization: `Bearer ${localStorage.token}`,
            },
        }).then(() => {
            renderPublications();
            toast.success("Noticia editada com sucesso!");
            setTimeout(() => {
                window.location.reload();
            }, 1000);
        });
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

    const requestDeleteTech = (id: number) => {
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
                console.log(res.data);
                setDataUser(res.data);
                toast.success("Dados de perfil editado com sucesso");
            })
            .catch((err) => toast.error("erro ao editar os dados"));
    };

    const onSubmitEditPerfil = (data: any) => {
        requestEditeTech(data);
    };

    const onSubmitEditOngPerfil = (data: any) => {
        requestEditeTech(data);
    };

    const renderPublications = () => {
        api.get("/notices").then((resp) => setPublications(resp.data));
    };

    const requestAllUsers = () => {
        api.get("/users", {
            headers: {
                Authorization: `Bearer ${localStorage.token}`,
            },
        }).then((res) => setAllUsers(res.data));
    };

    const getPublication = (id: number) => {
        api.get(`/notices/${id}`).then((resp) => console.log(resp.data));
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
                requestEditeTech,
                techs,
                requestDeleteTech,
                onSubmitEditPerfil,
                openPerfil,
                handlePerfil,
                setOpenPerfil,
                newNotice,
                getPublication,
                onSubmitEditPubli,
                onSubmitEditOngPerfil,
                setIdPubli,
                openPerfilAdmin,
                setOpenPerfilAdmin,
                showPerfilOngOnProject,
                handlePerfilOngOnProject,
                requestAllUsers,
                allUsers,
            }}
        >
            {children}
        </UserContext.Provider>
    );
};
