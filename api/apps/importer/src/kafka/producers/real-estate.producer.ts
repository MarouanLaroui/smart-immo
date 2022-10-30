//FORMATED_IMPORTED_REAL_ESTATE;
// await producer.send({
//   topic: 'test-topic',
//   messages: [{ value: 'Ruby the cat' }],
// });
// await producer.send({
//   topic: 'test-topic',
//   messages: [{ value: 'Mongo the dog' }],
// });

import { RealEstateAdDTO } from '~~/src/types/realEstateAd.type';
import { getKafkaProducer } from '../kafka-producer';
import { KafkaKeys } from '../types/kafka-keys';
import { KafkaTopics } from '../types/kafka-topics';

const formatedRealEstateProducer = (realEstate: RealEstateAdDTO) => {
  const producer = getKafkaProducer();
  producer.send({
    topic: KafkaTopics.REAL_ESTATE_TOPIC,
    messages: [
      {
        key: KafkaKeys.FORMATED_IMPORTED_REAL_ESTATE,
        value: JSON.stringify(realEstate),
      },
    ],
  });
};

export { formatedRealEstateProducer };
