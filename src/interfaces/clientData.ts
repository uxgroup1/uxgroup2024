export interface ClientData {
    floating_first_name: string;
    floating_email: string;
    floating_phone: string;
    floating_company: string;
    floating_cargo: string;
    floating_segmento: string;
    floating_numeroFuncionarios: string;
    floating_querofalarSobre: string; // Esta propriedade deve ser uma string
    conversion_identifier?: string;
    floating_terms?: string;
    floating_message: string,
    page_name: string;
  }
  

export interface ClientDataResponse{
    content: ClientData[]
}