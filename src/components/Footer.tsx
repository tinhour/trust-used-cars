import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Car, Mail, Phone, MapPin, Send } from 'lucide-react';

const Footer: React.FC = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      // In a real application, you would send this to your backend
      console.log('Subscribed with email:', email);
      setSubscribed(true);
      setEmail('');
      
      // Reset subscription status after 3 seconds
      setTimeout(() => {
        setSubscribed(false);
      }, 3000);
    }
  };

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-1">
            <Link to="/" className="flex items-center mb-4">
              <Car className="h-8 w-8 text-blue-400" />
              <span className="ml-2 text-xl font-bold">优选二手车</span>
            </Link>
            <p className="text-gray-400 mb-4">
              我们提供高品质、经过严格检测的二手车，让您安心购车，放心驾驶。
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition duration-300">
                <span className="sr-only">微信</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8.691 2.188C3.891 2.188 0 5.476 0 9.53c0 2.212 1.17 4.203 3.002 5.55a.59.59 0 01.213.665l-.39 1.48c-.019.07-.048.141-.048.213 0 .163.13.295.29.295a.328.328 0 00.186-.059l2.114-1.225a.866.866 0 01.257-.079.784.784 0 01.227.034c.954.279 1.99.431 3.067.431h.52c-.21-.479-.332-1-.332-1.542 0-3.648 3.553-6.608 7.932-6.608h.395C16.748 5.128 13.058 2.188 8.691 2.188zm10.25 6.516c-.725 0-1.313.588-1.313 1.313 0 .726.588 1.314 1.313 1.314.726 0 1.313-.588 1.313-1.314 0-.725-.587-1.313-1.313-1.313zm-6.824 0c-.726 0-1.314.588-1.314 1.313 0 .726.588 1.314 1.314 1.314.725 0 1.313-.588 1.313-1.314 0-.725-.588-1.313-1.313-1.313zm6.824 3.536c-5.043 0-9.153 3.412-9.153 7.611 0 4.198 4.11 7.61 9.153 7.61 1.081 0 2.12-.152 3.076-.432a.783.783 0 01.228-.033.87.87 0 01.257.078l2.114 1.225c.057.039.121.059.186.059.16 0 .29-.132.29-.295 0-.072-.03-.143-.048-.213l-.391-1.479a.59.59 0 01.213-.665c1.832-1.348 3.002-3.339 3.002-5.551 0-4.199-4.11-7.611-9.153-7.611h-.774zm-3.427 3.348c-.725 0-1.313.587-1.313 1.313 0 .725.588 1.313 1.313 1.313.726 0 1.314-.588 1.314-1.313 0-.726-.588-1.313-1.314-1.313zm6.824 0c-.726 0-1.314.587-1.314 1.313 0 .725.588 1.313 1.314 1.313.725 0 1.313-.588 1.313-1.313 0-.726-.588-1.313-1.313-1.313z" />
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition duration-300">
                <span className="sr-only">微博</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M10.098 20.323c-3.977 0-7.152-1.892-7.152-4.616 0-1.345.875-2.902 2.334-4.368 1.963-1.965 4.246-2.862 5.189-2.007.513.465.587 1.27.244 2.224-.184.504.152.235.152.235s.671-.262 1.182-.339c.512-.078 1.099.075 1.099.075s-.513.873-.61 1.481c-.101.606.05 1.436.05 1.436s.408-.494 1.298-.686c.889-.193 1.92.244 1.92.244s-.342.873-.889 1.48c-.547.607-1.252 1.214-1.252 1.214s.136.202.136.607c0 2.225-3.09 4.02-7.7 4.02zm7.323-3.772c.136-.607-.17-1.138-.17-1.138s-.036-.076-.072-.076c-.038 0-.074.076-.074.076-.136.404-.477.674-.477.674s-.037.04-.037.075c0 .038.037.077.037.077.341.265.793.312.793.312zm.477-1.214c.068-.202-.068-.37-.068-.37s-.02-.02-.039-.02c-.02 0-.038.02-.038.02-.068.135-.204.224-.204.224s-.02.02-.02.039c0 .02.02.038.02.038.17.135.35.17.35.17zm2.894-2.902c-.272-.607-.922-.876-.922-.876s-.068-.04-.136-.02c-.068.02-.088.088-.088.088-.204.607-.068 1.062-.068 1.062s.02.068.068.088c.068.02.117-.02.117-.02.477-.135.75-.02.75-.02s.068.02.117-.02c.048-.04.048-.108.048-.108.068-.202.114-.174.114-.174zm-1.124.296c-.136-.272-.442-.39-.442-.39s-.037-.02-.074 0c-.038.02-.057.057-.057.057-.101.272-.038.485-.038.485s.02.038.038.057c.038.02.076 0 .076 0 .229-.057.36 0 .36 0s.038.02.076 0c.038-.02.038-.057.038-.057.02-.095.023-.152.023-.152z" />
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition duration-300">
                <span className="sr-only">抖音</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.53.02C13.84 0 15.14.01 16.44 0c.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
                </svg>
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div className="col-span-1">
            <h3 className="text-lg font-bold mb-4">快速链接</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-400 hover:text-white transition duration-300">首页</Link>
              </li>
              <li>
                <Link to="/cars" className="text-gray-400 hover:text-white transition duration-300">在售车辆</Link>
              </li>
              <li>
                <Link to="/blog" className="text-gray-400 hover:text-white transition duration-300">汽车知识</Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-white transition duration-300">联系我们</Link>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition duration-300">关于我们</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition duration-300">隐私政策</a>
              </li>
            </ul>
          </div>
          
          {/* Contact Info */}
          <div className="col-span-1">
            <h3 className="text-lg font-bold mb-4">联系方式</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <Phone className="h-5 w-5 text-gray-400 mr-2 mt-0.5" />
                <span className="text-gray-400">+86 123 4567 8901</span>
              </li>
              <li className="flex items-start">
                <Mail className="h-5 w-5 text-gray-400 mr-2 mt-0.5" />
                <span className="text-gray-400">info@youxuanershouche.com</span>
              </li>
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-gray-400 mr-2 mt-0.5" />
                <span className="text-gray-400">上海市浦东新区张江高科技园区博云路123号</span>
              </li>
            </ul>
          </div>
          
          {/* Newsletter */}
          <div className="col-span-1">
            <h3 className="text-lg font-bold mb-4">订阅我们</h3>
            <p className="text-gray-400 mb-4">订阅我们的电子邮件，获取最新的车辆信息和促销活动。</p>
            <form onSubmit={handleSubscribe} className="space-y-2">
              <div className="flex">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="您的电子邮箱"
                  className="flex-grow px-4 py-2 rounded-l-md text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
                <button
                  type="submit"
                  className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-r-md transition duration-300 flex items-center"
                >
                  <Send className="h-4 w-4" />
                </button>
              </div>
              {subscribed && (
                <p className="text-green-400 text-sm">感谢您的订阅！</p>
              )}
            </form>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 text-center">
          <p className="text-gray-400">
            &copy; {new Date().getFullYear()} 优选二手车. 保留所有权利.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;