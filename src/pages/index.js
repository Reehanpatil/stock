import Slider from '@/components/Slider';
import Navbar from '../components/Navbar';
import WhoWeAre from '@/components/WhoWeAre';
import HybridBusinessModel from '@/components/HybridBusinessModel';
import Achievements from '@/components/Achievements';
import Awards from '@/components/Awards';
import NetworkInsurers from '@/components/NetworkInsurers';
import Footer from '@/components/Footer';

export default function Home() {
  const slides = [
    {
      bgColor: ' rgb(2,3,129) ',
      profile: '/4.jpg',
      quote:
        'Smart Slider 3 is more than powerful. It is amazing. Thanks to the developer for putting in so much effort.',
      author: 'Lucy Crowe',
      designation: 'Creative Director',
    },
    {
      bgColor: ' rgb(2,3,129) ',
      profile: '/3.jpg',
      quote: 'A great slider plugin that is versatile and lightweight.',
      author: 'John Doe',
      designation: 'Product Manager',
    },
    {
      bgColor: ' rgb(2,3,129) ',
      profile: '/4.jpg',
      quote: 'Smart Slider 3 is more than powerful. It is amazing.',
      author: 'Reehan',
      designation: 'Creative Director',
    },
  ];

  return (
    <div>
      <Navbar />
      <main>
        <Slider slides={slides} />
        <WhoWeAre />
        <HybridBusinessModel />
        <Achievements />
        <Awards />
        <NetworkInsurers />
      </main>
      <Footer />
    </div>
  );
}
