import * as dotenv from 'dotenv'
import app from './server'
dotenv.config()

const port=50002
app.listen(port,()=>{
    console.log(`server on http://localhost:${port}`)
})