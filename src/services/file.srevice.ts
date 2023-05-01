import readline from 'readline-sync';
import fs from 'fs';
import { ValidatorService } from './validator.service';

const validatorService = new ValidatorService();

export class FileSerivce {
    public async getFileData(): Promise<string> {
        let isPath = false
        let filePath = readline.question('Enter the file path: ');
        isPath = validatorService.isPath(filePath)
        while (!isPath) {
            console.log('Error: Invalide path, corect path example: /users/apple/Desktop/file.txt')
            filePath = readline.question('Enter the file path: ');
            isPath = validatorService.isPath(filePath)
        }

        return new Promise<string>((resolve, reject) => {
            fs.readFile(filePath, 'utf-8', (err, data) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(data);
                }
            });
        });
    }
}