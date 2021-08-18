import { getCustomRepository  } from 'typeorm';
import { EncryptedRepository } from "../repository/EncryptRepository"

export default {
    async encrypterService(data: string){
        const encryptRepository = getCustomRepository(EncryptedRepository);

        const encrypt = encryptRepository.create({
            value:data
        })
        
        try{
            return await encryptRepository.save(encrypt);
            
        }catch(err){
            console.log(err)
            return err;
        }
    }
}    