import { getRepository  } from 'typeorm';
import { StringEncrypt } from "../entities/StringEncrypt"
import '../database/connection.ts';

export default {
    async DecrypterService(id: string){
        try{
            return getRepository(StringEncrypt)
            .createQueryBuilder("string_encrypted")
            .where("string_encrypted.id = :id", {id: id})
            .getOne();
    
        }catch(err){
            console.log(err)
            return err;
        }
    }
}    