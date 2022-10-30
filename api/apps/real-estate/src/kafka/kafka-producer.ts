import { Producer } from 'kafkajs';
import kafka from './kafka-client';

let kafkaProducer: Producer = kafka.producer();

const connectKafkaProducer = async () => {
  console.log('Producer connection to Kafka..');
  await kafkaProducer.connect();
  console.log('Consumer connected !');
};

const getKafkaProducer = () => {
  return kafkaProducer;
};

//await producer.disconnect();

export { connectKafkaProducer, getKafkaProducer };
