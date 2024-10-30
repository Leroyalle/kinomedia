import { Resend } from 'resend';

/**
 * Отправляет email с помощью Resend
 * @param to - кому отправлять
 * @param subject - тема письма
 * @param template - JSX-шаблон письма
 * @returns ответ от Resend
 */

export const sendEmail = async (to: string, subject: string, template: React.ReactNode) => {
  const resend = new Resend(process.env.RESEND_API_KEY);
  const { data, error } = await resend.emails.send({
    from: 'onboarding@resend.dev',
    to,
    subject,
    react: template,
  });

  if (error) {
    throw error;
  }

  return data;
};
