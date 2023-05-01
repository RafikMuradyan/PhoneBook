import { IContactInformation, IInputData, IParsedData } from "../interfaces";
import { ValidatorService } from "./validator.service";
import { SortingService } from "./sorting.service";
import { ISortingData } from "../interfaces/sorting-data.interface";
import { OrderByEnum } from "../constants";

const validatorService = new ValidatorService();
const sortingService = new SortingService();

export class ParseService {
    public parseData(data: IInputData): IParsedData {
        const listOfContactRows = data.fileContent.split('\n');
        const errorResults: string[] = []
        const listOfContacts: IContactInformation[] = [];
        const listOfContactsWithoutSurname: IContactInformation[] = [];

        for (const [index, contact] of listOfContactRows.entries()) {
            const properties = contact.split(' ');
            const errors: string[] = [];
            const isValidePhoneNumber = validatorService.isValidatePhoneNumber(
                properties[properties.length - 1]
            );
            const isValidateSeperator = validatorService.isValidateSeperator(
                properties[properties.length - 2]
            )

            if (!isValidePhoneNumber) {
                errors.push('Phone number should be 9 digits ')
            }
            if (!isValidateSeperator) {
                errors.push('Invalid separator. Should be : or - ')
            }

            if (errors.length) {
                errorResults.push(`Validation errors for line ${index + 1}: ${errors.join(', ')}.`);
            } else {
                let i = 0;
                const validContact: IContactInformation = {
                    name: properties[i++],
                    surname: validatorService.isValidateSeperator(properties[i]) ? '' : properties[i++],
                    seperator: properties[i++],
                    phoneNumber: properties[i],
                    phoneNumberCode: properties[i].slice(0, 3),
                }
                if (!validContact.surname?.length && data.orderBy === OrderByEnum.SURNAME) {
                    listOfContactsWithoutSurname.push(validContact);
                } else {
                    listOfContacts.push(validContact)
                }
            }
        }

        const sortingData: ISortingData = {
            contacts: listOfContacts,
            order: data.order,
            orderBy: data.orderBy
        }
        const orderedData = sortingService.sortContactsData(sortingData)

        return {
            contacts: orderedData,
            contactsWithoutSurname: listOfContactsWithoutSurname,
            errors: errorResults,
        }
    }
}