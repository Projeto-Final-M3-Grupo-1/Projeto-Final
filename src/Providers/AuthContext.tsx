import { createContext, ReactNode, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../Services/api";
interface IAuthContext {
    loadingUser: any;
    dataUser: any;
    setDataUser: any;
}

export const AuthContext = createContext<IAuthContext>({} as IAuthContext);

interface IAuthChildren {
    children: ReactNode;
}

export const AuthProvider = ({ children }: IAuthChildren) => {
    const navigate = useNavigate();
    const [dataUser, setDataUser] = useState({});
    const loadingUser = () => {
        api.get(`/users/${localStorage.userId}`, {
            headers: {
                Authorization: `Bearer ${localStorage.token}`,
            },
        })
            .then((res) => {
                console.log(res);
                setDataUser(res.data);
            })
            .catch(() => navigate("/home"));
    };
    return (
        <AuthContext.Provider value={{ loadingUser, dataUser, setDataUser }}>
            {children}
        </AuthContext.Provider>
    );
};
