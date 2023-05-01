import fs from 'fs';
import { OrderEnum, OrderByEnum, SeperatorEnum } from '../constants';

export class ValidatorService {

    public isPath(path: string): boolean {
        return fs.existsSync(path);
    }

    public isOptionExisted(option: string): boolean {
        return Object.values(OrderEnum).includes(option as OrderEnum);
    }

    public isCriteriaExisted(criteria: string): boolean {
        return Object.values(OrderByEnum).includes(criteria as OrderByEnum);
    }

    public isValidatePhoneNumber(phoneNumber: string): boolean {
        return phoneNumber.length === 9 && !isNaN(parseInt(phoneNumber));
    }

    public isValidateSeperator(seperator: string): boolean {
        return Object.values(SeperatorEnum).includes(seperator as SeperatorEnum);
    }
}