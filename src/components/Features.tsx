import React from 'react';
import { Clock, Shield, Stethoscope, FileText } from 'lucide-react';

function Features() {
  return (
    <section className="py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16 text-gray-800">لماذا رفيق؟</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <FeatureCard
            icon={<Clock className="w-12 h-12" />}
            title="خدمة 24 ساعة على مدار الأسبوع"
            description="لا داعي للانتظار في العيادات! يمكنك التواصل مع أطبائنا الآن"
          />
          <FeatureCard
            icon={<Shield className="w-12 h-12" />}
            title="خصوصية وأمان"
            description="نحرص على خصوصية معلوماتك الصحية ونستخدم أحدث التقنيات لحماية بياناتك"
          />
          <FeatureCard
            icon={<Stethoscope className="w-12 h-12" />}
            title="أطباء معتمدين"
            description="استشارات طبية مباشرة من الأطباء من خلال منصة طبية موثوقة ومتخصصة"
          />
          <FeatureCard
            icon={<FileText className="w-12 h-12" />}
            title="تكلفة مناسبة"
            description="خدمات رعاية صحية بتكلفة مناسبة تناسب احتياجاتك"
          />
        </div>
      </div>
    </section>
  );
}

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

function FeatureCard({ icon, title, description }: FeatureCardProps) {
  return (
    <div className="flex flex-col items-center text-center p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
      <div className="bg-cyan-500 text-white p-4 rounded-2xl mb-6 transform hover:scale-110 transition-transform duration-200">
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-4 text-gray-800">{title}</h3>
      <p className="text-gray-600 leading-relaxed">{description}</p>
    </div>
  );
}

export default Features;