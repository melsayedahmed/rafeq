import React from "react";
import { useParams } from "react-router-dom";

interface Article {
  id: number;
  title: string;
  excerpt: string;
  image: string;
  date: string;
  readTime: string;
  content: string;
}

const articles: Article[] = [
  {
    id: 1,
    title: "كيف تتغلب على القلق الاجتماعي؟",
    excerpt: "دليل شامل للتعامل مع القلق الاجتماعي وبناء الثقة في المواقف الاجتماعية",
    image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80&w=1000", // Same image as in Articles.tsx
    date: "١٥ فبراير ٢٠٢٤",
    readTime: "٧ دقائق",
    content: "هنا محتوى المقال الأول بالتفصيل.هنا محتوى المقال الأول بالتفصيل.هنا محتوى المقال الأول بالتفصيل.هنا محتوى المقال الأول بالتفصيل.هنا محتوى المقال الأول بالتفصيل.هنا محتوى المقال الأول بالتفصيل.",
  },
  {
    id: 2,
    title: "الصحة النفسية في مكان العمل",
    excerpt: "نصائح عملية للحفاظ على توازنك النفسي في بيئة العمل الضاغطة",
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=1000", // Same image as in Articles.tsx
    date: "١٢ فبراير ٢٠٢٤",
    readTime: "٥ دقائق",
    content: "هنا محتوى المقال الثاني بالتفصيل.هنا محتوى المقال الثاني بالتفصيل.هنا محتوى المقال الثاني بالتفصيل.هنا محتوى المقال الثاني بالتفصيل.هنا محتوى المقال الثاني بالتفصيل.",
  },
  {
    id: 3,
    title: "تقنيات الاسترخاء للتخلص من التوتر",
    excerpt: "أساليب فعالة وتمارين عملية يمكنك ممارستها يومياً للتخلص من التوتر",
    image: "https://images.unsplash.com/photo-1545205597-3d9d02c29597?auto=format&fit=crop&q=80&w=1000",
    date: "٨ فبراير ٢٠٢٤",
    readTime: "٦ دقائق",// Same image as in Articles.tsx
    content: "هنا محتوى المقال الثالث بالتفصيل.",
  },
];

const ArticleDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const article = articles.find((a) => a.id === Number(id));

  if (!article) {
    return <div>Article not found!</div>;
  }

  return (
    <main className="py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-3xl shadow-xl p-8">
            <img
              src={article.image}
              alt={article.title}
              className="w-full h-auto object-cover rounded-2xl mb-8"
            />
            <h1 className="text-3xl font-bold text-gray-800 mb-4">{article.title}</h1>
            <div className="text-gray-600 mb-6">
              <span className="mr-2">{article.date}</span>
            </div>
            <div className="text-gray-700">
              <p>{article.content}</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ArticleDetail;