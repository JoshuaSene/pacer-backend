import { 
  Body, 
  Controller, 
  Delete, 
  Get, 
  Param, 
  Patch, 
  Post 
} from "@nestjs/common";

import { UserService } from "./user.service";
import { User } from "./entities/user.entity";
import { CreateUserDto } from "./dto/create-user.dto";
import { UpdateUserDto } from "./dto/update-user.dto";
import { UserApprovalDto } from './dto/user-approval-dto';

@Controller('user')
export class UserController {
  
  constructor(private readonly userService: UserService) {}

  @Post()
  create(@Body() createUserDto: CreateUserDto): Promise<User> {   
    return this.userService.create(createUserDto);
  }

  @Post('approve')
  approve(@Body() approvals: UserApprovalDto[]) {
    return this.userService.approve(approvals);
  }

  @Post('wipe-data/:id')
  wipeData(
    @Param('id') id: string): Promise<User> {
    return this.userService.wipeData(id);
  }

  @Get()
  findAll(): Promise<User[]> {
    return this.userService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<User> {
    return this.userService.findOne(id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string, 
    @Body() updateUserDto: UpdateUserDto): Promise<User> {
    return this.userService.update(id, updateUserDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<String> {
    return this.userService.remove(id);
  }
}