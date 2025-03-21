import React from 'react';
import { Brain, Heart, Users, Shield, Download, Apple, SmartphoneNfc, MessageSquare } from 'lucide-react';

const questions = [
    {
      id: 1,
      question: "كيف أعرف أنني مصاب باضطراب الوسواس القهري؟",
      author: "د. محمد أحمد",
      date: "10 مارس 2025",
      answer: "إذا كنت تعاني من أفكار متكررة غير مرغوبة (وساوس) تدفعك للقيام بسلوكيات قهرية لتخفيف القلق، مثل غسل اليدين بشكل متكرر أو التحقق المستمر من الأشياء، فقد تكون مصابًا باضطراب الوسواس القهري."
    }
  ];
  
const QaAnswer = () => {
    return (
      <div className="p-6 max-w-5xl mx-auto text-right rtl flex gap-6"style={{ display: "flex", justifyContent: "center", flexDirection: "row-reverse" }}>
        {/* قسم الأسئلة */}
        <div className="flex-1">
          <h2 className="text-lg font-semibold text-black mb-4"> سؤال من:  <span className="text-cyan-600 ">انثي </span> </h2>
          <div className="flex flex-col gap-4">
            {questions.map((q) => (
              <div
                key={q.id}
                className="bg-white shadow-md rounded-lg p-6 border border-gray-200 flex flex-col"
              >
                <p className="text-gray-900 text-lg font-semibold mb-2">{q.question}</p>
                <hr className="mb-2" />
                <span className="text-gray-500 text-sm mb-2">{q.date}</span>
                <div className="flex justify-between items-center mb-3">
                  <span className="text-cyan-600 font-semibold">{q.author}</span>
                </div>
                <p className="text-gray-700 text-md mb-4">{q.answer}</p>
                <div className="text-cyan-600 cursor-pointer font-semibold">
                  <span className="text-black">هل تريد إجابة أكثر تفصيلاً؟ </span>
                  <a href="#" className="text-cyan-500">تحدث مع الطبيب الآن</a>
                </div>
              </div>
            ))}
          </div>
        </div>
        
          {/* كارد السؤال للطبيب */}
          <div className="w-64 flex flex-col">
          <div className="bg-white shadow-md rounded-lg p-6 border border-gray-200 text-center flex-grow flex flex-col justify-center">
            <MessageSquare className="mx-auto text-cyan-500" size={40} />
            <p className="text-gray-700 mt-2">لديك سؤال للطبيب؟</p>
            <button className="mt-3 bg-cyan-500 text-white px-4 py-2 rounded-md hover:bg-cyan-600 transition">
              اسأل طبيب
            </button>
          </div>
        </div>
      </div>
    );
};

export default QaAnswer;
