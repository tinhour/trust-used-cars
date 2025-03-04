import React from 'react';
import { Link } from 'react-router-dom';
import { Search, Star, Shield, ThumbsUp } from 'lucide-react';
import { cars } from '../data/cars';
import { blogPosts } from '../data/blogPosts';
import { useTranslation } from 'react-i18next';

const HomePage: React.FC = () => {
  const { t } = useTranslation();
  
  // Get featured cars (first 3)
  const featuredCars = cars.slice(0, 3);
  
  // Get latest blog posts (first 2)
  const latestPosts = blogPosts.slice(0, 2);

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gray-900 text-white">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-40"
          style={{ 
            backgroundImage: "url('https://images.unsplash.com/photo-1494976388531-d1058494cdd8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')" 
          }}
        ></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">{t('home.hero.title')}</h1>
            <p className="text-xl mb-8">{t('home.hero.subtitle')}</p>
            <div className="flex flex-wrap gap-4">
              <Link to="/cars" className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition duration-300">
                {t('home.hero.browseCars')}
              </Link>
              <Link to="/contact" className="bg-transparent hover:bg-white hover:text-gray-900 text-white font-bold py-3 px-6 rounded-lg border-2 border-white transition duration-300">
                {t('home.hero.contactUs')}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Search Section */}
      <section className="bg-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gray-100 rounded-lg p-6 md:p-8 shadow-md">
            <h2 className="text-2xl font-bold mb-6 text-center">{t('home.search.title')}</h2>
            <form className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div>
                <label htmlFor="brand" className="block text-sm font-medium text-gray-700 mb-1">{t('home.search.brand')}</label>
                <select id="brand" className="w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50">
                  <option value="">{t('home.search.allBrands')}</option>
                  <option value="toyota">Toyota</option>
                  <option value="honda">Honda</option>
                  <option value="nissan">Nissan</option>
                  <option value="bmw">BMW</option>
                  <option value="mercedes">Mercedes</option>
                </select>
              </div>
              <div>
                <label htmlFor="price" className="block text-sm font-medium text-gray-700 mb-1">{t('home.search.priceRange')}</label>
                <select id="price" className="w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50">
                  <option value="">{t('home.search.allPrices')}</option>
                  <option value="0-10000">¥0 - ¥100,000</option>
                  <option value="10000-20000">¥100,000 - ¥200,000</option>
                  <option value="20000-30000">¥200,000 - ¥300,000</option>
                  <option value="30000+">¥300,000+</option>
                </select>
              </div>
              <div>
                <label htmlFor="year" className="block text-sm font-medium text-gray-700 mb-1">{t('home.search.year')}</label>
                <select id="year" className="w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50">
                  <option value="">{t('home.search.allYears')}</option>
                  <option value="2022+">2022+</option>
                  <option value="2020-2021">2020-2021</option>
                  <option value="2018-2019">2018-2019</option>
                  <option value="2015-2017">2015-2017</option>
                  <option value="2015-">2015-</option>
                </select>
              </div>
              <div className="flex items-end">
                <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md flex items-center justify-center transition duration-300">
                  <Search className="h-5 w-5 mr-2" />
                  {t('home.search.searchButton')}
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Featured Cars Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">{t('home.featuredCars.title')}</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">{t('home.featuredCars.subtitle')}</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredCars.map(car => (
              <div key={car.id} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition duration-300">
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={car.imageUrl} 
                    alt={car.title} 
                    className="w-full h-full object-cover transition duration-300 transform hover:scale-105"
                  />
                  <div className="absolute top-0 right-0 bg-blue-600 text-white px-3 py-1 m-2 rounded-md font-bold">
                    ¥{car.price.toLocaleString()}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{car.title}</h3>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="bg-gray-100 text-gray-800 px-2 py-1 rounded text-sm">{car.year}{t('cars.carDetails.year')}</span>
                    <span className="bg-gray-100 text-gray-800 px-2 py-1 rounded text-sm">{car.mileage.toLocaleString()} {t('cars.carDetails.km')}</span>
                    <span className="bg-gray-100 text-gray-800 px-2 py-1 rounded text-sm">{car.transmission}</span>
                  </div>
                  <p className="text-gray-600 mb-4 line-clamp-2">{car.description}</p>
                  <Link 
                    to={`/cars/${car.id}`} 
                    className="block text-center bg-gray-800 hover:bg-gray-900 text-white font-bold py-2 px-4 rounded-md transition duration-300"
                  >
                    {t('home.featuredCars.viewDetails')}
                  </Link>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-10">
            <Link 
              to="/cars" 
              className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition duration-300"
            >
              {t('home.featuredCars.viewAllCars')}
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">{t('home.whyChooseUs.title')}</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">{t('home.whyChooseUs.subtitle')}</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-gray-50 rounded-lg">
              <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-blue-100 text-blue-600 mb-4">
                <Star className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold mb-2">{t('home.whyChooseUs.selection.title')}</h3>
              <p className="text-gray-600">{t('home.whyChooseUs.selection.description')}</p>
            </div>
            
            <div className="text-center p-6 bg-gray-50 rounded-lg">
              <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-blue-100 text-blue-600 mb-4">
                <Shield className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold mb-2">{t('home.whyChooseUs.quality.title')}</h3>
              <p className="text-gray-600">{t('home.whyChooseUs.quality.description')}</p>
            </div>
            
            <div className="text-center p-6 bg-gray-50 rounded-lg">
              <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-blue-100 text-blue-600 mb-4">
                <ThumbsUp className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold mb-2">{t('home.whyChooseUs.service.title')}</h3>
              <p className="text-gray-600">{t('home.whyChooseUs.service.description')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Latest Blog Posts Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">{t('home.blog.title')}</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">{t('home.blog.subtitle')}</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {latestPosts.map(post => (
              <div key={post.id} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition duration-300">
                <div className="md:flex">
                  <div className="md:w-1/3">
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
                    <h3 className="text-xl font-bold mb-2">{post.title}</h3>
                    <p className="text-gray-600 mb-4 line-clamp-2">{post.excerpt}</p>
                    <Link 
                      to={`/blog/${post.id}`} 
                      className="text-blue-600 hover:text-blue-800 font-medium"
                    >
                      {t('home.blog.readMore')} →
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-10">
            <Link 
              to="/blog" 
              className="inline-block bg-gray-800 hover:bg-gray-900 text-white font-bold py-3 px-6 rounded-lg transition duration-300"
            >
              {t('home.blog.viewAllArticles')}
            </Link>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">{t('home.cta.title')}</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">{t('home.cta.subtitle')}</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link 
              to="/cars" 
              className="bg-white text-blue-600 hover:bg-gray-100 font-bold py-3 px-6 rounded-lg transition duration-300"
            >
              {t('home.cta.browseCars')}
            </Link>
            <Link 
              to="/contact" 
              className="bg-transparent hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg border-2 border-white transition duration-300"
            >
              {t('home.cta.contactUs')}
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;