import {pactWith} from "jest-pact";
import {api, patient} from '../common.js.js';

import {OperationOutcome} from "fhir/r4";


pactWith({ consumer: 'MyConsumer', provider: 'MyProvider' }, provider => {
    // regular pact tests go here
    let client;

    beforeEach(() => {
        client = api()
    });

    describe('health endpoint', () => {

        it('validate patient', () =>
            client.validate(patient).then(response => {
                expect(response.resourceType).toEqual('OperationOutcome');
                console.log('its an operation outcome')
                const operationOutcome: OperationOutcome = response;
                let success=true;
                for (const issue of  operationOutcome.issue) {
                    if (issue.severity == "error") success =false
                }
                expect(success).toEqual(true);
                console.log('no errors found')
            }));

        it('validate bad patient', () => {
            let badPatient = patient;
            // force error
            badPatient.identifier = [];
            client.validate(badPatient).then(response => {
                expect(response.resourceType).toEqual('OperationOutcome');

                const operationOutcome: OperationOutcome = response;
                let success = true;
                for (const issue of operationOutcome.issue) {
                    if (issue.severity == "error") success = false
                }
                expect(success).toEqual(true);

            })
        });
    });

})
