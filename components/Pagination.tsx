import Link from 'next/link';
import { Button } from '@/components/ui/button';

interface PaginationProps {
  currentPage: number;
  totalPages: number;
}

export default function Pagination({ currentPage, totalPages }: PaginationProps) {
  return (
    <div className="flex justify-center items-center space-x-2 mt-8">
      {currentPage > 1 && (
        <Link href={`/?page=${currentPage - 1}`}>
          <Button variant="outline">上一页</Button>
        </Link>
      )}
      <span className="text-gray-600">
        第 {currentPage} 页，共 {totalPages} 页
      </span>
      {currentPage < totalPages && (
        <Link href={`/?page=${currentPage + 1}`}>
          <Button variant="outline">下一页</Button>
        </Link>
      )}
    </div>
  );
}