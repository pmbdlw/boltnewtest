import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import CommentSection from '@/components/CommentSection';
import { fetchArticles, fetchArticleById } from '@/lib/api';

export async function generateStaticParams() {
  const { articles } = await fetchArticles({ page: 1, pageSize: 100 });
  return articles.map((article) => ({
    id: article.id,
  }));
}

async function getArticle(id: string) {
  return await fetchArticleById(id);
}

export async function generateMetadata({ params }: { params: { id: string } }): Promise<Metadata> {
  const article = await getArticle(params.id);
  
  if (!article) {
    return {
      title: '文章未找到',
    };
  }

  return {
    title: article.title,
    description: article.content.substring(0, 160),
    openGraph: {
      title: article.title,
      description: article.content.substring(0, 160),
      type: 'article',
    },
  };
}

export default async function ArticlePage({ params }: { params: { id: string } }) {
  const article = await getArticle(params.id);

  if (!article) {
    notFound();
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <Card className="mb-8">
        <CardHeader>
          <CardTitle className="text-3xl font-bold text-blue-600">{article.title}</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="mb-4 text-gray-700 leading-relaxed">{article.content}</p>
          <p className="text-sm text-gray-500">分类: {article.category}</p>
        </CardContent>
      </Card>
      <CommentSection articleId={article.id} />
    </div>
  );
}