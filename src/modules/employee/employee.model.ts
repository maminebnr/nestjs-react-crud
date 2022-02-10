import * as mongoose from 'mongoose';


 

export const EmployeeSchema = new mongoose.Schema({
    name: { type: String },
    email: { type: String, },
    designation : { type: String },
    phoneNumber : { type: String },
 
}, { timestamps: true });

export interface Employee extends mongoose.Document {
    _id: string;
    name: string;
    email: String;
    designation :string;
    phoneNumber : number;

}