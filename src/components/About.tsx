import React from 'react';

function About() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8 text-gray-800 relative inline-block">
            <span className="absolute -top-6 right-0 text-6xl text-cyan-200 opacity-50">رفيق</span>
            رفيق - منصتك للدعم والعلاج النفسي
          </h2>
          
          <p className="text-gray-600 mb-12 leading-relaxed text-lg">
            رفيق هو منصة متخصصة في تقديم الدعم النفسي والعلاج السلوكي من خلال استشارات
            آمنة وسرية مع نخبة من الأخصائيين والمعالجين النفسيين المعتمدين. نساعدك على تجاوز
            التحديات النفسية وتحقيق التوازن في حياتك من خلال جلسات علاجية مصممة خصيصاً لك.
          </p>

          <p className="text-gray-700 font-bold mb-12 text-xl">
            رفيق هنا ليكون دعمك النفسي في كل خطوة
          </p>

          
        </div>
      </div>
    </section>
  );
}

export default About;