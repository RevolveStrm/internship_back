import { MigrationInterface, QueryRunner } from "typeorm"

export class CreateDealsTable1697497498804 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            CREATE TABLE deals (
                id SERIAL PRIMARY KEY,
                name VARCHAR NOT NULL,
                image VARCHAR,
                description VARCHAR,
                total_price NUMERIC NOT NULL,
                ticket_price NUMERIC NOT NULL,
                yield_percent NUMERIC NOT NULL DEFAULT 0,
                sold_percent NUMERIC NOT NULL DEFAULT 0,
                start_date TIMESTAMP WITH TIME ZONE NOT NULL,
                end_date TIMESTAMP WITH TIME ZONE NOT NULL,
                created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT CURRENT_TIMESTAMP,
                updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT CURRENT_TIMESTAMP
            )
        `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE deals`);
    }
}
