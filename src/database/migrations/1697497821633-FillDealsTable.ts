import { MigrationInterface, QueryRunner } from "typeorm"

export class FillDealsTable1697497582945 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(
          `INSERT INTO deals(name, image, description, total_price, ticket_price, yield_percent, sold_percent, start_date, end_date) 
    VALUES ('Gold State Pent', 'https://img.freepik.com/free-photo/view-from-balcony-apartment_188544-12685.jpg?w=1080', 'Luxury penthouse', 62000000, 60000, 6.25, 2.5, '2023-10-16T22:34:25.373Z', '2024-10-16T22:34:25.373Z')`);

        await queryRunner.query(
          `INSERT INTO deals(name, image, description, total_price, ticket_price, yield_percent, sold_percent, start_date, end_date) 
    VALUES ('Silver Condo', 'https://images.unsplash.com/photo-1617201929478-8eedff7508f9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80', 'Cozy condominium', 40000000, 55000, 5.75, 3.0, '2023-11-10T15:20:00.000Z', '2025-07-10T15:20:00.000Z')`
        );

        await queryRunner.query(
          `INSERT INTO deals(name, image, description, total_price, ticket_price, yield_percent, sold_percent, start_date, end_date) 
    VALUES ('Ocean View Apartment', 'https://images.unsplash.com/photo-1615571022219-eb45cf7faa9d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80', 'Beach house with oceanfront view', 80000000, 75000, 6.0, 2.2, '2023-09-05T10:45:00.000Z', '2024-09-05T10:45:00.000Z')`
        );

        await queryRunner.query(
          `INSERT INTO deals(name, image, description, total_price, ticket_price, yield_percent, sold_percent, start_date, end_date) 
    VALUES ('Penthouse Suite', 'https://images.unsplash.com/photo-1565623833408-d77e39b88af6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1932&q=80', 'Luxurious penthouse with city view', 120000000, 95000, 6.5, 2.8, '2023-11-20T18:30:00.000Z', '2023-12-20T18:30:00.000Z')`
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DELETE FROM deals WHERE name = 'Gold State Pent'`);

        await queryRunner.query(`DELETE FROM deals WHERE name = 'Silver Condo'`);

        await queryRunner.query(`DELETE FROM deals WHERE name = 'Ocean View Apartment'`);

        await queryRunner.query(`DELETE FROM deals WHERE name = 'Penthouse Suite'`);
    }

}
