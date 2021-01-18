rem onto r4
java -jar org.hl7.fhir.validator.jar MedicationRequest-repeatDispensing-pass.xml -version 4.0.1 -tx https://r4.ontoserver.csiro.au/fhir -ig https://packages.simplifier.net/UK.DM.r4/-/UK.DM.r4-0.0.27-dev.tgz -profile https://fhir.nhs.uk/StructureDefinition/DM-MedicationRequest

rem default 
java -jar org.hl7.fhir.validator.jar MedicationRequest-repeatDispensing-pass.xml -version 4.0.1 -ig https://packages.simplifier.net/UK.DM.r4/-/UK.DM.r4-0.0.27-dev.tgz -profile https://fhir.nhs.uk/StructureDefinition/DM-MedicationRequest

rem No terminology
java -jar org.hl7.fhir.validator.jar MedicationRequest-repeatDispensing-pass.xml -version 4.0.1 -tx n/a -ig https://packages.simplifier.net/UK.DM.r4/-/UK.DM.r4-0.0.27-dev.tgz -profile https://fhir.nhs.uk/StructureDefinition/DM-MedicationRequest