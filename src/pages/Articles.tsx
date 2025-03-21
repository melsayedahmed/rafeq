import React from 'react';
import { Clock, Heart, MessageCircle } from 'lucide-react';

interface Article {
  id: number;
  title: string;
  excerpt: string;
  image: string;
  // author: string;
  date: string;
  readTime: string;
  // likes: number;
  // comments: number;
}

const articles: Article[] = [
  {
    id: 1,
    title: "كيف تتغلب على القلق الاجتماعي؟",
    excerpt: "دليل شامل للتعامل مع القلق الاجتماعي وبناء الثقة في المواقف الاجتماعية",
    image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80&w=1000",
    // author: "د. سارة الأحمد",
    date: "١٥ فبراير ٢٠٢٤",
    readTime: "٧ دقائق"
    // likes: 245,
    // comments: 23
  },
  {
    id: 2,
    title: "الصحة النفسية في مكان العمل",
    excerpt: "نصائح عملية للحفاظ على توازنك النفسي في بيئة العمل الضاغطة",
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=1000",
    // author: "د. محمد العمري",
    date: "١٢ فبراير ٢٠٢٤",
    readTime: "٥ دقائق"
    // likes: 189,
    // comments: 15
  },
  {
    id: 3,
    title: "تقنيات الاسترخاء للتخلص من التوتر",
    excerpt: "أساليب فعالة وتمارين عملية يمكنك ممارستها يومياً للتخلص من التوتر",
    image: "https://images.unsplash.com/photo-1545205597-3d9d02c29597?auto=format&fit=crop&q=80&w=1000",
    // author: "د. نورة السالم",
    date: "٨ فبراير ٢٠٢٤",
    readTime: "٦ دقائق"
    // likes: 312,
    // comments: 28
  }
];

function ArticleCard({ article }: { article: Article }) {
  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
      <img 
        src={article.image} 
        alt={article.title}
        className="w-full h-48 object-cover"
      />
      <div className="p-6">
        <h3 className="text-xl font-bold mb-3 text-gray-800 hover:text-cyan-500 transition-colors duration-200">
          {article.title}
        </h3>
        <p className="text-gray-600 mb-4">
          {article.excerpt}
        </p>
        <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
          <div className="flex items-center">
            <Clock className="w-4 h-4 ml-1" />
            {article.readTime}
          </div>
          <span>{article.date}</span>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            {/* <button className="flex items-center text-gray-500 hover:text-red-500 transition-colors duration-200">
              <Heart className="w-5 h-5 ml-1" />
              <span>{article.likes}</span>
            </button> */}
            {/* <button className="flex items-center text-gray-500 hover:text-cyan-500 transition-colors duration-200">
              <MessageCircle className="w-5 h-5 ml-1" />
              <span>{article.comments}</span>
            </button> */}
          </div>
          {/* <span className="text-cyan-500 font-medium">{article.author}</span> */}
        </div>
      </div>
    </div>
  );
}

function Articles() {
  return (
    <main className="py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-center mb-4 text-gray-800">
            مقالات في الصحة النفسية
          </h1>
          <p className="text-gray-600 text-center mb-12 text-lg">
            اكتشف أحدث المقالات والنصائح في مجال الصحة النفسية والتطور الشخصي
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.map(article => (
              <ArticleCard key={article.id} article={article} />
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}

export default Articles;