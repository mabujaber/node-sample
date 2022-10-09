
import  * as  dotenv from "dotenv"

dotenv.config({debug: true})


console.log(`Hello ${process.env.TEST_CONFIG}`)
