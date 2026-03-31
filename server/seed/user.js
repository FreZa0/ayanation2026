import mongoose from 'mongoose'
import dotenv from 'dotenv'
import User from '../models/User.js'

dotenv.config()

const users = [
  { login: 'alice', password: 'password123' },
  { login: 'bob', password: 'password456' },
  { login: 'charlie', password: 'password789' },
  { login: 'diana', password: 'password321' },
  { login: 'eve', password: 'password654' },
  { login: 'frank', password: 'password987' },
  { login: 'grace', password: 'password147' },
  { login: 'henry', password: 'password258' },
  { login: 'ivy', password: 'password369' },
  { login: 'jack', password: 'password741' },
]

async function seed() {
  try {
    await mongoose.connect(process.env.MONGODB_URI)
    console.log('MongoDB connected')

    await User.deleteMany({})
    console.log('Cleared existing users')

    const createdUsers = []
    for (const userData of users) {
      const user = new User(userData)
      await user.save()
      createdUsers.push(user)
    }
    console.log(`Created ${createdUsers.length} users:`)
    createdUsers.forEach(user => {
      console.log(`  - ${user.login}`)
    })

    process.exit(0)
  } catch (error) {
    console.error('Seed error:', error)
    process.exit(1)
  }
}

seed()
