export const PERSONAL_INFO = {
  name: "Shyam Batchu",
  role: "Mechanical Engineer",
  short_bio: "Hi! My name is Shyam Batchu and I am a senior at the University of Michigan studying mechanical engineering. I am especially interested in exploring the fields of robotics and design. Currently I'm working on building a low-cost medical device with Team Flow. When I'm not working on engineering stuff you can find me playing tennis, hiking, going to the gym, and spending too much time stressing about fantasy football.",
  email: "sbatchu@umich.edu",
  linkedin: "https://www.linkedin.com/in/shyambatchu",
  github: "#",
  location: "Ann Arbor, MI"
};

// Content block types for flexible project pages
export type ContentBlock = 
  | { type: "heading"; text: string }
  | { type: "paragraph"; text: string }
  | { type: "bullets"; items: string[] }
  | { type: "image"; src: string; alt: string; caption?: string }
  | { type: "gallery"; images: { src: string; alt: string; caption?: string }[] }
  | { type: "quote"; text: string; attribution?: string }
  | { type: "callout"; title: string; text: string };

export interface ProjectSection {
  title: string;
  content: ContentBlock[];
}

export interface Project {
  id: number;
  title: string;
  category: string;
  image: string;
  year: string;
  role: string;
  summary: string; // Short description for card
  tech: string[];
  sections: ProjectSection[]; // Flexible blog-style sections
}

