import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="bg-darkblue text-white min-h-screen p-6">
      <header className="text-center py-10">
        <img src="/logo.png" alt="NextGen Logo" className="animate-float mx-auto mb-4 w-16"/>
        <h1 className="text-4xl font-bold text-blue-400">NextGen TechnoSolutions</h1>
        <p className="mt-2 text-lg text-gray-300">Empowering IT Innovation</p>
      </header>
      <main className="mt-10 max-w-4xl mx-auto space-y-10">
        <section data-aos="fade-up">
          <h2 className="text-2xl font-semibold text-blue-300">About Us</h2>
          <p className="text-gray-400 mt-2">
            We are a cutting-edge IT consulting company offering technology strategy, cloud solutions, AI integration, and digital transformation services to global enterprises.
          </p>
        </section>
        <section data-aos="fade-up">
          <h2 className="text-2xl font-semibold text-blue-300">Our Services</h2>
          <ul className="list-disc list-inside text-gray-400 mt-2">
            <li className="hover:scale-105 transition-transform duration-300 hover:text-blue-300">Cloud Architecture & Migration</li>
            <li className="hover:scale-105 transition-transform duration-300 hover:text-blue-300">AI & Machine Learning Solutions</li>
            <li className="hover:scale-105 transition-transform duration-300 hover:text-blue-300">DevOps & CI/CD Automation</li>
            <li className="hover:scale-105 transition-transform duration-300 hover:text-blue-300">Cybersecurity Consulting</li>
            <li className="hover:scale-105 transition-transform duration-300 hover:text-blue-300">Digital Transformation Strategy</li>
          </ul>
        </section>
        <section data-aos="fade-up">
          <h2 className="text-2xl font-semibold text-blue-300">Contact Us</h2>
          <p className="text-gray-400 mt-2">
            Email: info@nextgentechnosolutions.com<br/>
            Phone: +1 (800) 123-4567
          </p>
        </section>
      </main>
      <footer className="text-center text-sm text-gray-500 mt-20">
        &copy; {new Date().getFullYear()} NextGen TechnoSolutions. All rights reserved.
      </footer>
    </div>
  );
}

export default App;
