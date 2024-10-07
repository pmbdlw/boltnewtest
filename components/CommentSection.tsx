"use client";

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';

export default function CommentSection({ articleId }: { articleId: string }) {
  const [comments, setComments] = useState([
    { id: 1, author: "张三", content: "很棒的文章!", createdAt: "2024-03-15" },
    { id: 2, author: "李四", content: "受益匪浅", createdAt: "2024-03-16" },
  ]);
  const [newComment, setNewComment] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (newComment.trim()) {
      setComments([...comments, {
        id: comments.length + 1,
        author: "当前用户",
        content: newComment,
        createdAt: new Date().toISOString().split('T')[0]
      }]);
      setNewComment('');
    }
  };

  return (
    <div className="mt-8">
      <h2 className="text-2xl font-bold mb-4">评论</h2>
      {comments.map((comment) => (
        <div key={comment.id} className="mb-4 p-4 bg-gray-100 rounded">
          <p className="font-bold">{comment.author}</p>
          <p>{comment.content}</p>
          <p className="text-sm text-gray-500">{comment.createdAt}</p>
        </div>
      ))}
      <form onSubmit={handleSubmit} className="mt-4">
        <Textarea
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          placeholder="写下你的评论..."
          className="mb-2"
        />
        <Button type="submit">提交评论</Button>
      </form>
    </div>
  );
}