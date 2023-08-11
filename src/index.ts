import * as dotenv from 'dotenv'
import app from './server'
import express from 'express'
dotenv.config()
app.listen(process.env.PORT || 3001, () => {
    console.log(`server is running !`)
})