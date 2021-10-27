import {patient, validate} from "./common.js";
import {OperationOutcome} from "fhir/r4";
import * as fs from "fs";

/*
beforeAll(() => {
    console.log('start up');
});
*/

///https://github.com/NHSDigital/electronic-prescription-service-api/blob/master/models/examples/fetchers/example-files-fetcher.ts

describe('Parsing folder Examples', () => {
    const dir = '../Examples';
    const list = fs.readdirSync(dir);
    list.forEach(function (file) {
        file = dir + "/" + file;
        var fileExtension = file.split('.').pop();
        var contentType;
        if (fileExtension == 'xml' || fileExtension == 'XML') contentType ='application/fhir+xml';
        if (fileExtension == 'json' || fileExtension == 'JSON') contentType ='application/fhir+xml';
        if (contentType != null) {
            it('Validate ' + file, async () => {
                const contents = fs.readFileSync(dir + "/" + file, 'utf8');
                const response = await validate(patient, 'application/fhir+json');
                expect(response.status).toEqual(200);
                const resource: any = response.data;
                expect(resource.resourceType).toEqual('OperationOutcome');
                const operationOutcome: OperationOutcome = resource;
                let success=true;
                let warn=0;
                for (const issue of  operationOutcome.issue) {
                    if (issue.severity == "error") success =false
                    switch(issue.severity) {
                        case "error":
                        case "fatal":
                            success = false;
                            break;
                        case "warning":
                            warn++;
                            break;
                    }
                }
                console.log("Warnings "+warn);
                expect(success).toEqual(true);
            });
        }
    })
});

it('validation functionality test', async () => {
    const response = await validate(patient,'application/fhir+json');  // Run the function

    // @ts-ignore
    expect(response.status).toEqual(200);
    const resource: any = response.data;
    expect(resource.resourceType).toEqual('OperationOutcome');
    const operationOutcome: OperationOutcome = resource;
    let success=true;
    for (const issue of  operationOutcome.issue) {
        if (issue.severity == "error") success =false
    }
    expect(success).toEqual(true);
});





