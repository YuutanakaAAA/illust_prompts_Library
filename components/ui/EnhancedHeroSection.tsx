import { useState, useEffect } from 'react';

export default function EnhancedHeroSection() {
  const [animateHero, setAnimateHero] = useState(false);
  const [charAnimIndex, setCharAnimIndex] = useState(0);
  
  // タイトルテキストを1文字ずつ配列化
  const titleText = "AI Illust \nPrompt Library";
  const titleChars = titleText.split('');
  
  // サブタイトルテキスト
  const subtitleText = "Stable Diffusion用の高品質なプロンプト集";
  
  useEffect(() => {
    // マウント時にアニメーション開始
    setTimeout(() => setAnimateHero(true), 200);
    
    // 文字ごとのアニメーション用タイマー
    if (animateHero) {
      const interval = setInterval(() => {
        setCharAnimIndex(prev => {
          if (prev < titleChars.length - 1) {
            return prev + 1;
          } else {
            clearInterval(interval);
            return prev;
          }
        });
      }, 15); // 50msごとに1文字ずつアニメーション
      
      return () => clearInterval(interval);
    }
  }, [animateHero]);
  
  return (
    <section className="relative w-full bg-gradient-to-r from-green-600 to-green-700 py-16 overflow-hidden">
      {/* Background Pattern - 既存のものを維持 */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Ccircle cx='30' cy='30' r='4'/%3E%3Ccircle cx='0' cy='30' r='4'/%3E%3Ccircle cx='60' cy='30' r='4'/%3E%3Ccircle cx='30' cy='0' r='4'/%3E%3Ccircle cx='30' cy='60' r='4'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          backgroundSize: '60px 60px'
        }} />
      </div>
      
      {/* 浮遊する幾何学模様 - 動きを大幅に強化 */}
        <div className="absolute top-10 left-10 w-20 h-20 border-2 border-white/30 rotate-45 animate-[float-big_6s_ease-in-out_infinite]" />
        <div className="absolute top-16 left-32 w-12 h-12 border border-white/20 rotate-12 animate-[float-diagonal_8s_ease-in-out_infinite]" />
        <div className="absolute top-20 right-20 w-16 h-16 bg-white/10 rounded-full animate-[pulse-scale_5s_ease-in-out_infinite]" />
        <div className="absolute top-32 right-40 w-8 h-8 border border-white/25 rotate-45 animate-[float-rotate_5s_ease-in-out_infinite]" />
        <div className="absolute bottom-10 left-1/4 w-12 h-12 border-2 border-white/30 rotate-12 animate-[float-big_7s_ease-in-out_infinite]" />
        <div className="absolute bottom-16 left-16 w-16 h-16 border border-white/20 rounded-full animate-[pulse-scale_6s_ease-in-out_infinite]" />
        <div className="absolute bottom-20 right-1/3 w-8 h-8 bg-white/10 animate-[float-diagonal_9s_ease-in-out_infinite]" />
        <div className="absolute bottom-32 right-16 w-10 h-10 border border-white/25 rotate-30 animate-[float-rotate_7s_ease-in-out_infinite]" />


      {/* 浮遊する幾何学模様 - アニメーション化
      <div className="absolute top-10 left-10 w-20 h-20 border-2 border-white/30 rotate-45 animate-float-slow" />
      <div className="absolute top-16 left-32 w-12 h-12 border border-white/20 rotate-12 animate-float-slower" />
      <div className="absolute top-20 right-20 w-16 h-16 bg-white/10 rounded-full animate-pulse-slow" />
      <div className="absolute top-32 right-40 w-8 h-8 border border-white/25 rotate-45 animate-float" />
      <div className="absolute bottom-10 left-1/4 w-12 h-12 border-2 border-white/30 rotate-12 animate-float-slow" />
      <div className="absolute bottom-16 left-16 w-16 h-16 border border-white/20 rounded-full animate-pulse-slower" />
      <div className="absolute bottom-20 right-1/3 w-8 h-8 bg-white/10 animate-float-slower" />
      <div className="absolute bottom-32 right-16 w-10 h-10 border border-white/25 rotate-30 animate-float" /> */}
      
      {/* 装飾ラインのアニメーション */}
      <div className="absolute top-1/4 left-0 h-px bg-white/20 animate-line-extend" />
      <div className="absolute top-1/3 right-0 h-px bg-white/15 animate-line-extend-delay" />
      <div className="absolute bottom-1/4 left-1/3 h-px bg-white/20 animate-line-extend-slower" />
      
      {/* 動くグラデーションオーバーレイ */}
      <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent animate-gradient-shift opacity-70" />
      
      {/* AIをモチーフにした装飾 */}
      <div className="absolute left-[10%] top-[20%] opacity-20">
        <svg className="w-16 h-16 text-white animate-pulse-slow" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="1.5" />
          <path d="M8 12H16M8 8H16M8 16H13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      </div>
      <div className="absolute right-[15%] bottom-[30%] opacity-20">
        <svg className="w-24 h-24 text-white animate-pulse-slower" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M21 9V3M21 3H15M21 3L13 11M10 5H7C5.89543 5 5 5.89543 5 7V17C5 18.1046 5.89543 19 7 19H17C18.1046 19 19 18.1046 19 17V14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 text-center relative z-10">
        {/* タイトル - 文字ごとのアニメーション */}
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 relative overflow-hidden">
          <span className="sr-only">{titleText}</span>
          <span aria-hidden="true" className="inline-block">
            {titleChars.map((char, index) => (
              char === '\n' ? (
                <br key={index} />
              ) : (
                <span 
                  key={index}
                  className={`inline-block transition-all duration-300 transform ${
                    animateHero && index <= charAnimIndex
                      ? 'opacity-100 translate-y-0 scale-100'
                      : 'opacity-0 translate-y-8 scale-50'
                  }`}
                  style={{ 
                    transitionDelay: `${index * 50}ms`,
                    willChange: 'opacity, transform'
                  }}
                >
                  {char === ' ' ? '\u00A0' : char}
                </span>
              )
            ))}
          </span>
          
          {/* タイトル下のアニメーションライン */}
          <span 
            className={`block h-1 bg-green-300 mx-auto mt-2 rounded-full transition-all duration-1000 ${
              animateHero ? 'w-48 opacity-70' : 'w-0 opacity-0'
            }`}
            style={{ transitionDelay: '800ms' }}
          />
        </h1>
        
        {/* サブタイトル - グラデーションテキスト */}
        <p
          className={`bg-clip-text text-transparent bg-gradient-to-r from-green-100 to-white text-lg md:text-xl max-w-2xl mx-auto transition-all duration-700 delay-700 ${
            animateHero
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-8'
          }`}
          style={{ 
            willChange: 'opacity, transform',
            backgroundSize: '200% 100%',
            animation: animateHero ? 'gradientShift 3s ease-in-out infinite alternate' : 'none'
          }}
        >
          {subtitleText}
        </p>
        
        {/* AIアイコンの装飾的なアニメーション */}
        <div 
          className={`flex justify-center mt-8 gap-6 transition-all duration-1000 delay-1000 ${
            animateHero ? 'opacity-100 scale-100' : 'opacity-0 scale-90'
          }`}
        >
          {['#45B69C', '#45B69C', '#45B69C'].map((color, i) => (
            <span 
              key={i} 
              className="w-2 h-2 rounded-full bg-green-300"
              style={{
                animation: `bounce 1.5s ease-in-out ${i * 0.2}s infinite alternate`
              }}
            />
          ))}
        </div>
      </div>
      
      {/* CSS アニメーションの定義 */}
      <style jsx>{`
        @keyframes float-big {
            0% { transform: translateY(0) rotate(0); }
            25% { transform: translateY(-20px) rotate(3deg); }
            50% { transform: translateY(-40px) rotate(6deg); } /* Y軸の移動を40pxに増加 */
            75% { transform: translateY(-20px) rotate(3deg); }
            100% { transform: translateY(0) rotate(0); }
        }
  
        @keyframes float-diagonal {
            0% { transform: translate(0, 0) rotate(0); }
            25% { transform: translate(15px, -20px) rotate(5deg); }
            50% { transform: translate(30px, -45px) rotate(10deg); } /* 斜め方向に大きく移動 */
            75% { transform: translate(15px, -20px) rotate(5deg); }
            100% { transform: translate(0, 0) rotate(0); }
        }
        
        @keyframes float-rotate {
            0% { transform: translate(0, 0) rotate(0); }
            25% { transform: translate(-10px, -15px) rotate(10deg); }
            50% { transform: translate(-20px, -35px) rotate(20deg); } /* 反対方向への移動と大きな回転 */
            75% { transform: translate(-10px, -15px) rotate(10deg); }
            100% { transform: translate(0, 0) rotate(0); }
        }
        
        @keyframes pulse-scale {
            0% { opacity: 0.1; transform: scale(1); }
            50% { opacity: 0.3; transform: scale(1.3); } /* 拡大率を1.3倍に増加 */
            100% { opacity: 0.1; transform: scale(1); }
        }

        @keyframes pulse-slow {
          0% { opacity: 0.1; }
          50% { opacity: 0.3; }
          100% { opacity: 0.1; }
        }
        
        @keyframes pulse-slower {
          0% { opacity: 0.1; transform: scale(1); }
          50% { opacity: 0.2; transform: scale(1.05); }
          100% { opacity: 0.1; transform: scale(1); }
        }
        
        @keyframes line-extend {
          0% { width: 0; }
          100% { width: 100px; }
        }
        
        @keyframes line-extend-delay {
          0%, 30% { width: 0; }
          100% { width: 80px; }
        }
        
        @keyframes line-extend-slower {
          0%, 50% { width: 0; }
          100% { width: 120px; }
        }
        
        @keyframes gradient-shift {
          0% { background-position: 0% 50%; }
          100% { background-position: 100% 50%; }
        }
        
        @keyframes bounce {
          0% { transform: translateY(0); }
          100% { transform: translateY(-10px); }
        }
        
        .animate-float {
          animation: float 4s ease-in-out infinite;
        }
        
        .animate-float-slow {
          animation: float-slow 6s ease-in-out infinite;
        }
        
        .animate-float-slower {
          animation: float-slower 8s ease-in-out infinite;
        }
        
        .animate-pulse-slow {
          animation: pulse-slow 4s ease-in-out infinite;
        }
        
        .animate-pulse-slower {
          animation: pulse-slower 6s ease-in-out infinite;
        }
        
        .animate-line-extend {
          animation: line-extend 1.5s ease-out forwards;
        }
        
        .animate-line-extend-delay {
          animation: line-extend-delay 1.8s ease-out forwards;
        }
        
        .animate-line-extend-slower {
          animation: line-extend-slower 2s ease-out forwards;
        }
        
        .animate-gradient-shift {
          animation: gradient-shift 8s ease-in-out infinite alternate;
        }
      `}</style>
    </section>
  );
}