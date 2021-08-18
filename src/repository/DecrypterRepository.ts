import { Repository, EntityRepository } from "typeorm";
import { StringEncrypt } from "../entities/StringEncrypt"

@EntityRepository(StringEncrypt)
class DecrypterRepository extends Repository<StringEncrypt>{}

export { DecrypterRepository }