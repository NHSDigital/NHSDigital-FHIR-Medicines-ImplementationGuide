
import {pactWith} from "jest-pact";
import {Matchers} from "@pact-foundation/pact";
import {basePath, pactOptions} from "./common.js";
import supertest from "supertest";
import * as uuid from "uuid";
import {InteractionObject} from "@pact-foundation/pact";
import * as LosslessJson from "lossless-json";
import {fetcher} from "@models";


pactWith(pactOptions(),
    /* eslint-disable  @typescript-eslint/no-explicit-any */
    async (provider) => {
        const client = () => {
            const url = `${provider.mockService.baseUrl}`
            return supertest(url)
        }

        describe("validate e2e tests", () => {
            test("validate endpoint should return 200 on success", async () => {
                const testCase = fetcher.convertExamples[0]
                const apiPath = `${basePath}/$validate`
                const requestId = uuid.v4()
                const correlationId = uuid.v4()

                const messageStr = LosslessJson.stringify(testCase.request)

                const interaction: InteractionObject = {
                    state: "is authenticated",
                    uponReceiving: "a valid FHIR message",
                    withRequest: {
                        headers: {
                            "Content-Type": "application/fhir+json; fhirVersion=4.0",
                            "X-Request-ID": requestId,
                            "X-Correlation-ID": correlationId
                        },
                        method: "POST",
                        path: apiPath,
                        body: JSON.parse(messageStr)
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
                    .post(apiPath)
                    .set("Content-Type", "application/fhir+json; fhirVersion=4.0")
                    .set("Accept", "application/fhir+json")
                    .set("X-Request-ID", requestId)
                    .set("X-Correlation-ID", correlationId)
                    .send(messageStr)
                    .expect(200)
            })
        })


    });
