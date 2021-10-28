install:
	poetry install

lint:
	poetry run flake8 scripts/*.py --config .flake8
	shellcheck scripts/*.sh

check-licences:
	scripts/check_python_licenses.sh

clean-packages:
	rm src/main/resources/*.tgz

update-manifest:
	poetry run scripts/update_manifest.py

build:
	poetry run scripts/download_dependencies.py
	mvn clean package

build-latest: clean-packages update-manifest build

run:
	mvn spring-boot:run