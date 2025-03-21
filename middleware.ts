import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";

const isProtectedRoute = createRouteMatcher(['/(.*)', '/job-form'])

export default clerkMiddleware(async (auth, req)=>{
    const { userId, redirectToSignIn } = await auth()

    if (!userId && isProtectedRoute(req)) return redirectToSignIn()
});

export const config = {
    matcher: [ "/(.*)", "/job-form" ]
}