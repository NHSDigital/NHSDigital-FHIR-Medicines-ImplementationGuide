### DM-Patient Conformance Rules

Implementors are recommended to develop against the UKCore and ensure this Validates correctly against Digital Medicine (/EPS) Requirements. 

| UK Core Profile | 
|--
| {{link:https://fhir.nhs.uk/R4/StructureDefinition/UKCore-Patient}}  |



<br>

| Fields | Notes |
|--
| extension (nominatedPharmacy) | This is NOT used in EPS to indicate Pharmacy, use `MedicationRequest.dispenseRequest.performer` instead |
| identifier (nhsNumber) |NHS Number must have been sucessfully traced |
| name | Usual name |
| gender | Administrative Gender  |
| birthDate | Date of birth  |
| *deceased[x]* | Deceased patients should not be used with this service.  |
| address |Usual address. The patients address that would be printed on a FP10 |
| managingOrganization | Patients GP Surgery |
| *telecom* | Not required  |


<br>


<div class="tab">
  <button class="tablinks" onclick="openTab(event, 'Differential')">Differential</button>
  <button class="tablinks active" onclick="openTab(event, 'Hybrid')">Hybrid</button>
  <button class="tablinks" onclick="openTab(event, 'Snapshot')">Snapshot</button>
  <button class="tablinks" onclick="openTab(event, 'Detailed Description')">Detailed Description</button>
  <button class="tablinks" onclick="openTab(event, 'Examples')">Examples</button>
</div>
<div id="Differential" class="tabcontent">
  <h3>Differential</h3>
  {{tree: DM-Patient, diff}}
</div>
<div id="Hybrid" class="tabcontent" style="display:block">
  <h3>Hybrid</h3>
  {{tree: DM-Patient, hybrid}}
</div>
<div id="Snapshot" class="tabcontent">
  <h3>Snapshot</h3>
  {{tree: DM-Patient, snapshot}}
</div>
<div id="Detailed Description" class="tabcontent">
  <h3>Detailed Description</h3>
  {{dict:DM-Patient}}
</div>
<div id="Examples" class="tabcontent">
  <h3>Examples</h3>
  {{pagelink: Patient}} <br>
</div>
