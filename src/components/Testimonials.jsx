'use client';

import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { motion } from 'framer-motion';
import { Ranchers } from '@next/font/google';

const ranchers = Ranchers({ subsets: ['latin'], weight: '400' });

const testimonialsData = [
  {
    name: 'SANJAY RAVAL SIR',
    title: 'Motivational Speaker',
    quote:
      'The event was truly remarkable; it was inspiring to see the students of this university put together such a well-organized program. The enthusiasm and engagement from the audience were incredible!',
    photo: 'https://smsr.in/images/641358FOUNDER-800x800.jpg',
  },
  {
    name: 'VIVEK ATRAY SIR',
    title: 'ex IAS Officer, TEDx Speaker',
    quote:
      'I liked the event very much, I am happy that students of this university had organized such a great event and the energy could be seen—the audience was very interactive.',
    photo:
      'https://pbs.twimg.com/profile_images/1248982406817665028/oHeDYRQs_400x400.jpg',
  },
  {
    name: 'ADMIRAL KARAMBIR SINGH',
    title: 'Former Chief of Naval Staff',
    quote:
      'I was truly impressed by the passion and dedication of the students. The organizing team did an outstanding job, and it was a privilege to witness such an incredible event.',
    photo: '/kaleido/karambirsingh.png',
  },
  {
    name: 'PETER C. SCHULTZ',
    title: 'Co-inventor of the fiber optics',
    quote:
      'The organizers for these conference, everybody, everyone had been very very friendly and helpful and I found very enthusiastic to work with FootPrints.',
    photo:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRp6HE7-J9PqYZrh-1GKKu5dRhFpZumOpIGrw&s',
  },
  {
    name: 'AMOD MALVIYA SIR',
    title: 'Co-founder of UDAAN, Ex-CTO at Flipkart',
    quote:
      'I adored the enthusiasm and the energy the students had. Organizing committee did a fantastic job and really it was an honor to be a part of such a great event.',
    photo:
      'https://www.emergingmarketsconference.org/_next/image?url=https%3A%2F%2Fapi.emergingmarketsconference.org%2Fuploads%2Fuser%2F1711434953026-amod.jpeg&w=3840&q=75',
  },
  {
    name: 'Lt. Gen SATISH DUA',
    title: 'Mastermind of URI Surgical Strike',
    quote:
      "I am thankful to Team Footprints to invite me to such an outstanding event. Everyone's enthusiasm was terrific and the event was organized in such a flawless manner. It has really been an honor and a delight to be here. Jai Hind!",
    photo:
      'https://static.toiimg.com/thumb/msid-55231152,width-400,resizemode-4/55231152.jpg',
  },
  {
    name: 'ABHI N NIYU',
    title: 'Youtubers/Content Creators Youth',
    quote:
      'It was remarkably delightful to be in the auditorium and having a chance to interact with so many people. Our panel was very well moderated by Ajay sir and was a very enjoyable experience. We have one message for all that because of your support, HUME FARAK PADTA HAI!',
    photo:
      'https://th-i.thgim.com/public/incoming/b884zd/article66199541.ece/alternates/FREE_1200/Abhi%20and%20Niyu1.jpg',
  },
  {
    name: 'AMI GANATRA',
    title: 'Author of Ramayana Unravalled , Mahabharata Unravalled',
    quote:
      'It was a delightful and enthralling experience and I surely had a blast! The team escorted me all over the college and showed me around. If I had more time then I would have surely spent it relishing the event.',
    photo:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZHO-xAB1VWHeXjapJzqHv07Cg3AEcIjRHfQ&s',
  },
  {
    name: 'RADHAKRISHN PILLAI SIR',
    title: 'Teacher of Chankayaniti | Tedx Speaker',
    quote:
      'It was an honor to be a part of such a remarkable event. The quality of the questions asked by the students was amazing as well. Organizers were brilliant and for me this is going to be unforgettable for a lifetime. ',
    photo: 'https://www.hua.edu/wp-content/uploads/2022/11/Picture1.png',
  },
  {
    name: 'Dr. Pawan Aggarwal',
    title: 'International Motivational Speaker',
    quote:
      "Today's generation can do great things, all you need is to think beyond your capacity and stamina! Even the name of this college has a blessing in itself, 'Maharaja Sayajirao Gaekwad.'",
    photo:
      'https://www.drpawanagrawal.com/assets/images/dr-pawan-agrawal-pic.jpg',
  },
  {
    name: 'RAGHAVA RAO',
    title: 'CFO Amazon India',
    quote:
      "It's been a great experience starting from the hospitality and the way the administration arrangements are being made and it was a delight to watch the crowd gathered for the event.",
    photo: 'https://www.indiaretailing.com/wp-content/uploads/2019/11/0-2.jpg',
  },
];

const Testimonials = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <motion.div
      className="testimonials-section py-16 px-8 text-white"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.1 }}
    >
      <motion.h2
        className={`text-4xl font-bold mb-8 text-center ${ranchers.className} tracking-wide`}
      >
        TESTIMONIALS
      </motion.h2>
      <Slider {...settings} className="max-w-6xl mx-auto">
        {testimonialsData.map((testimonial, index) => (
          <motion.div
            key={index}
            className="px-4"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }}
          >
            <div
              className="p-6 rounded-lg bg-opacity-85 cursor-pointer transition-all duration-300 relative transform hover:shadow-lg hover:scale-100 flex flex-col justify-between sm:min-h-[400px] sm:max-h-[400px] lg:min-h-[500px] lg:max-h-[500px]"
              style={{
                backgroundColor: 'rgba(151, 25, 25, 0.2)',
                boxShadow: '0 5px 8px rgba(0, 0, 0, 0.5)',
              }}
            >
              <div className="flex-grow overflow-scroll hide-scrollbar">
                <p
                  className="italic text-sm sm:text-base lg:text-lg mb-4 text-center line-clamp-4 overflow-scroll hide-scrollbar"
                  style={{ maxHeight: '6em', overflow: 'scroll' }}
                >
                  {`"${testimonial.quote}"`}
                </p>
              </div>
              <div className="flex items-center justify-center mb-4">
                <img
                  src={testimonial.photo}
                  alt={testimonial.name}
                  className="w-24 h-24 rounded-full object-cover"
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3
                  className="font-semibold text-xl sm:text-2xl lg:text-3xl text-center overflow-scroll text-nowrap hide-scrollbar"
                  style={{ maxWidth: '100%' }}
                >
                  {testimonial.name}
                </h3>
                <p
                  className="text-sm sm:text-base lg:text-lg text-gray-400 text-center overflow-scroll text-nowrap hide-scrollbar"
                  style={{ maxWidth: '100%' }}
                >
                  {testimonial.title}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </Slider>
    </motion.div>
  );
};

export default Testimonials;
