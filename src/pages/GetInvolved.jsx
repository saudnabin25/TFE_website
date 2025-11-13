import React from "react";

const contactMethods = [
  {
    label: "Email",
    detail: "info@trinketforeducation.org",
    helper: "We respond within 2 business days.",
    href: "mailto:info@trinketforeducation.org",
  },
  {
    label: "Phone",
    detail: "571-338-0048",
    helper: "Call Mon–Fri, 9am–5pm ET.",
    href: "tel:5713380048",
  },
  {
    label: "Visit",
    detail: "5024 Sunridge Palms Dr, Tampa, FL 33617 (Apt 101)",
    helper: "Schedule a meeting ahead of time.",
    href: "https://maps.app.goo.gl/",
  },
];

const involvementIdeas = [
  {
    title: "Volunteer Skills",
    body: "Share your expertise in tutoring, curriculum design, grant writing, or program management.",
  },
  {
    title: "Corporate Partners",
    body: "Sponsor a classroom, match employee gifts, or host a workplace giving campaign.",
  },
  {
    title: "Campus Ambassadors",
    body: "Mobilize student groups to host drives and raise awareness for Trinket For Education.",
  },
];

export default function GetInvolved(){
  const [status, setStatus] = React.useState("");

  const handleSubmit = event => {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);
    const name = formData.get("name");
    setStatus(`Thank you, ${name || "friend"}! We'll reach out shortly.`);
    form.reset();
  };

  return (
    <>
      <section className="bg-brand text-white py-24">
        <div className="container-max text-center max-w-3xl">
          <p className="uppercase tracking-[0.3em] text-xs font-semibold text-white/70">Get Involved</p>
          <h1 className="text-4xl font-bold mt-4">Be the spark that unlocks learning</h1>
          <p className="mt-4 text-white/80">
            Trinket For Education thrives because volunteers, partners, and donors add their voice to our mission.
            Use the form below to let us know how you would like to collaborate.
          </p>
        </div>
      </section>

      <section className="container-max py-16 grid gap-12 lg:grid-cols-[1.1fr,0.9fr]">
        <div className="space-y-8">
          <div>
            <h2 className="text-2xl font-bold text-gray-900">Reach out directly</h2>
            <p className="mt-3 text-gray-600">
              Prefer a quick note? Choose the option that works best for you and our team will reply with next steps.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {contactMethods.map(method => (
              <a
                key={method.label}
                href={method.href}
                className="border border-gray-200 rounded-2xl p-6 hover:border-brand hover:-translate-y-1 transition"
                target={method.href.startsWith("http") ? "_blank" : undefined}
                rel={method.href.startsWith("http") ? "noopener noreferrer" : undefined}
              >
                <div className="text-xs font-semibold uppercase text-brand/70">{method.label}</div>
                <div className="text-lg font-semibold text-gray-900 mt-2">{method.detail}</div>
                <p className="text-sm text-gray-500 mt-2">{method.helper}</p>
              </a>
            ))}
          </div>

          <div className="border border-gray-100 rounded-3xl p-8 bg-gradient-to-br from-white to-slate-50">
            <h3 className="text-xl font-semibold text-gray-900">Ideas to get started</h3>
            <div className="mt-6 grid gap-5 md:grid-cols-3">
              {involvementIdeas.map(item => (
                <div key={item.title} className="bg-white rounded-2xl border border-gray-100 p-4 shadow-sm">
                  <div className="font-semibold text-brand">{item.title}</div>
                  <p className="text-sm text-gray-600 mt-2">{item.body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="border border-gray-200 rounded-3xl p-8 bg-white shadow-xl shadow-brand/5">
          <h2 className="text-2xl font-bold text-gray-900">Tell us about you</h2>
          <p className="mt-3 text-gray-600">
            Share how you would like to help. We will connect you with the right staff member.
          </p>
          <form className="mt-8 space-y-5" onSubmit={handleSubmit}>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="name">Full Name</label>
              <input
                id="name"
                name="name"
                type="text"
                className="w-full rounded-xl border border-gray-300 px-4 py-2.5 focus:border-brand focus:ring-brand"
                placeholder="Jane Doe"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="email">Email</label>
              <input
                id="email"
                name="email"
                type="email"
                className="w-full rounded-xl border border-gray-300 px-4 py-2.5 focus:border-brand focus:ring-brand"
                placeholder="you@example.com"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="interest">How would you like to help?</label>
              <select
                id="interest"
                name="interest"
                className="w-full rounded-xl border border-gray-300 px-4 py-2.5 focus:border-brand focus:ring-brand bg-white"
                defaultValue=""
                required
              >
                <option value="" disabled>Select an option</option>
                <option value="volunteer">Volunteer my time</option>
                <option value="donations">Organize a fundraiser</option>
                <option value="partnership">Corporate or campus partnership</option>
                <option value="other">Something else</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="message">Tell us more</label>
              <textarea
                id="message"
                name="message"
                rows="4"
                className="w-full rounded-xl border border-gray-300 px-4 py-2.5 focus:border-brand focus:ring-brand"
                placeholder="Share any details, availability, or questions."
                required
              ></textarea>
            </div>
            <button type="submit" className="w-full btn btn-blue text-base font-semibold py-3 rounded-full">
              Send message
            </button>
            {status && (
              <p className="text-sm text-green-600 bg-green-50 border border-green-100 rounded-2xl px-4 py-3">
                {status}
              </p>
            )}
          </form>
        </div>
      </section>
    </>
  );
}
