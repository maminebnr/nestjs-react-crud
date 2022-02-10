import * as mongoose from 'mongoose';

export const SessionSchema = new mongoose.Schema({

	title: { type: String, required: true, unique: true },
	start: { type: String },
	end: { type: String },
}, { timestamps: true });


export interface Session extends mongoose.Document {
	_id: string;
	title: string;
	start: string;
	end: string;

}