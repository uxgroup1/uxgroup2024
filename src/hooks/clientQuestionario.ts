import { AxiosResponse } from "axios";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { ClientDataQuestionary, ClientDataQuestionaryResponse } from "@/interfaces/questionarioCliente";

const API_URL = 'http://localhost:3000/empresa/post';

const fetchData = async (clientData: ClientDataQuestionary): Promise<AxiosResponse<ClientDataQuestionaryResponse>> => {
    let response: any;

    const options = {
        method: 'POST',
        url: API_URL,
        headers: {
            accept: 'application/json',
            'Content-Type': 'application/json'
        },
        data: {
            nomeFuncionario: clientData.name,
            nomeEmpresa: clientData.nameBusiness,
            emailEmpresa: clientData.email,
            tipoEmpresa: clientData.phone,
        }
    }

    if (clientData.email.length <= 3) {
        console.log("Error aqui")
    } else {
        response = await axios.request<ClientDataQuestionaryResponse>(options);
        console.log(response.data);


        const idEmpresa = localStorage.setItem('idEmpresa', String(response.data.data.idEmpresa));
        console.log(idEmpresa, "aquiiiiii");
        return response;
    }

    return response



}
export function useClientDataQuestionary() {
    const mutation = useMutation<AxiosResponse<ClientDataQuestionaryResponse>, Error, ClientDataQuestionary>({
        mutationFn: fetchData
    });

    return {
        mutate: mutation.mutate,
        contentData: mutation.data?.data,
        isPending: mutation.isPending,
        isSuccess: mutation.isSuccess,
        idEmpresa: mutation.data?.data.data.idEmpresa
    };
}
