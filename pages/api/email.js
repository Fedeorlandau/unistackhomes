/* eslint-disable no-restricted-syntax */
import fs from 'fs';
import path from 'path';

import { contentstackOptimizeListReader } from '@uniformdev/optimize-tracker-contentstack';
import * as Handlebars from 'handlebars';
import nodemailer from 'nodemailer';

import { getEntriesByContentType } from '../../lib/api';

export default async function handler(
  req,
  res,
) {
  const { intent, email } = JSON.parse(req.body);

  const marketingEntries = await getEntriesByContentType(true, 'marketing', ['components', 'components.unfrm_opt_p13n_list']);

  if (marketingEntries.length) {
    let personalizedComponent;
    const entry = marketingEntries[0];
    const variations = contentstackOptimizeListReader(entry.components[0].unfrm_opt_p13n_list);
    variations.forEach((variation) => {
      const { intents } = variation.unfrm_opt_intent_tag;

      if (intents) {
        for (const [key] of Object.entries(intents)) {
          if (intent === key) {
            personalizedComponent = variation;
          }
        }
      }
    });

    const data = {
      personalizedComponent,
      ...entry,

    }; // create reusable transporter object using the default SMTP transport
    const transporter = nodemailer.createTransport({
      host: process.env.EMAIL_HOST,
      port: process.env.EMAIL_PORT,
      auth: {
        user: process.env.EMAIL_USER, // generated ethereal user
        pass: process.env.EMAIL_PASSWORD, // generated ethereal password
      },
    });

    const filePath = path.join(__dirname, '_emails', 'marketing.handlebars');
    const fileContents = fs.readFileSync(filePath, 'utf8');

    const html = Handlebars.compile(fileContents);
    // execute the compiled template and print the output to the console

    // send mail with defined transport object
    await transporter.sendMail({
      from: '"Unistack Homes" <foo@example.com>', // sender address
      to: email, // list of receivers
      subject: data.title, // Subject line
      text: 'Hi, this is a Nodemailer test email ;) ',
      html: html(data),
    });

    return res.status(200).json({ name: 'intent' });
  }
  return res.status(404).json({ error: 'Not found' });
}
