import * as fs from 'fs';
import * as cp from 'child_process';

module MonoScript {
    export type String = string;
    export type int = number;
    export type Boolean = boolean;
    export type fn = void;
    export type val = String | int | Boolean | any | nothing | undefined;
    export type ExecutionError = cp.ExecException;
    export type nothing = null;
    export type Path = fs.PathLike;
    export type OpeningMode  = fs.OpenMode;
    export type Mode = fs.Mode;
    export type Errno = NodeJS.ErrnoException;
    export type address = String | URL;
    export const yes  = true;
    export const no = false;
    export class Box {
        version: int;
        name: String;
        description: String;
        author: String;
        constructor(props: any) {
            this.version = props.version;
            this.name = props.name;
            this.description = props.description;
            this.author = props.author;
        }
        public println(message?: any, ...optionalParams: any[]): fn {
            console.log(message, optionalParams);
        }
        public error(message?: any, ...args: any[]): fn {
            console.error(new Error(message), args);
        }
        public exec(command: String, callback?: (error: ExecutionError | nothing, stdout: String, stderr: String) => fn): fn {
            cp.exec(command, callback);
        }
        public emit(value: val): fn {
            return value;
        }
        public open(path: Path, flags: OpeningMode, mode: Mode, callback: (err: NodeJS.ErrnoException, fd: int) => fn): fn {
            fs.open(path, flags, mode, callback);
        }
    }

    export class Folder {
        state: String = 'Inactive';
        name?: String;
        path?: String;
        constructor(props: any) {
            this.name = props.name;
            this.path = props.path;
        }
        public create(): fn {
            let box = new Box({});
            box.exec(`mkdir ${this.name}`);
        }
        public PSCreate(): fn {
            let box = new Box({});
            box.exec(`New-Item -Path ${this.path} -ItemType directory`);
        }
    }
    
    export class File {
        state: String = 'Inactive';
        path: String;
        type: String;
        constructor(props: any) {
            this.path = props.path;
            this.type = props.type;
        }
        public PSCreate() {
            let box = new Box({});
            box.exec(`New-Item -Path ${this.path} -ItemType ${this.type}`);
            this.state = 'Active'
        }
    }

    export class WBox {
        version: int;
        name: String;
        description: String;
        author: String;
        constructor(props: any) {
            this.version = props.version;
            this.name = props.name;
            this.description = props.description;
            this.author = props.author;
        }
        public notify(message?: any): fn {
            alert(message);
        }
        public prompt(message?: any, _default?: any): fn {
            prompt(message, _default);
        }
        public write(message?: any): fn {
            document.write(message)
        }
        public writeln(message?: any): fn {
            document.writeln(message);
        }
        public select(element: HTMLElement): fn {
            $(element);
        }
    }

    export class Window {
        url: address;
        target: String;
        features: String;
        constructor(props: any) {
            this.url = props.url;
            this.target = props.target;
            this.features = props.features;
        }
        public display(): fn {
            window.open(this.url, this.target, this.features);
        }
    }
}

export default MonoScript;
export { MonoScript as $ };