"use client";

import { useState, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ExternalLink, Plus } from 'lucide-react';
import EnhancedHeroSection from '@/components/ui/EnhancedHeroSection'; // 新しいコンポーネントをインポート

const PaginationDots = ({ total, current }: { total: number; current: number }) => (
  <div className="flex justify-center gap-2 my-8">
    {Array.from({ length: total }, (_, i) => (
      <button
        key={i}
        className={`w-3 h-3 rounded-full transition-all duration-200 ${
          i === current 
            ? 'bg-green-600 scale-110' 
            : 'bg-green-300 hover:bg-green-400'
        }`}
      />
    ))}
  </div>
);

export default function Home() {
  const [currentPage, setCurrentPage] = useState(0);
  const totalPages = 5;

  // アニメーション用の状態
  const [animateHero, setAnimateHero] = useState(false);

  useEffect(() => {
    // マウント時にアニメーション開始
    setTimeout(() => setAnimateHero(true), 200);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-900 to-green-800">
      {/* Header */}
      <header className="w-full bg-green-800 shadow-sm border-b border-green-700">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex justify-center">
            <Badge className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 text-sm font-medium">
              AI Prompt
            </Badge>
          </div>
        </div>
      </header>

      <EnhancedHeroSection />

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 py-12">
        {/* Prompt Cards Grid */}
        <section className="mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
            {Array.from({ length: 5 }, (_, i) => (
              <Card key={i} className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer bg-white border-green-200 hover:border-green-400">
                <CardContent className="p-6">
                  <div className="w-full h-32 bg-gradient-to-br from-green-100 to-green-200 rounded-lg mb-4 flex items-center justify-center group-hover:from-green-200 group-hover:to-green-300 transition-all duration-300">
                    <div className="text-green-600 text-4xl font-light">AI</div>
                  </div>
                  <div className="space-y-2">
                    <div className="h-4 bg-green-200 rounded animate-pulse"></div>
                    <div className="h-3 bg-green-100 rounded w-3/4 animate-pulse"></div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          <PaginationDots total={totalPages} current={currentPage} />
        </section>

        {/* Website Navigation */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white text-center mb-8">サイト目次</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
            {[
              { title: "ホーム", description: "メインページ", image: "https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&w=400" },
              { title: "プロンプト集", description: "AI画像生成用プロンプト", image: "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=400" },
              { title: "カテゴリ", description: "ジャンル別分類", image: "https://images.pexels.com/photos/1181677/pexels-photo-1181677.jpeg?auto=compress&cs=tinysrgb&w=400" },
              { title: "チュートリアル", description: "使い方ガイド", image: "https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=400" },
              { title: "お問い合わせ", description: "サポート・連絡", image: "https://images.pexels.com/photos/1181298/pexels-photo-1181298.jpeg?auto=compress&cs=tinysrgb&w=400" }
            ].map((page, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 cursor-pointer bg-white border-white/20 hover:border-white/40 overflow-hidden">
                <CardContent className="p-0">
                  <div className="relative h-48 overflow-hidden">
                    <img 
                      src={page.image} 
                      alt={page.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-green-900/80 via-green-900/20 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                      <h3 className="text-lg font-bold mb-1">{page.title}</h3>
                      <p className="text-green-100 text-sm">{page.description}</p>
                    </div>
                  </div>
                  <div className="p-4">
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="w-full border-green-600 text-green-800 bg-white hover:bg-green-50 hover:border-green-700 transition-all duration-300"
                    >
                      詳細を見る
                      <ExternalLink className="w-3 h-3 ml-2" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Content Sections */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {/* Self Introduction */}
          <Card className="h-96 bg-white shadow-lg border-green-200">
            <CardContent className="p-6 h-full">
              <h2 className="text-2xl font-bold text-green-800 mb-4">自己紹介</h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  AI画像生成に特化したプロンプトエンジニアとして、
                  Stable Diffusionで高品質な画像を生成するための
                  プロンプト集を提供しています。
                </p>
                <p>
                  これまでに1000以上のプロンプトを作成し、
                  多くのクリエイターの皆様にご利用いただいています。
                </p>
                <p>
                  初心者の方からプロの方まで、どなたでも使いやすい
                  プロンプトを心がけて作成しています。
                </p>
              </div>
              <div className="mt-6">
                <Button variant="outline" className="border-green-400 text-green-700 hover:bg-green-50">
                  詳細を見る
                  <ExternalLink className="w-4 h-4 ml-2" />
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Advertisement */}
          <Card className="h-96 bg-gradient-to-br from-green-100 to-green-200 shadow-lg border-green-300">
            <CardContent className="p-6 h-full flex flex-col">
              <h2 className="text-2xl font-bold text-green-800 mb-4">Advertisement</h2>
              <p className="text-green-700 mb-4">（アフィリエイト広告を張る）</p>
              
              <div className="flex-1 bg-white rounded-lg p-8 flex items-center justify-center border-2 border-dashed border-green-400">
                <div className="text-center text-green-600">
                  <div className="w-16 h-16 mx-auto mb-4 bg-green-100 rounded-full flex items-center justify-center">
                    <Plus className="w-8 h-8" />
                  </div>
                  <p className="text-sm">広告スペース</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>
      </main>

      {/* Floating Action Button */}
      <div className="fixed bottom-8 right-8 z-50">
        <Button 
          size="lg" 
          className="bg-green-700 hover:bg-green-800 text-white shadow-lg hover:shadow-xl transition-all duration-300 rounded-full w-14 h-14 p-0"
        >
          <Plus className="w-6 h-6" />
        </Button>
      </div>

      {/* Footer */}
      <footer className="bg-green-900 text-white py-8 mt-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-center items-center gap-6 text-sm">
            <a 
              href="#" 
              className="hover:text-green-300 transition-colors duration-200"
            >
              プライバシーポリシー
            </a>
            <span className="hidden md:block text-green-600">|</span>
            <a 
              href="#" 
              className="hover:text-green-300 transition-colors duration-200"
            >
              お問い合わせ
            </a>
          </div>
          <div className="text-center mt-6 text-green-400 text-xs">
            © 2025 AI Illust Prompt Library. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}