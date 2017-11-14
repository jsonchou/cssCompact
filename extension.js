"use strict";

// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
var os = require('os');
var vscode = require('vscode');
//var window = vscode.window;
var commands = vscode.commands;

//unit event
var _unitEvt = function() {
    var config = vscode.workspace.getConfiguration('cssCompact');
    var editor = vscode.editor || vscode.window.activeTextEditor;
    var doc = editor.document;
    if (!editor) {
        return;
    }

    if (!doc || doc.languageId !== 'css' || doc.languageId !== 'wxss') {
        return;
    }

    var start = new vscode.Position(0, 0);
    var end = new vscode.Position(doc.lineCount - 1, doc.lineAt(doc.lineCount - 1).text.length);
    var range = new vscode.Range(start, end);
    var content = doc.getText(range);

    var res = content

        .replace(/\ +/g, ' ') //remove multi empty
        .replace(/\}/g, ';}')
        .replace(/\;+/g, ';')

    .replace(/\{/g, ' { ') //"{" => " { "
        .replace(/\}/g, ' } ') //"}  " => "} "
        .replace(/\;/g, '; ') //";" => "; "
        .replace(/\ +\;/g, ';') //" ;" => ";"
        .replace(/\)\ +\{/g, ') {') //"){" => ") {"

    .replace(/\ +/g, ' ') //remove multi empty
        .replace(/\t+/g, '') //remove tab(U+0009)
        .replace(/\v+/g, '') //remove tab(U+000B)

    .replace(new RegExp('; ' + os.EOL, 'g'), ';')
        .replace(new RegExp('{ ' + os.EOL, 'g'), '{')
        .replace(new RegExp(os.EOL + '; }', 'g'), '; }')

    // fix animation style
    .replace(/\{\ 0%\ \{/g, '{ ' + os.EOL + ' 0% {')
        .replace(/\{\ from\ \{/g, '{ ' + os.EOL + ' from {')
        .replace(/\}\ to\ \{/g, '} ' + os.EOL + ' to {')
        .replace(new RegExp('; base64,', 'g'), ';base64,')

    // fix queryMedia style
    .replace(new RegExp('} }', 'g'), '} ' + os.EOL + ' }')
        .replace(/\)\ \{\ \./g, ')' + os.EOL + ' { ' + os.EOL + ' ' + '.')
        .replace(/\)\ \{\ \#/g, ')' + os.EOL + ' { ' + os.EOL + ' ' + '#')
        .replace(/\)\ \{\ \:/g, ')' + os.EOL + ' { ' + os.EOL + ' ' + ':')

    .replace(new RegExp('; } ; }', 'g'), '; }' + os.EOL + ' }')

    .replace(new RegExp(os.EOL + ' {', 'g'), os.EOL + ' {' + os.EOL)
        .replace(new RegExp(os.EOL + ' {' + os.EOL + ' ' + os.EOL + ' ', 'g'), '{' + os.EOL + ' ')

    .replace(/\;+/g, ';')

    if (res) {

        editor.edit(function(edit) {
            edit.replace(range, res);
        });

    }

    // Display a message box to the user
    //window.showInformationMessage('Hello World!');
}

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
function activate(context) {

    // Use the console to output diagnostic information (console.log) and errors (console.error)
    // This line of code will only be executed once when your extension is activated
    console.log('Congratulations, your extension "css-compact" is now active!');

    // The command has been defined in the package.json file
    // Now provide the implementation of the command with  registerCommand
    // The commandId parameter must match the command field in package.json

    context.subscriptions.push(commands.registerCommand('extension.cssCompact', function() {
        // The code you place here will be executed every time your command is executed
        _unitEvt();
    }));

}

// this method is called when your extension is deactivated
function deactivate() {}

exports.activate = activate;
exports.deactivate = deactivate;