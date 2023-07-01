import https from "node:https";
import { assert } from "../../../../test_util/std/testing/asserts.ts";
import { EventEmitter } from "node:events";

declare interface FakeSocket {
  authorized: boolean;
}

class FakeSocket extends EventEmitter {}

let _fakedSocket = new FakeSocket();

_fakedSocket.authorized = true;

// deno-lint-ignore no-explicit-any
const req = https.request("https://localhost:4505", (res: any) => {
  let data = "";
  assert(res.socket);
  // Both assertions below are failing
  assert(Object.hasOwn(res.socket, "authorized"));
  // @ts-ignore socket is TLSSocket, and it has "authorized"
  assert(res.socket.authorized);
  // deno-lint-ignore no-explicit-any
  assert(res.statusCode === 200);
  res.on("data", (chunk: any) => {
    data += chunk;
  });
  res.on("end", () => {
    console.log(data);
  });
});
req.onSocket(_fakedSocket);
req.end();