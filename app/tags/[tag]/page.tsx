import { notFound } from 'next/navigation';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Link from 'next/link';
import { fetchArticles } from '@/lib/api';
import Pagination from '@/components/Pagination';

export default async function TagPage({ params, searchParams }: { params: { tag: string }, searchParams: { page: string } }) {
  const page = parseInt(searchParams.page) || 1;
  const pageSize = 6;
  const { articles, totalPages } = await fetchArticles({ page, pageSize, tag: params.tag });

  if (articles.length === 0) {
    notFound();
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8 text-gray-800">标签: {params.tag}</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {articles.map((article) => (
          <Link href={`/article/${article.id}`} key={article.id}>
            <Card className="hover:shadow-lg transition-shadow duration-300 bg-white">
              <CardHeader>
                <CardTitle className="text-xl text-gray-800">{article.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">{article.content.substring(0, 100)}...</p>
                <div className="mt-2">
                  {article.tags.map(tag => (
                    <span key={tag} className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                      {tag}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
      <Pagination currentPage={page} totalPages={totalPages} />
    </div>
  );
}