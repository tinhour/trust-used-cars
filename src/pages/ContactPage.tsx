import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send } from 'lucide-react';

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  
  const [formStatus, setFormStatus] = useState<{
    submitted: boolean;
    success: boolean;
    message: string;
  }>({
    submitted: false,
    success: false,
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate form
    if (!formData.name || !formData.email || !formData.message) {
      setFormStatus({
        submitted: true,
        success: false,
        message: '请填写所有必填字段'
      });
      return;
    }
    
    // In a real application, you would send this to your backend
    console.log('Form submitted:', formData);
    
    // Simulate successful submission
    setFormStatus({
      submitted: true,
      success: true,
      message: '您的消息已成功发送，我们将尽快与您联系！'
    });
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: ''
    });
    
    // Reset form status after 5 seconds
    setTimeout(() => {
      setFormStatus({
        submitted: false,
        success: false,
        message: ''
      });
    }, 5000);
  };

  return (
    <div className="bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold mb-4">联系我们</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">如果您有任何问题或需要更多信息，请随时联系我们，我们的团队将竭诚为您服务</p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {/* Contact Information */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="bg-blue-600 text-white p-6">
                <h2 className="text-xl font-bold mb-4">联系方式</h2>
                <p className="mb-6">如有任何疑问，请通过以下方式联系我们，我们将尽快回复您。</p>
              </div>
              
              <div className="p-6">
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="flex-shrink-0">
                      <Phone className="h-6 w-6 text-blue-600" />
                    </div>
                    <div className="ml-4">
                      <h3 className="text-sm font-medium text-gray-900">电话</h3>
                      <p className="mt-1 text-sm text-gray-600">+86 123 4567 8901</p>
                      <p className="mt-1 text-sm text-gray-600">+86 123 4567 8902</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex-shrink-0">
                      <Mail className="h-6 w-6 text-blue-600" />
                    </div>
                    <div className="ml-4">
                      <h3 className="text-sm font-medium text-gray-900">电子邮件</h3>
                      <p className="mt-1 text-sm text-gray-600">info@youxuanershouche.com</p>
                      <p className="mt-1 text-sm text-gray-600">sales@youxuanershouche.com</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex-shrink-0">
                      <MapPin className="h-6 w-6 text-blue-600" />
                    </div>
                    <div className="ml-4">
                      <h3 className="text-sm font-medium text-gray-900">地址</h3>
                      <p className="mt-1 text-sm text-gray-600">上海市浦东新区张江高科技园区博云路123号</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex-shrink-0">
                      <Clock className="h-6 w-6 text-blue-600" />
                    </div>
                    <div className="ml-4">
                      <h3 className="text-sm font-medium text-gray-900">营业时间</h3>
                      <p className="mt-1 text-sm text-gray-600">周一至周五: 9:00 - 18:00</p>
                      <p className="mt-1 text-sm text-gray-600">周六至周日: 10:00 - 16:00</p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8">
                  <h3 className="text-sm font-medium text-gray-900 mb-4">关注我们</h3>
                  <div className="flex space-x-4">
                    <a href="#" className="text-gray-400 hover:text-gray-500">
                      <span className="sr-only">微信</span>
                      <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8.691 2.188C3.891 2.188 0 5.476 0 9.53c0 2.212 1.17 4.203 3.002 5.55a.59.59 0 01.213.665l-.39 1.48c-.019.07-.048.141-.048.213 0 .163.13.295.29.295a.328.328 0 00.186-.059l2.114-1.225a.866.866 0 01.257-.079.784.784 0 01.227.034c.954.279 1.99.431 3.067.431h.52c-.21-.479-.332-1-.332-1.542 0-3.648 3.553-6.608 7.932-6.608h.395C16.748 5.128 13.058 2.188 8.691 2.188zm10.25 6.516c-.725 0-1.313.588-1.313 1.313 0 .726.588 1.314 1.313 1.314.726 0 1.313-.588 1.313-1.314 0-.725-.587-1.313-1.313-1.313zm-6.824 0c-.726 0-1.314.588-1.314 1.313 0 .726.588 1.314 1.314 1.314.725 0 1.313-.588 1.313-1.314 0-.725-.588-1.313-1.313-1.313zm6.824 3.536c-5.043 0-9.153 3.412-9.153 7.611 0 4.198 4.11 7.61 9.153 7.61 1.081 0 2.12-.152 3.076-.432a.783.783 0 01.228-.033.87.87 0 01.257.078l2.114 1.225c.057.039.121.059.186.059.16 0 .29-.132.29-.295 0-.072-.03-.143-.048-.213l-.391-1.479a.59.59 0 01.213-.665c1.832-1.348 3.002-3.339 3.002-5.551 0-4.199-4.11-7.611-9.153-7.611h-.774zm-3.427 3.348c-.725 0-1.313.587-1.313 1.313 0 .725.588 1.313 1.313 1.313.726 0 1.314-.588 1.314-1.313 0-.726-.588-1.313-1.314-1.313zm6.824 0c-.726 0-1.314.587-1.314 1.313 0 .725.588 1.313 1.314 1.313.725 0 1.313-.588 1.313-1.313 0-.726-.588-1.313-1.313-1.313z" />
                      </svg>
                    </a>
                    <a href="#" className="text-gray-400 hover:text-gray-500">
                      <span className="sr-only">微博</span>
                      <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M10.098 20.323c-3.977 0-7.152-1.892-7.152-4.616 0-1.345.875-2.902 2.334-4.368 1.963-1.965 4.246-2.862 5.189-2.007.513.465.587 1.27.244 2.224-.184.504.152.235.152.235s.671-.262 1.182-.339c.512-.078 1.099.075 1.099.075s-.513.873-.61 1.481c-.101.606.05 1.436.05 1.436s.408-.494 1.298-.686c.889-.193 1.92.244 1.92.244s-.342.873-.889 1.48c-.547.607-1.252 1.214-1.252 1.214s.136.202.136.607c0 2.225-3.09 4.02-7.7 4.02zm7.323-3.772c.136-.607-.17-1.138-.17-1.138s-.036-.076-.072-.076c-.038 0-.074.076-.074.076-.136.404-.477.674-.477.674s-.037.04-.037.075c0 .038.037.077.037.077.341.265.793.312.793.312zm.477-1.214c.068-.202-.068-.37-.068-.37s-.02-.02-.039-.02c-.02 0-.038.02-.038.02-.068.135-.204.224-.204.224s-.02.02-.02.039c0 .02.02.038.02.038.17.135.35.17.35.17zm2.894-2.902c-.272-.607-.922-.876-.922-.876s-.068-.04-.136-.02c-.068.02-.088.088-.088.088-.204.607-.068 1.062-.068 1.062s.02.068.068.088c.068.02.117-.02.117-.02.477-.135.75-.02.75-.02s.068.02.117-.02c.048-.04.048-.108.048-.108.068-.202.114-.174.114-.174zm-1.124.296c-.136-.272-.442-.39-.442-.39s-.037-.02-.074 0c-.038.02-.057.057-.057.057-.101.272-.038.485-.038.485s.02.038.038.057c.038.02.076 0 .076 0 .229-.057.36 0 .36 0s.038.02.076 0c.038-.02.038-.057.038-.057.02-.095.023-.152.023-.152z" />
                      </svg>
                    </a>
                    <a href="#" className="text-gray-400 hover:text-gray-500">
                      <span className="sr-only">抖音</span>
                      <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12.53.02C13.84 0 15.14.01 16.44 0c.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="p-6 md:p-8">
                <h2 className="text-xl font-bold mb-6">发送消息</h2>
                
                {formStatus.submitted && (
                  <div className={`mb-6 p-4 rounded-md ${formStatus.success ? 'bg-green-50 text-green-800' : 'bg-red-50 text-red-800'}`}>
                    {formStatus.message}
                  </div>
                )}
                
                <form onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">姓名 *</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
                        required
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">电子邮件 *</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
                        required
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">电话</label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">主题</label>
                      <select
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        className="w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
                      >
                        <option value="">请选择主题</option>
                        <option value="general">一般咨询</option>
                        <option value="sales">购车咨询</option>
                        <option value="service">售后服务</option>
                        <option value="complaint">投诉建议</option>
                        <option value="other">其他</option>
                      </select>
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">消息 *</label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={6}
                      className="w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
                      required
                    ></textarea>
                  </div>
                  
                  <div>
                    <button
                      type="submit"
                      className="w-full md:w-auto bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-md transition duration-300 flex items-center justify-center"
                    >
                      <Send className="h-5 w-5 mr-2" />
                      发送消息
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        
        {/* Map Section */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden mb-12">
          <div className="aspect-w-16 aspect-h-9 h-96">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3411.0717371849!2d121.58769661513!3d31.20881998146364!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x35b270fe01c928a1%3A0x5c0ebc336761b2f6!2sZhangjiang%20Hi-Tech%20Park%2C%20Pudong%2C%20Shanghai%2C%20China!5e0!3m2!1sen!2sus!4v1650000000000!5m2!1sen!2sus" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Company Location"
              className="w-full h-full"
            ></iframe>
          </div>
        </div>
        
        {/* FAQ Section */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-center">常见问题</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-lg font-bold mb-3">如何预约看车？</h3>
              <p className="text-gray-600">您可以通过我们的网站预约看车，或者直接致电我们的客服热线。我们会根据您的时间安排专业销售顾问为您服务。</p>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-lg font-bold mb-3">你们提供分期付款吗？</h3>
              <p className="text-gray-600">是的，我们与多家银行和金融机构合作，可以为您提供灵活的分期付款方案。详情请咨询我们的销售顾问。</p>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-lg font-bold mb-3">车辆有保修吗？</h3>
              <p className="text-gray-600">我们所有车辆都提供至少3个月的基础保修，同时您可以选择延长保修期。具体保修政策会根据车辆情况有所不同。</p>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-lg font-bold mb-3">可以置换我的旧车吗？</h3>
              <p className="text-gray-600">可以，我们提供旧车置换服务。我们的评估师会对您的车辆进行专业评估，给出合理的置换价格。</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;