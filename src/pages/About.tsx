import React from 'react';
import { Brain, Heart, Users, Shield, Download, Apple, SmartphoneNfc } from 'lucide-react';

function About() {
  return (
    <main className="py-16">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className="text-center mb-20">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            <span className="text-cyan-500">رفيق</span> - شريكك في رحلة الصحة النفسية
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            نحن نؤمن بأن الصحة النفسية حق للجميع، ونسعى لتوفير خدمات نفسية عالية الجودة بطريقة سهلة وآمنة
          </p>
        </div>

        {/* Mission & Vision */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
          <div className="bg-white p-8 rounded-2xl shadow-lg">
            <h2 className="text-2xl font-bold text-gray-800 mb-4 text-right">رؤيتنا</h2>
            <p className="text-gray-600 text-right leading-relaxed">
              نطمح أن نكون المنصة الرائدة في تقديم خدمات الصحة النفسية في العالم العربي،
              ونسعى لتغيير النظرة المجتمعية تجاه العلاج النفسي وجعله أكثر قبولاً وسهولة.
            </p>
          </div>
          <div className="bg-white p-8 rounded-2xl shadow-lg">
            <h2 className="text-2xl font-bold text-gray-800 mb-4 text-right">رسالتنا</h2>
            <p className="text-gray-600 text-right leading-relaxed">
              توفير منصة آمنة وموثوقة تجمع أفضل المختصين النفسيين مع الأشخاص الذين يحتاجون
              للدعم النفسي، مع ضمان الخصوصية والجودة العالية في تقديم الخدمة.
            </p>
          </div>
        </div>

        {/* Values */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-12">قيمنا</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-lg text-center">
              <div className="bg-cyan-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="w-8 h-8 text-cyan-500" />
              </div>
              <h3 className="text-xl font-bold mb-2">الرعاية</h3>
              <p className="text-gray-600">نهتم بصحتك النفسية ونضعها في المقام الأول</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg text-center">
              <div className="bg-cyan-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-cyan-500" />
              </div>
              <h3 className="text-xl font-bold mb-2">الأمان</h3>
              <p className="text-gray-600">نضمن خصوصية وسرية جميع المعلومات والجلسات</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg text-center">
              <div className="bg-cyan-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Brain className="w-8 h-8 text-cyan-500" />
              </div>
              <h3 className="text-xl font-bold mb-2">المهنية</h3>
              <p className="text-gray-600">نعمل مع أفضل المختصين المعتمدين في المجال</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg text-center">
              <div className="bg-cyan-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-cyan-500" />
              </div>
              <h3 className="text-xl font-bold mb-2">الوصول</h3>
              <p className="text-gray-600">نجعل العلاج النفسي متاحاً للجميع وبأسعار معقولة</p>
            </div>
          </div>
        </div>

     

        {/* Statistics */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-xl shadow-lg text-center">
            <div className="text-4xl font-bold text-cyan-500 mb-2">+50,000</div>
            <p className="text-gray-600">مستخدم نشط</p>
          </div>
          <div className="bg-white p-8 rounded-xl shadow-lg text-center">
            <div className="text-4xl font-bold text-cyan-500 mb-2">+200</div>
            <p className="text-gray-600">معالج نفسي معتمد</p>
          </div>
          <div className="bg-white p-8 rounded-xl shadow-lg text-center">
            <div className="text-4xl font-bold text-cyan-500 mb-2">+10,000</div>
            <p className="text-gray-600">جلسة علاجية ناجحة</p>
          </div>
        </div>
      </div>
    </main>
  );
}

export default About;