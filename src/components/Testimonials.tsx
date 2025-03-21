import React from 'react';
import { Star } from 'lucide-react';

interface TestimonialProps {
  name: string;
  text: string;
  rating: number;
}

function TestimonialCard({ name, text, rating }: TestimonialProps) {
  return (
    <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
      <p className="text-gray-600 mb-6 text-right leading-relaxed text-lg">
        {text}
      </p>
      <div className="flex items-center justify-between">
        <div className="flex">
          {[...Array(rating)].map((_, i) => (
            <Star
              key={i}
              className="w-5 h-5 text-yellow-400 fill-current"
            />
          ))}
        </div>
        <span className="font-bold text-gray-800 text-lg">{name}</span>
      </div>
    </div>
  );
}

function Testimonials() {
  const testimonials = [
    {
      name: "سارة. ع",
      text: "أصبحت سهولة الوصول إلى الأخصائيين النفسيين والجلسات الطبية النفسية في رفيق تجعل العلاج النفسي بشكل أفضل لي شخصياً",
      rating: 5
    },
    {
      name: "احمد. ر",
      text: "التجربة كانت رائعة! كنت مترددة في البداية لكن المعالجين كل مرة يساعدوني وساعدوني على التغلب على القلق الذي كنت أعاني منه. الشعر بتحسن كبير الآن",
      rating: 5
    },
    {
      name: "نور. ن",
      text: "أفضل منصة للعلاج النفسي التي جربتها. استخدمت رفيق لأنه يوفر بيئة آمنة وسرية وكانوا دائماً لهم",
      rating: 5
    },
    {
      name: "خالد. ر",
      text: "الخدمة ممتازة والدعم سريع جداً. أنصحت وكانت هناك جلسات أطفال تجربة رائعة بشكل عام",
      rating: 5
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-8 text-gray-800">
            آراء المستخدمين
          </h2>
          
          <p className="text-gray-600 text-center mb-16 leading-relaxed text-lg">
            نحن في رفيق نحرص على تقديم أفضل تجربة للعلاج النفسي بكل خصوصية وأمان. إليك بعض آراء
            مستخدمينا الذين خاضوا رحلة الدعم النفسي معنا وشاركوا تجاربهم الصادقة حول مدى تأثير
            الاستشارات على حياتهم
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard
                key={index}
                name={testimonial.name}
                text={testimonial.text}
                rating={testimonial.rating}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;