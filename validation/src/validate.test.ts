import {defaultBaseUrl, getContentType, patient, resourceChecks} from "./common.js";
import {OperationOutcome} from "fhir/r4";
import * as fs from "fs";
import supertest from "supertest"


const client = () => {
    const url = defaultBaseUrl
    return supertest(url)
}

describe('Parsing folder Examples', () => {
    const dir = '../Examples';
    const list = fs.readdirSync(dir);
    list.forEach(function (file) {
        file = dir + "/" + file;
        const resource: any = fs.readFileSync(dir + "/" + file, 'utf8');

        it('Validate ' + file, async () => {
            await client()
                .post('/$validate')
                .set("Content-Type", getContentType(file))
                .set("Accept", 'application/fhir+json')
                .send(resource)
                .expect(200)
                .then((response: any) => {
                    resourceChecks(response, file)
                })
        });

    })
});


describe('Parsing folder CapabilityStatement', () => {
    const dir = '../CapabilityStatement';
    const list = fs.readdirSync(dir);
    list.forEach(function (file) {
        file = dir + "/" + file;
        const resource: any = fs.readFileSync(dir + "/" + file, 'utf8');

        it('Validate ' + file, async () => {
            await client()
                .post('/$validate')
                .set("Content-Type", getContentType(file))
                .set("Accept", 'application/fhir+json')
                .send(resource)
                .expect(200)
                .then((response: any) => {
                    resourceChecks(response, file)
                })
        });

    })
});


describe('Parsing folder CodeSystem', () => {
    const dir = '../CodeSystem';
    const list = fs.readdirSync(dir);
    list.forEach(function (file) {
        file = dir + "/" + file;
        const resource: any = fs.readFileSync(dir + "/" + file, 'utf8');

        it('Validate ' + file, async () => {
            await client()
                .post('/$validate')
                .set("Content-Type", getContentType(file))
                .set("Accept", 'application/fhir+json')
                .send(resource)
                .expect(200)
                .then((response: any) => {
                    resourceChecks(response, file)
                })
        });

    })
});

describe('Parsing folder MessageDefinition', () => {
    const dir = '../MessageDefinition';
    const list = fs.readdirSync(dir);
    list.forEach(function (file) {
        file = dir + "/" + file;
        const resource: any = fs.readFileSync(dir + "/" + file, 'utf8');

        it('Validate ' + file, async () => {
            await client()
                .post('/$validate')
                .set("Content-Type", getContentType(file))
                .set("Accept", 'application/fhir+json')
                .send(resource)
                .expect(200)
                .then((response: any) => {
                    resourceChecks(response, file)
                })
        });

    })
});

describe('Parsing folder ValueSet', () => {
    const dir = '../ValueSet';
    const list = fs.readdirSync(dir);
    list.forEach(function (file) {
        file = dir + "/" + file;
        const resource: any = fs.readFileSync(dir + "/" + file, 'utf8');

        it('Validate ' + file, async () => {
            await client()
                .post('/$validate')
                .set("Content-Type", getContentType(file))
                .set("Accept", 'application/fhir+json')
                .send(resource)
                .expect(200)
                .then((response: any) => {
                    resourceChecks(response, file)
                })
        });

    })
});

describe('Parsing folder ConceptMap', () => {
    const dir = '../ConceptMap';
    const list = fs.readdirSync(dir);
    list.forEach(function (file) {
        file = dir + "/" + file;
        const resource: any = fs.readFileSync(dir + "/" + file, 'utf8');

        it('Validate ' + file, async () => {
            await client()
                .post('/$validate')
                .set("Content-Type", getContentType(file))
                .set("Accept", 'application/fhir+json')
                .send(resource)
                .expect(200)
                .then((response: any) => {
                    resourceChecks(response, file)
                })
        });

    })
});

describe('Parsing folder SearchParameter', () => {
    const dir = '../SearchParameter';
    const list = fs.readdirSync(dir);
    list.forEach(function (file) {
        file = dir + "/" + file;
        const resource: any = fs.readFileSync(dir + "/" + file, 'utf8');

        it('Validate ' + file, async () => {
            await client()
                .post('/$validate')
                .set("Content-Type", getContentType(file))
                .set("Accept", 'application/fhir+json')
                .send(resource)
                .expect(200)
                .then((response: any) => {
                    resourceChecks(response, file)
                })
        });

    })
});

describe('Parsing folder OperationDefinition', () => {
    const dir = '../OperationDefinition';
    const list = fs.readdirSync(dir);
    list.forEach(function (file) {
        file = dir + "/" + file;
        const resource: any = fs.readFileSync(dir + "/" + file, 'utf8');

        it('Validate ' + file, async () => {
            await client()
                .post('/$validate')
                .set("Content-Type", getContentType(file))
                .set("Accept", 'application/fhir+json')
                .send(resource)
                .expect(200)
                .then((response: any) => {
                    resourceChecks(response, file)
                })
        });

    })
});

describe('Parsing folder StructureDefinition', () => {
    const dir = '../StructureDefinition';
    const list = fs.readdirSync(dir);
    list.forEach(function (file) {
        file = dir + "/" + file;
        const resource: any = fs.readFileSync(dir + "/" + file, 'utf8');

        it('Validate ' + file, async () => {
            await client()
                .post('/$validate')
                .set("Content-Type", getContentType(file))
                .set("Accept", 'application/fhir+json')
                .send(resource)
                .expect(200)
                .then((response: any) => {
                    resourceChecks(response, file)
                })
        });

    })
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




