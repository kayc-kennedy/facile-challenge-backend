import { Repository, EntityRepository } from "typeorm";
import { StringEncrypt } from "../entities/StringEncrypt"

@EntityRepository(StringEncrypt)
class EncryptedRepository extends Repository<StringEncrypt>{}

export { EncryptedRepository }