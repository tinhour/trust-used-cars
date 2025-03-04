import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Search, Filter, ChevronDown, ChevronUp } from 'lucide-react';
import { cars } from '../data/cars';
import { Car } from '../types';
import { useTranslation } from 'react-i18next';

const CarsPage: React.FC = () => {
  const { t } = useTranslation();
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
          <h1 className="text-3xl font-bold mb-4">{t('cars.title')}</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">{t('cars.subtitle')}</p>
        </div>
        
        {/* Filters Section */}
        <div className="bg-white rounded-lg shadow-md mb-8">
          <div className="p-4 border-b flex justify-between items-center">
            <h2 className="text-lg font-bold flex items-center">
              <Filter className="h-5 w-5 mr-2" />
              {t('cars.filters.title')}
            </h2>
            <button 
              onClick={toggleFilters}
              className="text-gray-500 hover:text-gray-700 flex items-center"
            >
              {showFilters ? (
                <>
                  {t('cars.filters.hideFilters')} <ChevronUp className="h-5 w-5 ml-1" />
                </>
              ) : (
                <>
                  {t('cars.filters.showFilters')} <ChevronDown className="h-5 w-5 ml-1" />
                </>
              )}
            </button>
          </div>
          
          {showFilters && (
            <div className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                <div>
                  <label htmlFor="brand" className="block text-sm font-medium text-gray-700 mb-1">{t('cars.filters.brand')}</label>
                  <select 
                    id="brand" 
                    name="brand" 
                    value={filters.brand}
                    onChange={handleFilterChange}
                    className="w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
                  >
                    <option value="">{t('cars.filters.allBrands')}</option>
                    <option value="Toyota">Toyota</option>
                    <option value="Honda">Honda</option>
                    <option value="Nissan">Nissan</option>
                    <option value="BMW">BMW</option>
                    <option value="Mercedes">Mercedes</option>
                    <option value="Hyundai">Hyundai</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="priceRange" className="block text-sm font-medium text-gray-700 mb-1">{t('cars.filters.priceRange')}</label>
                  <select 
                    id="priceRange" 
                    name="priceRange" 
                    value={filters.priceRange}
                    onChange={handleFilterChange}
                    className="w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
                  >
                    <option value="">{t('cars.filters.allPrices')}</option>
                    <option value="0-15000">¥0 - ¥15,000</option>
                    <option value="15000-20000">¥15,000 - ¥20,000</option>
                    <option value="20000-25000">¥20,000 - ¥25,000</option>
                    <option value="25000-">¥25,000+</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="year" className="block text-sm font-medium text-gray-700 mb-1">{t('cars.filters.year')}</label>
                  <select 
                    id="year" 
                    name="year" 
                    value={filters.year}
                    onChange={handleFilterChange}
                    className="w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
                  >
                    <option value="">{t('cars.filters.allYears')}</option>
                    <option value="2020-">2020+</option>
                    <option value="2018-2019">2018-2019</option>
                    <option value="2016-2017">2016-2017</option>
                    <option value="0-2015">2015-</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="fuelType" className="block text-sm font-medium text-gray-700 mb-1">{t('cars.filters.fuelType')}</label>
                  <select 
                    id="fuelType" 
                    name="fuelType" 
                    value={filters.fuelType}
                    onChange={handleFilterChange}
                    className="w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
                  >
                    <option value="">{t('cars.filters.allTypes')}</option>
                    <option value="Gasoline">{t('cars.filters.gasoline')}</option>
                    <option value="Diesel">{t('cars.filters.diesel')}</option>
                    <option value="Hybrid">{t('cars.filters.hybrid')}</option>
                    <option value="Electric">{t('cars.filters.electric')}</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="transmission" className="block text-sm font-medium text-gray-700 mb-1">{t('cars.filters.transmission')}</label>
                  <select 
                    id="transmission" 
                    name="transmission" 
                    value={filters.transmission}
                    onChange={handleFilterChange}
                    className="w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
                  >
                    <option value="">{t('cars.filters.allTransmissions')}</option>
                    <option value="Automatic">{t('cars.filters.automatic')}</option>
                    <option value="Manual">{t('cars.filters.manual')}</option>
                    <option value="CVT">{t('cars.filters.cvt')}</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="location" className="block text-sm font-medium text-gray-700 mb-1">{t('cars.filters.location')}</label>
                  <select 
                    id="location" 
                    name="location" 
                    value={filters.location}
                    onChange={handleFilterChange}
                    className="w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
                  >
                    <option value="">{t('cars.filters.allLocations')}</option>
                    <option value="Shanghai">Shanghai</option>
                    <option value="Beijing">Beijing</option>
                    <option value="Guangzhou">Guangzhou</option>
                    <option value="Shenzhen">Shenzhen</option>
                    <option value="Chengdu">Chengdu</option>
                    <option value="Hangzhou">Hangzhou</option>
                  </select>
                </div>
              </div>
              
              <div className="flex justify-between">
                <button 
                  onClick={resetFilters}
                  className="text-gray-600 hover:text-gray-800"
                >
                  {t('cars.filters.resetFilters')}
                </button>
              </div>
            </div>
          )}
        </div>
        
        {/* Sort and Results Count */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-6">
          <p className="text-gray-600 mb-4 md:mb-0">
            {t('cars.results.found')} <span className="font-bold">{filteredCars.length}</span> {t('cars.results.cars')}
          </p>
          
          <div className="flex items-center">
            <label htmlFor="sortBy" className="mr-2 text-gray-700">{t('cars.results.sortBy')}</label>
            <select 
              id="sortBy" 
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
            >
              <option value="default">{t('cars.results.defaultSort')}</option>
              <option value="price-asc">{t('cars.results.priceLowToHigh')}</option>
              <option value="price-desc">{t('cars.results.priceHighToLow')}</option>
              <option value="year-desc">{t('cars.results.yearNewToOld')}</option>
              <option value="year-asc">{t('cars.results.yearOldToNew')}</option>
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
                    <span className="bg-gray-100 text-gray-800 px-2 py-1 rounded text-sm">{car.year} {t('cars.carDetails.year')}</span>
                    <span className="bg-gray-100 text-gray-800 px-2 py-1 rounded text-sm">{car.mileage.toLocaleString()} {t('cars.carDetails.km')}</span>
                    <span className="bg-gray-100 text-gray-800 px-2 py-1 rounded text-sm">{car.transmission}</span>
                    <span className="bg-gray-100 text-gray-800 px-2 py-1 rounded text-sm">{car.location}</span>
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
        ) : (
          <div className="text-center py-12 bg-white rounded-lg shadow">
            <p className="text-xl text-gray-600">{t('cars.results.noResults')}</p>
            <button 
              onClick={resetFilters}
              className="mt-4 bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md transition duration-300"
            >
              {t('cars.results.resetFilters')}
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default CarsPage;