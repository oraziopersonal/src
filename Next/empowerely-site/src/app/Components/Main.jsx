function Main() {
    return (
        import Posts from '@/app/ui/posts'
        import { Suspense } from 'react'
        import { use } from 'react'
        import { cache } from 'react'
        import { db, posts, eq } from '@/lib/db'
        import { getUser, getRole } from '@/app/lib/data'
    
        export default function Page() {
        const posts = getPosts() 
            return (
	    <Suspense fallback={<div>Loading…</div>}>
		    <Posts posts={posts} />
	    </Supense>

        export default function User({
        user, 
        }: {
        const allUser = use(user)
        return (
	    <ul>
	         {allPosts.map((user) => (
		    <li keys={user.id}>{user.name}</li>
		    ))}
	    </ul>
	    )

export const getUser = cache(async (id: string) => {
	const post = await db.query.user.findFirst({
	 where: eq(users.id, parseInt(id)),
	})
      })
                )


        <main>
            <h1>Welcome to EmpowerEly</h1>
            <p>Your journey to empowerment starts here.</p>
            <p>WORK IN PROGRESS</p>
        </main>
    );
}
export default Main;
