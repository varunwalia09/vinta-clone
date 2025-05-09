import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { Link } from 'react-router-dom';
import CardSection from '../Components/CardSection';
import MarqueeText from './MarqueeText';
gsap.registerPlugin(ScrollTrigger);

const Home = () => {
  const videoContainerRef = useRef(null);

  useEffect(() => {
    const videoEl = videoContainerRef.current;

    gsap.timeline({
      scrollTrigger: {
        trigger: videoEl,
        start: 'top center',
        end: 'bottom center',
        scrub: true,
        // markers: true,  // uncomment to debug
      },
    })
    .fromTo(
      videoEl,
      { y: 0, scale: 1, borderRadius: '20px' },    // initial small + rounded
      { y: -180, scale: 1.5, borderRadius: '0px', duration: 1 }  // zoom + no round
    );
  }, []);

  return (
    <div>
      <section className="home-section">
        <h1>ROAR IN THE<br /> DIGITAL WILDERNESS</h1>
      </section>
      <section className='h2-head'>
        <h2>We roar with success, delivering the TRIONN<br />
          through versatile design, branding and the latest<br />
          tech development to companies.</h2>
      </section>
      <button className="down-arrow-btn">↓</button>
      <section className='home-btn'>
        <button type="submit">Explore Work</button>

        <div className="video-animation" ref={videoContainerRef}>
          <video
            className="video-animation-video"
            src="/vinta.mp4"
            muted
            loop
            autoPlay
          />
        </div>

        <button type="submit">Get In Touch</button>
      </section>

      <section className='second-section'>
        <h1>RECENT</h1>
      </section>
      <section className='third-section'>
        <h1>WORK</h1>
      </section>
      <section className='forth-section'>
      <h2>In the creative wilderness,<br/>
      clients find our work truly<br/>
      beloved.
      </h2>
      <button type="submit">Explore Work</button>
      </section>
      <section className="card-with-image" >
      <div className="text-content">
        <h2 className="card-title-7">LOFTLOOM</h2>
        <p className="card-description-7" >UI Design, UX Wireframes</p>
        <Link to="/project">
    <button className="card-button-7">View Project</button>
    </Link>
      </div>
      <div className="image-content">
        <img src="./src/assets/conf-4.jpg" alt="Image description" className="card-image" />
      </div>
      </section>
      <section className="card-with-image-2">
  <div className="image-content-2">
    <img src="./src/assets/logo.jpg" alt="Image description" className="card-image" />
  </div>
  <div className="text-content-8">
    <h2 className="card-title-8">MUSIC</h2>
    <p className="card-description-8">Research, UX/UI Design</p>
    <Link to="/project">
  <button className="card-button-8">View Project</button>
</Link>
  </div>
</section>


<section className="card-with-image-9" >
      <div className="text-content-9">
        <h2 className="card-title-9">TECHNIS</h2>
        <p className="card-description-9" >UI/UX Design,  Development</p>
        <Link to="/project">
    <button className="card-button-9">View Project</button>
    </Link>
      </div>
      <div className="image-content-3">
        <img src="./src/assets/conf-3.jpg" alt="Image description" className="card-image" />
      </div>
      </section>
      {/* fifth section */}
      <section className='fifth-section'>
        <h1>WHO</h1>
        <h2>WEARE</h2>
      </section>

      <section className='sixth-seection'>
        <h2>As an award-winning agency<br/>
          within the digital jungle,<br/>
          TRIONN transcends<br/>
          aesthetics, crafting your<br/>
          visin into a legacy that<br/>
          endures.</h2>
      </section>
      <section className='seven-section'>
        <h1>We roar with creativity,staying updated<br/>
          with  the latest tech to make your brnad a <br/>
          formidable force in the digital wilderness<br/>
          and deliver exceptional website and app <br/>
          <span>experiences</span></h1>
          <Link to='/about'>
          <button className='about-button'>About</button>
         </Link>
          </section>

{/* eight-section */}
      <section className="two-card-section">
     <div className="card left-card">
    <h2 className="card-title">50+</h2>
    <p className="card-description">AWARDS & <br/><span>RECOGNITION</span> </p>
   </div>
   <div className="card right-card-2">
    <h2 className="card-title-2">900+</h2>
    <p className="card-description-2">PROJECTS<br/> COMPLETED</p>
    </div>
    </section>

{/* ninth section */}
<section className="two-card-section-3">
     <div className="card-3 left-card-3">
    <h2 className="card-title-3">20+</h2>
    <p className="card-description-3">CREATIVE <br/>MINDS</p>
   </div>
   <div className="card right-card-4">
    <h2 className="card-title-4">20+</h2>
    <p className="card-description-4">YEAR OF<br/> COMPLETED</p>
    </div>
    </section>

{/* 10th section */}
   <section className='tenth-section'>
    <h1>PARTNER <br/>LOVE</h1>
   </section>
   <section className='eleven-section'>
          <h1>Take heed,as the<br/> 
          lion's roar in our client<br/>
          reviews resounds.
          </h1>
          </section>

{/* 5 card imageas  */}
<CardSection />
<MarqueeText/>
    </div>
  );
};

export default Home;

// import React, { useRef, useEffect, useState } from 'react';

// const Home = () => {
//   const videoRef = useRef(null);
//   const [isInView, setIsInView] = useState(false);
//   const [isZoomed, setIsZoomed] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       const rect = videoRef.current.getBoundingClientRect();
//       const windowHeight = window.innerHeight || document.documentElement.clientHeight;

//       // When video enters the viewport and page scrolls down
//       if (rect.top < windowHeight && rect.bottom >= 0) {
//         if (!isZoomed) {
//           setIsZoomed(true);
//         }
//       } else {
//         if (isZoomed) {
//           setIsZoomed(false);
//         }
//       }
//     };

//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, [isZoomed]);

//   useEffect(() => {
//     if (videoRef.current) {
//       if (isZoomed) {
//         videoRef.current.play();
//       } else {
//         videoRef.current.pause();
//       }
//     }
//   }, [isZoomed]);

//   return (
//     <div>
//       <section className="home-section">
//         <h1>ROAR IS THE<br /> DIGITAL WILDERNESS</h1>
//       </section>
//       <section className='h2-head'>
//         <h2>We roar with success, delivering the TRIONN<br />
//           through versatile design, branding and the latest<br />
//           tech development to companies.</h2>
//       </section>
      
//       <button className="down-arrow-btn">↓</button>
      
//       <section className='home-btn'>
//         <button type="submit">Explore Work</button>

//         {/* Video container with dynamic zoom based on scroll */}
//         <div className={`video-container ${isZoomed ? 'zoom' : ''}`}>
//           <video
//             ref={videoRef}
//             src="/vinta.mp4"
//             muted
//             loop
//           />
//         </div>
//         <button type="submit">Get In Touch</button>
//       </section>
//       <section className='second-section'>
//       <h1>RECENT<br/> WORK</h1>
//       </section>
//     </div>
//   );
// };

// export default Home;
