import { HotelsRepository } from '@/repositories';

async function getHotelByHotelId(hotelId: number) {
  const payment = await HotelsRepository.findHotelByHotelId(hotelId);

  return payment;
}

export const HotelService = {
  getHotelByHotelId,
};
