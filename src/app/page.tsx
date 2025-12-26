"use client";
import { About, Carousel, Header, Navbar, Work } from "./components";

export default function Home() {
  return (
    <>
      <Header />
      <Navbar />
      <Carousel />
      <section id="work">
       <Work /> 
      </section>
      <section id="about">
        <About />
      </section>
      <section id="resume">
        {/* Resume content */}
      </section>
      <section id="contact">
        {/* Contact/Email content */}
      </section>
    </>
  );
}
