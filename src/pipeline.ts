import { Channel, EventIds } from './channel';

type Publisher = string;

const eventsIds = ['before-delete'] as const;

export class Pipeline {
  private channels = new Map<Publisher, Channel<EventIds>>();

  public addChannel = (
    publisher: Publisher,
    ...channelArgs: ConstructorParameters<typeof Channel>
  ) => {
    const [ids = [], ...restArgs] = channelArgs;

    let channel = this.channels.get(publisher);

    if (!channel) {
      channel = new Channel<EventIds>([...ids, ...eventsIds], ...restArgs);

      this.channels.set(publisher, channel);
    }

    return {
      ...channel,
      removeChannel: () => this.removeChannel(publisher),
    };
  };

  public getChannel = (channel: Publisher) => this.channels.get(channel);

  public removeChannel (publisher: Publisher) {
    const channel = this.channels.get(publisher);

    channel?.emit('before-delete');

    return this.channels.delete(publisher);
  }
}
