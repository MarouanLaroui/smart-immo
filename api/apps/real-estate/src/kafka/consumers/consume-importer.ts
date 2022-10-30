import { Consumer } from 'kafkajs';
import {
  createRealEstate,
  createRealEstateFromImport,
} from '~~/src/controllers/real-estate.controller';
import { KafkaKeys } from '../types/kafka-keys';
import { KafkaTopics } from '../types/kafka-topics';

const consumeImporter = async (kafkaConsumer: Consumer) => {
  return kafkaConsumer.subscribe({
    topic: KafkaTopics.IMPORTER_TOPIC,
    fromBeginning: true,
  });
};

const handleImporterTopic = (messages: any) => {
  messages.forEach((message: any) => {
    if (message.key == KafkaKeys.FORMATED_IMPORTED_REAL_ESTATE) {
      createRealEstateFromImport(message.value);
    }
  });
};

export { consumeImporter, handleImporterTopic };
