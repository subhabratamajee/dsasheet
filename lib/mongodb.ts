import { connect, connection } from 'mongoose'
const 
  // Attempts to connect to MongoDB and then tries to connect locally:)
  MONGODB_URI:any =process.env.MONGODB_URI


const options: any = {
  useUnifiedTopology: true,

  useNewUrlParser: true
}

export const dbConnect = async () => {
  if (!connection.readyState) {
    console.log('Connecting to ', MONGODB_URI)
    connect(MONGODB_URI, options)
  }
}