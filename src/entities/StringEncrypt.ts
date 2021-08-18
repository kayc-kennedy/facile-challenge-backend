import { Entity, Column, CreateDateColumn, PrimaryColumn, Index,  } from "typeorm"
import { v4 as uuid } from "uuid"

@Entity('string_encrypted')
class StringEncrypt{
    
    @PrimaryColumn()
    id: string;
    
    @Column()
    @Index({unique:true})
    value: string;


    @CreateDateColumn()
    created_at: Date;

    constructor(){
        if(!this.id){
            this.id = uuid()
        }
    }
}

export { StringEncrypt }