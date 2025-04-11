// models/Appointment.ts
import mongoose from 'mongoose';

const appointmentSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  laundryShopId: { type: mongoose.Schema.Types.ObjectId, ref: 'LaundryShop' },
  date: Date,
  timeSlot: String,
  status: { type: String, enum: ['Scheduled', 'Completed', 'Cancelled'], default: 'Scheduled' }
}, { timestamps: true });

export default mongoose.models.Appointment || mongoose.model('Appointment', appointmentSchema);
