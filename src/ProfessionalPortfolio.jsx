import React, { useEffect, useMemo, useState } from 'react';
import {
  ArrowUpRight,
  ArrowDown,
  BookOpen,
  Briefcase,
  CheckCircle2,
  Code,
  ExternalLink,
  FolderGit2,
  GraduationCap,
  Globe,
  Heart,
  Layers,
  Mail,
  MapPin,
  Menu,
  Palette,
  Phone,
  Quote,
  Sparkles,
  Star,
  X,
  Award,
} from 'lucide-react';

const LinkedinIcon = ({ size = 20, className = '' }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
  >
    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
  </svg>
);

const galleryThemes = [
  {
    frame: 'border-rose-500/20 hover:border-rose-400/60',
    tag: 'bg-rose-500/10 border-rose-500/20 text-rose-300',
    icon: 'text-rose-400',
    glow: 'hover:shadow-[0_20px_80px_-30px_rgba(244,63,94,0.45)]',
    accent: 'from-rose-500/40 via-rose-500/10 to-transparent',
    hoverClass: 'group-hover:rotate-1 group-hover:scale-[1.06]',
  },
  {
    frame: 'border-indigo-500/20 hover:border-indigo-400/60',
    tag: 'bg-indigo-500/10 border-indigo-500/20 text-indigo-300',
    icon: 'text-indigo-400',
    glow: 'hover:shadow-[0_20px_80px_-30px_rgba(99,102,241,0.45)]',
    accent: 'from-indigo-500/40 via-indigo-500/10 to-transparent',
    hoverClass: 'group-hover:-rotate-1 group-hover:scale-[1.06]',
  },
  {
    frame: 'border-purple-500/20 hover:border-purple-400/60',
    tag: 'bg-purple-500/10 border-purple-500/20 text-purple-300',
    icon: 'text-purple-400',
    glow: 'hover:shadow-[0_20px_80px_-30px_rgba(168,85,247,0.45)]',
    accent: 'from-purple-500/40 via-purple-500/10 to-transparent',
    hoverClass: 'group-hover:rotate-[1.5deg] group-hover:scale-[1.05]',
  },
  {
    frame: 'border-amber-500/20 hover:border-amber-400/60',
    tag: 'bg-amber-500/10 border-amber-500/20 text-amber-300',
    icon: 'text-amber-400',
    glow: 'hover:shadow-[0_20px_80px_-30px_rgba(245,158,11,0.42)]',
    accent: 'from-amber-500/35 via-amber-500/10 to-transparent',
    hoverClass: 'group-hover:-rotate-[1.5deg] group-hover:scale-[1.05]',
  },
];

const GalleryCard = ({ item, index, onOpen }) => {
  const theme = galleryThemes[index % galleryThemes.length];

  return (
    <button
      type="button"
      onClick={() => onOpen(item)}
      className={`group text-left glass rounded-3xl overflow-hidden border transition-all duration-500 card-hover ${theme.frame} ${theme.glow} ${index % 2 ? 'md:translate-y-6' : ''}`}
    >
      <div className="relative h-[340px] bg-slate-950 overflow-hidden">
        <img
          src={item.image_ref}
          alt={item.title}
          className={`gallery-media absolute inset-0 w-full h-full object-cover ${theme.hoverClass}`}
          onError={(e) => {
            e.currentTarget.style.display = 'none';
          }}
        />
        <div className={`absolute inset-0 bg-gradient-to-t ${theme.accent} via-slate-950/25 to-transparent opacity-80 group-hover:opacity-100 transition-opacity`} />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.12),transparent_35%)] opacity-0 group-hover:opacity-100 transition-opacity" />

        <div className="absolute top-4 left-4 flex items-center gap-2">
          <span className={`text-[11px] font-mono uppercase tracking-[0.28em] px-3 py-1.5 rounded-full border backdrop-blur-md ${theme.tag}`}>
            {item.category === 'clay' ? 'Clay Art' : 'Illustration'}
          </span>
        </div>

        <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-500">
          <div className="w-11 h-11 rounded-full glass-strong flex items-center justify-center border border-white/10">
            <ArrowUpRight size={16} className="text-white" />
          </div>
        </div>

        <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-3 group-hover:translate-y-0">
          <div className="glass-strong rounded-2xl px-4 py-3 border border-white/10">
            <div className="flex items-start gap-3">
              <div className={`w-10 h-10 rounded-xl flex items-center justify-center bg-white/5 border border-white/10 ${theme.icon}`}>
                {item.category === 'clay' ? <Heart size={18} /> : <Layers size={18} />}
              </div>
              <div>
                <p className="text-sm font-semibold text-white line-clamp-1">{item.title}</p>
                <p className="text-xs text-slate-400 mt-1">Click to open preview</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="p-5">
        <h4 className="text-sm font-semibold text-slate-100 group-hover:text-white transition-colors line-clamp-2">{item.title}</h4>
        <div className="mt-3 flex items-center gap-2 text-xs font-mono text-slate-500">
          <span className={`w-1.5 h-1.5 rounded-full ${item.category === 'clay' ? 'bg-rose-400' : 'bg-indigo-400'}`} />
          {item.category === 'clay' ? 'Handcrafted' : 'Digital Art'}
        </div>
      </div>
    </button>
  );
};

function SectionTitle({ subtitle, title, kicker = '' }) {
  return (
    <div className="text-center mb-16">
      <span className="section-kicker mb-4">
        <span className="w-8 h-px bg-rose-400" />
        {subtitle}
        <span className="w-8 h-px bg-rose-400" />
      </span>
      <h2 className="text-5xl md:text-7xl font-bold text-white leading-[1]">
        {title}{' '}
        <span className="font-serif italic gradient-text">
          {kicker}
        </span>
      </h2>
    </div>
  );
}

