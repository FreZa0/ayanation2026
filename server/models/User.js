import mongoose from 'mongoose'
import bcrypt from 'bcryptjs'

const userSchema = new mongoose.Schema(
  {
    login: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      minlength: 3,
      maxlength: 50,
    },
    password: {
      type: String,
      required: true,
      minlength: 6,
      select: false,
    },
  },
  {
    timestamps: true,
  }
)

userSchema.pre('save', async function () {
  if (!this.isModified('password')) return
  this.password = await bcrypt.hash(this.password, 10)
})

userSchema.methods.comparePassword = async function (candidate) {
  return await bcrypt.compare(candidate, this.password)
}

userSchema.index({ login: 1 })
userSchema.index({ createdAt: -1 })

const User = mongoose.model('User', userSchema)

export default User
