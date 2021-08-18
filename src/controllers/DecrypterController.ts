import { Request, Response } from 'express';
import DecrypterService from '../service/DecrypterService';
import { Crypto } from "../service/Crypto";


export default {
    async decrypter(req: Request, res: Response){
        const id = req.params.id;
         
        if(!id) return res.status(400).json({"code": "E_VALIDATION_FAILURE", "message": "O id é necessário para realizar a busca"});

        let stringEncrypted = await DecrypterService.DecrypterService(id);  
        if(!stringEncrypted) return res.status(404).json({"code": "NOT FOUND", "message": "Id inexistente"});

        let desencrypter = new Crypto();
        
        let iv = stringEncrypted.value.split('|')[0]
        let content = stringEncrypted.value.split('|')[1]
        let descrypt = {iv:iv, content:content}

        let stringDesencrypted = desencrypter.decrypt(descrypt)

        return  res.status(200).json({"name": stringDesencrypted});


    }
}

