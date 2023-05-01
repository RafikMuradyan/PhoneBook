import { OrderEnum } from "../constants";
import { IContactInformation } from "../interfaces";
import { ISortingData } from "../interfaces/sorting-data.interface";

export class SortingService {
    public sortContactsData(sortingData: ISortingData): IContactInformation[] {
        const sortedData = sortingData.contacts.sort((a, b) => {
            const aVal = a[sortingData.orderBy]!;
            const bVal = b[sortingData.orderBy]!;
            const sortFactor = sortingData.order === OrderEnum.ASCENDING ? 1 : -1;
            return sortFactor * (aVal.localeCompare(bVal));
        });

        return sortedData;
    }
}