import { Request, Response } from 'express';
import MailQueue from '../queue/MailQueue';

export default async function emailSend(req: Request, res: Response): Promise<Response> {
  const { to, from, subject, html } = req.body;

  MailQueue.add({ to, from, subject, html });

  return res.send('Email enviado');
}
