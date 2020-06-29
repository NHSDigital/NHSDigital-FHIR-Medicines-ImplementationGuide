rem PASS - [Bundle] Prescription Order Message

java -jar org.hl7.fhir.validator.jar Bundle-prescription-order.xml -version 4.0.1 -tx https://r4.ontoserver.csiro.au/fhir -ig https://packages.simplifier.net/UK.DM.r4/-/UK.DM.r4-0.0.9-dev.tgz  -ig C:\Development\NHSD\eps\StructureDefinition\ 


rem PASS [Bundle] Solutions Assurance Order Message

java -jar org.hl7.fhir.validator.jar 3C2366-B81001-0A409U.json -version 4.0.1 -tx https://r4.ontoserver.csiro.au/fhir -ig https://packages.simplifier.net/UK.DM.r4/-/UK.DM.r4-0.0.9-dev.tgz  -ig C:\Development\NHSD\eps\StructureDefinition\ 


rem PASS - [MedicationRequest] Multiple medication codes validation

java -jar org.hl7.fhir.validator.jar MedicationRequest-multipleMedicationCodes-pass.xml -version 4.0.1 -tx https://r4.ontoserver.csiro.au/fhir -ig https://packages.simplifier.net/UK.DM.r4/-/UK.DM.r4-0.0.9-dev.tgz -ig C:\Development\NHSD\eps\StructureDefinition\ -profile https://fhir.nhs.uk/R4/StructureDefinition/DM-MedicationRequest

rem FAIL - [MedicationRequest] Missing SNOMED medication codes

java -jar org.hl7.fhir.validator.jar MedicationRequest-missingSNOMEDMedicationCodes-fail.xml -version 4.0.1 -tx https://r4.ontoserver.csiro.au/fhir -ig https://packages.simplifier.net/UK.DM.r4/-/UK.DM.r4-0.0.9-dev.tgz -ig C:\Development\NHSD\eps\StructureDefinition\ -profile https://fhir.nhs.uk/R4/StructureDefinition/DM-MedicationRequest

rem PASS - [MedicationRequest] non eps profile specified, must validate against MM profile pass (note will fail if resource doesn't also validate against specified profile)

java -jar org.hl7.fhir.validator.jar MedicationRequest-alienProfile-pass.xml -version 4.0.1 -tx https://r4.ontoserver.csiro.au/fhir -ig https://packages.simplifier.net/UK.DM.r4/-/UK.DM.r4-0.0.9-dev.tgz -ig C:\Development\NHSD\eps\StructureDefinition\ -profile https://fhir.nhs.uk/R4/StructureDefinition/DM-MedicationRequest

rem PASS - [MedicationRequest] repeat Dispensing

java -jar org.hl7.fhir.validator.jar MedicationRequest-repeatDispensing-pass.xml -version 4.0.1 -tx https://r4.ontoserver.csiro.au/fhir -ig https://packages.simplifier.net/UK.DM.r4/-/UK.DM.r4-0.0.9-dev.tgz -ig C:\Development\NHSD\eps\StructureDefinition\ -profile https://fhir.nhs.uk/R4/StructureDefinition/DM-MedicationRequest


rem PASS - [PractitionerRole] 

java -jar org.hl7.fhir.validator.jar PractitionerRole-pass.xml -version 4.0.1 -tx https://r4.ontoserver.csiro.au/fhir -ig https://packages.simplifier.net/UK.DM.r4/-/UK.DM.r4-0.0.9-dev.tgz -ig C:\Development\NHSD\eps\StructureDefinition\ -profile https://fhir.nhs.uk/R4/StructureDefinition/Spine-PractitionerRole



rem FAIL - [Patient] 

java -jar org.hl7.fhir.validator.jar Patient-PDS-fail.json -version 4.0.1 -tx https://r4.ontoserver.csiro.au/fhir -ig https://packages.simplifier.net/UK.DM.r4/-/UK.DM.r4-0.0.9-dev.tgz -ig C:\Development\NHSD\eps\StructureDefinition\ -profile https://fhir.nhs.uk/R4/StructureDefinition/DM-Patient

rem PASS - [Patient] 

java -jar org.hl7.fhir.validator.jar Patient-EPS-pass.json -version 4.0.1 -tx https://r4.ontoserver.csiro.au/fhir -ig https://packages.simplifier.net/UK.DM.r4/-/UK.DM.r4-0.0.9-dev.tgz -ig C:\Development\NHSD\eps\StructureDefinition\ -profile https://fhir.nhs.uk/R4/StructureDefinition/DM-Patient



rem PASS - [Practitioner] 

java -jar org.hl7.fhir.validator.jar Practitioner.xml -version 4.0.1 -tx https://r4.ontoserver.csiro.au/fhir -ig https://packages.simplifier.net/UK.DM.r4/-/UK.DM.r4-0.0.9-dev.tgz -ig C:\Development\NHSD\eps\StructureDefinition\ -profile https://fhir.nhs.uk/R4/StructureDefinition/Spine-Practitioner



rem PASS - [Organization] 

java -jar org.hl7.fhir.validator.jar Organization.xml -version 4.0.1 -tx https://r4.ontoserver.csiro.au/fhir -ig https://packages.simplifier.net/UK.DM.r4/-/UK.DM.r4-0.0.9-dev.tgz -ig C:\Development\NHSD\eps\StructureDefinition\ -profile https://fhir.nhs.uk/R4/StructureDefinition/Spine-Organization


rem PASS - [Questionnaire] 

java -jar org.hl7.fhir.validator.jar Questionnaire-dispensing-patient-preferences.xml -version 4.0.1 -tx https://r4.ontoserver.csiro.au/fhir -ig https://packages.simplifier.net/UK.DM.r4/-/UK.DM.r4-0.0.9-dev.tgz -ig C:\Development\NHSD\eps\StructureDefinition\ 

rem PASS - [QuestionnaireResponse] 

java -jar org.hl7.fhir.validator.jar QuestionnaireResponse-dispensing-patient-preferences-completed.xml -version 4.0.1 -tx https://r4.ontoserver.csiro.au/fhir -ig https://packages.simplifier.net/UK.DM.r4/-/UK.DM.r4-0.0.9-dev.tgz -ig C:\Development\NHSD\eps\StructureDefinition\ 