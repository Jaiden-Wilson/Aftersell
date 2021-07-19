import {
  createHandler,
  Post,
  Body,
  ValidationPipe,
} from '@storyofams/next-api-decorators';
import axios from 'axios';
import { IsEmail } from 'class-validator';

export class NewsletterDTO {
  @IsEmail()
  email: string;
}

class Newsletter {
  private url = `${process.env.KLAVIYO_URL}?api_key=${process.env.KLAVIYO_KEY}`;

  @Post()
  async createNewsletter(@Body(ValidationPipe) body: NewsletterDTO) {
    const { statusText } = await axios.post(this.url, { profiles: [body] });
    return statusText;
  }
}

export default createHandler(Newsletter);
