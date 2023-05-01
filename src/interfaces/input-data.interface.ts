import { OrderEnum, OrderByEnum } from "../constants";

export interface IInputData {
    fileContent: string,
    order: OrderEnum,
    orderBy: OrderByEnum,
}