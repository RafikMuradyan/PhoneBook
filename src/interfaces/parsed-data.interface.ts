import { IContactInformation } from "../interfaces";

export interface IParsedData {
    contacts: IContactInformation[],
    contactsWithoutSurname: IContactInformation[],
    errors: string[],
}
