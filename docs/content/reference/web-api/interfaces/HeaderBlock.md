[@slack/web-api](../index.md) / HeaderBlock

# Interface: HeaderBlock

Defined in: node\_modules/@slack/types/dist/block-kit/blocks.d.ts:104

## Description

Displays a larger-sized text block. A `header` is a plain-text block that displays in a larger, bold
font. Use it to delineate between different groups of content in your app's surfaces.

## See

[Header block reference](https://api.slack.com/reference/block-kit/blocks#header).

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

### text

```ts
text: PlainTextElement;
```

Defined in: node\_modules/@slack/types/dist/block-kit/blocks.d.ts:113

#### Description

The text for the block, in the form of a [PlainTextElement](PlainTextElement.md).
Maximum length for the text in this field is 150 characters.

***

### type

```ts
type: "header";
```

Defined in: node\_modules/@slack/types/dist/block-kit/blocks.d.ts:108

#### Description

The type of block. For a header block, `type` is always `header`.

#### Overrides

[`Block`](Block.md).[`type`](Block.md#type)
