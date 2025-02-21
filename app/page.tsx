/* eslint-disable */
"use client"
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { Calendar, Users, Award, School, Clock, Phone, ChevronLeft, ChevronRight } from 'lucide-react';
import image1 from '../app/images/AdobeStock_1081500543_Preview.jpeg'
import image2 from '../app/images/AdobeStock_21866514_Preview.jpeg'
import image3 from '../app/images/AdobeStock_237290184_Preview.jpeg'
import mascot from '../app/images/vidmascot.gif'
import logo from '../app/images/logotumbletown.png'

import {  Heart, Smile } from 'lucide-react';

import { Star,  Quote } from 'lucide-react';

const ReviewsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const reviews = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "Primary School Teacher",
      school: "Sunshine Elementary",
      image: "/api/placeholder/64/64",
      rating: 5,
      text: "Our students had an amazing time at Tumble Town! The staff was incredibly attentive, and the activities were perfectly age-appropriate. The kids are still talking about Tumble the Doggy!"
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "School Principal",
      school: "Oakridge Academy",
      image: "/api/placeholder/64/64",
      rating: 5,
      text: "Excellent facility with top-notch safety measures. The educational value combined with physical activity makes it a perfect field trip destination. Their staff goes above and beyond!"
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      role: "PE Teacher",
      school: "Greenwood School",
      image: "/api/placeholder/64/64",
      rating: 5,
      text: "The structured activities and professional instruction were fantastic. It was great to see all students, regardless of their physical abilities, fully engaged and having fun."
    }
  ];

  const nextReview = () => {
    setCurrentIndex((prev) => (prev + 1) % reviews.length);
  };

  const prevReview = () => {
    setCurrentIndex((prev) => (prev === 0 ? reviews.length - 1 : prev - 1));
  };

  useEffect(() => {
    const timer = setInterval(nextReview, 8000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="bg-blue-50 py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-blue-600 mb-4">
            What Schools Say About Us
          </h2>
          <p className="text-gray-600 text-lg">
            Join hundreds of satisfied schools who've made Tumble Town their go-to field trip destination
          </p>
        </div>

        {/* Reviews Carousel */}
        <div className="relative max-w-4xl mx-auto">
          <div className="overflow-hidden">
            <div 
              className="transition-transform duration-500 ease-in-out flex"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {reviews.map((review) => (
                <div 
                  key={review.id}
                  className="w-full flex-shrink-0 px-4"
                >
                  <div className="bg-white rounded-2xl shadow-xl p-8">
                    <div className="flex items-start mb-6">
                      <div className="relative">
                        <Image 
                          src={logo} 
                          alt={review.name}
                          className="w-16 h-16 rounded-full object-cover"
                        />
                        <Quote className="absolute -bottom-2 -right-2 w-6 h-6 text-blue-500 bg-white rounded-full" />
                      </div>
                      <div className="ml-4 flex-1">
                        <h3 className="font-semibold text-lg">{review.name}</h3>
                        <p className="text-gray-600">{review.role}</p>
                        <p className="text-blue-600 font-medium">{review.school}</p>
                      </div>
                      <div className="flex space-x-1">
                        {[...Array(review.rating)].map((_, i) => (
                          <Star 
                            key={i}
                            className="w-5 h-5 text-yellow-400 fill-current"
                          />
                        ))}
                      </div>
                    </div>
                    <p className="text-gray-700 italic">"{review.text}"</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={prevReview}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-white rounded-full p-2 shadow-lg hover:bg-gray-50 transition-colors"
          >
            <ChevronLeft className="w-6 h-6 text-blue-600" />
          </button>
          <button
            onClick={nextReview}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-white rounded-full p-2 shadow-lg hover:bg-gray-50 transition-colors"
          >
            <ChevronRight className="w-6 h-6 text-blue-600" />
          </button>

          {/* Dots */}
          <div className="flex justify-center space-x-2 mt-6">
            {reviews.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-all ${
                  index === currentIndex ? 'bg-blue-600 w-4' : 'bg-blue-300'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Stats */}
        <div className="grid md:grid-cols-3 gap-8 mt-16">
          <div className="bg-white rounded-lg p-6 text-center shadow-md">
            <div className="text-3xl font-bold text-blue-600 mb-2">500+</div>
            <div className="text-gray-600">School Visits</div>
          </div>
          <div className="bg-white rounded-lg p-6 text-center shadow-md">
            <div className="text-3xl font-bold text-blue-600 mb-2">98%</div>
            <div className="text-gray-600">Satisfaction Rate</div>
          </div>
          <div className="bg-white rounded-lg p-6 text-center shadow-md">
            <div className="text-3xl font-bold text-blue-600 mb-2">15,000+</div>
            <div className="text-gray-600">Happy Students</div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <button className="bg-yellow-400 text-blue-900 px-8 py-3 rounded-lg font-semibold hover:bg-yellow-500 transition-colors">
            Read More Reviews
          </button>
        </div>
      </div>
    </div>
  );
};

const MascotSection = () => {
  return (
    <div className="bg-gradient-to-b from-blue-50 to-white py-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Mascot Image Side */}
          <div className="md:w-1/2 relative">
            <div className="relative">
              <Image
                src={mascot}
                alt="Tumble the Toby"
                className="rounded-full shadow-xl"
              />
              {/* Decorative Elements */}
              <div className="absolute -top-4 -right-4">
                <Star className="w-8 h-8 text-yellow-400 animate-pulse" />
              </div>
              <div className="absolute -bottom-4 -left-4">
                <Heart className="w-8 h-8 text-pink-400 animate-pulse" />
              </div>
              <div className="absolute -top-4 -left-4">
                <Smile className="w-8 h-8 text-blue-400 animate-pulse" />
              </div>
            </div>
          </div>

          {/* Content Side */}
          <div className="md:w-1/2 text-center md:text-left">
            <h2 className="text-3xl font-bold mb-4 text-blue-600">
              Meet Tumble the Doggy!
            </h2>
            <p className="text-xl mb-6 text-gray-700">
              Our friendly mascot who makes every visit special! Tumble loves to:
            </p>
            
            <div className="space-y-4">
              <div className="bg-white p-4 rounded-lg shadow-md transform hover:scale-105 transition-transform">
                <h3 className="font-semibold text-lg text-blue-600">Guide Adventures</h3>
                <p className="text-gray-600">Helps children discover new activities and make friends</p>
              </div>
              
              <div className="bg-white p-4 rounded-lg shadow-md transform hover:scale-105 transition-transform">
                <h3 className="font-semibold text-lg text-blue-600">Teach Safety</h3>
                <p className="text-gray-600">Shows everyone how to play safely and have fun</p>
              </div>
              
              <div className="bg-white p-4 rounded-lg shadow-md transform hover:scale-105 transition-transform">
                <h3 className="font-semibold text-lg text-blue-600">Lead Activities</h3>
                <p className="text-gray-600">Hosts special group games and educational moments</p>
              </div>
            </div>

            <div className="mt-8">
              <button className="bg-yellow-400 text-blue-900 px-8 py-3 rounded-lg font-semibold hover:bg-yellow-500 transition-colors">
                Schedule a Visit with Tumble!
              </button>
            </div>
          </div>
        </div>

        {/* Mascot Schedule Preview */}
        <div className="mt-16 bg-white rounded-lg shadow-lg p-6">
          <h3 className="text-2xl font-bold text-center mb-6 text-blue-600">
            Tumble's Special Appearances
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center p-4 border-2 border-blue-100 rounded-lg hover:border-blue-300 transition-colors">
              <h4 className="font-semibold mb-2">Morning Welcome</h4>
              <p className="text-gray-600">Greets students as they arrive</p>
            </div>
            <div className="text-center p-4 border-2 border-blue-100 rounded-lg hover:border-blue-300 transition-colors">
              <h4 className="font-semibold mb-2">Activity Time</h4>
              <p className="text-gray-600">Leads group games and exercises</p>
            </div>
            <div className="text-center p-4 border-2 border-blue-100 rounded-lg hover:border-blue-300 transition-colors">
              <h4 className="font-semibold mb-2">Photo Opportunities</h4>
              <p className="text-gray-600">Available for group pictures</p>
            </div>
          </div>
        </div>

        {/* Fun Facts */}
        <div className="mt-12 text-center">
          <h4 className="text-xl font-semibold text-blue-600 mb-4">
            Did You Know?
          </h4>
          <p className="text-gray-700">
            Tumble has been making children smile at our facility for over 5 years!
            Every year, Tumble helps welcome more than 10,000 students to Tumble Town.
          </p>
        </div>
      </div>
    </div>
  );
};

const ImageCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      image: image2,
      title: "Indoor Play Area",
      description: "State-of-the-art playground equipment for all ages"
    },
    {
      image: image1,
      title: "Group Activities",
      description: "Organized team building and fun exercises"
    },
    {
      image: image3,
      title: "Safety First",
      description: "Certified equipment and trained staff"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const goToSlide = (index:any) => {
    setCurrentSlide(index);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  return (
    <div className="relative w-full h-96">
      {/* Slides */}
      <div className="relative h-full overflow-hidden">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute w-full h-full transition-transform duration-500 ease-in-out ${
              index === currentSlide ? 'translate-x-0' : index < currentSlide ? '-translate-x-full' : 'translate-x-full'
            }`}
          >
           <Image
  src={slide.image}
  alt={slide.title}
  fill
  className="object-cover"
  priority={index === 0} // Priority loading for first image
/>
            <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center text-white">
              <div className="text-center">
                <h2 className="text-3xl font-bold mb-2">{slide.title}</h2>
                <p className="text-xl">{slide.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Buttons */}
      <button
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white bg-opacity-50 p-2 rounded-full hover:bg-opacity-75 transition-all"
        onClick={prevSlide}
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      <button
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white bg-opacity-50 p-2 rounded-full hover:bg-opacity-75 transition-all"
        onClick={nextSlide}
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Dots */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full transition-all ${
              index === currentSlide ? 'bg-white' : 'bg-white bg-opacity-50'
            }`}
            onClick={() => goToSlide(index)}
          />
        ))}
      </div>
    </div>
  );
};

const TumbleTownB2B = () => {
  const [activeAccordion, setActiveAccordion] = useState('');

  const toggleAccordion = (id:any) => {
    setActiveAccordion(activeAccordion === id ? '' : id);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-white shadow-sm">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-2">
        <Image 
          src={logo}
          alt="Tumble Town Logo" 
          className="w-8 h-8"
        /> {/* Replace with your actual logo */}
        <div className="text-xl font-bold text-blue-600">Tumble Town</div>
      </div>
            <div className="hidden md:flex space-x-8">
              <a href="#programs" className="text-gray-600 hover:text-blue-600">Programs</a>
              <a href="#benefits" className="text-gray-600 hover:text-blue-600">Benefits</a>
              <a href="#faq" className="text-gray-600 hover:text-blue-600">FAQ</a>
              <a href="#contact" className="text-gray-600 hover:text-blue-600">Contact</a>
            </div>
          </div>
        </div>
      </nav>



      {/* Carousel Section */}
      <ImageCarousel />


      <MascotSection></MascotSection>
   {/* Benefits Section */}
   <div id="benefits" className="py-16 container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Why Choose Tumble Town?</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white rounded-lg shadow-md p-6 text-center">
            <Calendar className="w-12 h-12 text-blue-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-4">Flexible Scheduling</h3>
            <p className="text-gray-600">Multiple time slots available throughout the week to accommodate your school's schedule</p>
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-6 text-center">
            <Users className="w-12 h-12 text-blue-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-4">Group Packages</h3>
            <p className="text-gray-600">Special rates for school groups with dedicated staff supervision</p>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6 text-center">
            <Award className="w-12 h-12 text-blue-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-4">Safety First</h3>
            <p className="text-gray-600">All equipment regularly inspected and certified for safety</p>
          </div>
        </div>
      </div>

      {/* Programs Section */}
      <div id="programs" className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our School Programs</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="flex items-center mb-6">
                <School className="w-6 h-6 text-blue-600 mr-3" />
                <h3 className="text-xl font-semibold">Primary School Adventure</h3>
              </div>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  2-hour supervised play session
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  Age-appropriate activities and games
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  Team building exercises
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  Dedicated party room for breaks
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="flex items-center mb-6">
                <Clock className="w-6 h-6 text-blue-600 mr-3" />
                <h3 className="text-xl font-semibold">Physical Education Sessions</h3>
              </div>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  Structured fitness activities
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  Professional instructors
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  Customizable program length
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  Progress tracking available
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div id="faq" className="py-16 container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
        <div className="max-w-3xl mx-auto">
          <div className="space-y-4">
            {[
              {
                id: 'faq1',
                question: 'What are your COVID-19 safety measures?',
                answer: 'We follow all current health guidelines, including regular sanitization, air filtration, and capacity management. Our staff are trained in the latest safety protocols.'
              },
              {
                id: 'faq2',
                question: 'What is the minimum group size?',
                answer: 'Our school programs are designed for groups of 15 or more students. We can accommodate multiple classes simultaneously.'
              },
              {
                id: 'faq3',
                question: 'Do you provide catering?',
                answer: 'Yes, we offer healthy lunch and snack options. All dietary requirements can be accommodated with advance notice.'
              }
            ].map((faq) => (
              <div key={faq.id} className="border rounded-lg">
                <button
                  className="w-full text-left px-6 py-4 focus:outline-none"
                  onClick={() => toggleAccordion(faq.id)}
                >
                  <div className="flex justify-between items-center">
                    <span className="font-semibold">{faq.question}</span>
                    <span className={`transform transition-transform ${activeAccordion === faq.id ? 'rotate-180' : ''}`}>
                      ▼
                    </span>
                  </div>
                </button>
                {activeAccordion === faq.id && (
                  <div className="px-6 py-4 border-t">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div id="contact" className="bg-blue-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8">Ready to Book Your Visit?</h2>
          <p className="text-xl mb-8">Contact our Programs Coordinator today!</p>
          <div className="flex justify-center items-center space-x-2 mb-8">
            <Phone className="w-6 h-6" />
            <span className="text-xl">1-800-TUMBLE-TOWN</span>
          </div>
          <button className="bg-yellow-400 text-blue-900 px-8 py-3 rounded-lg font-semibold hover:bg-yellow-500 transition-colors">
            Request Information Pack
          </button>
        </div>
      </div>
      <ReviewsSection></ReviewsSection>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p>© 2025 Tumble Town. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default TumbleTownB2B;