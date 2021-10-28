import { defaultBaseUrl, getJson, patient, resourceChecks } from "./common.js";

import * as fs from "fs";
import supertest from "supertest"


const client = () => {
    const url = defaultBaseUrl
    return supertest(url)
}


function testFolder(dir) {

    if (fs.existsSync(dir)) {
        const list = fs.readdirSync(dir);
        list.forEach(function (file) {
            file = dir + "/" + file;
            const resource: any = fs.readFileSync(dir + "/" + file, 'utf8');

            it('Validate ' + file, async () => {
                await client()
                    .post('/$validate')
                    .set("Content-Type", 'application/fhir+xml')
                    .set("Accept", 'application/fhir+json')
                    .send(getJson(file, resource))
                    .expect(200)
                    .then((response: any) => {
                        resourceChecks(response, file)
                    })
            });
        })
    }
};


describe('Parsing folder CapabilityStatement', () => {
    testFolder('../CapabilityStatement');
});

describe('Parsing folder CapabilityStatement', () => {
    testFolder('../Examples');
});

describe('Parsing folder CapabilityStatement', () => {
    testFolder('../CodeSystem');
});

describe('Parsing folder CapabilityStatement', () => {
    testFolder('../MessageDefinition');
});


describe('Parsing folder CapabilityStatement', () => {
    testFolder('../ValueSet');
});

describe('Parsing folder CapabilityStatement', () => {
    testFolder('../ConceptMap');
});

describe('Parsing folder CapabilityStatement', () => {
    testFolder('../SearchParameter');
});

describe('Parsing folder CapabilityStatement', () => {
    testFolder('../OperationDefinition');
});

describe('Parsing folder CapabilityStatement', () => {
    testFolder('../StructureDefinition');
});




describe('Testing validation api is functioning', () => {
    it('validation functionality test', async () => {
        await client()
            .post('/$validate')
            .set("Content-Type", "application/fhir+json; fhirVersion=4.0")
            .set("Accept", "application/fhir+json")
            .send(patient)
            .expect(200)
    });
});