export const PROJECTS: Project[] = [
  {
    id: 1,
    title: "Autonomous IV Monitor",
    category: "Medical Device",
    image: "/src/assets/projects/iv-monitor.jpeg",
    year: "September 2024-Present",
    role: "Engineering Lead",
    summary: "Leading a 10-member engineering team creating a low-cost, autonomous IV drip monitoring device to improve patient outcomes in under-resourced hospitals.",
    tech: ["SolidWorks", "3D Printing", "Circuit Design", "Medical Device"],
    sections: [
      {
        title: "The Problem",
        content: [
          { type: "paragraph", text: "In under-resourced hospitals, particularly in developing countries like Ghana, IV drip monitoring is often done manually by overworked nursing staff. This leads to delayed responses when IV bags run empty, causing patient discomfort and potential complications." },
          { type: "paragraph", text: "Our team partnered with KATH Hospital in Ghana to understand their specific challenges and constraints." }
        ]
      },
      {
        title: "Our Approach",
        content: [
          { type: "paragraph", text: "We designed a low-cost, autonomous monitoring device that can attach to standard IV stands and alert staff when intervention is needed." },
          { type: "bullets", items: [
            "Leading a 10-member engineering team creating a low-cost, autonomous IV drip monitoring device to improve patient outcomes in under-resourced hospitals.",
            "Designing and manufacturing the housing using SolidWorks and 3D printing, ensuring easy attachment to IV stands based on requirements from KATH Hospital in Ghana.",
            "Utilizing circuit design knowledge to build a functional proof-of-concept prototype demonstrating concept viability."
          ]}
        ]
      },
      {
        title: "Current Progress",
        content: [
          { type: "paragraph", text: "We have completed our initial prototype and are currently in the testing phase. The device successfully detects drip rate changes and can alert staff via a simple notification system." }
        ]
      }
    ]
  },
  {
    id: 2,
    title: "Computational Simulations of Multibody Systems",
    category: "Modeling",
    image: "https://images.unsplash.com/photo-1559627798-22eeb9a27e8d?q=80&w=2670&auto=format&fit=crop",
    year: "January 2025 - May 2025",
    role: "Individual Projects",
    summary: "Designed a completely redesigned autonomous aircraft using Siemens NX to meet size constraints and maximize speed.",
    tech: ["Siemens NX", "Aerodynamics", "Composites", "UAV"],
    sections: [
      {
        title: "Overview",
        content: [
          { type: "paragraph", text: "This course focused on computational methods for analyzing and simulating complex mechanical systems with multiple interconnected bodies." },
          { type: "bullets", items: [
            "Designed a completely redesigned autonomous aircraft using Siemens NX to meet size constraints and maximize speed for Student Unmanned Aerial Systems competition.",
            "Mentored students through individualized guidance and tutorials to enhance CAD skills and promote team collaboration."
          ]}
        ]
      }
    ]
  },
  {
    id: 3,
    title: "Remote Controlled Robot",
    category: "Robotics",
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=2670&auto=format&fit=crop",
    year: "August 2024 - December 2024",
    role: "Team Lead",
    summary: "Managed planning, designing, and manufacturing of a 10\" x 11\" x 11\" RC robot capable of completing multiple tasks.",
    tech: ["SolidWorks", "GD&T", "Machining", "Project Management"],
    sections: [
      {
        title: "Project Overview",
        content: [
          { type: "paragraph", text: "As team lead, I managed the complete lifecycle of designing and manufacturing a remote-controlled robot within a 16-week timeline." },
          { type: "bullets", items: [
            "Managed planning, designing, and manufacturing of a 10\" x 11\" x 11\" RC robot capable of completing multiple tasks within a 16-week timeline.",
            "Designed a 60+ part robot using SolidWorks, applying GD&T to create parts that are manufacturable."
          ]}
        ]
      }
    ]
  },
  {
    id: 4,
    title: "4-Bar Linkage",
    category: "Space Systems",
    image: "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?q=80&w=2672&auto=format&fit=crop",
    year: "January 2025 - May 2025",
    role: "Surfaces Team Member",
    summary: "Contracted by NASA to develop a filtration system for the ISS; modeled components using SolidWorks.",
    tech: ["Ansys FEA", "SolidWorks", "NASA Standards", "Morphological Charts"],
    sections: [
      {
        title: "NASA Partnership",
        content: [
          { type: "paragraph", text: "Our team was contracted by NASA to develop a critical filtration system component for the International Space Station." },
          { type: "bullets", items: [
            "Contracted by NASA to develop a filtration system for the ISS; modeled components using SolidWorks.",
            "Met NASA constraints on air flow using geometric properties and Ansys FEA analysis.",
            "Produced trade studies and morphological charts to guide decisions on key design choices and materials."
          ]}
        ]
      }
    ]
  },
  {
    id: 5,
    title: "Boston Scientific Internship",
    category: "Medical Device",
    image: "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?q=80&w=2672&auto=format&fit=crop",
    year: "May 2025 - August 2025",
    role: "Manufacturing Engineering Intern + 1 R&D Project",
    summary: "Generated $162k+ in projected annual savings through process improvements and new equipment validation.",
    tech: ["Ansys FEA", "SolidWorks", "NASA Standards", "Morphological Charts"],
    sections: [
      {
        title: "Internship Overview",
        content: [
          { type: "paragraph", text: "During my internship at Boston Scientific, I worked on manufacturing engineering projects and contributed to R&D initiatives." },
          { type: "bullets", items: [
            "Contracted by NASA to develop a filtration system for the ISS; modeled components using SolidWorks.",
            "Met NASA constraints on air flow using geometric properties and Ansys FEA analysis.",
            "Produced trade studies and morphological charts to guide decisions on key design choices and materials."
          ]}
        ]
      }
    ]
  },
  {
    id: 6,
    title: "Naval Engineering Education Consortium",
    category: "Research",
    image: "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?q=80&w=2672&auto=format&fit=crop",
    year: "February 2024 - August 2025",
    role: "Undergraduate Researcher",
    summary: "Directed experiments with industry-grade equipment to model boat vibrations and identify patterns.",
    tech: ["Ansys FEA", "SolidWorks", "NASA Standards", "Morphological Charts"],
    sections: [
      {
        title: "Research Focus",
        content: [
          { type: "paragraph", text: "As an undergraduate researcher, I worked on modeling and analyzing boat vibrations using industry-standard equipment and software." },
          { type: "bullets", items: [
            "Contracted by NASA to develop a filtration system for the ISS; modeled components using SolidWorks.",
            "Met NASA constraints on air flow using geometric properties and Ansys FEA analysis.",
            "Produced trade studies and morphological charts to guide decisions on key design choices and materials."
          ]}
        ]
      }
    ]
  }
];

export const EXPERIENCE = [
  {
    company: "University of Michigan",
    role: "Lead Instructional Aide - Dynamics and Vibrations",
    period: "Aug 2025 - Present",
    location: "Ann Arbor, MI",
    desc: "Creating homework solutions and delivering course content to support 100+ students in Dynamics and Vibrations. Leading problem-solving sessions to enhance student learning. Weekly time commitment of 10 hours."
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
    coursework: ["Analytical and Computational Dynamics","Vehicle Control Systems","Automatic Control", "Front-End Design"]
  }
];

export const SKILLS = [
  "SolidWorks", "Siemens NX/Teamcenter", "Ansys FEA", "GD&T", 
  "3D Printing", "Machining (Mill/Lathe)", "MATLAB", "LabVIEW", 
  "Python", "C++", "QGIS"
];
