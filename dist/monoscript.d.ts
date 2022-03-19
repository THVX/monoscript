import fs from 'fs';
import * as cp from 'child_process';

declare module MonoScript {
    type String = string;
    type int = number;
    type Boolean = boolean;
    type fn = void;
    type val = String | int | Boolean | any | nothing | undefined;
    type ExecutionError = cp.ExecException;
    type nothing = null;
    type Path = fs.PathLike;
    type OpeningMode = fs.OpenMode;
    type Mode = fs.Mode;
    type Errno = NodeJS.ErrnoException;
    type address = String | URL;
    const yes = true;
    const no = false;
    class Box {
        version: int;
        name: String;
        description: String;
        author: String;
        constructor(props: any);
        println(message?: any, ...optionalParams: any[]): fn;
        error(message?: any, ...args: any[]): fn;
        exec(command: String, callback?: (error: ExecutionError | nothing, stdout: String, stderr: String) => fn): fn;
        emit(value: val): fn;
        open(path: Path, flags: OpeningMode, mode: Mode, callback: (err: Errno, fd: int) => fn): fn;
    }
    class Folder {
        state: String;
        name?: String;
        path?: String;
        constructor(props: any);
        create(): fn;
        PSCreate(): fn;
    }
    class File {
        state: String;
        path: String;
        type: String;
        constructor(props: any);
        PSCreate(): void;
    }
    class WBox {
        version: int;
        name: String;
        description: String;
        author: String;
        constructor(props: any);
        notify(message?: any): fn;
        prompt(message?: any, _default?: any): fn;
        write(message?: any): fn;
        writeln(message?: any): fn;
        select(element: HTMLElement): fn;
    }
    class Window {
        url: address;
        target: String;
        features: String;
        constructor(props: any);
        display(): fn;
    }
}
export default MonoScript;
export { MonoScript as $ };
