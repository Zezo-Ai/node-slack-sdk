[@slack/types](../index.md) / RichTextPreformatted

# Interface: RichTextPreformatted

Defined in: [block-kit/block-elements.ts:939](https://github.com/slackapi/node-slack-sdk/blob/main/packages/types/src/block-kit/block-elements.ts#L939)

## Description

A block of preformatted text within a rich text field.

## Extends

- [`RichTextBorderable`](RichTextBorderable.md)

## Properties

### border?

```ts
optional border: 0 | 1;
```

Defined in: [block-kit/extensions.ts:76](https://github.com/slackapi/node-slack-sdk/blob/main/packages/types/src/block-kit/extensions.ts#L76)

#### Description

Whether to render a quote-block-like border on the inline side of the list. `0` renders no border
while `1` renders a border.

#### Inherited from

[`RichTextBorderable`](RichTextBorderable.md).[`border`](RichTextBorderable.md#border)

***

### elements

```ts
elements: (RichTextLink | RichTextText)[];
```

Defined in: [block-kit/block-elements.ts:947](https://github.com/slackapi/node-slack-sdk/blob/main/packages/types/src/block-kit/block-elements.ts#L947)

#### Description

An array of either [RichTextLink](RichTextLink.md) or [RichTextText](RichTextText.md) comprising the preformatted text.

***

### type

```ts
type: "rich_text_preformatted";
```

Defined in: [block-kit/block-elements.ts:943](https://github.com/slackapi/node-slack-sdk/blob/main/packages/types/src/block-kit/block-elements.ts#L943)

#### Description

The type of element. In this case `type` is always `rich_text_preformatted`.
