rem PASS - [Bundle] Prescription Order Message

java -jar org.hl7.fhir.validator.jar Bundle-prescription-order.xml -version 4.0.1 -tx https://r4.ontoserver.csiro.au/fhir -ig https://packages.simplifier.net/UK.DM.r4/-/UK.DM.r4-0.1.5-alpha.tgz   


rem PASS - [Bundle] Outpatient Prescription Order 4

java -jar org.hl7.fhir.validator.jar outpatient-4-example.json -version 4.0.1 -tx https://r4.ontoserver.csiro.au/fhir -ig https://packages.simplifier.net/UK.DM.r4/-/UK.DM.r4-0.1.5-alpha.tgz   


rem PASS - [Bundle] Outpatient Prescription Order 1

java -jar org.hl7.fhir.validator.jar outpatient-1-example.json -version 4.0.1 -tx https://r4.ontoserver.csiro.au/fhir -ig https://packages.simplifier.net/UK.DM.r4/-/UK.DM.r4-0.1.5-alpha.tgz   


rem PASS - [Bundle] Homecare Prescription Order 

java -jar org.hl7.fhir.validator.jar Homecare-example.json -version 4.0.1 -tx https://r4.ontoserver.csiro.au/fhir -ig https://packages.simplifier.net/UK.DM.r4/-/UK.DM.r4-0.1.5-alpha.tgz   
rem PASS - [bUNDLE] Homecare Prescription Cancel Response 

java -jar org.hl7.fhir.validator.jar Homecare-example-response.json -version 4.0.1 -tx https://r4.ontoserver.csiro.au/fhir -ig https://packages.simplifier.net/UK.DM.r4/-/UK.DM.r4-0.1.5-alpha.tgz   


rem FAIL Outpatient Prescription Order
java -jar org.hl7.fhir.validator.jar community-example-fail.json -version 4.0.1 -tx https://r4.ontoserver.csiro.au/fhir -ig https://packages.simplifier.net/UK.DM.r4/-/UK.DM.r4-0.1.5-alpha.tgz   

rem PASS [Bundle] Solutions Assurance Order Message

java -jar org.hl7.fhir.validator.jar 3C2366-B81001-0A409U.json -version 4.0.1 -tx https://r4.ontoserver.csiro.au/fhir -ig https://packages.simplifier.net/UK.DM.r4/-/UK.DM.r4-0.1.5-alpha.tgz   


rem PASS - [MedicationRequest] Multiple medication codes validation

java -jar org.hl7.fhir.validator.jar MedicationRequest-multipleMedicationCodes-pass.xml -version 4.0.1 -tx https://r4.ontoserver.csiro.au/fhir -ig https://packages.simplifier.net/UK.DM.r4/-/UK.DM.r4-0.1.5-alpha.tgz  -profile https://fhir.nhs.uk/StructureDefinition/DM-MedicationRequest

rem FAIL - [MedicationRequest] Missing SNOMED medication codes

java -jar org.hl7.fhir.validator.jar MedicationRequest-missingSNOMEDMedicationCodes-fail.xml -version 4.0.1 -tx https://r4.ontoserver.csiro.au/fhir -ig https://packages.simplifier.net/UK.DM.r4/-/UK.DM.r4-0.1.5-alpha.tgz  -profile https://fhir.nhs.uk/StructureDefinition/DM-MedicationRequest

