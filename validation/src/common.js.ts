import axios from "axios";
import {Patient} from "fhir/r4";

export const basePath = "/FHIR/R4"

export let defaultBaseUrl = 'http://localhost:9001/R4';

export let patient : Patient = {
        resourceType: "Patient",
        identifier: [
            {
                "system": "https://fhir.nhs.uk/Id/nhs-number",
                "value": "9000000009"
            }
        ],
        name: [
            {
                given: [
                    "Jane"
                ],
                family: "Smith",
                prefix: [
                    "Mrs"
                ],
                suffix: [
                    "MBE"
                ]
            }
        ],
        gender: "female",
        birthDate: "2010-10-22",
        generalPractitioner: [
            {
                "identifier": {
                    "system": "https://fhir.nhs.uk/Id/ods-organization-code",
                    "value": "Y12345"
                }
            }
        ],
        address: [
            {

                line: [
                    "1 Trevelyan Square",
                    "Boar Lane",
                    "City Centre",
                    "Leeds",
                    "West Yorkshire"
                ],
                postalCode: "LS1 6AE"
            }
        ]
    }
;

export const api = (baseUrl = defaultBaseUrl) => ({
    validate: (resource) => axios.post(`${baseUrl}/$validate`, resource)
        .then(response => response.data)

})

