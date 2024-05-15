export interface contactFormSubject{
    value: string;
}

export interface contactFormInputAlternative{
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
}