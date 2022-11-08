import React, { createContext, useContext, useState } from "react";
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
  onSubmitCreateTask: (data: iCreateTask) => void;
  setUser: any;
  publications: [];
  onSubmitTech: any;
  handleCreateTech: any;
  createTech: boolean;
  requestTechs: any;
  requestEditeTech: any;
  techs: any;
  requestDeleteTech: any;
  onSubmitEditPerfil: any;
  openPerfil: boolean;
  handlePerfil: any;
  setOpenPerfil: any;
  newNotice: any;
  onSubmitEditOngPerfil: any;
  openPerfilAdmin: boolean;
  setOpenPerfilAdmin: React.Dispatch<React.SetStateAction<boolean>>;
  showPerfilOngOnProject: boolean;
  handlePerfilOngOnProject: any;
}
interface IUserChildren {
    children: ReactNode;
}

interface iCreateTask {
    title: string;
    content: string;
    projectId: number;
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
  const [createTech, setCreateTech] = useState<any>(false);
  const [techs, setTechs] = useState([]);
  const [user, setUser] = useState<any>({});
  const [token, setToken] = useState<any>({});
  const [email, setEmail] = useState<any>({});
  const [openPerfil, setOpenPerfil] = useState(false);
  const [publications, setPublications] = useState<any>({});
  const { setShowModal } = useContext(ProjectsContext);
  const [openPerfilAdmin, setOpenPerfilAdmin] = useState(false);

  const navigate = useNavigate();
  const handleCreateTech = () => {
    return !createTech ? setCreateTech(true) : setCreateTech(false);
  };
  const handlePerfil = () => {
    return !openPerfil ? setOpenPerfil(true) : setOpenPerfil(false);
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

  const onSubmitLogin = async (data: any) => {
    toast.promise(
      api.post("/login", data).then((res) => {
        navigate("/dashboard");
        toast.success("Login realizado com sucesso");
        setUser(res.data.user);
        localStorage.setItem("token", res.data.accessToken);
        localStorage.setItem("userId", res.data.user.id);
      }),
      {
        pending: "Logando...",
        success: "Login realizado com sucesso",
        error: "Email ou senha invalidos",
      }
=======
    const onSubmitLogin = async (data: any) => {
        toast.promise(
            api.post("/login", data).then((res) => {
                navigate("/dashboard");

                setUser(res.data.user);
                localStorage.setItem("token", res.data.accessToken);
                localStorage.setItem("userId", res.data.user.id);
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
    const onSubmitRegister = (data: any) => {
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

    const onSubmitOng = (data: any) => {
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

    const onSubmitCreateTask = (data: iCreateTask) => {
        toast.promise(
            api
                .post("/tasks", data)

                .then(() => {}),
            {
                pending: "Criando Tarefa",
                success: "Sucesso ao criar a tarefa",
                error: "Erro ao criar a tarefa",
            }
        );
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
                console.log(res.data);
                setDataUser(res.data);
            })
            .catch((err) => console.log(err));
    };

    const onSubmitEditPerfil = (data: any) => {
        requestEditeTech(data);
    };

    //   const requestTechs = () => {
    //     api
    //       .get("/techs", {
    //         headers: {
    //           Authorization: `Bearer ${localStorage.token}`,
    //         },
    //       })
    //       .then((res) => setTechs(res.data))
    //       .catch((res) => console.log(res));
    //   };
    //   const requestCreateTech = (data: any) => {
    //     api
    //       .post("/techs", data, {
    //         headers: {
    //           "Content-Type": "application/json",
    //           Authorization: `Bearer ${localStorage.token}`,
    //         },
    //       })
    //       .then(() => {
    //         setCreateTech(false);
    //         requestTechs();
    //       })
    //       .catch((err) => console.log(err));
    //   };
    //   const requestDeleteTech = (id: any) => {
    //     api
    //       .delete(`/techs/${id}`, {
    //         headers: {
    //           "Content-Type": "application/json",
    //           Authorization: `Bearer ${localStorage.token}`,
    //         },
    //       })
    //       .then(() => requestTechs());
    //   };
    //   const requestEditeTech = (data: any) => {
    //     api
    //       .patch(`/users/${localStorage.userId}`, data, {
    //         headers: {
    //           "Content-Type": "application/json",
    //           Authorization: `Bearer ${localStorage.token}`,
    //         },
    //       })
    //       .then((res) => {
    //         setDataUser(res);
    //       })
    //       .catch((err) => console.log(err));
    //   };

    const onSubmitEditOngPerfil = (data: any) => {
        console.log(data);
        requestEditeTech(data);
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
                requestEditeTech,
                techs,
                requestDeleteTech,
                onSubmitEditPerfil,
                openPerfil,
                handlePerfil,
                setOpenPerfil,
                onSubmitCreateTask,
                newNotice,
                onSubmitEditOngPerfil,
            }}
        >
            {children}
        </UserContext.Provider>
>>>>>>> ce13dad5eea3bd70717677d31f5ae4ac8273eb37
    );
  };

  const onSubmitTech = async (data: any) => {
    data.userId = Number(localStorage.userId);
    requestCreateTech(data);
  };
  const onSubmitRegister = (data: any) => {
    data.typeUser = "dev";
    toast.promise(
      api.post("/registerdev", data).then(() => {
        navigate("/home");
        toast.success("Cadastro realizado com sucesso!");
      }),
      {
        pending: "Criando...",
        success: "Cadastro realizado com sucesso!",
        error: "Cadastro não realizado",
      }
    );
  };

  const onSubmitOng = (data: any) => {
    data.typeUser = "ong";
    toast.promise(
      api.post("/registerong", data).then(() => {
        navigate("/home");
        toast.success("Cadastro realizado com sucesso!");
      }),
      {
        pending: "Criando...",
        success: "Cadastro realizado com sucesso!",
        error: "Cadastro não realizado",
      }
    );
  };

  const onSubmitCreateTask = (data: iCreateTask) => {
    toast.promise(
      api
        .post("/tasks", data)

        .then(() => {}),
      {
        pending: "Criando Tarefa",
        success: "Sucesso ao criar a tarefa",
        error: "Erro ao criar a tarefa",
      }
    );
  };

  const requestTechs = () => {
    api
      .get("/techs", {
        headers: {
          Authorization: `Bearer ${localStorage.token}`,
        },
      })
      .then((res) => setTechs(res.data))
      .catch((res) => console.log(res));
  };
  const requestCreateTech = (data: any) => {
    api
      .post("/techs", data, {
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
    api
      .delete(`/techs/${id}`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.token}`,
        },
      })
      .then(() => requestTechs());
  };
  const requestEditeTech = (data: any) => {
    api
      .patch(`/users/${localStorage.userId}`, data, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.token}`,
        },
      })
      .then((res) => {
        console.log(res.data);
        setDataUser(res.data);
      })
      .catch((err) => console.log(err));
  };

  const onSubmitEditPerfil = (data: any) => {
    requestEditeTech(data);
  };

  const onSubmitEditOngPerfil = (data: any) => {
    console.log(data);
    requestEditeTech(data);
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
        requestEditeTech,
        techs,
        requestDeleteTech,
        onSubmitEditPerfil,
        openPerfil,
        handlePerfil,
        setOpenPerfil,
        onSubmitCreateTask,
        newNotice,
        onSubmitEditOngPerfil,
        openPerfilAdmin,
        setOpenPerfilAdmin,
        showPerfilOngOnProject,
        handlePerfilOngOnProject,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
