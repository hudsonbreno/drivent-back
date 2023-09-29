import { Response } from 'express';
import httpStatus from 'http-status';
import { AuthenticatedRequest } from '@/middlewares';
import { HotelService } from '@/services';

export async function getHotelsByHotelId(req: AuthenticatedRequest, res: Response) {
  const Hotel = await HotelService.getHotelByHotelId();
  res.status(httpStatus.OK).send(Hotel);
}

export async function getHotelByHotelId(req: AuthenticatedRequest, res: Response) {
  const payment = await HotelSer.getPaymentByTicketId(userId, ticketId);
  return res.status(httpStatus.OK).send(payment);
}