function InfoRow({ icon: Icon, label, value, href, color = 'rose' }) {
  const tone = {
    rose: 'bg-rose-500/10 border-rose-500/20 text-rose-400 hover:border-rose-500/40',
    emerald: 'bg-emerald-500/10 border-emerald-500/20 text-emerald-400 hover:border-emerald-500/40',
    indigo: 'bg-indigo-500/10 border-indigo-500/20 text-indigo-400 hover:border-indigo-500/40',
    blue: 'bg-blue-500/10 border-blue-500/20 text-blue-400 hover:border-blue-500/40',
  };

  const content = (
    <div className="group flex items-center gap-4 p-5 glass rounded-2xl transition-all card-hover border border-transparent hover:bg-white/[0.03]">
      <div className={`w-12 h-12 rounded-xl border flex items-center justify-center ${tone[color]}`}>
        <Icon size={20} />
      </div>
      <div className="min-w-0">
        <div className="text-xs text-slate-500 uppercase tracking-wider">{label}</div>
        <div className="text-sm text-white font-mono break-all">{value}</div>
      </div>
    </div>
  );

  if (href) {
    return (
      <a href={href} target={href.startsWith('http') ? '_blank' : undefined} rel={href.startsWith('http') ? 'noreferrer' : undefined}>
        {content}
      </a>
    );
  }

  return content;
}

function PillCard({ title, desc, icon: Icon, accent = 'rose' }) {
  const classes = {
    rose: 'from-rose-500/15 to-rose-500/5 border-rose-500/20 text-rose-400',
    indigo: 'from-indigo-500/15 to-indigo-500/5 border-indigo-500/20 text-indigo-400',
  };

  return (
    <div className="glass rounded-3xl p-8 card-hover hover:border-rose-500/40 relative overflow-hidden">
      <div className={`absolute top-0 right-0 w-32 h-32 rounded-full blur-3xl opacity-60 bg-gradient-to-br ${accent === 'rose' ? 'from-rose-500/20' : 'from-indigo-500/20'}`} />
      <div className="relative">
        <div className={`w-14 h-14 rounded-2xl border flex items-center justify-center bg-gradient-to-br ${classes[accent]}`}>
          <Icon size={24} />
        </div>
        <h3 className="text-2xl font-bold text-white mt-5 mb-3">{title}</h3>
        <p className="text-slate-400 leading-relaxed">{desc}</p>
      </div>
    </div>
  );
}

