import { Request, Response } from 'express';
import EncrypterService from '../service/EncrypterService';
// import bcrypt  from "bcrypt";
import { Crypto } from "../service/Crypto";

export default {
    async encrypter(req: Request, res: Response){
        const value = req.body.name; 
        
        if(!value){
            return res.status(400).json({"code": "E_VALIDATION_FAILURE", "message": "O campo \"name\" é obrigatório"});
        }
        let encrypter = new Crypto();
        let valueHash = encrypter.encrypt(value);
        let hash  = valueHash.iv + '|' + valueHash.content

        const stringEncrypted = await EncrypterService.encrypterService(hash);        
        return res.status(200).json({"id":stringEncrypted.id, "encripted_name":stringEncrypted.value});
    }
}

