import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Calendar, User, Tag } from 'lucide-react';
import { blogPosts } from '../data/blogPosts';

const BlogPostPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const post = blogPosts.find(post => post.id === id);
  
  if (!post) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
        <h1 className="text-3xl font-bold mb-4">文章未找到</h1>
        <p className="text-gray-600 mb-8">抱歉，您查找的文章不存在或已被删除。</p>
        <Link 
          to="/blog" 
          className="inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md transition duration-300"
        >
          <ArrowLeft className="h-5 w-5 mr-2" />
          返回博客列表
        </Link>
      </div>
    );
  }

  // Get related posts (excluding current post)
  const relatedPosts = blogPosts
    .filter(p => p.id !== post.id && p.tags.some(tag => post.tags.includes(tag)))
    .slice(0, 2);

  return (
    <div className="bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <nav className="mb-8">
          <ol className="flex items-center space-x-2 text-sm text-gray-500">
            <li>
              <Link to="/" className="hover:text-gray-700">首页</Link>
            </li>
            <li>
              <span className="mx-2">/</span>
            </li>
            <li>
              <Link to="/blog" className="hover:text-gray-700">汽车知识</Link>
            </li>
            <li>
              <span className="mx-2">/</span>
            </li>
            <li className="text-gray-900 font-medium truncate">{post.title}</li>
          </ol>
        </nav>
        
        {/* Blog Post */}
        <article className="bg-white rounded-lg shadow-md overflow-hidden mb-12">
          {/* Featured Image */}
          <div className="h-64 sm:h-80 overflow-hidden">
            <img 
              src={post.imageUrl} 
              alt={post.title} 
              className="w-full h-full object-cover"
            />
          </div>
          
          {/* Post Content */}
          <div className="p-6 md:p-8">
            <h1 className="text-3xl font-bold mb-4">{post.title}</h1>
            
            <div className="flex flex-wrap items-center text-gray-500 mb-6">
              <div className="flex items-center mr-6 mb-2">
                <Calendar className="h-4 w-4 mr-1" />
                <span>{post.date}</span>
              </div>
              <div className="flex items-center mb-2">
                <User className="h-4 w-4 mr-1" />
                <span>{post.author}</span>
              </div>
            </div>
            
            <div className="prose prose-lg max-w-none" dangerouslySetInnerHTML={{ __html: post.content }} />
            
            <div className="mt-8 pt-6 border-t">
              <div className="flex flex-wrap gap-2">
                {post.tags.map(tag => (
                  <Link 
                    key={tag} 
                    to={`/blog?tag=${tag}`}
                    className="inline-flex items-center bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-sm"
                  >
                    <Tag className="h-3 w-3 mr-1" />
                    {tag}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </article>
        
        {/* Related Posts */}
        {relatedPosts.length > 0 && (
          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-6">相关文章</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {relatedPosts.map(relatedPost => (
                <div key={relatedPost.id} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition duration-300">
                  <div className="h-40 overflow-hidden">
                    <img 
                      src={relatedPost.imageUrl} 
                      alt={relatedPost.title} 
                      className="w-full h-full object-cover transition duration-300 transform hover:scale-105"
                    />
                  </div>
                  <div className="p-4">
                    <div className="flex items-center text-xs text-gray-500 mb-2">
                      <span>{relatedPost.date}</span>
                    </div>
                    <h3 className="text-lg font-bold mb-2">
                      <Link to={`/blog/${relatedPost.id}`} className="hover:text-blue-600 transition duration-300">
                        {relatedPost.title}
                      </Link>
                    </h3>
                    <p className="text-gray-600 text-sm mb-4 line-clamp-2">{relatedPost.excerpt}</p>
                    <Link 
                      to={`/blog/${relatedPost.id}`} 
                      className="text-blue-600 hover:text-blue-800 text-sm font-medium"
                    >
                      阅读更多 →
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
        
        {/* Back to Blog */}
        <div className="text-center">
          <Link 
            to="/blog" 
            className="inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition duration-300"
          >
            <ArrowLeft className="h-5 w-5 mr-2" />
            返回博客列表
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BlogPostPage;