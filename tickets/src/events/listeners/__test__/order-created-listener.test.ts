import mongoose from 'mongoose';
import { OrderCreatedListener } from '../order-created-listener';
import { OrderCreatedEvent, OrderStatus, Subjects } from '@wattickets/common';

import { Ticket } from '../../../models/tickets';
import { natsWrapper } from '../../../nats-wrapper';

const setup = async () => {
  //create an instance of the listner
  const listener = new OrderCreatedListener(natsWrapper.client);

  //create and save a ticket
  const ticket = Ticket.build({
    title: 'concert',
    price: 90,
    userId: 'fdasfdf',
  });
  await ticket.save();

  //create the fake data eventp
  const data: OrderCreatedEvent['data'] = {
    id: new mongoose.Types.ObjectId().toHexString(),
    version: 0,
    status: OrderStatus.Created,
    userId: 'fdafdfdf',
    expiresAt: 'fdafdff',
    ticket: {
      id: ticket.id,
      price: ticket.price,
    },
  };

  //@ts-ignore
  const msg: Message = {
    ack: jest.fn(),
  };

  return { listener, ticket, data, msg };
};

it('sets the userId of the ticket', async () => {
  const { listener, ticket, data, msg } = await setup();

  await listener.onMessage(data, msg);

  const updatedTicket = await Ticket.findById(ticket.id);
  expect(updatedTicket!.orderId).toEqual(data.id);
});

it('acks the message', async () => {
  const { listener, ticket, data, msg } = await setup();
  await listener.onMessage(data, msg);
  expect(msg.ack).toHaveBeenCalled();
});

it('publishes a ticket updated event', async () => {
  const { listener, data, msg, ticket } = await setup();

  await listener.onMessage(data, msg);

  expect(natsWrapper.client.publish).toHaveBeenCalled();

  const ticketUpdatedData = JSON.parse(
    (natsWrapper.client.publish as jest.Mock).mock.calls[0][1]
  );

  expect(data.id).toEqual(ticketUpdatedData.orderId);
});
