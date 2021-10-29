import * as fs from "fs";
import path from "path";
import {getJson, resourceChecks} from "./common.js";
import { tar } from 'zip-a-folder';


var jsonminify = require("jsonminify");
const fileNamw = '../package.json';

class TarMe {
    static async main(src, destination) {
        await tar(src, destination);
    }
}

if (fs.existsSync(fileNamw)) {
    const file = fs.readFileSync(fileNamw, 'utf-8');
    const pkg = JSON.parse(file);
    pkg.version = '0.0.0-prerelease';
    var manifest = [
        {
            "packageName": pkg.name,
            "version": pkg.version
        }
    ];
    if (pkg.dependencies != undefined) {
        for( let key in pkg.dependencies) {
            if (key != 'hl7.fhir.r4.core') {
                const entry = {
                    "packageName": key,
                    "version": pkg.dependencies[key]
                };
                console.log('Using package '+ key + '-' + pkg.dependencies[key])
                manifest.push(entry);
            }
        }
        fs.mkdir(path.join(__dirname, '../package'), (err) => {
            if (err) {
                //return console.error(err);
            }
        });
        const destinationPath = '../../validation-service-fhir-r4/src/main/resources';
        fs.mkdirSync(path.join(__dirname,destinationPath ),{ recursive: true });
        fs.writeFile(path.join(__dirname,destinationPath + '/manifest.json'), JSON.stringify(manifest),  function(err) {
            if (err) {
                return console.error(err);
            }
        });
        fs.writeFile('package/package.json', JSON.stringify(pkg),  function(err) {
            if (err) {
                return console.error(err);
            }
        });
        copyFolder('../StructureDefinition');

        copyFolder('../CapabilityStatement');

        copyFolder('../CodeSystem');

        copyFolder('../MessageDefinition');

        copyFolder('../ValueSet');

        copyFolder('../ConceptMap');

        copyFolder('../SearchParameter');

        copyFolder('../OperationDefinition');

        copyFolder('../StructureDefinition');
        console.log('Creating temporary package ' + pkg.name +'-' + pkg.version);
        TarMe.main(path.join(__dirname, '../package'),path.join(__dirname,destinationPath + '/' + pkg.name +'-' + pkg.version + '.tgz' ));

    }
}



function copyFolder(dir) {

    console.log('Processing '+dir);
    if (fs.existsSync(dir)) {

        const list = fs.readdirSync(dir);
        list.forEach(function (file) {

            let ext: string = path.extname(file)
            let root: string = file.substring(0, file.length - ext.length)
            const destination = 'package/' + root + '.json';
            file = dir + "/" + file;
            const resource: any = fs.readFileSync(dir + "/" + file, 'utf8');
            const json = getJson(file,resource);
            fs.writeFile(destination, jsonminify(json),  function(err) {
                if (err) {
                    return console.error(err);
                }
            });
        })
    } else {
        console.log('INFO Folder not found  '+dir);
    }
}
