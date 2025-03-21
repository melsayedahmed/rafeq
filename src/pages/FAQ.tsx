import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface FAQItem {
  id: number;
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    id: 1,
    question: "ما هو برنامج رفيق؟",
    answer: "رفيق هو منصة متخصصة في تقديم الدعم النفسي والعلاج السلوكي عبر الإنترنت. نوفر استشارات مع أخصائيين نفسيين معتمدين في بيئة آمنة وسرية تماماً."
  },
  {
    id: 2,
    question: "كيف يمكنني الاستفادة من خدمات رفيق؟",
    answer: "يمكنك التسجيل في المنصة واختيار الأخصائي المناسب لحالتك، ثم حجز موعد للجلسة الأولى. يمكنك اختيار بين الجلسات المرئية أو المحادثات الكتابية حسب ما يناسبك."
  },
  {
    id: 3,
    question: "هل جلسات العلاج النفسي سرية؟",
    answer: "نعم، نحن نضمن السرية التامة لجميع المستخدمين. جميع المحادثات والمعلومات الشخصية مشفرة ومحمية وفقاً لأعلى معايير الأمان والخصوصية."
  },
  {
    id: 4,
    question: "ما هي تكلفة الجلسات العلاجية؟",
    answer: "تختلف التكلفة حسب نوع الخدمة والأخصائي. نقدم باقات مختلفة تناسب جميع الاحتياجات والميزانيات. يمكنك الاطلاع على الأسعار التفصيلية في صفحة الباقات."
  },
  {
    id: 5,
    question: "هل الاستشارات النفسية عبر الإنترنت فعالة؟",
    answer: "نعم، أثبتت الدراسات العلمية أن العلاج النفسي عبر الإنترنت فعال بنفس مستوى الجلسات التقليدية. كما أنه يوفر المرونة والراحة للمستخدمين."
  },
  {
    id: 6,
    question: "كيف يمكنني اختيار الأخصائي المناسب؟",
    answer: "يمكنك تصفح ملفات الأخصائيين والاطلاع على تخصصاتهم وخبراتهم وتقييمات المستخدمين السابقين. كما يمكنك تحديد جلسة تعارف مجانية قصيرة قبل الالتزام بالجلسات."
  },
  {
    id: 7,
    question: "ما هي طرق الدفع المتاحة؟",
    answer: "نقبل جميع البطاقات الائتمانية الرئيسية (فيزا، ماستركارد) وخدمات الدفع الإلكتروني مثل PayPal. كما نوفر خيارات دفع مرنة وخطط تقسيط للباقات."
  },
  {
    id: 8,
    question: "ما؟",
    answer: "ة وخطط تقسيط للباقات."
  },
  {
    id: 9,
    question: "ما؟",
    answer: "ة وخطط تقسيط للباقات."
  },
  {
    id: 10,
    question: "ما؟",
    answer: "ة وخطط تقسيط للباقات."
  },
  {
    id: 11,
    question: "ما؟",
    answer: "ة وخطط تقسيط للباقات."
  },
  {
    id: 12,
    question: "ما؟",
    answer: "ة وخطط تقسيط للباقات."
  },
  {
    id: 13,
    question: "ما؟",
    answer: "ة وخطط تقسيط للباقات."
  },
  {
    id: 14,
    question: "ما؟",
    answer: "ة وخطط تقسيط للباقات."
  },
  {
    id: 15,
    question: "ما؟",
    answer: "ة وخطط تقسيط للباقات."
  }
];

function FAQItem({ item, isOpen, onToggle }: { item: FAQItem; isOpen: boolean; onToggle: () => void }) {
  return (
    <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden">
      <button
        className="w-full px-6 py-4 text-right flex items-center justify-between cursor-pointer"
        onClick={onToggle}
      >
        <span className="text-cyan-500">
          {isOpen ? <ChevronUp className="w-6 h-6" /> : <ChevronDown className="w-6 h-6" />}
        </span>
        <h3 className="text-lg font-semibold text-gray-800">{item.question}</h3>
      </button>
      
      <div 
        className={`px-6 transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-96 py-4' : 'max-h-0'
        } overflow-hidden`}
      >
        <p className="text-gray-600 text-right leading-relaxed">{item.answer}</p>
      </div>
    </div>
  );
}

function FAQ() {
  const [openItems, setOpenItems] = useState<number[]>([]);

  const toggleItem = (itemId: number) => {
    setOpenItems(prev => 
      prev.includes(itemId)
        ? prev.filter(id => id !== itemId)
        : [...prev, itemId]
    );
  };

  return (
    <main className="py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold text-center mb-4 text-gray-800">
            الأسئلة 
          </h1>
          <p className="text-gray-600 text-center mb-12 text-lg">
            إليك إجابات عن الأسئلة الأكثر شيوعاً حول خدمات رفيق والعلاج النفسي
          </p>
          
          <div className="space-y-4">
            {faqData.map(item => (
              <FAQItem
                key={item.id}
                item={item}
                isOpen={openItems.includes(item.id)}
                onToggle={() => toggleItem(item.id)}
              />
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-gray-600 mb-6">
              لم تجد إجابة لسؤالك؟ تواصل معنا مباشرة
            </p>
            <button className="bg-cyan-500 text-white px-8 py-3 rounded-full font-semibold hover:bg-cyan-600 transition-all duration-200 transform hover:scale-105">
              تواصل معنا
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}

export default FAQ;