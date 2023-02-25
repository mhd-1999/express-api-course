import express from 'express'
import authRoute from './auth.route'
import userRoute from './user.route'
import postRoute from './post.route'
import commentRoute from './comment.route'
import reactionRoute from './reaction.route'
import bookmarkRoute from './bookmark.route'
// import routeName from './routeName.route.ts'
const router=express.Router()

const routes=[
    {
        path:'/auth',
        route:authRoute
    },
    {
        path:'/user',
        route:userRoute
    },
    {
        path:'/post',
        route:postRoute
    },
    {
        path:'/comment',
        route:commentRoute
    },
    {
        path:'/reaction',
        route:reactionRoute
    },
    {
        path:'/bookmark',
        route:bookmarkRoute
    }
]
routes.map(route=>{
    router.use(route.path,route.route)
})

export default router