import { Schema, model } from 'mongoose';

const studentProfileSchema = new Schema({
  userId: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  educationLevel: {
    type: String,
    required: true
  },
  school: {
    type: String,
    required: true
  },
  bio: {
    type: String
  },
  subjects: [{
    type: Schema.Types.ObjectId,
    ref: 'Subject'
  }],
  favoriteTeachers: [{
    type: Schema.Types.ObjectId,
    ref: 'TeacherProfile'
  }],
  totalLessons: {
    type: Number,
    default: 0
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: {
    type: Date,
    default: Date.now
  }
});

export const studentModel = model("StudentProfile", studentProfileSchema);
