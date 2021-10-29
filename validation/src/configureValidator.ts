import * as fs from "fs";
import path from "path";
import {getJson, resourceChecks} from "./common.js";

const fileNamw = '../package.json';


if (fs.existsSync(fileNamw)) {
    const file = fs.readFileSync(fileNamw, 'utf-8');
    const pkg = JSON.parse(file);
    var manifest = [
        {
            "packageName": pkg.name,
            "version": '0.0.0-prerelease'
        }
    ];
    if (pkg.dependencies != undefined) {
        for( let key in pkg.dependencies) {
            if (key != 'hl7.fhir.r4.core') {
                const entry = {
                    "packageName": key,
                    "version": pkg.dependencies[key]
                };
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
        fs.writeFile('package/package.json', pkg,  function(err) {
            if (err) {
                return console.error(err);
            }
        });
        copyFolder('../StructureDefinition');
    }
}

function copyFolder(dir) {

    if (fs.existsSync(dir)) {
        const list = fs.readdirSync(dir);
        list.forEach(function (file) {

            let ext: string = path.extname(file)
            let root: string = file.substring(0, file.length - ext.length)
            const destination = 'package/' + root + '.json';
            file = dir + "/" + file;
            const resource: any = fs.readFileSync(dir + "/" + file, 'utf8');
            const json = getJson(file,resource);
            fs.writeFile(destination, json,  function(err) {
                if (err) {
                    return console.error(err);
                }
            });
        })
    }
}
