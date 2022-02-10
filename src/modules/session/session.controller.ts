import { Controller, Get, Post, Body, UseGuards, Delete, Param, Put, Req } from '@nestjs/common';
import { ApiTags, ApiBody, ApiOperation, ApiBearerAuth } from '@nestjs/swagger';

import { SessionService } from './session.service';
import { CreateSessionDto } from './dto/create-session.dto';
import { UpdateSessionDto } from './dto/update-session.dto';
import { Session } from './session.model';


@ApiTags('Session')
@Controller('api')
export class SessionController {
  constructor(private readonly sessionService: SessionService) {}

  @ApiOperation({ summary: 'createSession' })
  @Post('/session')
  async addNewSession(@Body() session: CreateSessionDto) {
    return this.sessionService.createSession(session);
  }
  
	
  @ApiOperation({ summary: 'getListSession' })
  @Get('/session')
  async getSession() {
    return this.sessionService.getsessions();
  }

	
  @ApiOperation({ summary: 'getSessionById' })
  @Get('/session/:sessionId')
  getSessionById(@Param('sessionId') sessionId: string): Promise<Session> {
    return this.sessionService.getSessionById(sessionId);
  }
 

  @ApiOperation({ summary: 'updateSession' })
  @Put('/session/:sessionId')
  async updateSession(
    @Param('sessionId') sessionId: string,
    @Body() session: Session): Promise<Session> {
    return await this.sessionService.updateSession(sessionId, session);
  }


 

  @ApiOperation({ summary: 'deleteSession' })
  @Delete('/session/:sessionId')
  async deleteSession(@Param('sessionId') sessionId: string) {
    return this.sessionService.deleteSession(sessionId);
  }
}
