import jwt from 'jsonwebtoken'
import {User} from '../types/user'
export const createJWT=(user:User)=>{
    const token=jwt.sign({id:user.id,username:user.username},
        process.env.JWT_SECRET
    )
    return token
}

export const protect=(req,res,next)=>{
    const bearer=req.headers.authorization
    if(!bearer){
        res.status(401)
        res.json({message:'Not authorized!'})
        return 
    }
    const [,token]=bearer.split('')
    if(!token){
        res.status(401)
        res.json({message:'not valid token'})
        return
    }
    try {
        const user=jwt.verify(token,process.env.JWT_SECRET)
        req.user=user
        next()
    } catch (error) {
        console.error(error)
        res.status(401)
        res.json({message:'not valid token'})
    }
}
