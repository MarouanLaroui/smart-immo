import { Kafka } from 'kafkajs';
import kafka from './kafka-client';

export default async function consumeKafka() {
  const consumer = kafka.consumer({ groupId: 'test-group' });
  console.log('Consumer connection to Kafka..');
  await consumer.connect();
  console.log('Consumer connected ! now subscribing..');
  await consumer.subscribe({ topic: 'test-topic', fromBeginning: true });
  console.log('Subscribed');
  await consumer.run({
    eachMessage: async ({ topic, partition, message }) => {
      console.log('message kafka :', message.value?.toString());
    },
  });
}
