import { IInputData } from './interfaces';
import { FileSerivce } from './services/file.srevice';
import { OptionsSerivce } from './services/options.service';
import { ParseService } from './services/parse.service';
import { StringifyService } from './services/stringify.service';


const fileService = new FileSerivce();
const optionsService = new OptionsSerivce();
const parseService = new ParseService();
const stringifyService = new StringifyService();

const main = async () => {
    console.log('Application running successfuly');
    const fileData: string = await fileService.getFileData();
    const orderingOption = optionsService.getOrdering();
    const criteriaOption = optionsService.getCriteria();
    const data: IInputData = {
        fileContent: fileData,
        order: orderingOption,
        orderBy: criteriaOption,
    }
    const parsedData = parseService.parseData(data);
    const result = stringifyService.stringifyContactsData(parsedData);

    console.log(result);
}

main().catch(err => {
    console.error(err); 
})