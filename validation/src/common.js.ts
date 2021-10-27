import {JestPactOptions} from "jest-pact";

export const basePath = "/FHIR/R4"

export function pactOptions(): JestPactOptions {


    return {
        spec: 2,
        consumer: `blah`,
        /* eslint-disable-next-line max-len */
        provider: `moreblah`,
        pactfileWriteMode: "merge"
    }
}
