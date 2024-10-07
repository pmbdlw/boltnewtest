import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

interface Article {
  id: string;
  title: string;
  content: string;
  category: string;
}

interface RecentArticlesProps {
  articles: Article[];
}

export default function RecentArticles({ articles }: RecentArticlesProps) {
  return (
    <section>
      <h2 className="text-2xl font-semibold mb-4 text-blue-600">最新文章</h2>
      <div className="space-y-4">
        {articles.map((article) => (
          <Link href={`/article/${article.id}`} key={article.id}>
            <Card className="hover:shadow-lg transition-shadow duration-300 bg-white border-l-4 border-blue-500">
              <CardHeader>
                <CardTitle className="text-xl text-blue-600">{article.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">{article.content.substring(0, 100)}...</p>
                <p className="mt-2 text-sm text-gray-500">分类: {article.category}</p>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </section>
  );
}