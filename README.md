# **planka-webhook-types**

TypeScript type definitions for Planka webhooks.

## Installation

```sh
npm i -D planka-webhook-types
```

## Example Usage

```ts
import { type Message } from "planka-webhook-types";

const requestBody = /* ... */;
const message = requestBody as Message;

// Use discriminated unions to narrow the type of the message

if (message.event === "taskCreate") {
    // `message` is now considered a TaskCreated event in this scope.
    // Enjoy using your editor's autocomplete! Everything is strongly-typed.
    const name = message.data.item.name;
}
```
