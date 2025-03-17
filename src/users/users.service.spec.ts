import { Test, TestingModule } from '@nestjs/testing';
import { UsersService } from './users.service';

describe('UsersService', () => {
  let service: UsersService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UsersService],
    }).compile();

    service = module.get<UsersService>(UsersService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
  it('should add user', () => {
    const user = {
      username: 'Test',
      email: 'test@test.com',
      password: 'testpassword',
    };
    const result = service.createUser(user);
    expect(result).toBe(user);
  });
});
