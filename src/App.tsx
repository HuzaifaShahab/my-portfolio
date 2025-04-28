import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import CounterSection from './components/CounterSection';
import ServicesSection from './components/ServicesSection';
import ResumeSection from './components/ResumeSection';
import WorkSection from './components/WorkSection';
import ContactSection from './components/ContactSection';
import AdminDashboard from './components/AdminDashboard';
import Footer from './components/Footer';

function App() {
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    // Check if the current URL path is /admin
    const path = window.location.pathname;
    if (path === '/admin') {
      setIsAdmin(true);
    }
  }, []);

  if (isAdmin) {
    return <AdminDashboard />;
  }

  return (
    <div className="bg-[#121212] text-white min-h-screen">
      <Navbar />
      <main>
        <HeroSection />
        <CounterSection />
        <ServicesSection />
        <ResumeSection />
        <WorkSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;