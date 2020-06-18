rem PASS - [Bundle] Prescription Order Message

java -jar org.hl7.fhir.validator.jar Bundle-prescription-order.xml -version 4.0.1 -ig https://packages.simplifier.net/UK.MM.r4/-/UK.MM.r4-0.0.1-dev.tgz -ig C:\Development\NHSD\eps\StructureDefinition\ 



rem PASS - [MedicationRequest] Multiple medication codes validation

java -jar org.hl7.fhir.validator.jar MedicationRequest-multipleMedicationCodes-pass.xml -version 4.0.1 -ig https://packages.simplifier.net/UK.MM.r4/-/UK.MM.r4-0.0.1-dev.tgz -ig C:\Development\NHSD\eps\StructureDefinition\ -profile https://fhir.nhs.uk/R4/StructureDefinition/DM-MedicationRequest

rem FAIL - [MedicationRequest] Missing SNOMED medication codes

java -jar org.hl7.fhir.validator.jar MedicationRequest-missingSNOMEDMedicationCodes-fail.xml -version 4.0.1 -ig https://packages.simplifier.net/UK.MM.r4/-/UK.MM.r4-0.0.1-dev.tgz -ig C:\Development\NHSD\eps\StructureDefinition\ -profile https://fhir.nhs.uk/R4/StructureDefinition/DM-MedicationRequest

rem PASS - [MedicationRequest] non eps profile specified, must validate against MM profile pass (note will fail if resource doesn't also validate against specified profile)

java -jar org.hl7.fhir.validator.jar MedicationRequest-alienProfile-pass.xml -version 4.0.1 -ig https://packages.simplifier.net/UK.MM.r4/-/UK.MM.r4-0.0.1-dev.tgz -ig C:\Development\NHSD\eps\StructureDefinition\ -profile https://fhir.nhs.uk/R4/StructureDefinition/DM-MedicationRequest

rem PASS - [MedicationRequest] repeat Dispensing

java -jar org.hl7.fhir.validator.jar MedicationRequest-repeatDispensing-pass.xml -version 4.0.1 -ig https://packages.simplifier.net/UK.MM.r4/-/UK.MM.r4-0.0.1-dev.tgz -ig C:\Development\NHSD\eps\StructureDefinition\ -profile https://fhir.nhs.uk/R4/StructureDefinition/DM-MedicationRequest



rem PASS - [PractitionerRole] 

java -jar org.hl7.fhir.validator.jar PractitionerRole-pass.xml -version 4.0.1 -ig https://packages.simplifier.net/UK.MM.r4/-/UK.MM.r4-0.0.1-dev.tgz -ig C:\Development\NHSD\eps\StructureDefinition\ -profile https://fhir.nhs.uk/R4/StructureDefinition/DM-PractitionerRole



rem FAIL - [Patient] PDS

java -jar org.hl7.fhir.validator.jar Patient-PDS-pass.json -version 4.0.1 -ig https://packages.simplifier.net/UK.MM.r4/-/UK.MM.r4-0.0.1-dev.tgz -ig C:\Development\NHSD\eps\StructureDefinition\ -profile https://fhir.nhs.uk/R4/StructureDefinition/DM-Patient

rem FAIL - [Patient] EPS

java -jar org.hl7.fhir.validator.jar Patient-DM-pass.json -version 4.0.1 -ig https://packages.simplifier.net/UK.MM.r4/-/UK.MM.r4-0.0.1-dev.tgz -ig C:\Development\NHSD\eps\StructureDefinition\ -profile https://fhir.nhs.uk/R4/StructureDefinition/DM-Patient



rem PASS - [Practitioner] 

java -jar org.hl7.fhir.validator.jar Practitioner.xml -version 4.0.1 -ig https://packages.simplifier.net/UK.MM.r4/-/UK.MM.r4-0.0.1-dev.tgz -ig C:\Development\NHSD\eps\StructureDefinition\ -profile https://fhir.nhs.uk/R4/StructureDefinition/DM-Practitioner



rem PASS - [Organization] 

java -jar org.hl7.fhir.validator.jar Organization.xml -version 4.0.1 -ig https://packages.simplifier.net/UK.MM.r4/-/UK.MM.r4-0.0.1-dev.tgz -ig C:\Development\NHSD\eps\StructureDefinition\ -profile https://fhir.nhs.uk/R4/StructureDefinition/DM-Organization
