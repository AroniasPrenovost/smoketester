"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = __importDefault(require("../app"));
const request = require('supertest');
var Utils = require('../utils/index');
/**
 * GET
 */
describe('GET api/v1/registrations', () => {
    test('responds with JSON object of registrations', (done) => __awaiter(void 0, void 0, void 0, function* () {
        const response = yield request(app_1.default).get('/api/v1/registrations');
        expect(response.status).toBe(200);
        expect(response.body.message).toEqual('Successfully retrieved registrations.');
        expect(response.body instanceof Object).toBe(true);
        expect(response.body.data[0]).toMatchObject({
            id: expect.any(Number),
            page_id: expect.any(Number),
            registration_state: expect.any(String),
            registration_meta: expect.any(String),
            created_at: expect.any(String) || null,
            updated_at: expect.any(String) || null,
            anonymized_at: expect.any(String) || null
        });
        done();
    }));
});
/**
 * GET/:id
 */
describe('GET api/v1/registrations/:id', () => {
    test('responds with single JSON object', (done) => __awaiter(void 0, void 0, void 0, function* () {
        const response = yield request(app_1.default).get('/api/v1/registrations/1');
        expect(response.status).toBe(200);
        expect(response.body.message).toEqual('Successfully retrieved registration by id.');
        expect(response.body instanceof Object).toBe(true);
        expect(response.body.data).toMatchObject({
            id: expect.any(Number),
            page_id: expect.any(Number),
            registration_state: expect.any(String),
            registration_meta: expect.any(String),
            created_at: expect.any(String) || null,
            updated_at: expect.any(String) || null,
            anonymized_at: expect.any(String) || null
        });
        done();
    }));
});
/**
 * POST
 */
//   // to do... 
/*
describe('POST api/v1/registrations', () => {

    let timestamp = Utils.datetimeTimestamp();
    let regMeta = { "first_name": "Test", "last_name": "Testington", "phone_number": "123456789", "contact_me": true, "email_address": null};
    regMeta.email_address = `chaitest-${timestamp.replace(/ +/g, '-')}@testRegistrations.com`;

    let testJSON = {
        'registration_state': 'unverified',
        'event_id': 2,
        'registration_meta': JSON.stringify(regMeta),
        'created_at': timestamp
        // 'id': generated by mysql
        // 'user_id': if no user exists w/ reg_meta email_address, new user record is created and user_id is assigned
    };

    test('responds with JSON object', async (done) => {

        let success_resp_1: string = "Successfully added new registration and corresponding 'users' table record.";
        let success_resp_2: string = "Successfully updated existing registration.";

        await request(app)
            .post('/api/v1/registrations')
            .send(testJSON)
            .expect(201)
            .then(async (response) => {
                expect(response.status).toBe(201);
                expect(response.body instanceof Object).toBe(true);
                expect(response.body.message).toEqual(success_resp_1 || success_resp_2);
            });

        done();
    });
});
*/
/**
 * PUT
 */
describe('PUT api/v1/registrations', () => {
    let timestamp = Utils.datetimeTimestamp();
    let testJSON = {
        'id': 1,
        'registration_state': 'unverified',
        'updated_at': timestamp
    };
    test('responds with JSON object', (done) => __awaiter(void 0, void 0, void 0, function* () {
        yield request(app_1.default)
            .put('/api/v1/registrations')
            .send(testJSON)
            .expect(200)
            .then((response) => __awaiter(void 0, void 0, void 0, function* () {
            expect(response.status).toBe(200);
            expect(response.body instanceof Object).toBe(true);
            expect(response.body.message).toEqual('Successfully updated registration.');
        }));
        done();
    }));
});
/**
 * DELETE
 */
// to do... 
