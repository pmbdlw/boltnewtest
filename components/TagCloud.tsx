import Link from 'next/link';
import { Badge } from '@/components/ui/badge';

const tags = [
  "人工智能", "虚拟现实", "增强现实", "机器学习", "深度学习",
  "5G", "物联网", "区块链", "量子计算", "机器人",
  "自动驾驶", "生物科技", "可穿戴设备", "智能家居", "网络安全"
];

export default function TagCloud() {
  return (
    <section className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold mb-4 text-blue-600">标签云</h2>
      <div className="flex flex-wrap gap-2">
        {tags.map((tag) => (
          <Link href={`/tags/${encodeURIComponent(tag)}`} key={tag}>
            <Badge variant="secondary" className="cursor-pointer hover:bg-blue-500 hover:text-white transition-colors">
              {tag}
            </Badge>
          </Link>
        ))}
      </div>
    </section>
  );
}