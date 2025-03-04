import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Search, Filter, ChevronDown, ChevronUp } from 'lucide-react';
import { cars } from '../data/cars';
import { Car } from '../types';

const CarsPage: React.FC = () => {
  const [filteredCars, setFilteredCars] = useState<Car[]>(cars);
  const [filters, setFilters] = useState({
    brand: '',
    priceRange: '',
    year: '',
    fuelType: '',
    transmission: '',
    location: ''
  });
  const [showFilters, setShowFilters] = useState(false);
  const [sortBy, setSortBy] = useState('default');

  // Apply filters and sorting
  useEffect(() => {
    let result = [...cars];
    
    // Apply filters
    if (filters.brand) {
      result = result.filter(car => car.title.toLowerCase().includes(filters.brand.toLowerCase()));
    }
    
    if (filters.priceRange) {
      const [min, max] = filters.priceRange.split('-').map(Number);
      result = result.filter(car => {
        if (max) {
          return car.price >= min && car.price <= max;
        } else {
          return car.price >= min;
        }
      });
    }
    
    if (filters.year) {
      const [min, max] = filters.year.split('-').map(Number);
      result = result.filter(car => {
        if (max) {
          return car.year >= min && car.year <= max;
        } else {
          return car.year >= min;
        }
      });
    }
    
    if (filters.fuelType) {
      result = result.filter(car => car.fuelType === filters.fuelType);
    }
    
    if (filters.transmission) {
      result = result.filter(car => car.transmission === filters.transmission);
    }
    
    if (filters.location) {
      result = result.filter(car => car.location === filters.location);
    }
    
    // Apply sorting
    if (sortBy === 'price-asc') {
      result.sort((a, b) => a.price - b.price);
    } else if (sortBy === 'price-desc') {
      result.sort((a, b) => b.price - a.price);
    } else if (sortBy === 'year-desc') {
      result.sort((a, b) => b.year - a.year);
    } else if (sortBy === 'year-asc') {
      result.sort((a, b) => a.year - b.year);
    }
    
    setFilteredCars(result);
  }, [filters, sortBy]);

  const handleFilterChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFilters(prev => ({ ...prev, [name]: value }));
  };

  const resetFilters = () => {
    setFilters({
      brand: '',
      priceRange: '',
      year: '',
      fuelType: '',
      transmission: '',
      location: ''
    });
    setSortBy('default');
  };

  const toggleFilters = () => {
    setShowFilters(!showFilters);
  };

  return (
    <div className="bg-gray-50 min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold mb-4">在售车辆</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">浏览我们精选的高品质二手车，每一辆都经过专业检测和认证</p>
        </div>
        
        {/* Filters Section */}
        <div className="bg-white rounded-lg shadow-md mb-8">
          <div className="p-4 border-b flex justify-between items-center">
            <h2 className="text-lg font-bold flex items-center">
              <Filter className="h-5 w-5 mr-2" />
              筛选条件
            </h2>
            <button 
              onClick={toggleFilters}
              className="text-gray-500 hover:text-gray-700 flex items-center"
            >
              {showFilters ? (
                <>
                  收起筛选 <ChevronUp className="h-5 w-5 ml-1" />
                </>
              ) : (
                <>
                  展开筛选 <ChevronDown className="h-5 w-5 ml-1" />
                </>
              )}
            </button>
          </div>
          
          {showFilters && (
            <div className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                <div>
                  <label htmlFor="brand" className="block text-sm font-medium text-gray-700 mb-1">品牌</label>
                  <select 
                    id="brand" 
                    name="brand" 
                    value={filters.brand}
                    onChange={handleFilterChange}
                    className="w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
                  >
                    <option value="">所有品牌</option>
                    <option value="Toyota">丰田</option>
                    <option value="Honda">本田</option>
                    <option value="Nissan">日产</option>
                    <option value="BMW">宝马</option>
                    <option value="Mercedes">奔驰</option>
                    <option value="Hyundai">现代</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="priceRange" className="block text-sm font-medium text-gray-700 mb-1">价格范围</label>
                  <select 
                    id="priceRange" 
                    name="priceRange" 
                    value={filters.priceRange}
                    onChange={handleFilterChange}
                    className="w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
                  >
                    <option value="">所有价格</option>
                    <option value="0-15000">¥0 - ¥15,000</option>
                    <option value="15000-20000">¥15,000 - ¥20,000</option>
                    <option value="20000-25000">¥20,000 - ¥25,000</option>
                    <option value="25000-">¥25,000+</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="year" className="block text-sm font-medium text-gray-700 mb-1">年份</label>
                  <select 
                    id="year" 
                    name="year" 
                    value={filters.year}
                    onChange={handleFilterChange}
                    className="w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
                  >
                    <option value="">所有年份</option>
                    <option value="2020-">2020年及以上</option>
                    <option value="2018-2019">2018年 - 2019年</option>
                    <option value="2016-2017">2016年 - 2017年</option>
                    <option value="0-2015">2015年及以下</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="fuelType" className="block text-sm font-medium text-gray-700 mb-1">燃油类型</label>
                  <select 
                    id="fuelType" 
                    name="fuelType" 
                    value={filters.fuelType}
                    onChange={handleFilterChange}
                    className="w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
                  >
                    <option value="">所有类型</option>
                    <option value="Gasoline">汽油</option>
                    <option value="Diesel">柴油</option>
                    <option value="Hybrid">混合动力</option>
                    <option value="Electric">电动</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="transmission" className="block text-sm font-medium text-gray-700 mb-1">变速箱</label>
                  <select 
                    id="transmission" 
                    name="transmission" 
                    value={filters.transmission}
                    onChange={handleFilterChange}
                    className="w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
                  >
                    <option value="">所有类型</option>
                    <option value="Automatic">自动</option>
                    <option value="Manual">手动</option>
                    <option value="CVT">CVT</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="location" className="block text-sm font-medium text-gray-700 mb-1">所在地</label>
                  <select 
                    id="location" 
                    name="location" 
                    value={filters.location}
                    onChange={handleFilterChange}
                    className="w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
                  >
                    <option value="">所有地区</option>
                    <option value="Shanghai">上海</option>
                    <option value="Beijing">北京</option>
                    <option value="Guangzhou">广州</option>
                    <option value="Shenzhen">深圳</option>
                    <option value="Chengdu">成都</option>
                    <option value="Hangzhou">杭州</option>
                  </select>
                </div>
              </div>
              
              <div className="flex justify-between">
                <button 
                  onClick={resetFilters}
                  className="text-gray-600 hover:text-gray-800"
                >
                  重置筛选条件
                </button>
              </div>
            </div>
          )}
        </div>
        
        {/* Sort and Results Count */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-6">
          <p className="text-gray-600 mb-4 md:mb-0">
            共找到 <span className="font-bold">{filteredCars.length}</span> 辆车
          </p>
          
          <div className="flex items-center">
            <label htmlFor="sortBy" className="mr-2 text-gray-700">排序方式:</label>
            <select 
              id="sortBy" 
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
            >
              <option value="default">默认排序</option>
              <option value="price-asc">价格 (低到高)</option>
              <option value="price-desc">价格 (高到低)</option>
              <option value="year-desc">年份 (新到旧)</option>
              <option value="year-asc">年份 (旧到新)</option>
            </select>
          </div>
        </div>
        
        {/* Cars Grid */}
        {filteredCars.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredCars.map(car => (
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
                    <span className="bg-gray-100 text-gray-800 px-2 py-1 rounded text-sm">{car.year}年</span>
                    <span className="bg-gray-100 text-gray-800 px-2 py-1 rounded text-sm">{car.mileage.toLocaleString()} 公里</span>
                    <span className="bg-gray-100 text-gray-800 px-2 py-1 rounded text-sm">{car.transmission}</span>
                    <span className="bg-gray-100 text-gray-800 px-2 py-1 rounded text-sm">{car.location}</span>
                  </div>
                  <p className="text-gray-600 mb-4 line-clamp-2">{car.description}</p>
                  <Link 
                    to={`/cars/${car.id}`} 
                    className="block text-center bg-gray-800 hover:bg-gray-900 text-white font-bold py-2 px-4 rounded-md transition duration-300"
                  >
                    查看详情
                  </Link>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-12 bg-white rounded-lg shadow">
            <p className="text-xl text-gray-600">没有找到符合条件的车辆</p>
            <button 
              onClick={resetFilters}
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

export default CarsPage;