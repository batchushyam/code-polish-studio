export const PERSONAL_INFO = {
  name: "Shyam Batchu",
  role: "Mechanical Engineer",
  short_bio: "Hi! My name is Shyam Batchu and I am a senior at the University of Michigan studying mechanical engineering. I am especially interested in exploring the fields of robotics and design. Currently I'm working on building a low-cost medical device with Team Flow. When I'm not working on engineering stuff you can find me playing tennis, hiking, going to the gym, and spending too much time stressing about fantasy football.",
  email: "sbatchu@umich.edu",
  linkedin: "https://www.linkedin.com/in/shyambatchu",
  github: "#",
  location: "Ann Arbor, MI"
};

export const PROJECTS = [
  {
    id: 1,
    title: "Autonomous IV Monitor",
    category: "Medical Device",
    image: "https://images.unsplash.com/photo-1579154204601-01588f351e67?q=80&w=2670&auto=format&fit=crop",
    year: "2024-Present",
    role: "Engineering Lead",
    bullets: [
      "Leading a 10-member engineering team creating a low-cost, autonomous IV drip monitoring device to improve patient outcomes in under-resourced hospitals.",
      "Designing and manufacturing the housing using SolidWorks and 3D printing, ensuring easy attachment to IV stands based on requirements from KATH Hospital in Ghana.",
      "Utilizing circuit design knowledge to build a functional proof-of-concept prototype demonstrating concept viability."
    ],
    tech: ["SolidWorks", "3D Printing", "Circuit Design", "Medical Device"]
  },
  {
    id: 2,
    title: "M-Fly Autonomous Aircraft",
    category: "Aerospace",
    image: "https://images.unsplash.com/photo-1559627798-22eeb9a27e8d?q=80&w=2670&auto=format&fit=crop",
    year: "2024-2025",
    role: "Structures Engineer",
    bullets: [
      "Designed a completely redesigned autonomous aircraft using Siemens NX to meet size constraints and maximize speed for Student Unmanned Aerial Systems competition.",
      "Mentored students through individualized guidance and tutorials to enhance CAD skills and promote team collaboration."
    ],
    tech: ["Siemens NX", "Aerodynamics", "Composites", "UAV"]
  },
  {
    id: 3,
    title: "Remote Controlled Robot",
    category: "Robotics",
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=2670&auto=format&fit=crop",
    year: "Fall 2024",
    role: "Team Lead",
    bullets: [
      "Managed planning, designing, and manufacturing of a 10\" x 11\" x 11\" RC robot capable of completing multiple tasks within a 16-week timeline.",
      "Designed a 60+ part robot using SolidWorks, applying GD&T to create parts that are manufacturable."
    ],
    tech: ["SolidWorks", "GD&T", "Machining", "Project Management"]
  },
  {
    id: 4,
    title: "ISS Filtration System",
    category: "Space Systems",
    image: "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?q=80&w=2672&auto=format&fit=crop",
    year: "2023-2024",
    role: "Surfaces Team Member",
    bullets: [
      "Contracted by NASA to develop a filtration system for the ISS; modeled components using SolidWorks.",
      "Met NASA constraints on air flow using geometric properties and Ansys FEA analysis.",
      "Produced trade studies and morphological charts to guide decisions on key design choices and materials."
    ],
    tech: ["Ansys FEA", "SolidWorks", "NASA Standards", "Morphological Charts"]
  }
];

export const EXPERIENCE = [
  {
    company: "University of Michigan",
    role: "Lead Instructional Aide - Dynamics and Vibrations",
    period: "Aug 2025 - Present",
    location: "Ann Arbor, MI",
    desc: "Creating homework solutions and delivering course content to support 100+ students in Dynamics and Vibrations. Leading problem-solving sessions to enhance student learning."
  },
  {
    company: "Boston Scientific Company",
    role: "Manufacturing Engineering Intern",
    period: "May 2025 - Aug 2025",
    location: "Maple Grove, MN",
    desc: "Generated $162k+ in projected annual savings. Designed and executed experiments to validate new equipment. Held line ownership of a tri-layer polymer extrusion line."
  },
  {
    company: "Naval Engineering Education Consortium",
    role: "Undergraduate Researcher",
    period: "Feb 2024 - Aug 2025",
    location: "Ann Arbor, MI",
    desc: "Directed experiments with industry-grade equipment to model boat vibrations. Created LabVIEW/MATLAB programs for data acquisition to identify vibration patterns."
  }
];

export const EDUCATION = [
  {
    school: "University of Michigan",
    degree: "B.S. Mechanical Engineering",
    details: ["GPA: 3.95 / 4.00", "Aug 2023 - May 2026"],
    coursework: ["Dynamics & Vibrations", "Thermodynamics", "Fluid Mechanics", "Mechatronics", "Machine Design", "Control Systems", "CAD/CAM"]
  }
];

export const SKILLS = [
  "SolidWorks", "Siemens NX/Teamcenter", "Ansys FEA", "GD&T", 
  "3D Printing", "Machining (Mill/Lathe)", "MATLAB", "LabVIEW", 
  "Python", "C++", "QGIS"
];

export type Project = typeof PROJECTS[0];
