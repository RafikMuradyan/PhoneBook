import { IParsedData } from "../interfaces";

export class StringifyService {
    public stringifyContactsData(data: IParsedData): string {
        let result: string = '\n';
        if (data.contacts.length) {
            data.contacts.forEach((contact) => {
                let contactRow: string =
                    contact.name + ' ' +
                    (contact.surname ? contact.surname + ' ' : '') +
                    contact.seperator + ' ' +
                    contact.phoneNumber + '\n';

                result += contactRow;
            })
        }
        if (data.contactsWithoutSurname.length) {
            data.contactsWithoutSurname.forEach((contact) => {
                let contactRow: string =
                    contact.name + ' ' +
                    contact.seperator + ' ' +
                    contact.phoneNumber + '\n';

                result += contactRow;
            })
        }
        if (data.errors.length) {
            data.errors.forEach((errData) => {
                result += errData + '\n'
            })
        }

        return result;
    }
}