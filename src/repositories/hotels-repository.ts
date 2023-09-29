import { prisma } from '@/config';

async function findHotelByHotelId(ticketId: number) {
  const result = await prisma.hotel.findFirst({
    where: { hotelId },
  });
  return result;
}

export const HotelsRepository = {
  findHotelByHotelId,
};
