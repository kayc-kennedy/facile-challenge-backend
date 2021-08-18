import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class StringEncrypteds1629071824525 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name:'string_encrypted',
                columns:[
                    {
                        name:'id',
                        type: 'int',               
                        isPrimary: true
                    },
                    {
                        name:'value',
                        type: 'varchar'
                    },
                    {
                        name:'created_at',
                        type: 'timestamp',
                        default: 'now()'
                    }
                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('string_encrypted');
    
    }

}
