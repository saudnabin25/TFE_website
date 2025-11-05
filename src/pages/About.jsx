import React from "react";

export default function About(){
  return (
    <section className="container-max py-16">
      <div className="max-w-4xl mx-auto space-y-6">
        <h1 className="text-4xl font-extrabold text-brand">About Trinket For Education</h1>
        <p className="text-gray-700 leading-relaxed">
          TFE started with a living room conversation where we shared our childhood stories from the days we were in
          school. There were instances where we were ostracized for asking questions and made out to feel guilty for
          being curious. During our schooling years in Nepal, we found there was an all-pervasive sense of frustration
          about the way we were taught.
        </p>
        <p className="text-gray-700 leading-relaxed">
          Learning was shown to us as a burden that was imposed upon us. Rather than gathering knowledge being presented
          as a natural thing for humans to do. This is what encouraged us to look for changes in the way we teach our
          children so they do not suffer from their education but find it as a cause for celebration.
        </p>
      </div>
    </section>
  );
}
