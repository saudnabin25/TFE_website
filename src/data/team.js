const team = [
  {
    id: 1,
    name: "Nabin Saud",
    title: "President, Co-Founder",
    email: "nabin@trinketforeducation.org",
    category: "Executive",
    photo: "/Pictures/nabin.png",
    about: "Nabin Saud is a Computer Science student at the University of South Florida. He works on designing a student-centric curriculum by integrating technology into education. He collaborates with other organizations and policymakers to bring those curricula into classrooms. Nabin believes education is every human’s basic right and is committed to lowering the illiteracy rate in Nepal.",
    socials: {
      facebook: "https://www.facebook.com/nabin.saud.711797",
      instagram: "https://instagram.com/nabin.saud",
      linkedin: "https://www.linkedin.com/in/nabin-saud/"
    },
    residence: "Tampa, Florida"
  },
  {
    id: 2,
    name: "Aasutosh Bhatt",
    title: "Secretary, Co-Founder",
    email: "aasutosh@trinketforeducation.org",
    category: "Executive",
    photo: "https://picsum.photos/id/1011/200/200",
    about: "Aasutosh Bhatt is a civil engineer and University of Texas at Arlington alumnus. He is securing merit and potential-based scholarships for children in Nepal and building a system that tracks student progress, interests, and aspirations.",
    socials: {
      facebook: "https://www.facebook.com/ashutosh.bhatt.31",
      instagram: "https://instagram.com/aasutosh.bhatt",
      linkedin: "https://www.linkedin.com/in/aasutosh-bhatt/"
    },
    residence: "Dallas, Texas"
  },
  {
    id: 3,
    name: "Sushant Upreti",
    title: "Treasurer",
    email: "sushant@trinketforeducation.org",
    category: "Executive",
    photo: "https://picsum.photos/id/1001/200/200",
    about: "Sushant Upreti is a senior pursuing Physics and Econometrics at the University of South Florida. He is passionate about giving back, organizing fundraising events on campus, and working with principals to find bright students to sponsor.",
    socials: {
      facebook: "https://www.facebook.com/susant.upreti.5",
      instagram: "https://instagram.com/sushant.upreti",
      linkedin: "https://www.linkedin.com/in/sushant-upreti/"
    },
    residence: "Tampa, Florida"
  },
  {
    id: 4,
    name: "Sneha Lama",
    title: "Student Development Director",
    email: "sneha@trinketforeducation.org",
    category: "Mentors",
    photo: "/Pictures/sneha.jpeg",
    about: "Sneha Lama is a cybersecurity analyst with strong interest in tech and education. She leads development and student engagement at TFE, helping projects in Nepal grow and support more students. She believes that guidance can truly change lives and values creating opportunities that make a real difference for communities.",
    socials: {
      facebook: "https://www.facebook.com/snehal1228",
      instagram: "https://www.instagram.com/typicaleoxx?igsh=MXZjNWxudDg2MHQ4cw%3D%3D&utm_source=qr",
      linkedin: "https://www.linkedin.com/in/snehalama?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
    },
    residence: "Tampa, Florida"
  },
  {
    id: 5,
    name: "Aashish Sah",
    title: "Mentor",
    email: "aasish@trinketforeducation.org",
    category: "Mentors",
    photo: "https://picsum.photos/id/1025/200/200",
    about: "Ashish is a senior civil engineering student at the University of South Florida, specializing in structural engineering. He works at a structural design firm focused on commercial building projects. Outside of academics and work, he enjoys reading, trading stocks, and traveling. Ashish also mentors students through Trinket for Education, supporting their academic growth and inspiring them to reach their potential.",
    socials: {
      facebook: "https://www.facebook.com/aashish.sah.90",
      instagram: "https://instagram.com/aasish.sha",
      linkedin: "https://www.linkedin.com/in/aashish-sah/"
    },
    residence: "Tampa, Florida"
  },
  {
    id: 6,
    name: "Binod Gurung",
    title: "Review Committee Member",
    email: "binod@trinketforeducation.org",
    category: "Review Committee",
    photo: "https://picsum.photos/id/1020/200/200",
    about: "Brings decades of nonprofit leadership experience, advising on governance and strategic partnerships.",
    socials: {
      facebook: "https://facebook.com/binod.gurung",
      instagram: "https://instagram.com/binod.gurung",
      linkedin: "https://www.linkedin.com/in/binod-gurung/"
    },
    residence: "Tampa, Florida"
  },
  {
    id: 7,
    name: "Neeraj Mishra",
    title: "Advisor",
    email: "neeraj@trinketforeducation.org",
    category: "Advisors",
    photo: "/Pictures/neeraj.jpeg",
    about: "Neeraj is a biomedical engineer working in pharmaceutical manufacturing, specializing in process validation, quality systems, and regulatory compliance. He volunteers with Soch ko Udaan and Engineers Without Borders to support community projects in Nepal and the U.S. Believing education is the foundation for societal change, he is honored to advise Trinket For Education’s mission.",
    socials: {
      facebook: "https://www.facebook.com/neeraj.mishra.427061/",
      instagram: "https://www.instagram.com/neeraj_mishra__?igsh=MTdjdGpjM283a3EyeQ%3D%3D&utm_source=qr",
      linkedin: "https://www.linkedin.com/in/neeraj-mishra7/"
    },
    residence: "Madison, Wisconsin"
  },
  {
    id: 8,
    name: "Tilak Bhatta",
    title: "Advisor, Co-Founder",
    email: "tilak@trinketforeducation.org",
    category: "Advisors",
    photo: "https://picsum.photos/id/1021/200/200",
    about: "Provides guidance on education policy, ensuring programs align with community and government priorities.",
    socials: {
      facebook: "https://www.facebook.com/t.r.bhatta.11",
      instagram: "https://instagram.com/tilak.bhatta",
      linkedin: "https://www.linkedin.com/in/tilak-bhatta/"
    },
    residence: "Charlotte, North Carolina"
  },
  {
    id: 9,
    name: "KP Ghimire",
    title: "Researcher",
    email: "kp@trinketforeducation.org",
    category: "Researchers",
    photo: "https://picsum.photos/seed/kpghimire/200/200",
    about: "KP Ghimire is a PhD scholar at Kathmandu University focused on English language education. A member of IATEFL and NELTA, he brings classroom research and professional development expertise to TFE. With an M.Phil. from Kathmandu University and MA/M.Ed. (ELT) from Tribhuvan University, he helps design research-backed approaches that empower teachers and students alike.",
    socials: {
      facebook: "https://www.facebook.com/kepyghimire"
    },
    residence: "Kathmandu, Nepal",
    phone: "9851193520"
  },
  {
    id: 10,
    name: "Sarada Dhakal",
    title: "Review Committee Member",
    email: "sarada@trinketforeducation.org",
    category: "Review Committee",
    photo: "https://picsum.photos/seed/saradadhakal/200/200",
    about: "Sarada Dhakal brings years of experience mentoring teachers and reviewing curriculum pilots across Nepal. She helps TFE evaluate programs, track field feedback, and ensure research-backed recommendations reach classrooms.",
    socials: {},
    residence: "Kathmandu, Nepal"
  }
];

export default team;
