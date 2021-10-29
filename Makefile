install:
	cd validation && npm install
	cd validation && npm i ts-node

test:
	cd validation && npm test

configure-validation:
	cd validation && ts-node src/configurevalidator.ts

run-validator:
	cd validation-service-fhir-r4  && nohup mvn spring-boot:run &

## Install
install-validator:
	make -C validation-service-fhir-r4 install

build-validator:
	make -C validation-service-fhir-r4 build

build-latest-validator:
	make -C validation-service-fhir-r4 build-latest

run-validator:
	make -C validation-service-fhir-r4 run