rem PASS - [MedicationRequest] non eps profile specified, must validate against MM profile pass (note will fail if resource doesn't also validate against specified profile)

java -jar org.hl7.fhir.validator.jar MedicationRequest-alienProfile-pass.xml -version 4.0.1 -tx https://r4.ontoserver.csiro.au/fhir -ig https://packages.simplifier.net/UK.DM.r4/-/UK.DM.r4-0.1.5-alpha.tgz  -profile https://fhir.nhs.uk/StructureDefinition/DM-MedicationRequest

rem PASS - [MedicationRequest] repeat Dispensing

java -jar org.hl7.fhir.validator.jar MedicationRequest-repeatDispensing-pass.xml -version 4.0.1 -tx https://r4.ontoserver.csiro.au/fhir -ig https://packages.simplifier.net/UK.DM.r4/-/UK.DM.r4-0.1.5-alpha.tgz  -profile https://fhir.nhs.uk/StructureDefinition/DM-MedicationRequest

rem [MedicationRequest] Better

java -jar org.hl7.fhir.validator.jar MedicationRequest-better.xml -version 4.0.1 -tx https://r4.ontoserver.csiro.au/fhir -ig https://packages.simplifier.net/UK.DM.r4/-/UK.DM.r4-0.1.5-alpha.tgz  -profile https://fhir.nhs.uk/StructureDefinition/DM-MedicationRequest


rem PASS - [PractitionerRole] 

java -jar org.hl7.fhir.validator.jar PractitionerRole-pass.xml -version 4.0.1 -tx https://r4.ontoserver.csiro.au/fhir -ig https://packages.simplifier.net/UK.DM.r4/-/UK.DM.r4-0.1.5-alpha.tgz  -profile https://fhir.nhs.uk/StructureDefinition/Spine-PractitionerRole



rem FAIL - [Patient] 

java -jar org.hl7.fhir.validator.jar Patient-PDS-fail.json -version 4.0.1 -tx https://r4.ontoserver.csiro.au/fhir -ig https://packages.simplifier.net/UK.DM.r4/-/UK.DM.r4-0.1.5-alpha.tgz  -profile https://fhir.nhs.uk/StructureDefinition/Spine-Patient

rem PASS - [Patient] 

java -jar org.hl7.fhir.validator.jar Patient-EPS-pass.json -version 4.0.1 -tx https://r4.ontoserver.csiro.au/fhir -ig https://packages.simplifier.net/UK.DM.r4/-/UK.DM.r4-0.1.5-alpha.tgz  -profile https://fhir.nhs.uk/StructureDefinition/Spine-Patient



rem PASS - [Practitioner] 

java -jar org.hl7.fhir.validator.jar Practitioner.xml -version 4.0.1 -tx https://r4.ontoserver.csiro.au/fhir -ig https://packages.simplifier.net/UK.DM.r4/-/UK.DM.r4-0.1.5-alpha.tgz  -profile https://fhir.nhs.uk/StructureDefinition/Spine-Practitioner



rem PASS - [Organization] 

java -jar org.hl7.fhir.validator.jar Organization.xml -version 4.0.1 -tx https://r4.ontoserver.csiro.au/fhir -ig https://packages.simplifier.net/UK.DM.r4/-/UK.DM.r4-0.1.5-alpha.tgz  -profile https://fhir.nhs.uk/StructureDefinition/Spine-Organization

rem PASS - [Organisation-2] 

java -jar org.hl7.fhir.validator.jar Organisation-2.json -version 4.0.1 -tx https://r4.ontoserver.csiro.au/fhir -ig https://packages.simplifier.net/UK.DM.r4/-/UK.DM.r4-0.1.5-alpha.tgz  -profile https://fhir.nhs.uk/StructureDefinition/Spine-Organization


rem PASS - [PractitionerRole - json] 

java -jar org.hl7.fhir.validator.jar PractitionerRole-2.json -version 4.0.1 -tx https://r4.ontoserver.csiro.au/fhir -ig https://packages.simplifier.net/UK.DM.r4/-/UK.DM.r4-0.1.5-alpha.tgz  -profile https://fhir.nhs.uk/StructureDefinition/Spine-PractitionerRole

rem PASS - [CommunicationRequest - json] 

java -jar org.hl7.fhir.validator.jar CommunicationRequest.json -version 4.0.1 -tx https://r4.ontoserver.csiro.au/fhir -ig https://packages.simplifier.net/UK.DM.r4/-/UK.DM.r4-0.1.5-alpha.tgz  -profile https://fhir.nhs.uk/StructureDefinition/DM-CommunicationRequest

rem PASS - [List Repeat Medications] 

java -jar org.hl7.fhir.validator.jar List-RepeatMedications.json -version 4.0.1 -tx https://r4.ontoserver.csiro.au/fhir -ig https://packages.simplifier.net/UK.DM.r4/-/UK.DM.r4-0.1.5-alpha.tgz  -profile https://fhir.hl7.org.uk/StructureDefinition/UKCore-List


java -jar org.hl7.fhir.validator.jar vaccinations-JulieJones.xml -version 3.0