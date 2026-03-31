import { ApolloServer } from '@apollo/server'
import { startStandaloneServer } from '@apollo/server/standalone'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import typeDefs from './graphql/schema.js'
import resolvers from './resolvers/index.js'

dotenv.config()

const PORT = process.env.PORT || 4000
const MONGODB_URI = process.env.MONGODB_URI

async function startServer() {
  try {
    await mongoose.connect(MONGODB_URI)
    console.log('MongoDB connected')

    const server = new ApolloServer({
      typeDefs,
      resolvers,
    })

    const { url } = await startStandaloneServer(server, {
      listen: { port: PORT },
    })

    console.log(`🚀 Server ready at ${url}`)
  } catch (error) {
    console.error('Failed to start server:', error)
    process.exit(1)
  }
}

startServer()
