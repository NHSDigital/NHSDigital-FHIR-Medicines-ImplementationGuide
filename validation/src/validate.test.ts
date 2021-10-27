import {patient, validate} from "./common.js";
import {OperationOutcome} from "fhir/r4";
import * as fs from "fs";

beforeAll(() => {
    console.log('start up');
});

/*
test('two plus two is four', () => {
    expect(2 + 2).toBe(4);
});
*/

///https://github.com/NHSDigital/electronic-prescription-service-api/blob/master/models/examples/fetchers/example-files-fetcher.ts

describe('Parsing folder Examples', () => {
    const dir = '../Examples';
    const list = fs.readdirSync(dir)
    list.forEach(function (file) {
        file = dir + "/" + file;
        it('Validate '+file, () => {
            const contents = fs.readFileSync(dir + "/" + file,'utf8');
            //console.log(contents);
        });
    })
});

it('validation functionality test', async () => {
    const response = await validate(patient);  // Run the function

    // @ts-ignore
    expect(response.status).toEqual(200);
    const resource: any = response.data;
    expect(resource.resourceType).toEqual('OperationOutcome');
    console.log('its an operation outcome')
    const operationOutcome: OperationOutcome = resource;
    let success=true;
    for (const issue of  operationOutcome.issue) {
        if (issue.severity == "error") success =false
    }
    expect(success).toEqual(true);
    console.log('no errors found')

});





