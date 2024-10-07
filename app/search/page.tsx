import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Link from 'next/link';
import { fetchArticles } from '@/lib/api';
import Pagination from '@/components/Pagination';

export default async function SearchPage({ searchParams }: { searchParams: { q: string, page: string } }) {
  const query = searchParams.q || '';
  const page = parseInt(searchParams.page) || 1;
  const pageSize = 6;
  const { articles, totalPages } = await fetchArticles({ page, pageSize, search: query });

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8 text-gray-800">搜索结果: {query}</h1>
      {articles.length === 0 ? (
        <p className="text-gray-600">没有找到相关文章</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {articles.map((article) => (
            <Link href={`/article/${article.id}`} key={article.id}>
              <Card className="hover:shadow-lg transition-shadow duration-300 bg-white">
                <CardHeader>
                  <CardTitle className="text-xl text-gray-800">{article.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{article.content.substring(0, 100)}...</p>
                  <p className="mt-2 text-sm text-gray-500">分类: {article.category}</p>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      )}
      <Pagination currentPage={page} totalPages={totalPages} />
    </div>
  );
}