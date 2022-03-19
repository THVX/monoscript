import fs from 'fs';
import * as cp from 'child_process';

var MonoScript;
(function (MonoScript) {
    MonoScript.yes = true;
    MonoScript.no = false;
    class Box {
        constructor(props) {
            this.version = props.version;
            this.name = props.name;
            this.description = props.description;
            this.author = props.author;
        }
        println(message, ...optionalParams) {
            console.log(message, optionalParams);
        }
        error(message, ...args) {
            console.error(new Error(message), args);
        }
        exec(command, callback) {
            cp.exec(command, callback);
        }
        emit(value) {
            return value;
        }
        open(path, flags, mode, callback) {
            fs.open(path, flags, mode, callback);
        }
    }
    MonoScript.Box = Box;
    class Folder {
        constructor(props) {
            this.state = 'Inactive';
            this.name = props.name;
            this.path = props.path;
        }
        create() {
            let box = new Box({});
            box.exec(`mkdir ${this.name}`);
        }
        PSCreate() {
            let box = new Box({});
            box.exec(`New-Item -Path ${this.path} -ItemType directory`);
        }
    }
    MonoScript.Folder = Folder;
    class File {
        constructor(props) {
            this.state = 'Inactive';
            this.path = props.path;
            this.type = props.type;
        }
        PSCreate() {
            let box = new Box({});
            box.exec(`New-Item -Path ${this.path} -ItemType ${this.type}`);
            this.state = 'Active';
        }
    }
    MonoScript.File = File;
    class WBox {
        constructor(props) {
            this.version = props.version;
            this.name = props.name;
            this.description = props.description;
            this.author = props.author;
        }
        notify(message) {
            alert(message);
        }
        prompt(message, _default) {
            prompt(message, _default);
        }
        write(message) {
            document.write(message);
        }
        writeln(message) {
            document.writeln(message);
        }
        select(element) {
            $(element);
        }
    }
    MonoScript.WBox = WBox;
    class Window {
        constructor(props) {
            this.url = props.url;
            this.target = props.target;
            this.features = props.features;
        }
        display() {
            window.open(this.url, this.target, this.features);
        }
    }
    MonoScript.Window = Window;
})(MonoScript || (MonoScript = {}));

export default MonoScript;
export { MonoScript as $ };