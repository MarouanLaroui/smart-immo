import axios from 'axios';
import { Request, Response } from 'express';
import { RealEstateAdDTO } from '../types/realEstateAd.type';

const importRealEstateFromBienIci = async (req: Request, res: Response) => {
  const url = req.body.url;

  const metadata = url.split('/');

  if (!metadata || metadata.length < 7) {
    return res.status(400).send('URL split length is < 7');
  }

  const id = metadata[6].split('?')[0]; // id is always here
  const bienIciApiUri = process.env.BIEN_ICI_API_URI_FIND_ONE;

  if (!bienIciApiUri) {
    return res.status(500);
  }

  const realEstateAd = await axios.get(
    `${bienIciApiUri}?onlyRealEstateAd=${id}`
  );

  if (realEstateAd.status !== 200) {
    return res.status(500).send("There was an error on BienIci's side.");
  }

  const data = realEstateAd.data;

  const formatedRealEstateAd: RealEstateAdDTO = {
    url: url,
    relativeId: id,
    title: data.title,
    description: data.description,
    city: data.city,
    postalCode: String(data.postalCode),
    price: data.price,
    surfaceArea: data.surfaceArea,
    roomsQuantity: data.roomsQuantity,
  };

  res.status(200).send({ formatedRealEstateAd });
};

export default importRealEstateFromBienIci;
