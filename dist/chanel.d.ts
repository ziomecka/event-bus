export declare type Subscriber = (event: any) => void;
export declare type EventId = string;
export declare type EventIds = EventId[];
export declare class Channel<E extends EventIds = []> {
  private events;
  constructor(eventsIds?: EventIds);
  get eventsIds(): IterableIterator<E[number]>;
  addEvent: (eventId: EventId) => void;
  subscribe: (
    eventId: EventId,
    subscriber: Subscriber,
  ) => (() => void) | undefined;
  private findSubscriberIndex;
  private findEvent;
  unsubscribe: (subscriber: Subscriber, eventId: EventId) => void;
  emit: (eventId: EventId, event?: any) => void;
}
