import React from "react";
import { Link } from "react-router-dom";

export default function AboutSection(){
  return (
    <section id="about" className="bg-white">
      <div className="container-max py-20 grid lg:grid-cols-[1fr,1fr] gap-12 items-center">
        <div className="flex justify-center">
          <img
            src="/Pictures/fulllogo.png"
            alt="Trinket For Education logo"
            className="max-w-md w-full"
          />
        </div>
        <div>
          <div className="section-sub text-brand">About Us</div>
          <h2 className="section-title text-brand mt-3">Why we exist</h2>
          <p className="mt-4 text-gray-600 leading-relaxed">
            TFE started with a living room conversation where we shared our childhood stories from the days we were in
            school. We were ostracized for asking questions and made to feel guilty for being curious. Those experiences
            showed us how broken the classroom experience can be when curiosity isn’t welcomed.
          </p>
          <p className="mt-4 text-gray-600 leading-relaxed">
            We learned that education should not feel like a burden. It should be a celebration of growth and discovery.
            Trinket For Education is our promise to build the learning environments we wished we had—where students are
            heard, supported, and inspired. Learn more about our story and mission on the About page.
          </p>
          <Link to="/about" className="btn btn-blue mt-6 inline-flex items-center gap-2">
            More About Us
            <span aria-hidden>→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
