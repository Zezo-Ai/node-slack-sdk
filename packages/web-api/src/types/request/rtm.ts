import type { OptionalArgument } from '../helpers';
import type { LocaleAware, TokenOverridable } from './common';

// https://docs.slack.dev/reference/methods/rtm.connect
export type RTMConnectArguments = OptionalArgument<
  TokenOverridable & {
    /**
     * @description Batch presence deliveries via subscription. Enabling changes the shape of `presence_change` events.
     * @see {@link https://docs.slack.dev/apis/web-api/user-presence-and-status#batching batch presence}.
     */
    batch_presence_aware?: boolean;
    /**
     * @description Only deliver presence events when requested by subscription.
     * @see {@link Only deliver presence events when requested by subscription. presence subscriptions}.
     */
    presence_sub?: boolean;
  }
>;
// https://docs.slack.dev/reference/methods/rtm.start
export type RTMStartArguments = OptionalArgument<
  RTMConnectArguments &
    LocaleAware & {
      /** @description Returns MPIMs to the client in the API response. */
      mpim_aware?: boolean;
      /**
       * @description Exclude latest timestamps for channels, groups, mpims, and ims.
       * Automatically sets `no_unreads` to `true`.
       */
      no_latest?: boolean;
      /** @description Skip unread counts for each channel (improves performance). */
      no_unreads?: boolean;
      /** @description Return timestamp only for latest message object of each channel (improves performance). */
      simple_latest?: boolean;
    }
>;
