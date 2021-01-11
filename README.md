# Event-bus

## Description

This is my first implementation of event bus in JS.
The project was created solely for educational purposes, therefore I did not focus on its configuration.

The project contains:

- the implementation of the _event-bus_ ('./src')
- an _example_ ('./example)

## Asumptions

The _event bus_ and the _example_ are bundled seperately:

- _src_ is bundled into './dist'
- _example_ is bundled into './example/assets'.

## Further work

- Add unit tests

- Channel may store historic events:

  - events have durability

  - When event is subscribed the durability of stored events is evaluated.
    If events are still valid - they are also emitted (how?), if not valid they are deleted

  - Durability of events may be evaluated at specific intervals

- How to deal with subscriber functions, that should be called only once.

  - Idea: pass 'once' function to channel

- Type the _channel_ class in such way that its _emit_ method accepts only _eventsIds_ const
