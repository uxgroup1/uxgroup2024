import { ReactNode } from "react";

export interface contactFormSubject{
    value: string;
}

export interface contactFormInputAlternative{
    label: ReactNode;
    htmlFor: string;
    id: string;
    type: string;
    name: string;
    placeholder?: string;
    required?: boolean;
    text: string;
}


export interface contactFormData{
    content: contactFormSubject[];
    inputAlternative?: contactFormInputAlternative[]
    page:string;
    nameForm: string;
}