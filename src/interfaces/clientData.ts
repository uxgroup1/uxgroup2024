export interface ClientData {
    conversion_identifier: string;
    floating_first_name: string;
    floating_email: string;
    floating_phone: string
    floating_company: string;
    floating_cargo: string;
    floating_segmento: string;
    floating_numeroFuncionarios: string;
    floating_querofalarSobre: string;
    floating_message: string;
    page_name: string;
    floating_terms: string;
}

export interface ClientDataResponse{
    content: ClientData[]
}