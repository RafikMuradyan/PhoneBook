import { OrderByEnum, OrderEnum } from "../constants";
import { IContactInformation } from "./contact-information.interface";

export interface ISortingData {
    contacts: IContactInformation[],
    order: OrderEnum,
    orderBy: OrderByEnum,
}