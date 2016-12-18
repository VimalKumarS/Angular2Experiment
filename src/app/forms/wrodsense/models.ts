//http://plnkr.co/edit/x0d5oiW1J9C2JrJG8NdT?p=preview
//http://plnkr.co/edit/x0d5oiW1J9C2JrJG8NdT?p=preview
//http://stackoverflow.com/questions/35208504/angular2-beta-nesting-form-based-parent-child-components-and-validating-from-pa
export interface ISenseModel {
    id: string;
    rank: number;
    year: number;
    ordinal: number;
    definition: string;
    fields: string;
}

export interface IWordModel {
    id: string;
    language: string;
    class: string;
    lemma: string;
    value: string;
    senses: ISenseModel[];
}

export interface IFieldModel {
    id: string;
    label: string;
}

export interface IPair<T> {
    value: T;
    label: string;
}

export interface IValidationResult {
 [key:string]:boolean;
}
