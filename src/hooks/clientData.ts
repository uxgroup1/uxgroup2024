import { AxiosResponse } from "axios";
import { ClientData } from "@/interfaces/clientData";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";

const API_URL = 'https://api.rd.services/platform/conversions?api_key=uMNBxrWUgccjMwMfkzYxIcPFAgEJexMYZTqf';

const fetchData = async (clientData: ClientData): Promise<AxiosResponse<ClientData>> => {
    const options = {
        method: 'POST',
        url: API_URL,
        headers: {
            accept: 'application/json',
            'Content-Type': 'application/json'
        },
        data: {
            event_type: 'CONVERSION',
            event_family: 'CDP',
            payload: {
                conversion_identifier: clientData.conversion_identifier,
                name: clientData.floating_first_name,
                email: clientData.floating_email,
                personal_phone: clientData.floating_phone,
                job_title: clientData.floating_cargo,
                company_name: clientData.floating_company,
                custom_field_numberFuncionario: clientData.floating_numeroFuncionarios,
                custom_field_segmento: clientData.floating_segmento,
                cf_subject: clientData.underline_select,
                cf_message: clientData.floating_message,
                cf_pageName: clientData.page_name
            }
        }
    };

    const response = await axios.request<ClientData>(options);

    console.log(response.data);
    


    return response;
}

export function useClientData() {
    const mutation = useMutation<AxiosResponse<ClientData>, Error, ClientData>({
        mutationFn: fetchData
    });

    return {
        mutate: mutation.mutate,
        contentData: mutation.data?.data,
        isPending: mutation.isPending,
        isSuccess: mutation.isSuccess
    };
}
