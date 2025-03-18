import {
  BadRequestException,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { CreateUserDto, LoginDto } from '../dto/user.dto';
import { UsersService } from '../users/users.service';
import * as bcryptjs from 'bcryptjs';
import { UserRole } from '../schemas/user.schema';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private readonly usersService: UsersService,
    private readonly jwtService: JwtService,
  ) {}

  async register(createUserDto: CreateUserDto) {
    const { password, email, username } = createUserDto;
    const user = await this.usersService.findByEmail(email);
    if (user) {
      throw new BadRequestException('Email already exists');
    }
    const hashedPassword = await bcryptjs.hash(password, 10);
    await this.usersService.createUser({
      username,
      email,
      password: hashedPassword,
      role: UserRole.USER,
    });
    return {
      message: 'User created successfully',
    };
  }

  async login(loginDto: LoginDto) {
    const { password, email } = loginDto;
    const user = await this.usersService.findByEmail(email);
    if (!user) {
      throw new UnauthorizedException('Invalid email');
    }

    const isPasswordValid = await bcryptjs.compare(password, user.password);
    if (!isPasswordValid) {
      throw new UnauthorizedException('Invalid password');
    }

    const payload = {
      email: user.email,
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-member-access
      sub: (user as any)._id,
      role: user.role,
    };
    const token = this.jwtService.sign(payload);

    return {
      access_token: token,
      email: user.email,
      message: 'Login successful',
    };
  }
}
