import { GoogleGenerativeAI } from '@google/generative-ai'

const apiKey = process.env.REACT_APP_GEMINI_API_KEY
if (!apiKey) {
  throw new Error('Missing Gemini API key in environment variables.')
}

const genAI = new GoogleGenerativeAI(apiKey)
const model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash' })

export default model
