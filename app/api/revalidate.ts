import { NextRequest } from 'next/server'
import { revalidatePath } from 'next/cache'
 
// e.g a webhook to `your-website.com/api/revalidate?secret=<token>`
export async function POST(request: NextRequest) {
  const secret = request.nextUrl.searchParams.get('secret')
 
  if (secret !== process.env.MY_SECRET_TOKEN) {
    return Response.json({ message: 'Invalid secret' }, { status: 401 })
  }
 
  revalidatePath("/")
 
  return Response.json({ revalidated: true, now: Date.now() })
}