import kafka from './kafkaClient';

const producer = kafka.producer();

async function kafkaTest() {
    console.log('Producer connection to Kafka..');
    await producer.connect();
    console.log('Consumer connected !');
    await producer.send({
        topic: 'test-topic',
        messages: [{ value: 'Ruby the cat' }],
    });
    await producer.send({
        topic: 'test-topic',
        messages: [{ value: 'Mongo the dog' }],
    });
    await producer.disconnect();
}

export default kafkaTest;
