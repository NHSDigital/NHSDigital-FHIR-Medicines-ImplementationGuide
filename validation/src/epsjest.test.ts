import {pactWith} from "jest-pact";
import {defaultBaseUrl, patient} from './common.js';
import {InteractionObject, Matchers} from '@pact-foundation/pact';
import {supertest} from 'supertest';

pactWith({ consumer: 'MyConsumer', provider: 'MyProvider' },
    /* eslint-disable  @typescript-eslint/no-explicit-any */
    async provider => {

        const client = () => {
            const url = defaultBaseUrl;
            return supertest(url)
        }


        describe('validate endpoint', () => {
            test("validate endpoint should return 200 on success", async () => {


                const interaction: InteractionObject = {
                    state: "is authenticated",
                    uponReceiving: "a valid FHIR message",
                    withRequest: {
                        headers: {
                            "Content-Type": "application/fhir+json",
                        },
                        method: "POST",
                        path: '/$validate',
                        body: patient
                    },
                    willRespondWith: {
                        headers: {
                            "Content-Type": "application/json"
                        },
                        body: {
                            resourceType: "OperationOutcome",
                            issue: [
                                {
                                    code: "informational",
                                    severity: "information"
                                }
                            ]
                        },
                        status: 200
                    }
                }

                await provider.addInteraction(interaction)
                await client()
                    .post('/$validate')
                    .set("Content-Type", "application/fhir+json")
                    .set("Accept", "application/fhir+json")
                    .send(patient)
                    .expect(200)
            });

            /*
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
                    console.log('its an operation outcome')
                    const operationOutcome: OperationOutcome = response;
                    let success = true;
                    for (const issue of operationOutcome.issue) {
                        if (issue.severity == "error") success = false
                    }
                    expect(success).toEqual(true);
                    console.log('no errors found')
                })
            });*/
        });

    })

