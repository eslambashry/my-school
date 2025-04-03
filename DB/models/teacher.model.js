import { Schema, model } from 'mongoose';

// Define the TeacherProfiles Schema
const teacherProfileSchema = new Schema({
  userId: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  bio: {
    type: String
  },
  education: [{
    degree: {
      type: String
    },
    institution: {
      type: String
    },
    year: {
      type: Number
    },
    field: {
      type: String
    },
    document: {
      type: String // Link to the certificate document
    }
  }],
  experience: [{
    title: {
      type: String
    },
    company: {
      type: String
    },
    startDate: {
      type: Date
    },
    endDate: {
      type: Date
    },
    description: {
      type: String
    }
  }],
  subjects: [{
    subjectId: {
      type: Schema.Types.ObjectId,
      ref: 'Subject'
    },
    hourlyRate: {
      type: Number
    },
    currency: {
      type: String
    },
    experienceYears: {
      type: Number
    }
  }],
  availability: [{
    dayOfWeek: {
      type: Number,
      enum: [0, 1, 2, 3, 4, 5, 6] // 0 = Sunday, 6 = Saturday
    },
    startTime: {
      type: String
    },
    endTime: {
      type: String
    },
    isRecurring: {
      type: Boolean
    }
  }],
  specialDates: [{
    date: {
      type: Date
    },
    startTime: {
      type: String
    },
    endTime: {
      type: String
    },
    isAvailable: {
      type: Boolean
    }
  }],
  averageRating: {
    type: Number,
    default: 0
  },
  totalReviews: {
    type: Number,
    default: 0
  },
  totalStudents: {
    type: Number,
    default: 0
  },
  totalLessons: {
    type: Number,
    default: 0
  },
  featuredTeacher: {
    type: Boolean,
    default: false
  },
  verificationStatus: {
    type: String,
    enum: ['pending', 'verified', 'rejected'],
    default: 'pending'
  },
  paymentInfo: {
    bankName: {
      type: String
    },
    accountNumber: {
      type: String
    },
    accountHolderName: {
      type: String
    },
    swiftCode: {
      type: String
    },
    paypalEmail: {
      type: String
    }
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

export const teacherModel = model("TeacherProfile", teacherProfileSchema);
