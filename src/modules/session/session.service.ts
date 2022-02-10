import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateSessionDto } from './dto/create-session.dto';
import { UpdateSessionDto } from './dto/update-session.dto';
import { Session } from './session.model';

@Injectable()
export class SessionService {
  constructor(@InjectModel('Session') private sessionModel: Model<Session>) { }

  async createSession(createSessionDto: CreateSessionDto) {
    const newDoc = new this.sessionModel(createSessionDto);
    await newDoc.save();
    return newDoc.toObject({ versionKey: false });
  }

  async getsessions(): Promise<Session[]> {
    return await this.sessionModel.find();
  };

  async getSessionById(sessionId: string) {
    return await this.sessionModel.findById(sessionId);
  }

  async updateSession(sessionId: string, session: Session) {
    return await this.sessionModel.findByIdAndUpdate(
      { _id: sessionId },
      session, { new: true });
  }


  async deleteSession(sessionId: string) {
    return this.sessionModel.deleteOne({ _id: sessionId });
}
}
