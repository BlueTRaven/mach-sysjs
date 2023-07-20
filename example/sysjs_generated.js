// Generated by `zig build`; DO NOT EDIT.
const wasmMemoryBuf = undefined;
function wasmGetMemory() {
    if (wasmMemoryBuf === undefined || wasmMemoryBuf !== wasm.memory.buffer) {
        wasmMemoryBuf = new Uint8Array(wasm.memory.buffer);
    }
    return wasmMemoryBuf;
}

function wasmGetSlice(ptr, len) {
    return wasmGetMemory().slice(ptr, ptr + len);
}

let wasmObjects = [];
function wasmWrapObject(obj) {
    return wasmObjects.push(obj) - 1;
}

function wasmGetObject(id) {
    return wasmObjects[id];
}

/* Gen */
export function sysjs_console_log(string, string_len) {
    const l0 = wasmGetSlice(string, string_len);
    return console.log(l0);
}
export function sysjs_console_log2(string, string_len, v1, v1_len) {
    const l0 = wasmGetSlice(string, string_len);
    const l1 = wasmGetSlice(v1, v1_len);
    return console.log2(l0, l1);
}
export function sysjs_TextDecoder_new() {
    return wasmWrapObject(new TextDecoder());
}
export function sysjs_TextDecoder_decode(td, str, str_len) {
    const l0 = wasmGetObject(td);
    const l1 = wasmGetSlice(str, str_len);
    return wasmWrapObject(l0.decode(l1));
}
export function sysjs_String_new(buf, buf_len) {
    const l0 = wasmGetSlice(buf, buf_len);
    return wasmWrapObject(new String(l0));
}
export function sysjs_String_charAt(string, index) {
    const l0 = wasmGetObject(string);
    const l1 = index;
    return l0.charAt(l1);
}
