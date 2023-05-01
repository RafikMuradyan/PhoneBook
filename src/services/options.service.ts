import readline from 'readline-sync';
import { ValidatorService } from './validator.service';
import { OrderByEnum, OrderEnum } from '../constants';

const validatorService = new ValidatorService();

export class OptionsSerivce {
    public getOrdering(): OrderEnum {
        let isOptionExisted = false
        let orderingOption = readline.question('Please choose an ordering to sort: “Ascending” or “Descending”: ');
        isOptionExisted = validatorService.isOptionExisted(orderingOption);

        while (!isOptionExisted) {
            console.log('Error: Invalide ordering option, expected values: “Ascending”, “Descending”')
            orderingOption = readline.question('Please choose an ordering to sort: ');
            isOptionExisted = validatorService.isOptionExisted(orderingOption)
        }

        return orderingOption as OrderEnum;
    }

    public getCriteria(): OrderByEnum {
        let isCriteriaExisted = false
        let criteriaOption = readline.question('Please choose criteria: “name”, “surname” or “phoneNumberCode”: ');
        isCriteriaExisted = validatorService.isCriteriaExisted(criteriaOption);

        while (!isCriteriaExisted) {
            console.log('Error: Invalide criteria option, expected values: “name”, “surname” or “phoneNumberCode”')
            criteriaOption = readline.question('Please choose criteria: ');
            isCriteriaExisted = validatorService.isCriteriaExisted(criteriaOption)
        }

        return criteriaOption as OrderByEnum;
    }
}