export default function ProfessionalPortfolio() {
  const [activeTab, setActiveTab] = useState('all');
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [selectedItem, setSelectedItem] = useState(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 24);
    const handleMouse = (e) => setMousePos({ x: e.clientX, y: e.clientY });
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouse);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouse);
    };
  }, []);

  const personalDetails = {
    phone: '+923368936579',
    email: 'ujalahabib085@gmail.com',
    location: 'b/1 Block B, Pakistan',
    linkedin: 'https://www.linkedin.com/in/ujala-habib-bb5221261/',
    youtube: 'https://www.youtube.com/@GD-z1k',
    youtubeChannelName: 'Graphics with Ujala',
    softVerseYoutube: 'https://www.youtube.com/@soft03-m5n',
    profileImage: 'images/myimage.png',
  };

  const profile =
    'I am a passionate Graphic Designer who enjoys creating unique illustrations and creative visuals. I am currently pursuing a Diploma in Software Engineering and a BSc in Life Sciences, seeking opportunities to grow and apply my creative and technical skills. I aim to continuously improve through practical projects and modern design tools.';

  const goals = [
    {
      title: 'Become a Model',
      desc: 'My childhood dream is to become a model and build a confident, professional identity in the creative world.',
      icon: Sparkles,
    },
    {
      title: 'Own My Own Institute',
      desc: 'My biggest dream is to open an institute in my own name and continue doing a professional job alongside it.',
      icon: Briefcase,
    },
  ];

  const skills = {
    programming: ['HTML/CSS & JS', 'C#', 'Flutter', 'Firebase (Backend)', 'Python', 'SMO', 'Computer Office Automation'],
    design: ['Adobe Illustrator', 'UI/UX Design', 'Canva'],
  };

  const stats = [
    { label: 'Years Tutoring', value: '8+', icon: GraduationCap },
    { label: 'Projects Built', value: '5+', icon: FolderGit2 },
    { label: 'Books Published', value: '2', icon: BookOpen },
    { label: 'Internships', value: '3', icon: Briefcase },
  ];

  const education = [
    { degree: 'Matric (Pre-Medical)', institution: 'YEN Academy', status: 'Completed', detail: 'Completed Matriculation with Pre-Medical focus' },
    { degree: 'Intermediate (FSc)', institution: 'Government Girls Degree College', status: 'Completed', detail: 'Completed intermediate education' },
    { degree: 'BSc. Life Sciences', institution: 'University of Karachi', status: 'Ongoing', detail: 'Pursuing Bachelor of Science in Life Sciences' },
    { degree: 'Diploma in Software Engineering', institution: 'Aptech', status: 'Ongoing', detail: 'Pursuing Diploma in Software Engineering' },
  ];

  const coursesAndCerts = {
    memonInstitute: ['Computer Office Automation (Course)', 'Graphic Design (Course)'],
    onlineCourses: ['Social Media Optimization (SMO)', 'Meta Ads', 'Blender (Ongoing)'],
    edreyPlatform: ['Flutter Development Course'],
    ongoingLearning: ['Computer Office Automation (ONLINE TEACHING)', 'Graphic Design (Adobe Illustrator - ONLINE TEACHING)'],
  };

  const certifications = [
    'Coursera (Business Intelligence)',
    'Coursera (Digital Marketing)',
    'Coursera (Foundations: Data, Data, Everywhere)',
    'Coursera (Python)',
    'Computer Office Automation [Memon Institute]',
    'Graphic Design (Adobe Illustrator) [Memon Institute]',
  ];

  const internships = [
    { company: 'CodeAlpha', duration: '1 Month', role: 'Frontend development tasks and short web-based projects.' },
    { company: 'Innovation Studio', duration: '1 Month', role: 'Web development tasks and practical implementation work.' },
    { company: 'SkillifyZone', duration: '1 Month', role: 'Frontend internship with project-based delivery.' },
  ];

  const currentWork = {
    badge: 'Currently Working On Internships',
    title: 'Practical industry experience',
    desc: 'I am actively working on internships and improving my frontend, UI, and project execution skills through real assignments.',
  };

  const tutoringExperience = {
    role: 'Online Tutor',
    duration: '94 Months',
    type: 'Self-employed / Online',
    details: ['Taught SSC-level students', 'Subjects: Science & Computer Basics', 'Conducted interactive online sessions'],
  };

  const projects = [
    { name: 'National Park (Frontend Project)', tech: 'HTML, CSS, JavaScript & Bootstrap', detail: 'Built using HTML, CSS, JavaScript & Bootstrap. Focused on responsive design and user-friendly layout' },
    { name: 'Sounds (Backend Project)', tech: 'PHP & MySQL', detail: 'Developed using PHP & MySQL. Implemented backend functionalities and database handling' },
    { name: 'Online Store Management System', tech: 'ASP.NET', detail: 'E-commerce system for managing products, orders, and users with CRUD operations' },
    { name: 'Mobile Application', tech: 'Flutter & Firebase', detail: 'Real-time database integration and user interface design' },
    { name: 'Calculator (Mini Project)', tech: 'HTML, CSS & JavaScript', detail: 'Basic arithmetic operations with interactive UI' },
  ];

  const languages = [
    { name: 'Urdu', level: 'Native / Fluent', percent: 100 },
    { name: 'English', level: 'Intermediate', percent: 65 },
  ];

  const books = [
    {
      title: 'Authenticity and Impact',
      tagline: 'First Book',
      link: 'https://www.linkedin.com/posts/ujala-habib-bb5221261_for-every-soul-hiding-pain-behind-a-brave-activity-7364026723052531712-2plC',
      desc: 'An exploration of human resilience, dedicated to every soul hiding pain behind a brave face.',
    },
    {
      title: 'The Fragrance of an Empty Courtyard',
      tagline: 'Second Book',
      link: 'https://www.linkedin.com/posts/ujala-habib-bb5221261_the-fragrance-of-an-empty-courtyard-activity-7442685977334132736-IIuo',
      desc: 'A contemplative journey into emotional architectures and self-reflection.',
    },
  ];

  const channelLinks = [
    {
      title: 'Graphics with Ujala',
      handle: '@GD-z1k',
      link: personalDetails.youtube,
      desc: 'Design tutorials, creative visuals, and graphic design content.',
      accent: 'rose',
    },
    {
      title: 'SoftVerse',
      handle: '@soft03-m5n',
      link: personalDetails.softVerseYoutube,
      desc: 'Engineering and tech-related content and learning journey.',
      accent: 'indigo',
    },
  ];

  const creations = [
    { title: 'Aesthetic Room Visual Layout', category: 'graphics', image_ref: '/images/gra1.jpg' },
    { title: 'Lollipop Dynamic Graphic Art', category: 'graphics', image_ref: '/images/gra2.jpg' },
    { title: 'Whimsical Character Concept Design', category: 'graphics', image_ref: '/images/gra3.jpg' },
    { title: 'Abstract Texture & Vector Palette', category: 'graphics', image_ref: '/images/gra4.jpg' },
    { title: 'Aesthetic Functional Layout Structure', category: 'graphics', image_ref: '/images/gra5.jpg' },
    { title: 'Minimalist Pastel Scene Vector', category: 'graphics', image_ref: '/images/gra6.jpg' },
    { title: 'Creative Branding & Identity Display', category: 'graphics', image_ref: '/images/gra7.jpg' },
    { title: 'Vector Design Showcase', category: 'graphics', image_ref: '/images/gra8.jpg' },
    { title: 'Modern Illustration Piece', category: 'graphics', image_ref: '/images/gra9.jpg' },
    { title: 'Final Composition Masterwork', category: 'graphics', image_ref: '/images/gra10.jpg' },
    { title: 'Clay Miniature Lollipop Study', category: 'clay', image_ref: '/images/1.png' },
    { title: 'Handcrafted Clay Lollipop Sticks', category: 'clay', image_ref: '/images/2.png' },
    { title: 'Clay Lollipop Miniature Gathering', category: 'clay', image_ref: '/images/3.png' },
    { title: 'Aesthetic Texture and Palette', category: 'clay', image_ref: '/images/4.png' },
    { title: 'Miniature Clay Lollipop Grid', category: 'clay', image_ref: '/images/5.png' },
    { title: 'Clay Miniature Scene Composition', category: 'clay', image_ref: '/images/6.png' },
    { title: 'Clay Stick Assembly and Tools', category: 'clay', image_ref: '/images/7.png' },
    { title: 'Finished Clay Lollipops Showcase', category: 'clay', image_ref: '/images/8.png' },
    { title: 'Clay Lollipop Presentation Bowl', category: 'clay', image_ref: '/images/9.png' },
    { title: 'Clay Workshop Documentation', category: 'clay', image_ref: '/images/10.png' },
    { title: 'Final Clay Art Collection', category: 'clay', image_ref: '/images/11.png' },
    { title: 'Handmade Clay Piece Series', category: 'clay', image_ref: '/images/12.png' },
    { title: 'Clay Art Composition', category: 'clay', image_ref: '/images/13.png' },
    { title: 'Detailed Clay Craftwork', category: 'clay', image_ref: '/images/14.png' },
    { title: 'Clay Design Portfolio', category: 'clay', image_ref: '/images/15.png' },
    { title: 'Complete Clay Collection', category: 'clay', image_ref: '/images/16.png' },
    { title: 'Masterwork Clay Series', category: 'clay', image_ref: '/images/17.png' },
  ];

  const filteredCreations = useMemo(
    () => (activeTab === 'all' ? creations : creations.filter((c) => c.category === activeTab)),
    [activeTab]
  );

  const navLinks = [
    ['about', 'About'],
    ['goals', 'Goals'],
    ['skills', 'Skills'],
    ['projects', 'Work'],
    ['portfolio', 'Portfolio'],
    ['youtube', 'YouTube'],
    ['contact', 'Contact'],
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans antialiased selection:bg-rose-500 selection:text-white relative overflow-x-hidden">
      <div
        className="fixed w-96 h-96 pointer-events-none -z-10 transition-all duration-700 ease-out"
        style={{
          left: mousePos.x - 192,
          top: mousePos.y - 192,
          background: 'radial-gradient(circle, rgba(244,63,94,0.08) 0%, transparent 70%)',
        }}
      />

      <div className="fixed inset-0 pointer-events-none overflow-hidden -z-10">
        <div className="absolute top-0 right-0 w-[560px] h-[560px] bg-rose-500/10 rounded-full blur-3xl animate-float-slow" />
        <div className="absolute top-1/2 left-0 w-[560px] h-[560px] bg-indigo-500/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-0 right-1/3 w-[560px] h-[560px] bg-purple-500/10 rounded-full blur-3xl animate-float-slow" />
        <div className="absolute inset-0 grid-pattern opacity-30" />
      </div>

      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? 'glass-strong py-3 shadow-2xl shadow-black/20' : 'py-5'}`}>
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          <a href="#home" className="text-2xl font-bold gradient-text tracking-tight flex items-center gap-3">
            <img
              src={personalDetails.profileImage}
              alt="Ujala Habib"
              className="w-11 h-11 rounded-full object-cover border border-white/15 shadow-lg"
              onError={(e) => {
                e.currentTarget.style.display = 'none';
              }}
            />
          </a>

          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-300">
            {navLinks.map(([id, label]) => (
              <a key={id} href={`#${id}`} className="hover:text-rose-400 transition-colors">
                {label}
              </a>
            ))}
          </div>

          <a
            href={`mailto:${personalDetails.email}`}
            className="hidden md:flex items-center gap-2 bg-gradient-to-r from-rose-500 to-purple-600 text-white px-5 py-2 rounded-full text-sm font-semibold hover:scale-105 transition-transform btn-shine"
          >
            Hire Me <ArrowUpRight size={14} />
          </a>

          <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden text-white" aria-label="Toggle menu">
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {menuOpen && (
          <div className="md:hidden glass-strong mt-3 mx-6 rounded-2xl p-6 flex flex-col gap-4 text-slate-200">
            {navLinks.map(([id, label]) => (
              <a key={id} href={`#${id}`} onClick={() => setMenuOpen(false)}>
                {label}
              </a>
            ))}
          </div>
        )}
      </nav>

      <header id="home" className="relative min-h-screen flex items-center max-w-7xl mx-auto px-6 pt-32 pb-20">
        <div className="w-full grid md:grid-cols-5 gap-12 items-center">
          <div className="md:col-span-3 order-2 md:order-1 text-center md:text-left">
            <div className="inline-flex items-center gap-2 text-xs md:text-sm font-mono tracking-widest text-rose-400 uppercase bg-gradient-to-r from-rose-500/10 to-indigo-500/10 border border-rose-500/20 px-4 py-2 rounded-full mb-6 backdrop-blur-sm animate-fadeInUp">
              <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
              Available for Opportunities
            </div>

            <h1 className="text-5xl md:text-7xl lg:text-8xl xl:text-9xl font-extrabold tracking-tight mb-6 leading-[0.9]">
              <span className="block text-white">Hi, I'm</span>
              <span className="block gradient-text animate-gradient">Ujala</span>
              <span className="block text-white">Habib.</span>
            </h1>

            <p className="text-lg md:text-2xl text-slate-400 leading-relaxed mb-8 max-w-2xl">
              A <span className="text-rose-400 font-semibold">Software Engineer</span> & <span className="text-purple-400 font-semibold">Graphic Designer</span> crafting digital experiences, beautiful illustrations, and meaningful content.
            </p>

            <div className="flex flex-wrap gap-4 justify-center md:justify-start mb-12">
              <a href="#portfolio" className="group bg-gradient-to-r from-rose-500 to-purple-600 text-white font-semibold px-8 py-4 rounded-full hover:scale-105 transition-all duration-300 btn-shine glow-rose flex items-center gap-2">
                View My Work
                <ArrowUpRight size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </a>
              <a href={`mailto:${personalDetails.email}`} className="glass border border-slate-700 px-8 py-4 rounded-full text-slate-300 font-medium hover:bg-slate-800 hover:border-rose-500/50 transition-all duration-300 flex items-center gap-2">
                <Mail size={18} /> Get In Touch
              </a>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {stats.map((stat, i) => (
                <div key={i} className="glass p-4 rounded-2xl text-center card-hover">
                  <stat.icon className="text-rose-400 mx-auto mb-2" size={20} />
                  <div className="text-2xl md:text-3xl font-bold gradient-text">{stat.value}</div>
                  <div className="text-xs text-slate-500 mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="md:col-span-2 order-1 md:order-2 flex justify-center relative">
            <div className="relative w-72 h-72 md:w-[420px] md:h-[420px]">
              <div className="absolute -inset-6 rounded-full border-2 border-dashed border-rose-500/30 animate-spin-slow"></div>
              <div className="absolute inset-0 rounded-full border-2 border-rose-500/20 animate-pulse-glow"></div>
              <div className="absolute -inset-3 rounded-full border border-purple-500/20"></div>

              <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-slate-900 shadow-2xl shadow-rose-500/30">
                <img
                  src={personalDetails.profileImage}
                  alt="Ujala Habib"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.currentTarget.src = `https://ui-avatars.com/api/?name=Ujala+Habib&size=400&background=f43f5e&color=fff&bold=true`;
                  }}
                />
              </div>

              <div className="absolute top-4 -right-4 glass-strong px-3 py-2 rounded-full animate-float shadow-xl">
                <div className="flex items-center gap-2">
                  <Code size={14} className="text-rose-400" />
                  <span className="text-xs font-mono text-slate-200">Developer</span>
                </div>
              </div>
              <div className="absolute bottom-8 -left-4 glass-strong px-3 py-2 rounded-full animate-float shadow-xl" style={{ animationDelay: '1s' }}>
                <div className="flex items-center gap-2">
                  <Palette size={14} className="text-purple-400" />
                  <span className="text-xs font-mono text-slate-200">Designer</span>
                </div>
              </div>
              <div className="absolute top-1/2 -right-12 glass-strong px-3 py-2 rounded-full animate-float shadow-xl" style={{ animationDelay: '2s' }}>
                <div className="flex items-center gap-2">
                  <BookOpen size={14} className="text-indigo-400" />
                  <span className="text-xs font-mono text-slate-200">Author</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <ArrowDown className="text-rose-400" size={24} />
        </div>
      </header>

      <section className="py-12 border-y border-slate-900 bg-slate-950/50 overflow-hidden">
        <div className="flex animate-marquee whitespace-nowrap">
          {[...skills.programming, ...skills.design, ...skills.programming, ...skills.design].map((skill, i) => (
            <span key={i} className="mx-8 text-4xl md:text-5xl font-bold text-slate-800 hover:text-slate-600 transition-colors font-serif">
              {skill} ✦
            </span>
          ))}
        </div>
      </section>

      <section id="about" className="max-w-7xl mx-auto px-6 py-32">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-xs font-mono text-rose-400 uppercase tracking-widest flex items-center gap-2 mb-4">
              <span className="w-8 h-px bg-rose-400" /> About Me
            </span>
            <h2 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-[1]">
              Profile <span className="font-serif italic gradient-text">Summary</span>
            </h2>
            <Quote className="text-rose-500/30 mb-4" size={40} />
            <p className="text-slate-300 text-lg leading-relaxed italic">"{profile}"</p>
          </div>

          <div className="space-y-4">
            <InfoRow icon={Mail} label="Email" value={personalDetails.email} href={`mailto:${personalDetails.email}`} color="rose" />
            <InfoRow icon={Phone} label="Phone" value={personalDetails.phone} href={`tel:${personalDetails.phone}`} color="emerald" />
            <InfoRow icon={MapPin} label="Location" value={personalDetails.location} color="indigo" />
            <InfoRow icon={LinkedinIcon} label="LinkedIn" value="ujala-habib-bb5221261" href={personalDetails.linkedin} color="blue" />
          </div>
        </div>
      </section>

      <section id="goals" className="max-w-7xl mx-auto px-6 py-32">
        <SectionTitle subtitle="Goals" title="Current" kicker="Goals" />
        <div className="grid md:grid-cols-2 gap-6">
          {goals.map((goal, i) => (
            <PillCard key={i} title={goal.title} desc={goal.desc} icon={goal.icon} accent={i === 0 ? 'rose' : 'indigo'} />
          ))}
        </div>
      </section>

      <section id="skills" className="max-w-7xl mx-auto px-6 py-32">
        <SectionTitle subtitle="Expertise" title="Skills &" kicker="Tools" />
        <div className="grid md:grid-cols-2 gap-8">
          <div className="glass p-10 rounded-3xl card-hover hover:border-rose-500/50">
            <div className="flex items-center gap-4 mb-8">
              <div className="p-4 bg-rose-500/10 border border-rose-500/20 rounded-2xl">
                <Code className="text-rose-400" size={28} />
              </div>
              <h3 className="text-2xl font-bold text-white">Programming & Web</h3>
            </div>
            <div className="flex flex-wrap gap-3">
              {skills.programming.map((s, i) => (
                <span key={i} className="text-sm font-mono text-slate-300 bg-slate-800/50 border border-slate-700 px-4 py-2 rounded-full hover:border-rose-500/50 hover:bg-rose-500/10 hover:text-rose-300 transition-all">
                  {s}
                </span>
              ))}
            </div>
          </div>

          <div className="glass p-10 rounded-3xl card-hover hover:border-indigo-500/50">
            <div className="flex items-center gap-4 mb-8">
              <div className="p-4 bg-indigo-500/10 border border-indigo-500/20 rounded-2xl">
                <Palette className="text-indigo-400" size={28} />
              </div>
              <h3 className="text-2xl font-bold text-white">Design Tools</h3>
            </div>
            <div className="flex flex-wrap gap-3">
              {skills.design.map((s, i) => (
                <span key={i} className="text-sm font-mono text-slate-300 bg-slate-800/50 border border-slate-700 px-4 py-2 rounded-full hover:border-indigo-500/50 hover:bg-indigo-500/10 hover:text-indigo-300 transition-all">
                  {s}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-32">
        <div className="glass-strong border border-slate-800 rounded-3xl p-10 md:p-16 relative overflow-hidden hover-glow-rose">
          <div className="absolute -top-20 -right-20 w-60 h-60 bg-indigo-500/20 rounded-full blur-3xl" />
          <div className="absolute -bottom-20 -left-20 w-60 h-60 bg-rose-500/20 rounded-full blur-3xl" />
          <div className="relative grid md:grid-cols-3 gap-8 items-center">
            <div className="md:col-span-1">
              <span className="inline-block text-xs font-mono text-indigo-400 bg-indigo-400/10 border border-indigo-400/20 px-3 py-1 rounded-full mb-4">
                {tutoringExperience.duration}
              </span>
              <h3 className="text-4xl font-bold text-white mb-3">{tutoringExperience.role}</h3>
              <p className="text-slate-400 italic">{tutoringExperience.type}</p>
            </div>
            <div className="md:col-span-2 space-y-3">
              {tutoringExperience.details.map((d, i) => (
                <div key={i} className="flex items-start gap-3 p-4 glass rounded-xl">
                  <CheckCircle2 className="text-indigo-400 mt-0.5 shrink-0" size={18} />
                  <p className="text-slate-200">{d}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-32">
        <div className="text-center mb-16">
          <span className="text-xs font-mono text-rose-400 uppercase tracking-widest flex items-center justify-center gap-2 mb-4">
            <span className="w-8 h-px bg-rose-400" /> Current Status <span className="w-8 h-px bg-rose-400" />
          </span>
          <h2 className="text-5xl md:text-7xl font-bold text-white leading-[1]">
            Internship <span className="font-serif italic gradient-text">Work</span>
          </h2>
        </div>

        <div className="glass-strong rounded-3xl p-8 md:p-10 mb-8 border border-slate-800">
          <div className="inline-flex items-center gap-2 text-xs font-mono text-emerald-400 bg-emerald-400/10 border border-emerald-400/20 px-3 py-1 rounded-full mb-4">
            <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
            {currentWork.badge}
          </div>
          <h3 className="text-3xl font-bold text-white mb-3">{currentWork.title}</h3>
          <p className="text-slate-400 max-w-3xl">{currentWork.desc}</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {internships.map((int, i) => (
            <div key={i} className="group glass p-8 rounded-2xl hover:border-rose-500/50 hover-glow-rose card-hover">
              <span className="inline-block text-xs font-mono text-rose-400 bg-rose-400/10 border border-rose-400/20 px-3 py-1 rounded-full mb-4">
                {int.duration}
              </span>
              <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-rose-100 transition-colors">{int.company}</h3>
              <p className="text-sm text-slate-400 leading-relaxed">{int.role}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="projects" className="max-w-7xl mx-auto px-6 py-32">
        <div className="flex items-center gap-4 mb-16">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-slate-800 to-transparent" />
          <span className="text-xs font-mono text-rose-400 uppercase tracking-widest flex items-center gap-2">
            <FolderGit2 size={14} /> Projects Portfolio
          </span>
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-slate-800 to-transparent" />
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((proj, i) => (
            <div key={i} className="group glass p-8 rounded-2xl hover:border-rose-500/50 hover-glow-rose card-hover relative overflow-hidden">
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-mono text-rose-400 bg-rose-500/10 border border-rose-500/20 px-3 py-1 rounded">
                  PROJECT {`0${i + 1}`.slice(-2)}
                </span>
                <Code size={18} className="text-slate-700 group-hover:text-rose-400 transition-colors" />
              </div>
              <h4 className="text-xl font-bold text-white mb-3 group-hover:text-rose-100 transition-colors line-clamp-2">{proj.name}</h4>
              <p className="text-xs text-indigo-400 font-mono mb-4">{proj.tech}</p>
              <p className="text-sm text-slate-400 leading-relaxed">{proj.detail}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="youtube" className="max-w-7xl mx-auto px-6 py-32">
        <SectionTitle subtitle="Content Creator" title="YouTube" kicker="Channels" />
        <div className="grid md:grid-cols-2 gap-6">
          {channelLinks.map((ch, i) => (
            <a
              key={i}
              href={ch.link}
              target="_blank"
              rel="noreferrer"
              className={`group glass-strong p-8 rounded-3xl border transition-all card-hover ${
                ch.accent === 'rose' ? 'hover:border-rose-500/50' : 'hover:border-indigo-500/50'
              }`}
            >
              <div className="flex items-center justify-between mb-4">
                <span
                  className={`text-xs font-mono px-3 py-1 rounded-full border ${
                    ch.accent === 'rose'
                      ? 'text-rose-400 bg-rose-500/10 border-rose-500/20'
                      : 'text-indigo-400 bg-indigo-500/10 border-indigo-500/20'
                  }`}
                >
                  {ch.handle}
                </span>
                <ExternalLink size={18} className="text-slate-500 group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-3 group-hover:gradient-text transition-all">
                {ch.title}
              </h3>
              <p className="text-slate-400 leading-relaxed">{ch.desc}</p>
              <div className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-rose-400 group-hover:text-rose-300 transition-colors">
                Visit Channel <ArrowUpRight size={16} />
              </div>
            </a>
          ))}
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-32">
        <SectionTitle subtitle="Published Literature" title="Words that" kicker="move" />
        <div className="grid md:grid-cols-2 gap-8">
          {books.map((book, idx) => (
            <div key={idx} className="group relative glass p-10 rounded-3xl flex flex-col justify-between hover:border-rose-500/50 hover-glow-rose card-hover overflow-hidden min-h-[400px]">
              <Quote className="text-rose-500/20 absolute top-6 right-6" size={64} />
              <div className="relative">
                <span className="inline-block text-xs font-mono text-indigo-400 bg-indigo-400/10 border border-indigo-400/20 tracking-wider uppercase px-3 py-1 rounded-full mb-4">
                  {book.tagline}
                </span>
                <h3 className="text-3xl font-bold text-white mb-4 group-hover:gradient-text transition-all">{book.title}</h3>
                <p className="text-slate-400 leading-relaxed">{book.desc}</p>
              </div>
              <a href={book.link} target="_blank" rel="noreferrer" className="relative inline-flex items-center gap-2 text-sm font-semibold text-rose-400 hover:text-rose-300 transition-colors mt-6">
                Read Publication Announcement
                <ArrowUpRight size={16} />
              </a>
            </div>
          ))}
        </div>
      </section>

      <section id="portfolio" className="max-w-7xl mx-auto px-6 py-32">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <span className="text-xs font-mono text-rose-400 uppercase tracking-widest flex items-center gap-2 mb-4">
              <span className="w-8 h-px bg-rose-400" /> Creative Hub
            </span>
            <h2 className="text-5xl md:text-7xl font-bold text-white leading-[1]">
              Visual <span className="font-serif italic gradient-text">Showcase</span>
            </h2>
            <p className="text-slate-400 mt-4 max-w-xl">
              "I challenge standard spaces using industry software to craft distinct vector visuals, and use clay crafting as a profound source of personal peace."
            </p>
          </div>

          <div className="flex glass p-2 rounded-2xl border border-slate-800 text-sm font-mono">
            {['all', 'graphics', 'clay'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-5 py-3 rounded-xl transition-all duration-300 ${
                  activeTab === tab
                    ? 'bg-gradient-to-r from-rose-500 to-purple-600 text-white shadow-lg shadow-rose-500/30'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                {tab === 'all' ? `All (${creations.length})` : tab === 'graphics' ? 'Illustrations' : 'Clay Art'}
              </button>
            ))}
          </div>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
          {filteredCreations.map((item, idx) => (
            <GalleryCard key={`${item.title}-${idx}`} item={item} index={idx} onOpen={setSelectedItem} />
          ))}
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-32">
        <SectionTitle subtitle="Education" title="Academic" kicker="Journey" />
        <div className="space-y-4 max-w-4xl mx-auto">
          {education.map((edu, i) => (
            <div key={i} className="group glass p-6 rounded-2xl hover:border-indigo-500/50 card-hover relative overflow-hidden flex flex-col md:flex-row md:items-center gap-4">
              <div className="w-16 h-16 rounded-2xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                <GraduationCap size={26} className="text-indigo-400" />
              </div>
              <div className="flex-1">
                <div className="flex items-start justify-between mb-1 gap-2 flex-wrap">
                  <h3 className="text-xl font-bold text-white group-hover:text-indigo-100 transition-colors">{edu.degree}</h3>
                  <span
                    className={`text-xs font-mono px-3 py-1 rounded-full border whitespace-nowrap ${
                      edu.status === 'Ongoing'
                        ? 'text-amber-400 bg-amber-400/10 border-amber-400/20'
                        : 'text-emerald-400 bg-emerald-400/10 border-emerald-400/20'
                    }`}
                  >
                    {edu.status}
                  </span>
                </div>
                <p className="text-sm text-slate-300 font-medium">{edu.institution}</p>
                {edu.detail && <p className="text-xs text-slate-500 mt-1">{edu.detail}</p>}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-32">
        <SectionTitle subtitle="Credentials" title="Courses &" kicker="Certifications" />

        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          <div className="glass p-8 rounded-2xl card-hover hover:border-purple-500/50">
            <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-3">
              <span className="w-3 h-3 bg-purple-500 rounded-full" />
              Memon Institute
            </h3>
            <ul className="space-y-3">
              {coursesAndCerts.memonInstitute.map((c, i) => (
                <li key={i} className="text-slate-300 flex items-start gap-3">
                  <Award size={16} className="text-purple-400 mt-0.5 shrink-0" />
                  {c}
                </li>
              ))}
            </ul>
          </div>

          <div className="glass p-8 rounded-2xl card-hover hover:border-rose-500/50">
            <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-3">
              <span className="w-3 h-3 bg-rose-500 rounded-full" />
              Online Courses
            </h3>
            <ul className="space-y-3">
              {coursesAndCerts.onlineCourses.map((c, i) => (
                <li key={i} className="text-slate-300 flex items-start gap-3">
                  <Award size={16} className="text-rose-400 mt-0.5 shrink-0" />
                  {c}
                </li>
              ))}
            </ul>
          </div>

          <div className="glass p-8 rounded-2xl card-hover hover:border-indigo-500/50">
            <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-3">
              <span className="w-3 h-3 bg-indigo-500 rounded-full" />
              Edrey Platform
            </h3>
            <ul className="space-y-3">
              {coursesAndCerts.edreyPlatform.map((c, i) => (
                <li key={i} className="text-slate-300 flex items-start gap-3">
                  <Award size={16} className="text-indigo-400 mt-0.5 shrink-0" />
                  {c}
                </li>
              ))}
            </ul>
          </div>

          <div className="glass p-8 rounded-2xl card-hover hover:border-amber-500/50">
            <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-3">
              <span className="w-3 h-3 bg-amber-500 rounded-full animate-pulse" />
              Ongoing Learning
            </h3>
            <ul className="space-y-3">
              {coursesAndCerts.ongoingLearning.map((c, i) => (
                <li key={i} className="text-slate-300 flex items-start gap-3">
                  <Award size={16} className="text-amber-400 mt-0.5 shrink-0" />
                  {c}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 max-w-5xl mx-auto">
          <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
            <Star className="text-yellow-400" size={22} />
            All Certifications
          </h3>
          <div className="grid md:grid-cols-2 gap-3">
            {certifications.map((cert, i) => (
              <div key={i} className="group flex items-center gap-3 p-4 glass rounded-xl hover:border-emerald-500/50 transition-all card-hover">
                <div className="w-10 h-10 bg-emerald-500/10 border border-emerald-500/20 rounded-lg flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                  <Award size={16} className="text-emerald-400" />
                </div>
                <span className="text-sm text-slate-300 group-hover:text-white transition-colors">{cert}</span>
                <Star size={14} className="ml-auto text-emerald-500/30 group-hover:text-emerald-400 transition-colors" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-32">
        <SectionTitle subtitle="Experience" title="" kicker="Internships" />
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {internships.map((int, i) => (
            <div key={i} className="group glass p-8 rounded-2xl hover:border-rose-500/50 hover-glow-rose card-hover">
              <span className="inline-block text-xs font-mono text-rose-400 bg-rose-400/10 border border-rose-400/20 px-3 py-1 rounded-full mb-4">
                {int.duration}
              </span>
              <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-rose-100 transition-colors">{int.company}</h3>
              <p className="text-sm text-slate-400 leading-relaxed">{int.role}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-32">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-7xl font-bold text-white leading-[1]">
            <span className="font-serif italic gradient-text">Languages</span>
          </h2>
        </div>
        <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
          {languages.map((lang, i) => (
            <div key={i} className="group glass p-8 rounded-2xl hover:border-purple-500/50 card-hover">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 bg-purple-500/10 border border-purple-500/20 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Globe size={24} className="text-purple-400" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white">{lang.name}</h3>
                  <p className="text-sm text-slate-400 font-mono">{lang.level}</p>
                </div>
              </div>
              <div className="h-2 bg-slate-800 rounded-full overflow-hidden">
                <div className="h-full bg-gradient-to-r from-purple-500 to-pink-500 rounded-full transition-all duration-1000" style={{ width: `${lang.percent}%` }} />
              </div>
            </div>
          ))}
        </div>
      </section>

      <footer id="contact" className="border-t border-slate-900 bg-gradient-to-b from-slate-950 to-black mt-12 py-32 px-6 relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-32 bg-rose-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl" />

        <div className="max-w-5xl mx-auto relative">
          <div className="text-center mb-16">
            <div className="inline-flex p-5 bg-gradient-to-br from-rose-500/20 to-rose-500/5 border border-rose-500/20 rounded-full mb-8 animate-pulse-glow">
              <Mail size={32} className="text-rose-400" />
            </div>
            <h2 className="text-6xl md:text-9xl font-bold text-white mb-6 leading-[0.95]">
              Let's <span className="font-serif italic gradient-text">Connect</span>
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto text-lg">
              Open for freelance projects, internships, and full-time opportunities. Let's build something amazing together.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4 mb-16">
            <a href={`mailto:${personalDetails.email}`} className="bg-gradient-to-r from-rose-500 to-purple-600 text-white font-semibold px-8 py-4 rounded-full hover:scale-105 transition-transform btn-shine flex items-center gap-2">
              <Mail size={18} /> {personalDetails.email}
            </a>
            <a href={`tel:${personalDetails.phone}`} className="glass border border-slate-700 px-8 py-4 rounded-full text-slate-300 font-medium hover:bg-slate-800 hover:border-emerald-500/50 transition-all flex items-center gap-2">
              <Phone size={18} className="text-emerald-400" /> {personalDetails.phone}
            </a>
          </div>

          <div className="flex justify-center gap-4 mb-12">
            <a href={personalDetails.linkedin} target="_blank" rel="noreferrer" className="w-12 h-12 glass rounded-full flex items-center justify-center hover:border-indigo-500/50 hover:bg-indigo-500/10 transition-all group">
              <LinkedinIcon size={20} className="text-slate-400 group-hover:text-indigo-400 transition-colors" />
            </a>
            <a href={personalDetails.youtube} target="_blank" rel="noreferrer" className="w-12 h-12 glass rounded-full flex items-center justify-center hover:border-red-500/50 hover:bg-red-500/10 transition-all group">
              <ExternalLink size={18} className="text-slate-400 group-hover:text-red-400 transition-colors" />
            </a>
            <a href={`mailto:${personalDetails.email}`} className="w-12 h-12 glass rounded-full flex items-center justify-center hover:border-rose-500/50 hover:bg-rose-500/10 transition-all group">
              <Mail size={20} className="text-slate-400 group-hover:text-rose-400 transition-colors" />
            </a>
          </div>

          <div className="pt-8 border-t border-slate-900 text-center">
            <p className="text-slate-500 font-mono text-sm">Ujala Habib © 2026 — Crafted with passion</p>
          </div>
        </div>
      </footer>

      {selectedItem && (
        <div
          className="fixed inset-0 z-[100] image-modal-backdrop flex items-center justify-center px-4 py-8"
          onClick={() => setSelectedItem(null)}
        >
          <div
            className="image-modal-panel w-full max-w-5xl overflow-hidden rounded-[28px] border border-white/10 bg-slate-950 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between px-5 md:px-6 py-4 border-b border-white/5">
              <div>
                <p className="text-xs font-mono uppercase tracking-[0.3em] text-rose-400">
                  {selectedItem.category === 'clay' ? 'Clay Art' : 'Illustration'}
                </p>
                <h3 className="text-lg md:text-2xl font-bold text-white mt-1">{selectedItem.title}</h3>
              </div>
              <button
                type="button"
                onClick={() => setSelectedItem(null)}
                className="w-11 h-11 rounded-full glass flex items-center justify-center hover:border-rose-500/50 transition-colors"
                aria-label="Close preview"
              >
                <X size={18} />
              </button>
            </div>

            <div className="grid md:grid-cols-[1.5fr_0.9fr]">
              <div className="relative bg-black">
                <img
                  src={selectedItem.image_ref}
                  alt={selectedItem.title}
                  className="w-full h-[280px] md:h-[650px] object-cover"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                  }}
                />
              </div>

              <div className="p-6 md:p-8 border-t md:border-t-0 md:border-l border-white/5 bg-slate-950/90">
                <div className="inline-flex items-center gap-2 text-xs font-mono px-3 py-1 rounded-full border mb-5 text-slate-300 border-white/10 bg-white/5">
                  {selectedItem.category === 'clay' ? 'Handcrafted' : 'Digital Art'}
                </div>
                <p className="text-slate-300 leading-relaxed">
                  Selected preview from your portfolio gallery. This modal makes the artwork feel premium, clickable, and presentation-ready.
                </p>

                <div className="mt-8 space-y-3">
                  <div className="glass rounded-2xl p-4 border border-white/5">
                    <div className="text-xs uppercase tracking-widest text-slate-500">Category</div>
                    <div className="text-white mt-1">{selectedItem.category === 'clay' ? 'Clay Art' : 'Graphics'}</div>
                  </div>
                  <div className="glass rounded-2xl p-4 border border-white/5">
                    <div className="text-xs uppercase tracking-widest text-slate-500">Status</div>
                    <div className="text-white mt-1">Hover + click preview enabled</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
