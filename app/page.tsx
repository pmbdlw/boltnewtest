import FeaturedArticles from '@/components/FeaturedArticles';
import RecentArticles from '@/components/RecentArticles';
import TagCloud from '@/components/TagCloud';
import Pagination from '@/components/Pagination';
import { fetchArticles } from '@/lib/api';

export default async function Home({ searchParams }: { searchParams: { page: string } }) {
  const page = parseInt(searchParams.page) || 1;
  const pageSize = 6; // 每页显示的文章数量

  const { articles, totalPages } = await fetchArticles({ page, pageSize });

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8 text-center text-blue-600">欢迎来到前沿科技门户</h1>
      <FeaturedArticles />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
        <div className="md:col-span-2">
          <RecentArticles articles={articles} />
          <Pagination currentPage={page} totalPages={totalPages} />
        </div>
        <div>
          <TagCloud />
        </div>
      </div>
    </div>
  );
}