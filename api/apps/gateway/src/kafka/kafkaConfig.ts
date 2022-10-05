import { Kafka } from 'kafkajs';

const kafka = new Kafka({
    clientId: '2',
    brokers: ['localhost:9092'], // TODO: use env var
});

const producer = kafka.producer();

async function kafkaTest() {
    await producer.connect();
    await producer.send({
        topic: 'test-topic',
        messages: [{ value: 'Ruby the cat' }],
    });
    await producer.disconnect();
}

export default kafkaTest;
