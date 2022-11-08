import styled from "styled-components";
export const StyledModalBody = styled.div`
    display: flex;
    flex-direction: column;
    position: relative;
    align-content: center;
    justify-content: center;
    align-items: center;
    width: 90%;
    height: 460px;
    background-color: var(--white);
    border-radius: 8px;
    overflow: hidden;
    overflow-y: scroll;
    @media (min-width: 768px) {
        display: flex;
        height: 33rem;
        width: 60%;
        max-width: 600px;
        margin: 0 auto;
        overflow-y: hidden;
    }
`;
export const StyledContent = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: row;
    flex-wrap: wrap;
    height: 404px;
    overflow-y: scroll;
    margin: 0 auto;
    @media (min-width: 768px) {
        display: flex;
        justify-content: center;
        align-items: center;
        overflow-y: hidden;
        height: 95%;
        /* outline: 1px solid blue; */
    }
`;
export const StyledOngDetails = styled.div`
    width: 90%;
    height: 410px;
    @media (min-width: 768px) {
        gap: 5px;
        width: 45%;
        height: 85%;
    }
    .formEditPerfil {
        min-height: 300px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }
    .formEditPerfil > button {
        min-width: 95%;
    }
    .profile {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        caption {
            border-radius: 50%;
            border: 2px solid red;
            height: 30px;
            width: 30px;
            > img {
                width: 100%;
                border-radius: 50%;
            }
        }
        @media (min-width: 768px) {
            width: 95%;
            caption {
                border-radius: 50%;
                height: 60px;
                width: 60px;
                border: 2px solid red;
                > img {
                    width: 60px;
                    height: 60px;
                    border-radius: 50%;
                }
            }
        }
        .details {
            display: flex;
            flex-direction: column;
            margin-left: 5px;
            gap: 5px;
            > h3 {
                font-size: var(--card-button-text-size);
            }
            > p {
                font-weight: var(--main-title-text-secondary-weigh);
            }
        }
    }
    @media (min-width: 768px) {
        .details {
            height: 64px;
            gap: 10px;
            > h3 {
                font-weight: var(--main-title-text-secondary-weigh);
                color: var(--slate-800);
            }
        }
    }
`;
export const StyledProjectDetails = styled.div`
    margin-top: 15px;
    box-sizing: border-box;
    height: 200px;
    padding: 5px;
    @media (min-width: 768px) {
        margin-top: 15px;
        box-sizing: border-box;
        height: 150px;
        padding: 5px;
    }
`;
export const StyledInfo = styled.div`
    display: flex;
    flex-direction: column;
    .label {
        box-sizing: border-box;
        padding-left: 10px;
        width: 95%;
        font-weight: var(--page-title-text-weight);
        margin: 8px 0 4px 0;
    }
    .info {
        box-sizing: border-box;
        width: 95%;
        height: 25px;
        padding: 4px 0px 0px 5px;
        border-radius: 4px;
        border: 1px solid var(--rose-600);
        font-size: 14px;
        resize: none;
    }
`;
export const StyledDescription = styled.div`
    margin-top: 10px;
    display: flex;
    flex-direction: column;
    max-height: 147px;
    gap: 5px;
    form {
        display: flex;
        flex-direction: column;
        justify-content: center;
        gap: 5px;
        > .telephone {
            box-sizing: border-box;
            width: 95%;
            height: 25px;
            padding: 4px 0px 0px 5px;
            border-radius: 4px;
            border: 1px solid var(--rose-600);
            font-size: 14px;
            resize: none;
        }
        > button {
            margin-top: 10px;
            align-self: center;
            width: 80%;
            height: 30px;
        }
    }
    textarea {
        box-sizing: border-box;
        height: 110px;
        width: 95%;
        border: 1px solid var(--rose-600);
        border-radius: 4px;
        color: var(--rose-600);
        resize: none;
        padding: 10px 0 0 10px;
        ::-webkit-scrollbar {
            background-color: var(--rose-200);
            border-radius: 20px;
            width: 5px;
        }
        ::-webkit-scrollbar-thumb {
            background-color: var(--main-title-text-color);
            border-radius: 20px;
        }
    }
`;
export const StyledProjectsRequests = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border: 2px solid red;
    width: 90%;
    border-radius: 4px;
    padding: 1rem 0rem;
    .title {
        margin-bottom: 10px;
        font-size: var(--card-button-text-size);
        font-weight: var(--about-subtitle-text-weight);
    }
    .projectInfo {
        display: flex;
        flex-direction: column;
        padding: 5px;
        /* border: 1px solid red; */
        height: 327px;
        width: 90%;
        gap: 7px;
        margin: 0 auto;
        align-content: center;
        justify-content: center;
        align-items: center;
        .name {
            font-size: var(--card-button-text-size);
            font-weight: var(--card-border-color);
        }
        button {
            font-size: 14px;
            width: 100%;
        }
        p {
            font-size: 14px;
        }
        .techs {
            width: 100%;
            max-height: 300px;
            display: flex;
            flex-direction: column;
            gap: 10px;
            overflow: hidden;
            overflow-y: scroll;
        }
        .techs > li {
            min-width: 90%;
            min-height: 30px;
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 0px 5px;
            font-size: 16px;
            font-weight: 600;
            color: var(--slate-900);
            border: solid 1px var(--rose-600);
            border-radius: 4px;
        }
    }
    button {
        width: 90%;
        height: 30px;
    }
    @media (min-width: 768px) {
        width: 45%;
        height: 80%;
        text-align: center;
        border: 2px solid red;
        border-radius: 4px;
        .title {
            margin-bottom: 10px;
            font-size: var(--about-subtitle-text-weight);
            font-weight: var(--about-subtitle-text-weight);
        }
        .projectInfo {
            display: flex;
            flex-direction: column;
            align-content: center;
            justify-content: center;
            align-items: center;
            /* border: 1px solid red; */
            border-radius: 4px;
            height: 300px;
            width: 80%;
            gap: 20px;
            margin: 0 auto;
            .name {
                height: 30px;
            }
            .ong {
                height: 20px;
            }
            .description {
                height: 160px;
                overflow: hidden;
                overflow-y: scroll;
                ::-webkit-scrollbar {
                    background-color: var(--rose-200);
                    border-radius: 20px;
                    width: 5px;
                }
                ::-webkit-scrollbar-thumb {
                    background-color: var(--main-title-text-color);
                    border-radius: 20px;
                }
            }
        }
    }
`;
export const StyledButtons = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 90%;
    gap: 5px;
    margin-top: 10px;
    button {
        min-width: 150px;
    }
    button:nth-child(1) {
        background-color: var(--white);
        border: 1px solid var(--rose-600);
        color: var(--rose-600);
    }
    @media (min-width: 768px) {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 90%;
        gap: 30px;
        button {
            width: 90%;
            max-width: 400px;
        }
    }
`;
