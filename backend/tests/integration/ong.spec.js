const request = require('supertest');
const app = require('../../src/app');
const connection = require('../../src/database/connection');

describe('ONG', () => {

    beforeEach(async () => {
        await connection.migrate.rollback(); //zera o banco
        await connection.migrate.latest(); //cria o banco
    });

    afterAll(async () => {
        await connection.destroy();
    });

    it('should be able to create a new ONG', async () => {

        const response = await request(app)
            .post('/ongs')
            // .set('Authorization', 'ID VALIDO da ong')
            .send({
                name: "APAD2",
                email: "contato@gmail.com",
                whatsapp: "21971191091",
                city: "Niteroi",
                uf: "RJ"
            });

        expect(response.body).toHaveProperty('id');
        expect(response.body.id).toHaveLength(8);

    });

});