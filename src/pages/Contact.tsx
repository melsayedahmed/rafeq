import React from 'react';
import { Mail, Phone, MapPin, Clock, Send } from 'lucide-react';

function Contact() {
  return (
    <main className="py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">تواصل معنا</h1>
            <p className="text-gray-600 text-lg">
              نحن هنا لمساعدتك. تواصل معنا بأي استفسار أو للحصول على الدعم
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            {/* Contact Info Cards */}
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 text-center">
              <div className="bg-cyan-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Phone className="w-8 h-8 text-cyan-500" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">اتصل بنا</h3>
              <p className="text-gray-600">01004614868</p>
              <p className="text-gray-600">01226203783</p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 text-center">
              <div className="bg-cyan-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Mail className="w-8 h-8 text-cyan-500" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">راسلنا</h3>
              <p className="text-gray-600">rehammostafa078@gmail.com</p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 text-center">
              <div className="bg-cyan-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Clock className="w-8 h-8 text-cyan-500" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">ساعات العمل</h3>
              <p className="text-gray-600">الأحد - الخميس: 9 صباحاً - 8 مساءً</p>
              <p className="text-gray-600">الجمعة - السبت: 10 صباحاً - 6 مساءً</p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h2 className="text-2xl font-bold text-gray-800 mb-6 text-right">أرسل رسالتك</h2>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-gray-700 text-right mb-2">الاسم الكامل</label>
                    <input
                      type="text"
                      className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-200"
                      placeholder="أدخل اسمك الكامل"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 text-right mb-2">البريد الإلكتروني</label>
                    <input
                      type="email"
                      className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-200"
                      placeholder="أدخل بريدك الإلكتروني"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-gray-700 text-right mb-2">الموضوع</label>
                  <input
                    type="text"
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-200"
                    placeholder="موضوع رسالتك"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 text-right mb-2">الرسالة</label>
                  <textarea
                    rows={5}
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-200"
                    placeholder="اكتب رسالتك هنا..."
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-cyan-500 text-white py-3 rounded-lg font-semibold hover:bg-cyan-600 transition-colors duration-200 flex items-center justify-center gap-2"
                >
                  <Send className="w-5 h-5" />
                  إرسال الرسالة
                </button>
              </form>
            </div>

            {/* Location Map */}
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h2 className="text-2xl font-bold text-gray-800 mb-6 text-right">موقعنا</h2>
              <div className="rounded-lg overflow-hidden h-[400px] mb-6">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3423.199665940879!2d31.115736423919508!3d30.90904267708946!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14f7bb9f4eb8a57d%3A0x7eeadd7d73abb9a5!2z2KfZhNmF2LnZh9ivINin2YTYudin2YTZiiDZhNmE2KfYr9in2LHYqSDYqNin2YTZhdit2YTYqSDYp9mE2YPYqNix2Yk!5e0!3m2!1sar!2seg!4v1742518511007!5m2!1sar!2seg"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
              <div className="flex items-center justify-end gap-3 text-gray-600">
                <div className="text-right">
                  <h3 className="font-semibold text-gray-800">المقر الرئيسي</h3>
                  <p>طريق طنطا - المحلة الكبري، صفط تراب</p>
                  <p> مركز المحله الكبرى، محافظة الغربية</p>
                </div>
                <MapPin className="w-6 h-6 text-cyan-500" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Contact;