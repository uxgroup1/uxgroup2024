export interface ClientDataQuestionary {
    name: string;
    phone: string;
    email: string;
    nameBusiness: string;
}

export interface ClientDataQuestionaryResponse {
    data: {
        idEmpresa: number;
        message: string;
        status: number;
    }

}

export interface Question {
    type?: string
    question:string;
    answer: string
}