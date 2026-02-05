import { useRef, useState, useEffect } from "react";
import ITSLogo from "/assets/education/its.png";
import SMKN7Logo from "/assets/education/smkn7.png";
import SMA1Logo from "/assets/education/sma1.png";
import SDNManukanLogo from "/assets/education/sdn_manukan_wetan1.png";
import ProfileCard from "./components/ProfileCard/ProfileCard";
import ShinyText from "./components/ShinyText/ShinyText";
import BlurText from "./components/BlurText/BlurText";
import ScrambledText from "./components/ScrambledText/ScrambledText";
import SplitText from "./components/SplitText/SplitText";
import Lanyard from "./components/Lanyard/Lanyard";
import GlassIcons from "./components/GlassIcons/GlassIcons";
import { listTools, listProyek } from "./data";
import ChromaGrid from "./components/ChromaGrid/ChromaGrid";
import ProjectModal from "./components/ProjectModal/ProjectModal"; // <-- IMPORT MODAL
import Aurora from "./components/Aurora/Aurora";
import LoadingScreen from "./components/LoadingScreen";
import AOS from 'aos';
import ChatRoom from "./components/ChatRoom";
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();


function App() {
  const aboutRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const [showContactModal, setShowContactModal] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const [activeTab, setActiveTab] = useState("project");

  // Simulasi loading selesai setelah 2 detik
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  const handleProjectClick = (project) => {
    setSelectedProject(project);
  };

  const handleCloseModal = () => {
    setSelectedProject(null);
  };
  // -------------------------

  useEffect(() => {
    const isReload =
      performance.getEntriesByType("navigation")[0]?.type === "reload";

    if (isReload) {
      // Ambil path tanpa hash
      const baseUrl = window.location.origin + "/portofolio/";
      window.location.replace(baseUrl);
    }
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (aboutRef.current) {
      observer.observe(aboutRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <LoadingScreen isLoading={isLoading} />
      <div className="absolute top-0 left-0 w-full h-full -z-10 ">
        <Aurora
          colorStops={["#577870", "#1F97A6", "#127B99"]}
          blend={0.5}
          amplitude={1.0}
          speed={0.5}
        />
      </div>
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Welcome Section */}
        <div className="mt-12 mb-16 text-center" data-aos="fade-down" data-aos-duration="1000" data-aos-once="true">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-purple-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent drop-shadow-[0_0_20px_rgba(139,92,246,0.6)]">Welcome To My Portfolio Website</span>
          </h2>
          <p className="text-gray-400 text-lg mb-8">Explore my projects, skills, and experience</p>
          
          {/* Welcome Social Icons */}
          <div className="flex items-center justify-center gap-6">
            <a 
              href="https://www.instagram.com/raf.gerw/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-br from-pink-500/20 to-rose-500/20 border border-pink-500/50 hover:border-pink-500 transition-all duration-300 hover:scale-110"
            >
              <i className="ri-instagram-fill ri-2x text-pink-500 group-hover:text-pink-400"></i>
            </a>
            <a 
              href="https://github.com/rafaelgerwin11-tech" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-br from-gray-700/30 to-gray-600/30 border border-gray-600/50 hover:border-gray-400 transition-all duration-300 hover:scale-110"
            >
              <i className="ri-github-fill ri-2x text-gray-300 group-hover:text-white"></i>
            </a>
            <a 
              href="https://www.linkedin.com/in/rafael-gerwin-andirano-412506378?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-br from-blue-500/20 to-cyan-500/20 border border-blue-500/50 hover:border-blue-500 transition-all duration-300 hover:scale-110"
            >
              <i className="ri-linkedin-fill ri-2x text-blue-500 group-hover:text-blue-400"></i>
            </a>
          </div>
        </div>

        <div className="hero grid md:grid-cols-2 items-center pt-10 xl:gap-0 gap-6 grid-cols-1">
          <div className="animate__animated animate__fadeInUp animate__delay-3s">
            <div className="flex items-center gap-3 mb-6 bg bg-zinc-800 w-fit p-4 rounded-2xl">
              <img src="/portofolio/assets/rafael1.png" className="w-10 rounded-md" />
              <q>Avoid or just undertake it</q>
            </div>

            <div className="mb-6 text-left">
              <p className="text-base md:text-lg uppercase text-zinc-400 mb-2 font-semibold">HALO, SAYA</p>
              <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-2">
                <span className="block bg-gradient-to-r from-teal-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent drop-shadow-[0_0_20px_rgba(34,211,238,0.8)]">Rafael Gerwin</span>
                <span className="block bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-500 bg-clip-text text-transparent drop-shadow-[0_0_20px_rgba(56,189,248,0.8)]">Andirano</span>
              </h1>
              <p className="text-sm text-zinc-400 mb-2">Seorang</p>
              <h2 className="text-xl md:text-2xl font-bold inline-block border-b-4 border-white/90 pb-1">UI/UX Designer &amp; Web Developer</h2>

              <p className="text-base md:text-lg leading-relaxed mt-4 text-gray-300 max-w-lg">Where thoughtful design meets practical development.</p>
            </div>

            <div className="flex items-center sm:gap-4 gap-2 mt-6">
              <a 
                href="/portofolio/assets/CV.pdf" 
                download="Rafael_Gerwin_Andirano_CV.pdf" 
                className="font-semibold bg-[#1a1a1a] p-4 px-6 rounded-full border border-gray-700 hover:bg-blue-600/30 hover:border-blue-500 transition-all duration-300 active:scale-95"
              >
                <ShinyText text="View Resume" disabled={false} speed={3} className="custom-class" />
              </a>

              <a href="#project" className="font-semibold bg-[#1a1a1a] p-4 px-6 rounded-full border border-gray-700 hover:bg-blue-600/30 hover:border-blue-500 transition-all duration-300 active:scale-95">
                <ShinyText text="Explore My Projects" disabled={false} speed={3} className="custom-class" />
              </a>
            </div>

            {/* Social Media Icons */}
            <div className="flex items-center gap-4 mt-8">
              <a 
                href="https://www.instagram.com/raf.gerw/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-zinc-800/50 border border-zinc-700 flex items-center justify-center hover:bg-pink-500/20 hover:border-pink-500 transition-all duration-300"
              >
                <i className="ri-instagram-fill ri-xl text-white hover:text-pink-500"></i>
              </a>
              <a 
                href="https://github.com/rafaelgerwin11-tech" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-zinc-800/50 border border-zinc-700 flex items-center justify-center hover:bg-gray-600/20 hover:border-gray-400 transition-all duration-300"
              >
                <i className="ri-github-fill ri-xl text-white hover:text-gray-300"></i>
              </a>
              <a 
                href="https://www.linkedin.com/in/rafael-gerwin-andirano-412506378?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-zinc-800/50 border border-zinc-700 flex items-center justify-center hover:bg-blue-500/20 hover:border-blue-500 transition-all duration-300"
              >
                <i className="ri-linkedin-fill ri-xl text-white hover:text-blue-500"></i>
              </a>
            </div>

          </div>
          <div className="md:ml-auto animate__animated animate__fadeInUp animate__delay-4s">
            <ProfileCard
              name="Rafael Gerwin A"
              title="Web Developer"
              handle="raf,gerw"
              status="Online"
              contactText="Contact Me"
              avatarUrl="/portofolio/assets/Rafael.png"
              showUserInfo={true}
              enableTilt={true}
              enableMobileTilt={false}
              onContactClick={() => setShowContactModal(true)}
            />
            
            {/* Contact Modal */}
            {showContactModal && (
              <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
                <div className="bg-zinc-800 rounded-lg p-8 shadow-lg max-w-sm w-full mx-4">
                  <h3 className="text-xl font-bold text-white mb-6 text-center">Hubungi Saya</h3>
                  
                  <div className="flex gap-4 justify-center">
                    {/* WhatsApp Button */}
                    <a
                      href="https://wa.me/6281334682434?text=Halo Rafael, saya ingin menghubungi Anda"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex flex-col items-center gap-2 p-4 rounded-lg bg-green-500 hover:bg-green-600 transition-colors"
                    >
                      <i className="ri-whatsapp-fill ri-3x text-white"></i>
                      <span className="text-white font-semibold text-sm">WhatsApp</span>
                    </a>
                    
                    {/* Email Button */}
                    <a
                      href="mailto:rafaelgerwin11@gmail.com"
                      className="flex flex-col items-center gap-2 p-4 rounded-lg bg-blue-500 hover:bg-blue-600 transition-colors"
                    >
                      <i className="ri-mail-fill ri-3x text-white"></i>
                      <span className="text-white font-semibold text-sm">Email</span>
                    </a>
                  </div>
                  
                  <button
                    onClick={() => setShowContactModal(false)}
                    className="w-full mt-6 bg-zinc-700 hover:bg-zinc-600 text-white py-2 rounded-lg transition-colors"
                  >
                    Tutup
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
        {/* tentang */}
        <div className="mt-15 mx-auto w-full max-w-[1600px] rounded-3xl border-[5px] border-violet-500/40 shadow-[0_0_30px_rgba(168,85,247,0.4)] bg-gradient-to-br from-[#0a0a0a] via-[#111111] to-[#1a1a1a] p-6" id="about">
          <div className="flex flex-col md:flex-row items-center justify-between gap-10 pt-0 px-8" data-aos="fade-up" data-aos-duration="1000" data-aos-once="true">
            <div className="basis-full md:basis-7/12 pr-0 md:pr-8 border-b md:border-b-0 md:border-r border-violet-500/30">
              {/* Kolom kiri */}
              <div className="flex-1 text-left">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-5">
                  About Me
                </h2>

                <BlurText
                  text="I’m Rafael Gerwin Andirano, a UI/UX Designer and Web Developer focused on creating clean, intuitive, and meaningful digital experiences. I combine thoughtful design with practical development to build interfaces that are easy to use, visually balanced, and purposeful, with strong attention to detail and user experience. I enjoy exploring modern design systems and frontend technologies, always refining my approach to create work that feels consistent, functional, and timeless."
                  delay={150}
                  animateBy="words"
                  direction="top"
                  className="text-base md:text-lg leading-relaxed mb-10 text-gray-300"
                />

                <div className="flex flex-col sm:flex-row items-center sm:justify-between text-center sm:text-left gap-y-8 sm:gap-y-0 mb-4 w-full">
                  <div>
                    <h1 className="text-3xl md:text-4xl mb-1">
                      10<span className="text-violet-500">+</span>
                    </h1>
                    <p>Project Finished</p>
                  </div>
                  <div>
                    <h1 className="text-3xl md:text-4xl mb-1">
                      1<span className="text-violet-500">+</span>
                    </h1>
                    <p>Years of Experience</p>
                  </div>
                  <div>
                    <h1 className="text-3xl md:text-4xl mb-1">
                      1000<span className="text-violet-500">+</span>
                    </h1>
                    <p>Learning Hours</p>
                  </div>
                </div>


                <ShinyText
                  text="Working with heart, creating with mind."
                  disabled={false}
                  speed={3}
                  className="text-sm md:text-base text-violet-400"
                />
              </div>
            </div>

            {/* Kolom kanan */}
            <div className="basis-full md:basis-5/12 pl-0 md:pl-8 overflow-hidden max-w-full flex justify-center ">
              <Lanyard position={[0, 0, 15]} gravity={[0, -40, 0]} />
            </div>
          </div>

        </div>

        {/* Pendidikan */}
        <div className="mt-32 mx-auto w-full max-w-[1600px] rounded-3xl border-[5px] border-violet-500/40 shadow-[0_0_30px_rgba(168,85,247,0.18)] bg-gradient-to-br from-[#0a0a0a] via-[#111111] to-[#1a1a1a] p-6" id="education">
          <div data-aos="fade-up" data-aos-duration="1000" data-aos-once="true">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">Education</h2>
            <p className="text-base/loose opacity-50 mb-8">Academic background & current study</p>

            <div className="w-full space-y-6">
                {/* ITS Card */}
                <div className="edu-card soft-blink p-6 rounded-2xl bg-gradient-to-br from-zinc-900/60 to-transparent shadow-lg hover:shadow-2xl transition-transform transform hover:-translate-y-2">
                  <div className="flex items-center gap-6">
                    <div className="w-20 h-20 flex-shrink-0 rounded-xl bg-zinc-800 p-3 flex items-center justify-center ring-1 ring-violet-500/30 overflow-hidden">
                      <img src={ITSLogo} alt="ITS" className="w-full h-full object-contain rounded-md" onError={(e)=>e.target.style.display='none'} />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-3">
                        <h3 className="text-2xl md:text-3xl font-extrabold text-white">Institut Teknologi Sepuluh Nopember</h3>
                        <span className="px-3 py-1 text-xs font-semibold bg-violet-500 text-white rounded-full">Current</span>
                      </div>
                      <p className="text-blue-400 font-semibold mt-2">Teknik Telekomunikasi</p>
                      <p className="text-sm text-gray-400 mt-2">Undergraduate program — ongoing since 2025.</p>
                    </div>
                    <div className="text-right hidden md:block">
                      <span className="text-sm text-gray-400">2025 — Present</span>
                    </div>
                  </div>
                </div>

                {/* SMKN Card */}
                <div className="edu-card edu-card--past p-6 rounded-2xl bg-gradient-to-br from-zinc-900/40 to-transparent transition-transform duration-300 shadow-md hover:shadow-2xl hover:-translate-y-2">
                  <div className="flex items-center gap-6">
                    <div className="w-20 h-20 flex-shrink-0 rounded-xl bg-zinc-800 p-3 flex items-center justify-center ring-1 ring-blue-400/30 overflow-hidden">
                      <img src={SMKN7Logo} alt="SMKN 7" className="w-full h-full object-contain rounded-md" onError={(e)=>e.target.style.display='none'} />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl md:text-3xl font-extrabold text-white">SMKN 7 SURABAYA</h3>
                      <p className="text-blue-400 font-semibold mt-2">Teknik Pendingin Tata Udara</p>
                      <p className="text-sm text-gray-400 mt-2">Vocational High School — 2022 to 2025</p>
                    </div>
                    <div className="text-right hidden md:block">
                      <span className="text-sm text-gray-400">2022 — 2025</span>
                    </div>
                  </div>
                </div>

                {/* SMA Card (added) */}
                <div className="edu-card edu-card--past p-6 rounded-2xl bg-gradient-to-br from-zinc-900/40 to-transparent transition-transform duration-300 shadow-md hover:shadow-2xl hover:-translate-y-2">
                  <div className="flex items-center gap-6">
                    <div className="w-20 h-20 flex-shrink-0 rounded-xl bg-zinc-800 p-3 flex items-center justify-center ring-1 ring-indigo-400/30 overflow-hidden">
                      <img src={SMA1Logo} alt="SMA 1" className="w-full h-full object-contain rounded-md" onError={(e)=>e.target.style.display='none'} />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl md:text-3xl font-extrabold text-white">SMPN 47 SURABAYA</h3>
                      <p className="text-blue-400 font-semibold mt-2">Sekolah Menengah Pertama</p>
                      <p className="text-sm text-gray-400 mt-2">High School — 2019 to 2022</p>
                    </div>
                    <div className="text-right hidden md:block">
                      <span className="text-sm text-gray-400">2019 — 2022</span>
                    </div>
                  </div>
                </div>
                {/* SD Card (added) */}
                <div className="edu-card edu-card--past p-6 rounded-2xl bg-gradient-to-br from-zinc-900/40 to-transparent transition-transform duration-300 shadow-md hover:shadow-2xl hover:-translate-y-2">
                  <div className="flex items-center gap-6">
                    <div className="w-20 h-20 flex-shrink-0 rounded-xl bg-zinc-800 p-3 flex items-center justify-center ring-1 ring-yellow-400/30 overflow-hidden">
                      <img src={SDNManukanLogo} alt="SDN Manukan" className="w-full h-full object-contain rounded-md" onError={(e)=>e.target.style.display='none'} />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl md:text-3xl font-extrabold text-white">SDN Manukan Wetan 1</h3>
                      <p className="text-blue-400 font-semibold mt-2">Sekolah Dasar</p>
                      <p className="text-sm text-gray-400 mt-2">Elementary School — 2013 to 2019</p>
                    </div>
                    <div className="text-right hidden md:block">
                      <span className="text-sm text-gray-400">2013 — 2019</span>
                    </div>
                  </div>
                </div>
            </div>
          </div>
        </div>

        <div className="tools mt-32">
          <h1 className="text-4xl/snug font-bold mb-4" data-aos="fade-up" data-aos-duration="1000" data-aos-once="true" >Tools & Technologies</h1>
          <p className="w-2/5 text-base/loose opacity-50" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300" data-aos-once="true">My Profesional Skills</p>
          <div className="tools-box mt-14 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">

            {listTools.map((tool) => (
              <div
                key={tool.id} data-aos="fade-up" data-aos-duration="1000" data-aos-delay={tool.dad} data-aos-once="true"
                className="flex items-center gap-4 p-4 border border-zinc-700 rounded-xl bg-zinc-900/60 backdrop-blur-md hover:bg-zinc-800/80 transition-all duration-300 group shadow-lg"
              >
                <div className="w-16 h-16 p-2 rounded-lg bg-zinc-800 flex items-center justify-center group-hover:bg-zinc-900 transition-all duration-300">
                  <img
                    src={tool.gambar}
                    alt="Tools Image"
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="flex flex-col overflow-hidden">
                  <div className="truncate">
                    <ShinyText
                      text={tool.nama}
                      disabled={false}
                      speed={3}
                      className="text-lg font-semibold block"
                    />
                  </div>
                  <p className="text-sm text-zinc-400 truncate">{tool.ket}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* tentang */}

        {/* Project & Sertifikat */}
        <div className="mt-32" id="project">
          <h1 className="text-center text-4xl font-bold mb-2" data-aos="fade-up" data-aos-duration="1000" data-aos-once="true">Projects & Certificates</h1>
          <p className="text-base/loose text-center opacity-50 mb-12" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300" data-aos-once="true">Coming Soon - Stay tuned for my latest projects and certifications!</p>

          {/* Coming Soon Section */}
          <div className="mt-12 p-8 rounded-2xl bg-gradient-to-br from-zinc-900/40 to-transparent border border-zinc-700/50 text-center" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="500" data-aos-once="true">
            <h3 className="text-2xl font-bold text-white mb-4">Projects Coming Soon</h3>
            <p className="text-gray-400">I'm working on some exciting projects. They will be showcased here very soon!</p>
          </div>
        </div>
        {/* Project & Sertifikat */}


        {/* Kontak */}
        <div className="kontak mt-32 sm:p-10 p-0" id="contact">
          <h1
            className="text-4xl mb-2 font-bold text-center"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-once="true"
          >
            Contact & Chat
          </h1>
          <p
            className="text-base/loose text-center mb-10 opacity-50"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="300"
            data-aos-once="true"
          >
            Get in touch with me or chat in real-time
          </p>

          {/* Container dua kolom */}
          <div className="flex flex-col md:flex-row gap-8">
            {/* Chat Room di kiri */}
            <div className="flex-1 bg-zinc-800 p-6 rounded-md" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="400" data-aos-once="true">
              <ChatRoom />
            </div>

            {/* Contact Form di kanan */}
            <div className="flex-1">
              <form
                action="https://formsubmit.co/rafaelgerwin11@gmail.com"
                method="POST"
                className="bg-zinc-800 p-10 w-full rounded-md"
                autoComplete="off"
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-delay="500"
                data-aos-once="true"
              >
                <div className="flex flex-col gap-6">
                  <div className="flex flex-col gap-2">
                    <label className="font-semibold">Full Name</label>
                    <input
                      type="text"
                      name="Name"
                      placeholder="Input Name..."
                      className="border border-zinc-500 p-2 rounded-md"
                      required
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="font-semibold">Email</label>
                    <input
                      type="email"
                      name="Email"
                      placeholder="Input Email..."
                      className="border border-zinc-500 p-2 rounded-md"
                      required
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label htmlFor="message" className="font-semibold">Message</label>
                    <textarea
                      name="message"
                      id="message"
                      cols="45"
                      rows="7"
                      placeholder="Message..."
                      className="border border-zinc-500 p-2 rounded-md"
                      required
                    ></textarea>
                  </div>
                  <div className="text-center">
                    <button
                      type="submit"
                      className="font-semibold bg-[#1a1a1a] p-4 px-6 rounded-full w-full cursor-pointer border border-gray-700 hover:bg-[#222] transition-colors"
                    >
                      <ShinyText text="Send" disabled={false} speed={3} className="custom-class" />
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
        {/* Kontak */}
      </main>

      <ProjectModal
        isOpen={!!selectedProject}
        onClose={handleCloseModal}
        project={selectedProject}
      />
    </>
  )
}

export default App
