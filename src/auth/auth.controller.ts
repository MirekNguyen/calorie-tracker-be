import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) { }

  @Post('sign-in')
  singIn(
    @Body() {username, password},
  ) {
    return this.authService.signIn(username, password);
  }
}
