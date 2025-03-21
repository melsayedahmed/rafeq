import React from 'react';
import { QRCodeSVG } from 'qrcode.react';
import { ArrowRight, Apple, SmartphoneNfc } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

function QRCode() {
  const navigate = useNavigate();

  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white py-16">
      <div className="container mx-auto px-4">
        <button
          onClick={() => navigate(-1)}
          className="flex items-center text-cyan-500 hover:text-cyan-600 mb-8 transition-colors duration-200"
        >
          <ArrowRight className="w-5 h-5 ml-2" />
          العودة
        </button>

        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="text-right order-2 md:order-1">
                <h1 className="text-3xl font-bold text-gray-800 mb-6">
                  حمّل تطبيق رفيق الآن
                </h1>
                <p className="text-gray-600 text-lg mb-8">
                  امسح رمز QR باستخدام كاميرا هاتفك للوصول مباشرة إلى تطبيق رفيق. ابدأ رحلتك نحو صحة نفسية أفضل اليوم.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-end">
                  <button className="bg-gray-900 text-white px-6 py-3 rounded-xl font-semibold flex items-center justify-center gap-2 hover:bg-gray-800 transition-colors">
                    <Apple className="w-6 h-6" />
                    App Store
                  </button>
                  <button className="bg-cyan-500 text-white px-6 py-3 rounded-xl font-semibold flex items-center justify-center gap-2 hover:bg-cyan-600 transition-colors">
                    <SmartphoneNfc className="w-6 h-6" />
                    Google Play
                  </button>
                </div>
              </div>

              <div className="flex justify-center items-center order-1 md:order-2">
                <div className="bg-white p-6 rounded-2xl shadow-lg">
                  <QRCodeSVG
                    value="https://rafeeq-app.com/download"
                    size={240}
                    level="H"
                    includeMargin={true}
                    imageSettings={{
                      src: "https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?auto=format&fit=crop&q=80&w=50",
                      x: undefined,
                      y: undefined,
                      height: 24,
                      width: 24,
                      excavate: true,
                    }}
                  />
                  <p className="text-gray-800 text-center mt-4 font-medium">
                    امسح الكود لتحميل التطبيق
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 text-center">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              مميزات تطبيق رفيق
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
              <div className="bg-white p-6 rounded-xl shadow-md">
                <h3 className="text-xl font-semibold mb-3 text-gray-800">سهولة الاستخدام</h3>
                <p className="text-gray-600">واجهة بسيطة وسلسة تمكنك من الوصول إلى خدماتنا بكل سهولة</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-md">
                <h3 className="text-xl font-semibold mb-3 text-gray-800">خصوصية تامة</h3>
                <p className="text-gray-600">نضمن حماية بياناتك وخصوصية جلساتك العلاجية</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-md">
                <h3 className="text-xl font-semibold mb-3 text-gray-800">دعم متواصل</h3>
                <p className="text-gray-600">فريق دعم متخصص متواجد على مدار الساعة لمساعدتك</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default QRCode;