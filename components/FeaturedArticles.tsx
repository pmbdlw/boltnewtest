"use client";

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';

const featuredArticles = [
  { id: 1, title: "AI革命：改变我们的生活方式", category: "AI" },
  { id: 2, title: "VR技术在教育领域的应用", category: "VR/AR" },
  { id: 3, title: "量子计算：未来科技的关键", category: "科技" },
  { id: 4, title: "AR在医疗手术中的突破性应用", category: "VR/AR" },
  { id: 5, title: "5G如何推动物联网发展", category: "科技" },
];

export default function FeaturedArticles() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="mt-8">
      <h2 className="text-3xl font-semibold mb-4">热门文章</h2>
      <Carousel className="w-full max-w-4xl mx-auto">
        <CarouselContent>
          {featuredArticles.map((article, index) => (
            <CarouselItem key={article.id}>
              <Card className={`h-64 ${index === activeIndex ? 'border-primary' : ''}`}>
                <CardHeader>
                  <CardTitle>{article.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">分类: {article.category}</p>
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </section>
  );
}