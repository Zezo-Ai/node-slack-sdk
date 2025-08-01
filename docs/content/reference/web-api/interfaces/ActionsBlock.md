[@slack/web-api](../index.md) / ActionsBlock

# Interface: ActionsBlock

Defined in: node\_modules/@slack/types/dist/block-kit/blocks.d.ts:36

## Description

Holds multiple interactive elements.

## See

[Actions block reference](https://api.slack.com/reference/block-kit/blocks#actions).

## Extends

- [`Block`](Block.md)

## Properties

### block\_id?

```ts
optional block_id: string;
```

Defined in: node\_modules/@slack/types/dist/block-kit/blocks.d.ts:15

#### Description

A string acting as a unique identifier for a block. If not specified, a `block_id` will be generated.
You can use this `block_id` when you receive an interaction payload to
[identify the source of the action](https://api.slack.com/interactivity/handling#payloads).
Maximum length for this field is 255 characters. `block_id` should be unique for each message and each iteration of
a message. If a message is updated, use a new `block_id`.

#### Inherited from

[`Block`](Block.md).[`block_id`](Block.md#block_id)

***

### elements

```ts
elements: ActionsBlockElement[];
```

Defined in: node\_modules/@slack/types/dist/block-kit/blocks.d.ts:45

#### Description

An array of InteractiveElements objects.
There is a maximum of 25 elements in each action block.

***

### type

```ts
type: "actions";
```

Defined in: node\_modules/@slack/types/dist/block-kit/blocks.d.ts:40

#### Description

The type of block. For an actions block, `type` is always `actions`.

#### Overrides

[`Block`](Block.md).[`type`](Block.md#type)
