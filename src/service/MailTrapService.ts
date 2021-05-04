import nodemailer from 'nodemailer';
import MailTrap from '../config/MailTrapConfig';

export default nodemailer.createTransport(MailTrap);
