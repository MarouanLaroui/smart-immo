import { Kafka } from 'kafkajs';

const kafka = new Kafka({
    clientId: '2',
    brokers: ['127.0.0.1:9092'], // TODO: use env var
});

export default kafka;
