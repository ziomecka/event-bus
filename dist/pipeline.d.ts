import { Channel, EventIds } from './channel';
declare type Publisher = string;
export declare class Pipeline {
  private channels;
  addChannel: (
    publisher: Publisher,
    eventsIds?: EventIds | undefined,
  ) => {
    removeChannel: () => boolean;
    addEvent: (eventId: string) => void;
    subscribe: (
      eventId: string,
      subscriber: import('./channel').Subscriber,
    ) => (() => void) | undefined;
    unsubscribe: (
      subscriber: import('./channel').Subscriber,
      eventId: string,
    ) => void;
    emit: (eventId: string, event?: any) => void;
  };
  getChannel: (channel: Publisher) => Channel<EventIds> | undefined;
  removeChannel(publisher: Publisher): boolean;
}
export {};
