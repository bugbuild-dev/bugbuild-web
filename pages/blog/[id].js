import { useRouter } from 'next/router'
import blogData from '../../data/blogPosts.json'
import Navbar from '../../components/ui/Navbar'

export default function BlogPost() {
  const router = useRouter()
  const { id } = router.query
  
  // Find the post that matches the ID
  const post = blogData.posts.find(post => post.id === parseInt(id))
  
  if (!post) {
    return <div>Loading...</div>
  }

  return (
    <>
    <div className="py-2">
        <Navbar />
      </div>
    <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="text-center mb-16">
        <div className="mb-4">
          <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
            {post.category.title}
          </span>
        </div>
        <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl mb-4">
          {post.title}
        </h1>
        <p className="text-lg text-gray-500 mb-8">{post.summary}</p>
        <div className="flex items-center justify-center gap-4">
          <time dateTime={post.datetime} className="text-gray-500">
            {post.date}
          </time>
          <span className="text-gray-300">•</span>
          <span className="text-gray-500">{post.author.name}</span>
        </div>
      </div>

      <div className="prose prose-lg mx-auto">
        <img
          src={post.imageUrl}
          alt={post.title}
          className="w-full h-96 object-cover rounded-lg mb-12"
        />
        
        <div className="mb-12">
          <p className="text-lg leading-relaxed">{post.content.introduction}</p>
        </div>

        {post.content.sections.map((section, index) => (
          <section key={index} className="mb-12">
            <h2 className="text-2xl font-bold mb-4">{section.title}</h2>
            <div className="whitespace-pre-wrap">{section.content}</div>
          </section>
        ))}

        <section className="bg-blue-50 p-8 rounded-lg mb-12">
          <h2 className="text-2xl font-bold mb-4">{post.content.howWeCanHelp.title}</h2>
          <ul className="list-disc pl-6">
            {post.content.howWeCanHelp.points.map((point, index) => (
              <li key={index} className="mb-2">{point}</li>
            ))}
          </ul>
        </section>

        <div className="border-t pt-8">
          <p className="text-lg italic">{post.content.conclusion}</p>
        </div>

        <div className="mt-12 flex items-center gap-4 border-t pt-8">
          <div>
            <p className="font-semibold">{post.author.name}</p>
            <p className="text-gray-600">{post.author.role}</p>
          </div>
        </div>
      </div>
    </article>
    </>
  )
}
