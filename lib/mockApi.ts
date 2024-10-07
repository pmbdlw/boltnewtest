interface Article {
  id: string;
  title: string;
  content: string;
  category: string;
  tags: string[];
}

const mockArticles: Article[] = [
  {
    id: '1',
    title: 'AI革命：改变我们的生活方式',
    content: 'AI技术正在迅速发展，影响着我们生活的方方面面。从智能助手到自动驾驶汽车，AI正在重塑我们的日常生活和工作方式。',
    category: 'AI',
    tags: ['人工智能', '机器学习', '深度学习']
  },
  {
    id: '2',
    title: 'VR技术在教育领域的应用',
    content: '虚拟现实技术正在教育领域掀起一场革命。通过immersive体验，学生们可以更直观地理解复杂概念，提高学习效率。',
    category: 'VR/AR',
    tags: ['虚拟现实', '教育科技', '创新教学']
  },
  {
    id: '3',
    title: '量子计算：未来科技的关键',
    content: '量子计算有潜力解决传统计算机难以处理的复杂问题。从药物研发到气候模拟，量子计算可能带来突破性进展。',
    category: '科技',
    tags: ['量子计算', '前沿科技', '计算机科学']
  },
  {
    id: '4',
    title: 'AR在医疗手术中的突破性应用',
    content: '增强现实技术正在改变医疗手术的方式。通过AR设备，外科医生可以在手术过程中获得实时的患者数据和3D可视化信息。',
    category: 'VR/AR',
    tags: ['增强现实', '医疗科技', '外科手术']
  },
  {
    id: '5',
    title: '5G如何推动物联网发展',
    content: '5G网络的高速度和低延迟特性为物联网的发展提供了强大动力。从智能家居到工业自动化，5G正在加速IoT的普及。',
    category: '科技',
    tags: ['5G', '物联网', '智能设备']
  },
  {
    id: '6',
    title: '机器学习在金融领域的应用',
    content: '机器学习算法正在金融行业发挥越来越重要的作用。从风险评估到个性化投资建议，AI正在改变金融服务的方式。',
    category: 'AI',
    tags: ['机器学习', '金融科技', '人工智能']
  }
];

export function fetchArticles({ page = 1, pageSize = 6, category, tag, search }: { page?: number; pageSize?: number; category?: string; tag?: string; search?: string }) {
  let filteredArticles = [...mockArticles];

  if (category) {
    filteredArticles = filteredArticles.filter(article => article.category === category);
  }

  if (tag) {
    filteredArticles = filteredArticles.filter(article => article.tags.includes(tag));
  }

  if (search) {
    const searchLower = search.toLowerCase();
    filteredArticles = filteredArticles.filter(article => 
      article.title.toLowerCase().includes(searchLower) || 
      article.content.toLowerCase().includes(searchLower)
    );
  }

  const totalArticles = filteredArticles.length;
  const totalPages = Math.ceil(totalArticles / pageSize);

  const startIndex = (page - 1) * pageSize;
  const endIndex = startIndex + pageSize;
  const paginatedArticles = filteredArticles.slice(startIndex, endIndex);

  return {
    articles: paginatedArticles,
    totalPages: totalPages
  };
}

export function fetchArticleById(id: string) {
  return mockArticles.find(article => article.id === id);
}

const mockComments = [
  { id: '1', articleId: '1', author: '张三', content: '非常有见地的文章！', createdAt: '2024-03-15' },
  { id: '2', articleId: '1', author: '李四', content: '我学到了很多，谢谢分享。', createdAt: '2024-03-16' },
];

export function fetchComments(articleId: string) {
  return mockComments.filter(comment => comment.articleId === articleId);
}

export function postComment(articleId: string, comment: { author: string; content: string }) {
  const newComment = {
    id: (mockComments.length + 1).toString(),
    articleId,
    ...comment,
    createdAt: new Date().toISOString().split('T')[0]
  };
  mockComments.push(newComment);
  return newComment;
}