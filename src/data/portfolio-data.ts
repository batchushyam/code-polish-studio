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
  | { type: "callout"; title: string; text: string }
  | { type: "videoComparison"; title: string; realVideo: string; modelVideo: string; description?: string }
  | { type: "mediaShowcase"; title: string; items: { label: string; src: string; mediaType: "image" | "video" }[]; description?: string };

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
    summary: "Leading a 10-member engineering team creating a low-cost, autonomous IV drip monitoring device to improve patient outcomes in under-resourced hospitals. Traveled to Komfo Anokye Teaching Hospital (KATH) in Kumasi, Ghana to test out the device and get feedback.",
    tech: ["SolidWorks", "3D Printing", "Circuit Design", "Medical Device"],
    sections: [
      {
        title: "The Problem",
        content: [
          { type: "paragraph", text: "In under-resourced hospitals, particularly in developing countries like Ghana, IV drip monitoring is often done manually by nursing staff. To get the infusion goingat the right speed, they start it by adjusting the roller clamp and counting drops until it is going at the right rate. Over time, this leads to delayed responses when IV bags stop running, causing patient discomfort and potential complications. For example, if a patient adjusts their arm into a position where the IV flow is disrupted or another patient bumps into the IV setup, there is no current system in place to fix it until a nurse or the patient notice the disruption." },
          { type: "paragraph", text: "Infusion pumps which typically cost ~$3000 control and monitor the drip rate, however the price limited the number of infusion pumps available. They are often only given to ___ poeple per room." },
          { type: "paragraph", text: "Our team partnered with KATH Hospital in Ghana to understand their specific challenges and create a device to improve the situation." }
        ]
      },
      {
        title: "The Process before Travel",
        content: [
          { type: "paragraph", text: "My first semester on the team I was a member of the engineering subteam and worked on the proof of concept circuit in order to create a device that monitored flow rate. This proof of concept worked by having a phototransisitor on one side of the drip chamber, and a IR light on the other side of the drip chamber. Everytime a drop comes through, the IR light is disrupted sending current down the phototransistor.__Picture of proof of concept" },
          { type: "paragraph", text: "My next semester on the team, I became an Engineering Lead and was responsible for designing and manufacturing the housing for all of the components. The major responsibilities included a component that would hold the IR light and phototransistor in place and attach to a drip chamber, and a component that would attach to an IV pole and hold the PCB, batteries, and screen. Drip chambes are a small, transluscent cylinder in IV sets that connect the IV bag to tubing that allow for medical personnel to estimate the rate of fluid administration by counting the drops. My job was to create something that would hold the IR light and phototransistor in place across the drip chamber. The solution I came up with was a ring that slide onto the drip chamber and held the IR light and phototransistor using a press-fit design. [insert photo]" },
          { type: "paragraph", text: "The next thing I designed and created was the main housing of the device that held the screen, pcb, and batteries. The main challenge behind this was the PCB and screen. They were connected using a short ribbon cable that came with the screen we purchased. On the PCB that was designed by the electrical engineering team, it was designed with the ribbon cable connector being on the long side. However, the screen had the ribbon cable connector on the short side. Another challenge was that the screen had to be on the outside of the housing to be used, while the PCB had to be protected on the inside of the housing. This may seem obvious, but with the short ribbon cable that came with the screen, I had to come up with a solution to make up for this. I designed this ____ using SolidWorks and 3-d printed it. It leaves a gap for the components on the pcb to be connected, and is designed to be easy to screw in the PCB and screen into the housing. The screen a simple ___ was hused to keep it in place. To attach this housing to an IV pole, I initially thought of using a 3-d printed press-fit design. However, I quickly learned that press-fits don't work well when weaker material (filament) is used to press-fit against stronger material (steel of IV pole). I then pivoted this and bought a stand was supposed to be used on cameras to attach it to the housing. With all of the parts of housing finiished and manufactured, the device was now ready for travel to KATH in order to get feedback from nurses, doctors, and engineers.  " },
          
          { type: "bullets", items: [
            "Leading a 10-member engineering team creating a low-cost, autonomous IV drip monitoring device to improve patient outcomes in under-resourced hospitals.",
            "Designing and manufacturing the housing using SolidWorks and 3D printing, ensuring easy attachment to IV stands based on requirements from KATH Hospital in Ghana.",
            "Utilizing circuit design knowledge to build a functional proof-of-concept prototype demonstrating concept viability."
          ]}
        ]
      },
      {
        title: "Travel",
        content: [
          { type: "paragraph", text: "Over winter break, I traveled along with my team to Kumasi, Ghana in order tog et feedback from hospital leadership, hospital engineers, and nurses and doctors from various wards. Enjoy a slideshow of photos taken while there! While we were in Ghana, not everything went to plan with the device and a lot quick thinking and problem solving occured while there. The first thing that went wrong is that the IR light solder broke off on the prototype while on the way there. Two prototypes were brought and only one was broken, but the second prototype broke on the third day there. We had no functioning prototype after that and it all of the tools that would be used to solve this were back in Ann Arbor. To fix this, I traveled to a electronics component store across the city and bought a portable soldering iron. However, when we tried to solder the wire back to the IR light, it was impossible due to the size of the IR light. Whenever heat was applied, the plastic on the IR light would melt before the metal part. In order to get a good connection, I got the idea of taping a circular disk that touched the spot and then soldering the wire to the disk. This ended up working and we now had 1 functioning prototype again. Another big issue that we discovered while there was that our device didn't work outside. We had spent all of our time prototyping in the basement of an engineering building, that I never thought about how environmental factors would impact the device. This was a big issue, we actually found out that anywhere close to a window our device just wouldn't work because some sunlight would appear to be the IR light. After some quick thinking was done, a granola bar wrapper was used to create a pinhole that only direct IR light would go through which fixed this problem. We now had a functioning prototype that worked next to windows! Working under pressure given our timeframe was very stressful yet super rewarding. " },
          { type: "paragraph", text: " While at the hospital I led interviews, and talked about the device in front of groups of people. From the data that we collected through design ethnography, I was able to come up with teh following information"},
          
          { type: "bullets", items: [
            "Initially this device was meant for use in the emergency wards of hospitals and our community partner was an emergency nurse. However, there was a lot of interest from other units regarding our device and we were told that it would be very helpful. However, the current ring only fit one size drip chamber which didn't work for blood transfusions or pediatric IV setups. A ring that was adjustable and fit different drip chambers is now a priority",
            "Infusion pumps are really nice to use because they also control the rate of speed, but the price range makes them unviable in many scenarios. If we could make our device also control the rate of flow while maintaining a low cost, it would be really impressive.",
            "The touchscreen of our device was nice, but the nurses preferred buttons in addition. They wanted multiple ways to interact with the device. ."
          ]}
         
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
    summary: "Created dynamics engine in MATLAB in order to model multibody systems.",
    tech: ["MATLAB", "Dynamics", "Simulation", "Numerical Methods"],
    sections: [
      {
        title: "Overview",
        content: [
          { type: "paragraph", text: "This course focused on computational methods for analyzing and simulating complex mechanical systems with multiple interconnected bodies. I built a dynamics engine in MATLAB to model real-world phenomena." }
        ]
      },
      {
        title: "Models",
        content: [
          { 
            type: "videoComparison", 
            title: "Medieval Trebuchet", 
            realVideo: "/src/assets/projects/trebuchet-real.mp4", 
            modelVideo: "/src/assets/projects/trebuchet-model.mp4",
            description: "Add your explanation of how you modeled the trebuchet here."
          },
          { 
            type: "mediaShowcase", 
            title: "Bipedal Robot", 
            items: [
              { label: "Walking Gait", src: "/src/assets/projects/biped-walking.mp4", mediaType: "video" },
              { label: "Running Gait", src: "/src/assets/projects/biped-running.mp4", mediaType: "video" }
            ],
            description: "Add your explanation of how you modeled the bipedal robot gaits here."
          },
          { 
            type: "mediaShowcase", 
            title: "Hopping Robot", 
            items: [
              { label: "Model Diagram", src: "/src/assets/projects/hopping-robot-diagram.png", mediaType: "image" },
              { label: "Aligned Drop", src: "/src/assets/projects/hopping-aligned.mp4", mediaType: "video" },
              { label: "Crooked Drop", src: "/src/assets/projects/hopping-crooked.mp4", mediaType: "video" },
              { label: "Generalized Coordinates", src: "/src/assets/projects/hopping-coordinates.png", mediaType: "image" }
            ],
            description: "Add your explanation of how you modeled the hopping robot here."
          },
          { 
            type: "mediaShowcase", 
            title: "Teacup Ride", 
            items: [
              { label: "Real World", src: "/src/assets/projects/teacup-real.mp4", mediaType: "video" },
              { label: "Model", src: "/src/assets/projects/teacup-model.mp4", mediaType: "video" },
              { label: "Position of Rider", src: "/src/assets/projects/teacup-position.png", mediaType: "image" },
              { label: "Acceleration of Rider", src: "/src/assets/projects/teacup-acceleration.png", mediaType: "image" }
            ],
            description: "Add your explanation of how you modeled the teacup ride here."
          }
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
