
import React from 'react';
import { MapPin, Clock, Phone, Mail, Calendar } from 'lucide-react';
import ScrollAnimation from './ScrollAnimation';

const Contact = () => {
  const contactInfo = [
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Farm Location",
      details: ["12345 High Desert Lane", "Bend, Oregon 97701"]
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Farm Store Hours", 
      details: ["Tuesday - Saturday: 9am - 6pm", "Sunday: 10am - 4pm", "Closed Mondays"]
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Contact",
      details: ["Phone: (541) 555-FARM", "Text: (541) 555-0123"]
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email",
      details: ["info@terraroots.farm", "csa@terraroots.farm"]
    }
  ];

  const workshops = [
    {
      title: "Soil Health Workshop",
      date: "January 20, 2024",
      time: "10am - 2pm",
      price: "$45 per person"
    },
    {
      title: "Seed Starting Basics", 
      date: "February 15, 2024",
      time: "1pm - 4pm",
      price: "$35 per person"
    },
    {
      title: "Composting 101",
      date: "March 10, 2024", 
      time: "10am - 12pm",
      price: "$25 per person"
    }
  ];

  return (
    <section id="contact" className="py-[clamp(2rem,6vw,6rem)] bg-white">
      <div className="container mx-auto px-5 max-w-[1200px]">
        <ScrollAnimation animation="fade-in">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-[#2D5530] mb-6">Visit Us</h2>
            <p className="text-lg text-[#666] max-w-3xl mx-auto leading-relaxed">
              Come experience farm life firsthand. Visit our farm store, join a workshop, or schedule a tour. 
              We love connecting with our community and sharing our passion for sustainable agriculture.
            </p>
          </div>
        </ScrollAnimation>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Contact Information */}
          <ScrollAnimation animation="slide-in-left">
            <div>
              <h3 className="text-2xl font-bold text-[#333] mb-8">Get in Touch</h3>
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                {contactInfo.map((item, index) => (
                  <div key={index} className="bg-[#F5F5DC]/50 p-6 rounded-lg">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="text-[#2D5530]">{item.icon}</div>
                      <h4 className="font-bold text-[#333]">{item.title}</h4>
                    </div>
                    {item.details.map((detail, idx) => (
                      <p key={idx} className="text-[#666] text-sm leading-relaxed">
                        {detail}
                      </p>
                    ))}
                  </div>
                ))}
              </div>

              <div className="bg-[#2D5530] text-white p-6 rounded-lg">
                <h4 className="text-xl font-bold mb-4">Directions</h4>
                <p className="mb-4">
                  From downtown Bend, take Highway 97 north for 8 miles. Turn right on High Desert Lane. 
                  Our farm entrance is 2 miles down on the left - look for the Terra Roots sign!
                </p>
                <button className="bg-white text-[#2D5530] px-4 py-2 rounded hover:bg-gray-100 transition-colors duration-200 font-medium">
                  Open in Maps
                </button>
              </div>
            </div>
          </ScrollAnimation>

          {/* Workshops & Events */}
          <ScrollAnimation animation="slide-in-right">
            <div>
              <h3 className="text-2xl font-bold text-[#333] mb-8">Upcoming Workshops</h3>
              <div className="space-y-6 mb-8">
                {workshops.map((workshop, index) => (
                  <div key={index} className="border border-[#E5E5E5] rounded-lg p-6 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                    <div className="flex items-start justify-between mb-3">
                      <h4 className="text-xl font-bold text-[#333]">{workshop.title}</h4>
                      <span className="text-[#C65D00] font-bold">{workshop.price}</span>
                    </div>
                    <div className="flex items-center gap-4 text-[#666] mb-4">
                      <div className="flex items-center gap-2">
                        <Calendar size={16} />
                        {workshop.date}
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock size={16} />
                        {workshop.time}
                      </div>
                    </div>
                    <button className="bg-[#2D5530] text-white px-4 py-2 rounded hover:bg-[#1a3220] transition-colors duration-200 font-medium text-sm w-full sm:w-auto">
                      Reserve Spot
                    </button>
                  </div>
                ))}
              </div>

              {/* Contact Form */}
              <div className="bg-[#F5F5DC]/30 p-6 rounded-lg">
                <h4 className="text-xl font-bold text-[#333] mb-4">Send us a Message</h4>
                <form className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <input
                      type="text"
                      placeholder="First Name"
                      className="w-full p-3 border border-[#E5E5E5] rounded-lg focus:border-[#2D5530] focus:outline-none transition-colors duration-200"
                    />
                    <input
                      type="text"
                      placeholder="Last Name"
                      className="w-full p-3 border border-[#E5E5E5] rounded-lg focus:border-[#2D5530] focus:outline-none transition-colors duration-200"
                    />
                  </div>
                  <input
                    type="email"
                    placeholder="Email Address"
                    className="w-full p-3 border border-[#E5E5E5] rounded-lg focus:border-[#2D5530] focus:outline-none transition-colors duration-200"
                  />
                  <textarea
                    placeholder="Your Message"
                    rows={4}
                    className="w-full p-3 border border-[#E5E5E5] rounded-lg focus:border-[#2D5530] focus:outline-none transition-colors duration-200 resize-vertical"
                  ></textarea>
                  <button
                    type="submit"
                    className="w-full bg-[#2D5530] text-white py-3 rounded-lg hover:bg-[#1a3220] transition-all duration-300 hover:-translate-y-1 hover:shadow-lg font-medium min-h-[48px]"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </ScrollAnimation>
        </div>

        {/* Map Placeholder */}
        <ScrollAnimation animation="fade-in">
          <div className="aspect-[16/9] bg-[#F5F5DC] rounded-lg overflow-hidden shadow-lg">
            <div className="w-full h-full bg-gradient-to-br from-[#2D5530]/20 to-[#C65D00]/20 flex items-center justify-center">
              <div className="text-center text-[#666]">
                <MapPin size={48} className="mx-auto mb-4 text-[#2D5530]" />
                <h4 className="text-xl font-bold mb-2">Interactive Farm Map</h4>
                <p>Detailed location and driving directions</p>
              </div>
            </div>
          </div>
        </ScrollAnimation>
      </div>
    </section>
  );
};

export default Contact;
