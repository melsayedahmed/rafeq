import { Brain, Heart, Users, Shield, Download, Apple, SmartphoneNfc, MessageSquare } from 'lucide-react';
import { Link } from 'react-router-dom';

const questions = [
    {
      id: 1,
      question: "كيف أعرف أنني مصاب باضطراب الوسواس القهري؟",
      date: "2025-03-18",
    },
    {
      id: 2,
      question: "كيف يؤثر التوتر المستمر على الصحة النفسية والجسدية؟",
      date: "2025-03-18",
    },
    {
      id: 3,
      question: "هل الاضطرابات النفسية وراثية؟",
      date: "2025-03-18",
    },
  ];

const QAComponent = () => {
    return (
      <div className="p-6 max-w-5xl mx-auto text-right rtl flex gap-6"style={{ display: "flex", justifyContent: "center", flexDirection: "row-reverse" }}>
         <h2 className="text-lg font-semibold text-cyan-600 mb-4">أسئلة وأجوبة</h2>
        <div className="flex flex-col gap-4">
          {questions.map((q) => (
            <div
              key={q.id}
              className="bg-white shadow-md rounded-lg p-4 border border-gray-200 flex flex-col"
            >
               <div className="text-sm text-gray-500 flex justify-between items-center">
                 <span className="order-1">{q.date}</span>
              </div>

              
              <p className="text-gray-700 text-md font-medium">{q.question}</p>

              <div className="mt-3 flex justify-start">

              <Link to={"/QaAnswer"} className="mt-3 bg-cyan-500 text-white px-4 py-2 rounded-md hover:bg-cyan-600 transition text-center">
  إجابة الطبيب
</Link>

              </div>
            </div>
          ))}
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

export default QAComponent;