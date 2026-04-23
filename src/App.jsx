import React, { useState, useRef } from 'react';
import { 
  Award, 
  Briefcase, 
  BookOpen,
  Mail, 
  Phone, 
  Star, 
  Menu, 
  X,
  Cat,
  Heart,
  Sparkles,
  Flower2, 
  CheckSquare,
  Music,
  Send,
  Smile,
  Disc
} from 'lucide-react';

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  // Hàm bật/tắt nhạc & hiệu ứng LED RGB
  const toggleMusic = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play().catch(err => console.log("Cần tương tác để phát nhạc"));
    }
    setIsPlaying(!isPlaying);
  };

  const personalInfo = {
    name: "Sen Nhật Vân",
    university: "Đại học Thủ Dầu Một",
    title: "Kế Toán Xây Dựng",
    summary: "Là một cử nhân kế toán loại Giỏi với niềm đam mê đặc thù trong lĩnh vực xây dựng, tôi mong muốn được áp dụng những kiến thức bài bản về hạch toán chi phí và quản lý hồ sơ công trình vào thực tế. Mục tiêu của tôi là đóng góp vào sự ổn định tài chính của Quý công ty, đồng thời không ngừng học hỏi để trở thành một kế toán tổng hợp chuyên nghiệp trong ngành xây dựng trong tương lai gần.",
    email: "nhtvn0109@gmail.com",
    phone: "0963921510",
    location: "Thủ Dầu Một, Bình Dương",
    
    // Thay link ảnh đại diện tại đây (nếu muốn dùng ảnh trong máy thì ghi "/ten-file.jpg")
    avatarUrl: "anhthe.jpg"
  };

  const experience = [
    {
      role: "Thực tập sinh / Kế toán viên",
      company: "Kế toán xây dựng (Nghiệp vụ thực tế)",
      period: "2028 - 2029",
      tasks: [
        "Hạch toán chi phí công trình: Tập hợp và phân loại chi phí nguyên vật liệu, nhân công.",
        "Quản lý chi phí sản xuất: Theo dõi và phân bổ chi phí dở dang cuối kỳ.",
        "Kiểm soát chứng từ: Kiểm tra tính hợp lệ của hóa đơn đầu vào - đầu ra.",
      ]
    }
  ];

  const skills = [
    { name: "Tin học văn phòng (Excel)", level: 90 },
    { name: "Phần mềm MISA (Xây lắp)", level: 85 },
    { name: "Tiếng Anh chuyên ngành", level: 75 },
    { name: "Kỹ năng làm việc nhóm", level: 95 },
  ];

  const certifications = [
    { year: "2029", name: "Cử nhân Kế toán loại Giỏi - ĐH Thủ Dầu Một" },
    { year: "2029", name: "Chứng chỉ ACCA (Chartered Certified Accountants)" },
    { year: "2029", name: "Chứng chỉ IELTS 6.5" },
    { year: "2029", name: "Chứng chỉ Kỹ năng mềm (6 Kỹ năng xã hội)" }
  ];

  return (
    <div className="min-h-screen font-sans text-slate-700 bg-gradient-to-br from-pink-50 via-white to-pink-100 scroll-smooth overflow-x-hidden">
      
      {/* Cấu hình hiệu ứng LED RGB siêu sáng */}
      <style>{`
        @keyframes led-glow {
          0% { border-color: #ff0080; box-shadow: 0 0 20px rgba(255, 0, 128, 0.7); }
          33% { border-color: #00ffcc; box-shadow: 0 0 20px rgba(0, 255, 204, 0.7); }
          66% { border-color: #ffcc00; box-shadow: 0 0 20px rgba(255, 204, 0, 0.7); }
          100% { border-color: #ff0080; box-shadow: 0 0 20px rgba(255, 0, 128, 0.7); }
        }
        .led-active {
          animation: led-glow 2s linear infinite !important;
          border-width: 4px !important;
          border-style: solid !important;
        }
        .rotate-disc {
          animation: spin 5s linear infinite;
        }
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>

      {/* Thay link nhạc mp3 của bạn tại đây */}
      <audio ref={audioRef} loop src="Tình yêu.mp3"></audio>

      {/* Nút bật đèn & nhạc (RGB) */}
      <div className="fixed bottom-8 right-8 z-[100] flex flex-col items-center gap-3">
        <div className={`bg-white/90 backdrop-blur-md px-4 py-1 rounded-full shadow-lg border border-pink-200 transition-all ${isPlaying ? 'scale-110 opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          <span className="text-[11px] font-black text-pink-600 uppercase tracking-widest flex items-center gap-1">
            <Sparkles className="w-3 h-3" /> RGB Mode ON <Sparkles className="w-3 h-3" />
          </span>
        </div>
        <button 
          onClick={toggleMusic}
          className={`w-16 h-16 rounded-full flex items-center justify-center shadow-2xl transition-all border-4 ${isPlaying ? 'bg-pink-500 border-white rotate-disc scale-110' : 'bg-white border-pink-300 hover:scale-110'}`}
        >
          {isPlaying ? <Disc className="w-9 h-9 text-white" /> : <Music className="w-8 h-8 text-pink-400" />}
        </button>
      </div>

      {/* Thanh Menu */}
      <nav className="fixed w-full bg-white/90 backdrop-blur-md shadow-sm z-50 border-b border-pink-200">
        <div className="max-w-6xl mx-auto px-4 flex justify-between items-center h-16">
          <div className="flex items-center gap-2">
            <Cat className="w-7 h-7 text-pink-500" />
            <span className="font-black text-xl text-pink-600 tracking-tighter">Vân's Portfolio 🎀</span>
          </div>
          <div className="hidden md:flex space-x-8">
            {['cover', 'about', 'experience', 'skills', 'contact'].map((item) => (
              <a key={item} href={`#${item}`} className="text-slate-600 hover:text-pink-600 font-black capitalize transition-all">
                {item === 'cover' ? 'Bìa hồ sơ' : item === 'about' ? 'Giới thiệu' : item === 'experience' ? 'Kinh nghiệm' : item === 'skills' ? 'Kỹ năng' : 'Liên hệ'}
              </a>
            ))}
          </div>
        </div>
      </nav>

      {/* PHẦN 1: BÌA HỒ SƠ */}
      <section id="cover" className="pt-28 pb-16 flex justify-center px-4">
        <div className={`bg-white max-w-3xl w-full p-10 md:p-16 shadow-2xl transition-all duration-500 ${isPlaying ? 'led-active' : 'border-[8px] border-double border-pink-500'}`} style={{ fontFamily: 'serif' }}>
          <div className="text-center space-y-1 mb-12">
            <h3 className="font-bold text-lg uppercase tracking-tight">CỘNG HÒA XÃ HỘI CHỦ NGHĨA VIỆT NAM</h3>
            <h4 className="font-bold text-base">Độc lập – Tự do – Hạnh phúc</h4>
            <div className="w-32 h-[2px] bg-pink-500 mx-auto mt-2"></div>
          </div>
          <h1 className="text-center text-5xl md:text-6xl font-black text-pink-700 mb-12 tracking-widest">HỒ SƠ XIN VIỆC</h1>
          <div className="flex justify-center mb-10">
            <div className={`w-36 h-48 border-2 p-1 bg-white shadow-lg transition-all ${isPlaying ? 'led-active' : 'border-pink-200'}`}>
              <img src={personalInfo.avatarUrl} alt="Ảnh thẻ" className="w-full h-full object-cover" />
            </div>
          </div>
          <div className="space-y-6 text-[1.15rem]">
            <p className="font-bold">VỊ TRÍ ỨNG TUYỂN: <span className="text-pink-600 uppercase underline decoration-pink-200">{personalInfo.title}</span></p>
            <p className="font-bold">Kính gửi: <span className="text-pink-500">Ban Lãnh Đạo Công Ty</span></p>
            <div className="ml-4 space-y-2 border-l-4 border-pink-100 pl-4">
              <p><span className="font-bold">Họ và tên:</span> <span className="uppercase font-bold text-pink-700">{personalInfo.name}</span></p>
              <p><span className="font-bold">Sinh viên:</span> {personalInfo.university}</p>
              <p><span className="font-bold">Điện thoại:</span> {personalInfo.phone}</p>
              <p><span className="font-bold">Email:</span> {personalInfo.email}</p>
            </div>
          </div>
        </div>
      </section>

      {/* PHẦN 2: GIỚI THIỆU */}
      <section id="about" className="py-20 px-4">
        <div className="max-w-6xl mx-auto grid md:grid-cols-12 gap-12 items-center">
          <div className="md:col-span-5 flex justify-center">
            <div className="relative group">
              <div className="absolute -inset-8 bg-pink-300 rounded-[5rem] blur-3xl opacity-30 animate-pulse"></div>
              <div className={`relative w-72 h-72 md:w-80 md:h-80 bg-white p-3 rounded-[4.5rem] shadow-2xl transition-all duration-500 ${isPlaying ? 'led-active rotate-0' : 'border-4 border-pink-200 rotate-3'}`}>
                <img src={personalInfo.avatarUrl} alt="Sen Nhật Vân" className="w-full h-full object-cover rounded-[4rem]" />
              </div>
            </div>
          </div>
          <div className="md:col-span-7 space-y-8">
            <h2 className="text-5xl md:text-7xl font-black text-slate-800 tracking-tight">
              Sen Nhật Vân <span className="text-pink-500">✿</span>
            </h2>
            <div className={`p-8 md:p-10 rounded-[3rem] shadow-2xl transition-all duration-500 bg-white ${isPlaying ? 'led-active' : 'border-2 border-pink-50'}`}>
              <p className="text-xl leading-relaxed text-justify font-bold text-slate-600 italic">"{personalInfo.summary}"</p>
            </div>
          </div>
        </div>
      </section>

      {/* PHẦN 3: KINH NGHIỆM */}
      <section id="experience" className="py-24 bg-white/40">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-4xl font-black text-pink-700 text-center mb-16 flex items-center justify-center gap-3">
            <Sparkles className="w-10 h-10 text-pink-400" /> Hành Trình Kinh Nghiệm <Sparkles className="w-10 h-10 text-pink-400" />
          </h2>
          <div className="space-y-12">
            {experience.map((item, idx) => (
              <div key={idx} className={`p-10 rounded-[3.5rem] shadow-xl transition-all duration-500 bg-white ${isPlaying ? 'led-active scale-[1.03]' : 'border-2 border-pink-100'}`}>
                <div className="flex flex-col md:flex-row justify-between mb-6">
                  <h3 className="text-3xl font-black text-pink-600">{item.role}</h3>
                  <span className="mt-2 md:mt-0 bg-pink-500 text-white font-black px-6 py-2 rounded-full h-fit shadow-lg">{item.period}</span>
                </div>
                <ul className="space-y-4">
                  {item.tasks.map((task, i) => (
                    <li key={i} className="flex gap-4 text-xl font-medium text-slate-600">
                      <Heart className="w-6 h-6 text-pink-400 fill-pink-100 shrink-0 mt-1" />
                      <span>{task}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PHẦN 4: KỸ NĂNG & CHỨNG CHỈ */}
      <section id="skills" className="py-24">
        <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-16">
          <div className="space-y-10">
            <h2 className="text-3xl font-black text-pink-700 flex items-center gap-3"><Award className="w-9 h-9" /> Kỹ Năng</h2>
            <div className="space-y-8">
              {skills.map((skill, i) => (
                <div key={i} className={`p-6 rounded-[2rem] bg-white transition-all shadow-lg ${isPlaying ? 'led-active' : 'border-2 border-pink-50'}`}>
                  <div className="flex justify-between mb-3 font-black text-xl">
                    <span className="text-slate-700">{skill.name}</span>
                    <span className="text-pink-600">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-pink-50 h-5 rounded-full overflow-hidden border border-pink-100 p-1">
                    <div className={`h-full rounded-full transition-all duration-1000 ${isPlaying ? 'bg-gradient-to-r from-pink-400 via-cyan-400 to-yellow-300' : 'bg-pink-500'}`} style={{ width: `${skill.level}%` }}></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="space-y-10">
            <h2 className="text-3xl font-black text-pink-700 flex items-center gap-3"><BookOpen className="w-9 h-9" /> Chứng Chỉ</h2>
            <div className="grid gap-6">
              {certifications.map((cert, i) => (
                <div key={i} className={`flex items-center gap-6 p-6 rounded-[2.5rem] bg-white shadow-xl transition-all ${isPlaying ? 'led-active scale-[1.05]' : 'border-2 border-pink-50'}`}>
                  <div className="bg-pink-500 text-white w-24 h-16 rounded-2xl flex items-center justify-center font-black text-2xl shadow-lg shrink-0">
                    {cert.year}
                  </div>
                  <p className="font-black text-xl text-slate-800 leading-tight">{cert.name}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* PHẦN 5: LIÊN HỆ */}
      <section id="contact" className="py-24 px-4 bg-pink-50/50">
        <div className={`max-w-4xl mx-auto p-12 md:p-16 rounded-[4rem] shadow-2xl transition-all duration-500 relative bg-white ${isPlaying ? 'led-active' : 'border-4 border-pink-400'}`}>
          
          {/* HÌNH NHẢY NHẢY (Thay bằng file trong public/hinh-meo.jpg) */}
          <img 
            src="/katu.jpg" 
            alt="My Image" 
            className="absolute -top-20 -left-10 w-32 h-32 animate-bounce hidden md:block" 
          />

          <h2 className="text-4xl font-black text-pink-700 text-center mb-10 uppercase tracking-widest">Gửi Lời Nhắn Cho Vân 💌</h2>
          <form className="space-y-6" action={`mailto:${personalInfo.email}`} method="GET" encType="text/plain">
            <div className="grid md:grid-cols-2 gap-6">
              <input type="text" placeholder="Tên của bạn..." className="w-full bg-pink-50 border-2 border-pink-100 rounded-3xl px-7 py-5 outline-none focus:border-pink-500 transition-all font-bold" required />
              <input type="email" placeholder="Email của bạn..." className="w-full bg-pink-50 border-2 border-pink-100 rounded-3xl px-7 py-5 outline-none focus:border-pink-500 transition-all font-bold" required />
            </div>
            <textarea placeholder="Bạn muốn nhắn nhủ điều gì nè..." rows="4" className="w-full bg-pink-50 border-2 border-pink-100 rounded-3xl px-7 py-5 outline-none focus:border-pink-500 transition-all resize-none font-bold" required></textarea>
            <button type="submit" className="w-full bg-gradient-to-r from-pink-500 to-rose-500 text-white font-black py-6 rounded-3xl shadow-xl hover:shadow-pink-300 transition-all flex items-center justify-center gap-4 text-2xl uppercase tracking-widest">
              <Send className="w-8 h-8" /> Gửi Ngay
            </button>
          </form>
        </div>
      </section>

      {/* CHÂN TRANG */}
      <footer className="py-20 bg-white border-t-2 border-pink-100 text-center space-y-6">
        <div className="flex justify-center items-center gap-6 text-3xl font-black text-pink-600">
           <span>{personalInfo.name}</span>
           <Heart className="fill-pink-500 text-pink-500 w-10 h-10 animate-pulse" />
           <span>{personalInfo.university}</span>
        </div>
        <div className="text-slate-400 font-bold uppercase tracking-[0.4em] text-sm flex items-center justify-center gap-4">
          <Sparkles className="w-5 h-5 text-pink-200" />
          NIÊN KHÓA 2025 - CHUYÊN NGÀNH KẾ TOÁN XÂY DỰNG
          <Sparkles className="w-5 h-5 text-pink-200" />
        </div>
      </footer>
    </div>
  );
}
