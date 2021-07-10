import {
  createHandler,
  Post,
  Body,
  HttpException,
  ValidationPipe,
} from '@storyofams/next-api-decorators';
import { IsNotEmpty, IsEmail } from 'class-validator';
import { Client } from 'postmark';

class ContactFormDto {
  @IsNotEmpty()
  public name: string;

  @IsNotEmpty()
  public url: string;

  @IsEmail()
  public email: string;

  @IsNotEmpty()
  public message: string;
}

const postmark = new Client(process.env.POSTMARK_API_TOKEN);

class Postmark {
  @Post()
  public async submitContactForm(
    @Body(ValidationPipe({ forbidUnknownValues: true }))
    body: ContactFormDto,
  ) {
    // Spam honeypot
    if (body['b_35cf2612bb33321a60e61d239_37c990920c']) {
      return {};
    }

    const { name, url, email, message } = body;
    const templateData = {
      name,
      email,
      url,
      message,
      currentYear: new Date().getFullYear(),
    };

    try {
      await postmark.sendEmailWithTemplate({
        From: 'ppf@storyofams.com',
        To: 'ppf@storyofams.com',
        TemplateAlias: 'contact-form',
        TemplateModel: templateData,
      });
      return { message: 'Your message has been sent!' };
    } catch (err) {
      throw new HttpException(500, 'Failed to send email.');
    }
  }
}

export default createHandler(Postmark);
