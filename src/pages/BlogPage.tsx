import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, Tag } from 'lucide-react';
import { blogPosts } from '../data/blogPosts';

const BlogPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedTag, setSelectedTag] = useState('');
  
  // Get all unique tags
  const allTags = Array.from(
    new Set(blogPosts.flatMap(post => post.tags))
  );
  
  // Filter posts based on search term and selected tag
  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = searchTerm === '' || 
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.content.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesTag = selectedTag === '' || post.tags.includes(selectedTag);
    
    return matchesSearch && matchesTag;
  });

  return (
    <div className="bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold mb-4">汽车知识</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">了解最新的汽车资讯、购车指南和维护技巧</p>
        </div>
        
        {/* Search and Filter */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-grow">
              <div className="relative">
                <input
                  type="text"
                  placeholder="搜索文章..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
                />
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Search className="h-5 w-5 text-gray-400" />
                </div>
              </div>
            </div>
            
            <div className="w-full md:w-64">
              <select
                value={selectedTag}
                onChange={(e) => setSelectedTag(e.target.value)}
                className="w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
              >
                <option value="">所有标签</option>
                {allTags.map(tag => (
                  <option key={tag} value={tag}>{tag}</option>
                ))}
              </select>
            </div>
          </div>
        </div>
        
        {/* Blog Posts */}
        {filteredPosts.length > 0 ? (
          <div className="space-y-8">
            {filteredPosts.map(post => (
              <div key={post.id} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition duration-300">
                <div className="md:flex">
                  <div className="md:w-1/3 h-48 md:h-auto">
                    <img 
                      src={post.imageUrl} 
                      alt={post.title} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6 md:w-2/3">
                    <div className="flex items-center text-sm text-gray-500 mb-2">
                      <span>{post.date}</span>
                      <span className="mx-2">•</span>
                      <span>{post.author}</span>
                    </div>
                    <h2 className="text-2xl font-bold mb-3">
                      <Link to={`/blog/${post.id}`} className="hover:text-blue-600 transition duration-300">
                        {post.title}
                      </Link>
                    </h2>
                    <p className="text-gray-600 mb-4">{post.excerpt}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {post.tags.map(tag => (
                        <span 
                          key={tag} 
                          className="inline-flex items-center bg-blue-50 text-blue-700 px-2 py-1  rounded text-sm"
                          onClick={() => setSelectedTag(tag)}
                        >
                          <Tag className="h-3 w-3 mr-1" />
                          {tag}
                        </span>
                      ))}
                    </div>
                    <Link 
                      to={`/blog/${post.id}`} 
                      className="text-blue-600 hover:text-blue-800 font-medium inline-flex items-center"
                    >
                      阅读更多 →
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-12 bg-white rounded-lg shadow">
            <p className="text-xl text-gray-600">没有找到符合条件的文章</p>
            <button 
              onClick={() => {
                setSearchTerm('');
                setSelectedTag('');
              }}
              className="mt-4 bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md transition duration-300"
            >
              重置筛选条件
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default BlogPage;