import React from 'react';
import { Brain, Facebook, Twitter, Instagram, Mail, Phone, MapPin } from 'lucide-react';

function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Section */}
          <div className="text-right">
            <div className="flex items-center justify-end mb-6">
              <span className="text-2xl font-bold text-cyan-500 mr-2">رفيق</span>
              <Brain className="h-8 w-8 text-cyan-500" />
            </div>
            <p className="text-gray-400 leading-relaxed">
              منصتك الموثوقة للدعم النفسي والعلاج السلوكي.
              نقدم خدمات استشارية متخصصة بأيدي خبراء معتمدين.
            </p>
          </div>

          {/* Quick Links */}
          <div className="text-right">
            <h3 className="text-lg font-bold mb-6 text-cyan-500">روابط سريعة</h3>
            <ul className="space-y-4">
              <li>
                <a href="#" className="text-gray-400 hover:text-cyan-500 transition-colors duration-200">
                  عن رفيق
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-cyan-500 transition-colors duration-200">
                  خدماتنا
                </a>
              </li>
             
              <li>
                <a href="#" className="text-gray-400 hover:text-cyan-500 transition-colors duration-200">
                  المقالات
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="text-right">
            <h3 className="text-lg font-bold mb-6 text-cyan-500">تواصل معنا</h3>
            <ul className="space-y-4">
              <li className="flex items-center justify-end text-gray-400">
                <span className="mr-2">rehammostafa078@gmail.com</span>
                <Mail className="h-5 w-5 text-cyan-500" />
              </li>
              <li className="flex items-center justify-end text-gray-400">
                <span className="mr-2">01004614868</span>
                <Phone className="h-5 w-5 text-cyan-500" />
              </li>
              <li className="flex items-center justify-end text-gray-400">
                <span className="mr-2">مركز المحله الكبرى، محافظة الغربية</span>
                <MapPin className="h-5 w-5 text-cyan-500" />
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div className="text-right">
            <h3 className="text-lg font-bold mb-6 text-cyan-500">تابعنا</h3>
            <div className="flex justify-end space-x-4">
              <a href="#" className="bg-gray-800 p-3 rounded-full hover:bg-cyan-500 transition-colors duration-200">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="bg-gray-800 p-3 rounded-full hover:bg-cyan-500 transition-colors duration-200">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="bg-gray-800 p-3 rounded-full hover:bg-cyan-500 transition-colors duration-200">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
            <div className="mt-8">
              <h4 className="text-lg font-bold mb-4 text-cyan-500">النشرة البريدية</h4>
              <div className="flex">
                <button className="bg-cyan-500 text-white px-4 py-2 rounded-r-lg hover:bg-cyan-600 transition-colors duration-200">
                  اشتراك
                </button>
                <input
                  type="email"
                  placeholder="البريد الإلكتروني"
                  className="bg-gray-800 text-white px-4 py-2 rounded-l-lg flex-grow focus:outline-none focus:ring-2 focus:ring-cyan-500"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 mb-4 md:mb-0">
              © {new Date().getFullYear()} رفيق. جميع الحقوق محفوظة
            </div>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-400 hover:text-cyan-500 transition-colors duration-200">
                سياسة الخصوصية
              </a>
              <a href="#" className="text-gray-400 hover:text-cyan-500 transition-colors duration-200">
                الشروط والأحكام
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;