import thumbnail01 from '../assets/images/blog/thumbnail-01.jpg';
import thumbnail02 from '../assets/images/blog/thumbnail-02.jpg';
import serviceBg from '../assets/images/service-bg.webp';
import digitalMarketingBg from '../assets/images/digital-marketing-bg.webp';
import uiUxBg from '../assets/images/ui-ux-design-bg.webp';
import mobileAppBg from '../assets/images/mobile-application-bg.webp';
import mobileImg from '../assets/images/mobile.png';
import serMobileImg from '../assets/images/ser-mobile-img.png';
import digitalMarketingIcon from '../assets/images/Digital-Marketing-icon.png';
import digitalMarketingImg from '../assets/images/digital-marketing.webp';

const newsPosts = [
  {
    id: 1,
    title: "A2Z Creatorz participated at 26th ITCN Asia 2025 – Pavilion of Innovation.",
    thumbnail: thumbnail01,
    content: "We are excited to announce our participation in the 26th ITCN Asia 2025, where we showcased our latest innovations in the Pavilion of Innovation. This event brought together industry leaders and innovators from across the region to discuss the future of technology and digital transformation. Our team presented cutting-edge solutions in web development, mobile applications, and digital marketing, highlighting how we help businesses stay ahead in the competitive landscape. The pavilion featured interactive demos and networking opportunities that fostered valuable connections and partnerships. Stay tuned for more updates on our achievements and upcoming projects.",
    gallery: [
      thumbnail01,
      serviceBg,
      digitalMarketingBg
    ]
  },
  {
    id: 2,
    title: "A2Z Creatorz participated at LEAP 2025 – Booth I150 (A-11) in Riyadh",
    thumbnail: thumbnail02,
    content: "Joining the prestigious LEAP 2025 event in Riyadh, A2Z Creatorz set up at Booth I150 (A-11) to demonstrate our expertise in IT solutions and digital services. LEAP 2025 is a premier platform for exploring advancements in technology, entrepreneurship, and innovation. Our booth featured live demonstrations of our custom web development, UI/UX design, and e-commerce solutions. We engaged with attendees through interactive sessions and discussions on emerging trends like AI integration and cybersecurity. This participation underscores our commitment to driving digital excellence and supporting businesses in their growth journey. We look forward to sharing more insights from this enriching experience.",
    gallery: [
      thumbnail02,
      uiUxBg,
      mobileAppBg
    ]
  },
  {
    id: 3,
    title: "Advancements in Mobile Application Development",
    thumbnail: mobileImg,
    content: "In the rapidly evolving world of mobile technology, staying updated with the latest trends is crucial. At A2Z Creatorz, we specialize in developing high-performance mobile applications that cater to diverse business needs. From native iOS and Android apps to cross-platform solutions using React Native, our team ensures seamless user experiences and robust functionality. Recent advancements include integrating AI-driven features, enhanced security protocols, and intuitive UI/UX designs. Our portfolio showcases successful projects that have helped clients achieve their digital goals. Explore how we can transform your ideas into innovative mobile solutions.",
    gallery: [
      mobileImg,
      serMobileImg,
      mobileAppBg
    ]
  },
  {
    id: 4,
    title: "The Future of Digital Marketing",
    thumbnail: digitalMarketingIcon,
    content: "Digital marketing continues to reshape how businesses connect with their audiences. At A2Z Creatorz, we leverage data-driven strategies, SEO optimization, social media marketing, and targeted advertising to drive results. With the rise of AI and machine learning, personalized marketing campaigns are becoming more effective than ever. Our team stays ahead of the curve by adopting innovative tools and techniques to maximize ROI for our clients. Whether it's content creation, PPC campaigns, or analytics, we provide comprehensive digital marketing services tailored to your brand. Discover the impact of strategic digital marketing on your business growth.",
    gallery: [
      digitalMarketingIcon,
      digitalMarketingImg,
      digitalMarketingBg
    ]
  }
];

export default newsPosts;