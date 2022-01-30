import { Ticket } from '../tickets';

it('implements optimistic concurrency control', async () => {
  //create an instance of a ticket
  const ticket = Ticket.build({
    title: 'concert',
    price: 5,
    userId: '123',
  });
  //save the ticket to the database
  await ticket.save();
  //fetch the ticket twice
  const firstInstance = await Ticket.findById(ticket.id);
  const secondeInstance = await Ticket.findById(ticket.id);
  //make two separate changes to the tickets we fetched
  firstInstance!.set({ price: 10 });
  secondeInstance!.set({ price: 15 });

  //save the first fetched ticket
  await firstInstance!.save();

  //save the second fetched ticket and expect error
  //becouse secondeInstance ticket version is 1
  //but when firstInstance is saved, ticket version is increased 2!
  try {
    await secondeInstance!.save();
  } catch (err) {
    return;
  }
  throw new Error('Should not reach this point');

  //save the second fetched ticket and expect an error
});

it('increments the version number an multiple saves', async () => {
  const ticket = Ticket.build({
    title: 'concert',
    price: 20,
    userId: '123',
  });
  await ticket.save();
  expect(ticket.version).toEqual(0);

  await ticket.save();
  expect(ticket.version).toEqual(1);
  await ticket.save();
  expect(ticket.version).toEqual(2);
});
