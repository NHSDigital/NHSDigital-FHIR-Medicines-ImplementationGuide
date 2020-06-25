### DM-MedicationRequest Conformance Rules

Implementors are recommended to develop against the UKCore and ensure this Validates correctly against Digital Medicine (/EPS) Requirements. 

| UK Core Profile | 
|--
| {{link:https://fhir.nhs.uk/R4/StructureDefinition/UKCore-MedicationRequest}}  |


These validation rules are taken from [EPS Prescribing Systems Compliance Specification v6.11](https://digital.nhs.uk/binaries/content/assets/website-assets/services/electronic-prescription-service/eps-prescribing-system-mvp/eps-prescribing-systems-compliance-specification-v6_11.pdf)



| Required Fields | Notes | Section |
|--
|  | *token issued* is no longer supported. <br><br> EPS ITK mapping `pertinentInformation1.pertinentPrescription.pertinentInformation2[].pertinentTokenIssued` | Section 6.1.3 |
|  | *procedure code* is no longer supported and in EPS ParentPrescription this will use the default of SNOMED CT (code) `163501000000109` Display Name `Prescription` <br><br> EPS ParentPrescription mapping `pertinentInformation1.pertinentPrescription.pertinentInformation2.` `pertinentLineItem[].code` | 
| epsPrescriptionType (extension) | An extension containing a code from {{link:https://fhir.nhs.uk/R4/CodeSystem/prescription-type}}. <br><br> EPS ParentPrescription mapping `pertinentInformation1.pertinentPrescription.pertinentInformation4.` `pertinentPrescriptionType.value` |
| repeatInformation (extension) | For repeat-prescribing and repeat-dispensing prescriptions only {{link:https://fhir.nhs.uk/R4/StructureDefinition/Extension-UKCore-MedicationRepeatInformation}} |
| repeatInformation.numberOfRepeatPrescriptionsIssued (extension) |  EPS ParentPrescription mapping `pertinentInformation1.pertinentPrescription.pertinentInformation1.` `pertinentPrescription.repeatNumber.low`  |
| repeatInformation.numberOfRepeatPrescriptionsAllowed (extension) |  EPS ParentPrescription mapping `pertinentInformation1.pertinentPrescription.pertinentInformation1.` `pertinentPrescription.repeatNumber.high` |
| identifier | An UUID identifer for {{link:https://fhir.nhs.uk/Id/prescription-line-id}} must be present <br><br> EPS ParentPrescription mapping `pertinentInformation2[].pertinentLineItem.id`|
| category | TODO - a NHS ValueSet will be included |
| medicationCodeableConcept | Refer to the dm+d implementation guidance documents for more information related to the use of dm+d, including that related to the use of “native” dm+d. These are available from the dm+d web site (http://www.dmd.nhs.uk). <br> <br> Where a medication item is not in the dm+d, current FP10 processes must be followed and no EPS prescription message will be generated. <br> ValueSet should allow [VMP, AMP and VTM concepts](link:https://developer.nhs.uk/apis/dose-syntax-implementation-1-3-2-alpha/#fast-healthcare-interoperability-resources-fhir-and-interopen)  <br><br> EPS ParentPrescription mapping `pertinentInformation1.pertinentPrescription.pertinentInformation2.` `pertinentLineItem[].product.manufacturedProduct.manufacturedRequestedMaterial` |
| medicationCodeableConcept.display | dm+d name is required here, not SNOMED CT preferred name |
| subject | Reference to a {{pagelink:DM-Patient}} which is a PDS compliant profile <br><br> EPS ParentPrescription mapping `recordTarget` |
| authoredOn | EPS ParentPrescription mapping `effectiveTime` |
| groupIdentifier | The short form prescription identifier {{link:https://fhir.nhs.uk/Id/prescription-short-form }}  <br><br> EPS ParentPrescription mapping `pertinentInformation1.pertinentPrescription.pertinentInformation1.` `id (oid=2.16.840.1.113883.2.1.3.2.4.18.8)`| 
| groupIdentifier.extension | Contains the UUID for {{link:https://fhir.nhs.uk/Id/prescription-parent-id}}  <br><br> EPS ParentPrescription mapping `pertinentInformation1.pertinentPrescription.pertinentInformation1.id` | 
| courseOfTherapyType | Code from {{link:https://fhir.nhs.uk/R4/ValueSet/DM-prescription-therapy-type}} <br><br> EPS ParentPrescription mapping `pertinentInformation1.pertinentPrescription.pertinentInformation1.` `pertinentInformation5.pertinentPrescriptionTreatmentType` |
| basedOn | Only MedicationRequests with `intent=plan` can be referenced  | 
| notes | Should be only be used for information relevant to this presecription and should not be used for patient communication (consider adding Communication resource for items such as surgery opening times or advice to book blood tests). <br> markdown is allowed here but HL7v3 does not support this |
| dosageInstructions | EPS ParentPrescription mapping `pertinentInformation1.pertinentPrescription.pertinentInformation1.` `pertinentInformation2.pertinentLineItem[].pertinentInformation2.pertinentDosageInstructions.value` |
| dispenseRequest.performer.identifier (nominatedPharmacy) | Nominated Pharmacy. Patients preferred Pharmacy can be sourced from Patient Demongraphics Service. Use ODS Codes `https://fhir.nhs.uk/Id/ods-organization-code` only. |
| dispenseRequest.performerType (extension) | EPS ParentPrescription mapping `pertinentInformation1.pertinentPrescription.pertinentInformation1.` `pertinentDispensingSitePreference` |
| dispenseRequest.validityPerion.end | Repeats only <br><br> EPS ParentPrescription mapping `pertinentInformation1.pertinentPrescription.pertinentInformation1.` `pertinentInformation7.pertinentReviewDate.value` |
| dispenseRequest.quantity | EPS ParentPrescription mapping `pertinentInformation1.pertinentPrescription.pertinentInformation2.` `pertinentLineItem[].component.lineItemQuantity` |
| substitution | Should default to false in most cases. <br><br> EPS ParentPrescription mapping `pertinentInformation1.pertinentPrescription.pertinentInformation(?)` `.seperatableInd` |



<div class="tab">
  <button class="tablinks" onclick="openTab(event, 'Differential')">Differential</button>
  <button class="tablinks active" onclick="openTab(event, 'Hybrid')">Hybrid</button>
  <button class="tablinks" onclick="openTab(event, 'Snapshot')">Snapshot</button>
    <button class="tablinks" onclick="openTab(event, 'Detailed Description')">Detailed Description</button>
  <button class="tablinks" onclick="openTab(event, 'Examples')">Examples</button>
</div>
<div id="Differential" class="tabcontent">
  <h3>Differential</h3>
  {{tree: DM-MedicationRequest, diff}}
</div>
<div id="Hybrid" class="tabcontent" style="display:block">
  <h3>Hybrid</h3>
  {{tree: DM-MedicationRequest, hybrid}}
</div>
<div id="Snapshot" class="tabcontent">
  <h3>Snapshot</h3>
  {{tree: DM-MedicationRequest, snapshot}}
</div>
<div id="Detailed Description" class="tabcontent">
  <h3>Detailed Description</h3>
  {{dict:DM-MedicationRequest}}
</div>
<div id="Examples" class="tabcontent">
  <h3>Examples</h3>
  {{pagelink: MedicationRequestMultipleDrugCodes}} <br>
  {{pagelink: MedicationRequestRepeatDispensing}} <br>
</div>
