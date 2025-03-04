import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Calendar, MapPin, Gauge, Fuel, Settings, ArrowLeft, Check } from 'lucide-react';
import { cars } from '../data/cars';

const CarDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const car = cars.find(car => car.id === id);
  
  if (!car) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
        <h1 className="text-3xl font-bold mb-4">车辆未找到</h1>
        <p className="text-gray-600 mb-8">抱歉，您查找的车辆不存在或已被删除。</p>
        <Link 
          to="/cars" 
          className="inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md transition duration-300"
        >
          <ArrowLeft className="h-5 w-5 mr-2" />
          返回车辆列表
        </Link>
      </div>
    );
  }

  // Get similar cars (excluding current car)
  const similarCars = cars
    .filter(c => c.id !== car.id && (c.price >= car.price * 0.8 && c.price <= car.price * 1.2))
    .slice(0, 3);

  return (
    <div className="bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
              <Link to="/cars" className="hover:text-gray-700">在售车辆</Link>
            </li>
            <li>
              <span className="mx-2">/</span>
            </li>
            <li className="text-gray-900 font-medium truncate">{car.title}</li>
          </ol>
        </nav>
        
        {/* Car Details */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden mb-12">
          <div className="md:flex">
            {/* Car Image */}
            <div className="md:w-1/2">
              <div className="relative h-64 md:h-full">
                <img 
                  src={car.imageUrl} 
                  alt={car.title} 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            
            {/* Car Info */}
            <div className="md:w-1/2 p-6 md:p-8">
              <h1 className="text-3xl font-bold mb-2">{car.title}</h1>
              <div className="flex items-center text-gray-500 mb-6">
                <MapPin className="h-4 w-4 mr-1" />
                <span>{car.location}</span>
              </div>
              
              <div className="bg-blue-50 text-blue-800 p-4 rounded-lg mb-6">
                <p className="text-3xl font-bold">¥{car.price.toLocaleString()}</p>
              </div>
              
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="flex items-center">
                  <Calendar className="h-5 w-5 text-gray-500 mr-2" />
                  <div>
                    <p className="text-sm text-gray-500">年份</p>
                    <p className="font-medium">{car.year}年</p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <Gauge className="h-5 w-5 text-gray-500 mr-2" />
                  <div>
                    <p className="text-sm text-gray-500">里程</p>
                    <p className="font-medium">{car.mileage.toLocaleString()} 公里</p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <Fuel className="h-5 w-5 text-gray-500 mr-2" />
                  <div>
                    <p className="text-sm text-gray-500">燃油类型</p>
                    <p className="font-medium">{car.fuelType}</p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <Settings className="h-5 w-5 text-gray-500 mr-2" />
                  <div>
                    <p className="text-sm text-gray-500">变速箱</p>
                    <p className="font-medium">{car.transmission}</p>
                  </div>
                </div>
              </div>
              
              <div className="space-y-4">
                <a 
                  href="tel:+8612345678901" 
                  className="block text-center bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded-md transition duration-300"
                >
                  联系卖家
                </a>
                
                <a 
                  href="#" 
                  className="block text-center bg-gray-800 hover:bg-gray-900 text-white font-bold py-3 px-4 rounded-md transition duration-300"
                >
                  预约看车
                </a>
              </div>
            </div>
          </div>
          
          {/* Car Description and Features */}
          <div className="p-6 md:p-8 border-t">
            <div className="mb-8">
              <h2 className="text-xl font-bold mb-4">车辆描述</h2>
              <p className="text-gray-700">{car.description}</p>
            </div>
            
            <div>
              <h2 className="text-xl font-bold mb-4">车辆特点</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                {car.features.map((feature, index) => (
                  <div key={index} className="flex items-center">
                    <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        
        {/* Similar Cars */}
        {similarCars.length > 0 && (
          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-6">类似车辆</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {similarCars.map(similarCar => (
                <div key={similarCar.id} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition duration-300">
                  <div className="relative h-40 overflow-hidden">
                    <img 
                      src={similarCar.imageUrl} 
                      alt={similarCar.title} 
                      className="w-full h-full object-cover transition duration-300 transform hover:scale-105"
                    />
                    <div className="absolute top-0 right-0 bg-blue-600 text-white px-3 py-1 m-2 rounded-md font-bold">
                      ¥{similarCar.price.toLocaleString()}
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="text-lg font-bold mb-2">{similarCar.title}</h3>
                    <div className="flex flex-wrap gap-2 mb-4">
                      <span className="bg-gray-100 text-gray-800 px-2 py-1 rounded text-xs">{similarCar.year}年</span>
                      <span className="bg-gray-100 text-gray-800 px-2 py-1 rounded text-xs">{similarCar.mileage.toLocaleString()} 公里</span>
                    </div>
                    <Link 
                      to={`/cars/${similarCar.id}`} 
                      className="block text-center bg-gray-800 hover:bg-gray-900 text-white font-bold py-2 px-4 rounded-md transition duration-300"
                    >
                      查看详情
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
        
        {/* Back to Cars */}
        <div className="text-center">
          <Link 
            to="/cars" 
            className="inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition duration-300"
          >
            <ArrowLeft className="h-5 w-5 mr-2" />
            返回车辆列表
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CarDetailPage;