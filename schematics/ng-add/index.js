"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const schematics_1 = require("@angular-devkit/schematics");
const tasks_1 = require("@angular-devkit/schematics/tasks");
const schematics_utilities_1 = require("schematics-utilities");
function addPackageJsonDependencies() {
    return (host, context) => {
        const dependencies = [
            { type: schematics_utilities_1.NodeDependencyType.Default, version: '~6.1.1', name: '@angular/elements' },
            { type: schematics_utilities_1.NodeDependencyType.Default, version: '~1.1.0', name: '@webcomponents/custom-elements' },
        ];
        dependencies.forEach((dependency) => {
            schematics_utilities_1.addPackageJsonDependency(host, dependency);
            context.logger.log('info', `✅️ Added "${dependency.name}" into ${dependency.type}`);
        });
        return host;
    };
}
function installPackageJsonDependencies() {
    return (host, context) => {
        context.addTask(new tasks_1.NodePackageInstallTask());
        context.logger.log('info', `🔍 Installing packages...`);
        const author = `
                                    ''                             
                                      '..-''                            
                                    '.----.'                            
                                  '------..                            
                                  '.--------''                          
                                  '----------..                         
                                  .-------------..''                    
                                  '------------------..'                
                                  ''--------------------..'             
                                    ..---------------------.'           
                                      '.---------------------''         
                                        '..-------------------.      
                                          ''://::-------------.'        
                                        '.:/osssso+/:---------.'        
                                      '-:////++oossso/:-------.    
                                    .-///////////+oosso:-----.'         
                                  '-///////////////+oss/:--..           
                                '-//////////////////oo/-.'             
                                .:+//////////////////:.'               
                                '-//////////////+/:-''                 
                                  '-////////////:-''                    
                                    --://///::-''                       
                                      '.....''           
   
                                                      
                ad88888ba    88        88  88      a8P  88        88  
                d8"     "8b  88        88  88    '88'   88        88  
                Y8'          88        88  88  '88"     88        88  
                'Y8aaaaa'    88        88  88'd88'      88        88  
                  '"""""8b'  88        88  8888"88'     88        88  
                        '8b  88        88  88P   Y8b    88        88  
                Y8a     a8P  Y8a.    .a8P  88     "88'  Y8a.    .a8P  
                  "Y88888P"    "Y8888Y"    88       Y8b   "Y8888Y"'                          
                   `;
        context.logger.log('info', author);
        return host;
    };
}
function addModuleToImports(options) {
    return (host, context) => {
        const workspace = schematics_utilities_1.getWorkspace(host);
        const project = schematics_utilities_1.getProjectFromWorkspace(workspace, 
        // Takes the first project in case it's not provided by CLI
        options.project ? options.project : Object.keys(workspace['projects'])[0]);
        const moduleName = 'SukuWebcomponentsModule';
        schematics_utilities_1.addModuleImportToRootModule(host, moduleName, 'suku-webcomponents', project);
        context.logger.log('info', `✅️ "${moduleName}" is imported`);
        return host;
    };
}
function default_1(options) {
    return schematics_1.chain([
        options && options.skipPackageJson ? schematics_1.noop() : addPackageJsonDependencies(),
        options && options.skipPackageJson ? schematics_1.noop() : installPackageJsonDependencies(),
        options && options.skipModuleImport ? schematics_1.noop() : addModuleToImports(options)
    ]);
}
exports.default = default_1;
