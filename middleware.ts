import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";

const isProtectedRoute = createRouteMatcher(['/(.*)', '/job-form'])

export default clerkMiddleware((auth, req)=>{
    if (isProtectedRoute(req)) auth.protect();
});

export const config = [
    {
        matcher: ["/", "/(api|trpc)"]
    }
]