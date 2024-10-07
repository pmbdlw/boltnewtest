import { fetchArticles as mockFetchArticles, fetchArticleById as mockFetchArticleById, fetchComments as mockFetchComments, postComment as mockPostComment } from './mockApi';

export async function fetchArticles(params: { page: number; pageSize: number; category?: string; tag?: string; search?: string }) {
  // 在实际项目中，这里会是一个真正的 API 调用
  return mockFetchArticles(params);
}

export async function fetchArticleById(id: string) {
  // 在实际项目中，这里会是一个真正的 API 调用
  return mockFetchArticleById(id);
}

export async function fetchComments(articleId: string) {
  // 在实际项目中，这里会是一个真正的 API 调用
  return mockFetchComments(articleId);
}

export async function postComment(articleId: string, comment: { author: string, content: string }) {
  // 在实际项目中，这里会是一个真正的 API 调用
  return mockPostComment(articleId, comment);
}