import { PaymentData } from '@/@types/yookassa';
import axios from 'axios';

/**
 * Создает платеж в yookassa, возвращает ответ от сервиса.
 *
 * @param {number} details объект с информацией о платеже:
 *                          amount - общая стоимость,
 *                          description - описание платежа,
 *                          orderId - айди заказа.
 *
 * @returns объект с информацией о платеже, в котором находится ссылка на оплату.
 */

interface Props {
  amount: number;
  description: string;
  orderId: number;
}

export const createPayment = async (details: Props) => {
  const { data } = await axios.post<PaymentData>(
    'https://api.yookassa.ru/v3/payments',
    {
      amount: {
        value: details.amount,
        currency: 'RUB',
      },
      capture: true,
      description: details.description,
      metadata: {
        order_id: details.orderId,
      },
      confirmation: {
        type: 'redirect',
        return_url: process.env.YOOKASSA_CALLBACK_URL,
      },
    },
    {
      auth: {
        username: process.env.YOOKASSA_STORE_ID as string,
        password: process.env.YOOKASSA_API_KEY as string,
      },
      headers: {
        'Content-type': 'application/json',
        'Idempotence-Key': Math.random().toString(36).substring(7),
      },
    },
  );
  return data;
};
