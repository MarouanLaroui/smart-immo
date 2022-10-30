import { Consumer, Kafka } from 'kafkajs';
import { CpuInfo } from 'os';
import kafka from '../kafka-client';
import { KafkaTopics } from '../types/kafka-topics';
import { handleImporterTopic } from './consume-importer';

const kafkaConsumer: Consumer = kafka.consumer({ groupId: 'test-group' });

export default async function connectKafkaConsumerAndSubscribe() {
  console.log('Consumer connection to Kafka..');
  await kafkaConsumer.connect();
  console.log('Consumer connected ! now subscribing..');

  /*Subscribe to partitions*/
  const partitionsToSubscribe = [KafkaTopics.USER_TOPIC];
  partitionsToSubscribe.map((partition: string) => {
    kafkaConsumer.subscribe({ topic: partition, fromBeginning: true });
  });

  await Promise.all(partitionsToSubscribe);

  console.log('Subscribed');
  await kafkaConsumer.run({
    eachMessage: async ({ topic, partition, message }) => {
      const receivedMessage = JSON.parse(message.toString());
      if (topic == KafkaTopics.IMPORTER_TOPIC) {
        handleImporterTopic(message);
        return;
      }
      console.log('message kafka :', message.value?.toString());
    },
  });
}
