export type Subscriber = (event: any) => void;

export type EventId = string;
export type EventIds = EventId[];

type Events<E extends EventIds = []> = Map<E[number], Subscribers>;
type Subscribers = Subscriber[];

export class Channel<E extends EventIds = []> {
  private events: Events<E>;
  constructor (eventsIds: EventIds = []) {
    this.events = new Map();
    eventsIds?.forEach((eventId) => this.events.set(eventId, []));
  }

  get eventsIds () {
    return this.events.keys();
  }

  public addEvent = (eventId: EventId) => {
    if (this.events.has(eventId)) {
      return;
    }

    this.events.set(eventId, []);
  };

  public subscribe = (eventId: EventId, subscriber: Subscriber) => {
    const event = this.events.get(eventId);

    if (!event) {
      return;
    }

    event.push(subscriber);

    return () => this.unsubscribe(subscriber, eventId);
  };

  private findSubscriberIndex = (
    subscriber: Subscriber,
    subscribers?: Subscribers,
  ) => subscribers?.findIndex(subscriber);

  private findEvent = (eventId: EventId) => this.events.get(eventId);

  public unsubscribe = (subscriber: Subscriber, eventId: EventId) => {
    const event = this.findEvent(eventId);

    const index = this.findSubscriberIndex(subscriber, event);

    if (index !== undefined) {
      event?.splice(index, 1);
    }
  };

  public emit = (eventId: EventId, event?: any) => {
    this.findEvent(eventId)?.forEach((subscriber) => subscriber(event));
  };
}
