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
    image: "/projects/iv-monitor.jpeg",
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
      },
      {
        title: "Post-Travel",
        content: [
          { type: "paragraph", text: " I am now currently working on designing a ring that works on drip chambers of different sizes and creating a system to control the flow rate of infusion pumps. This section will be updated as progress is made." },          
        ]
      }
    ]
  },
  {
    id: 2,
    title: "Computational Simulations of Multibody Systems",
    category: "Modeling",
    image: "/projects/multibody-systems.png",
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
            description: "This is a simulation of a trebuchet launch using a recursive multibody dynamics framework in MATLAB. The trebuchet is modeled using four rigid bodies (ground, counterweight, projectile, and arm) and three rotational joints between them. Each body is assigned precise mass and inertia tensors ($I$) based on its geometry (cylinder, cuboid, and sphere) to ensure realistic rotational dynamics. There are two distinct phases in this simulation: before the projectile loses contact with the ground and after the projectile loses contact with the ground. In the initial phase, the projectile is restricted to a 1D path along the ground. This is mathematically enforced through a unilateral vertical constraint. Using the system's Jacobian ($J$) and bias acceleration ($\sigma$), I constructed a augmented system of equations:  This allowed the solver to calculate the Lagrange multiplier ($\lambda$), representing the normal force. Once the normal force was negative (the ground is pulling the projectile downwards which is not feasible), the projectile lifts off and the second phase begins. Once contact is lost (indicated by a small pause in the simulation for visualization purposes), the projectile behaves as a free-swinging pendulum. The equations of motion shift to a purely inertial form ($M\ddot{q} = f + g$). The simulation ends when the relative joint angle between the projectile and the arm reaches $45^{\circ}$ ($\pi/4$) which is the point of release for trebuchet's. "
          },
          { 
            type: "mediaShowcase", 
            title: "Bipedal Robot", 
            items: [
              { label: "Walking Gait", src: "/src/assets/projects/biped-walking.mp4", mediaType: "video" },
              { label: "Running Gait", src: "/src/assets/projects/biped-running.mp4", mediaType: "video" }
            ],
            description: "In this project, I engineered a 7-DOF bipedal robot simulation by developing and implementing diverse kinematic joint classes to handle complex mechanical constraints. I modeled the robot's mobility using a Floating Base architecture, centered on a Virtual 3-DOF Joint that maps global $x$, $y$, and pitch coordinates into the system's generalized state.To achieve realistic locomotion, I integrated two distinct physical joint types: Revolute Joints at the hips to manage angular leg-swing and Translational (Prismatic) Joints for the knees to simulate telescoping leg extensions. By programming these joints within a recursive outward-pass framework, I ensured that the position, velocity, and acceleration of each successive link were accurately propagated through the branched kinematic chain. This modular approach allowed for the seamless translation of high-level trajectory data into coordinated walking and running gaits, demonstrating a deep understanding of how specific joint constraints define robot topology and movement."
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
            description: "The robot is modeled as a 5-DOF system using a floating-base approach. To simplify the kinematics of the complex hip joint (which requires both rotation and translation), I implemented a massless pelvis trick. This allows the system to be modeled as a serial chain using standard joint classes:Virtual 3-DOF Joint: Manages the main body's $x$, $y$, and pitch ($\theta$).Revolute Joint ($\gamma$): Attaches the body to the pelvis for hip rotation.Translational Joint ($\Delta L$): Attaches the pelvis to the leg for telescoping movement.Parallel Elasticity: A virtual spring force (stiffness $k = 800$) is applied along the leg extension joint to model the hopping energy storage.2. Multi-Phase Simulation & Impact LogicThe simulation captures the non-linear transitions between different physical states:Flight Phase (Unconstrained): The robot moves under gravity until a custom event function (footContact) detects the foot crossing the ground threshold ($y=0$).Plastic Impact: Upon contact, I calculated the instantaneous change in generalized velocities ($q^+_{Dot}$) using a discrete impact map. This accounts for the sudden loss of energy and ensures the velocities are consistent with the new ground constraint.Stance Phase (Constrained): The foot is locked to the ground via a 2D constraint Jacobian ($J$). I utilized the KKT (Augmented Mass Matrix) approach to solve for both the robot's accelerations and the ground reaction forces ($\lambda$).3. Contact Transition LogicA critical component of this project was the automated transition back to flight. By monitoring the vertical component of the Lagrange multiplier ($\lambda$), the simulation identifies the exact moment the spring force overcomes gravity and the ground pushes the robot back into the air. When $\lambda$ reaches zero, the footLossOfContact event triggers, reverting the system to unconstrained flight dynamics."
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
            description: "This project involved the kinematic analysis and simulation of a teacup ride, modeled as a series of three nested rigid bodies ($A, B,$ and $C$) undergoing simultaneous relative rotations. By defining angular velocities in a hierarchical fashion—where each body’s motion is relative to its parent frame—I successfully modeled the complex propagation of motion from the central turntable to a rider at the periphery. I implemented recursive algorithms to calculate the absolute position, velocity, and acceleration of the rider (Point D) by accounting for centripetal and Coriolis effects across multiple reference frames.The simulation was executed through a custom numerical integration loop, updating orientation matrices and position vectors over a 15-second trajectory. To simulate the physical experience of a passenger, I performed frame transformations to map the inertial accelerations back into the rider’s body-fixed reference frame. By plotting the $c_1$ and $c_3$ acceleration components, I was able to simulate exactly what an onboard accelerometer (or the rider's own body) would feel."
          }
        ]
      }
    ]
  },
  {
    id: 3,
    title: "Remote Controlled Robot",
    category: "Robotics",
    image: "/projects/rc-robot-full.jpg",
    year: "August 2024 - December 2024",
    role: "Team Lead",
    summary: "Designed and manufactured a 40+ part remote-controlled robot to pick up a flag and drop it into a mug, earning maximum points in the end-of-semester competition.",
    tech: ["SolidWorks", "GD&T", "3D Printing", "Waterjetting", "Machining"],
    sections: [
      {
        title: "Goal",
        content: [
          { type: "paragraph", text: "Create a remote-controlled robot capable of picking up a flag and dropping it into a mug. The robot was designed to complete three functional requirements with a focus on maximizing points in the end-of-semester competition." }
        ]
      },
      {
        title: "What?",
        content: [
          { type: "paragraph", text: "Designed and manufactured a 40+ part robot to complete three functional requirements with a focus on maximizing points in the end-of-semester competition. This robot had three distinct subsystems:" },
          { type: "image", src: "/projects/rc-robot-subsystems.png", alt: "Diagram showing the three subsystems: Clamp, Lead Screw, and Drivetrain", caption: "The three distinct subsystems of the robot" },
          { type: "heading", text: "Clamp Subsystem" },
          { type: "paragraph", text: "The clamp subsystem securely picked up a flag by using a motor to rotate a 3D-printed piece that fitted a magnet to another magnet on the other side of the flag." },
          { type: "heading", text: "Lead Screw Subsystem" },
          { type: "paragraph", text: "The lead screw subsystem elevated and lowered the clamp using a planetary gearbox, a lead screw attached to the gearbox with a spring pin, and three guiding rods. A lead screw mechanism was chosen for its \"self-locking\" capabilities — the platform holding the clamping mechanism wouldn't fall down on its own." },
          { type: "heading", text: "Drivetrain Subsystem" },
          { type: "paragraph", text: "The drivetrain subsystem used a double gearbox, two front wheels, and a caster wheel. A caster wheel was chosen instead of two back wheels because it allowed for spinning in place, which was a major advantage on the playing field." }
        ]
      },
      {
        title: "How?",
        content: [
          { type: "bullets", items: [
            "Produced 3D CAD Models and detailed engineering drawings for assembly using SolidWorks",
            "Utilized 3D Printing, Waterjetting, and Conventional Machining in order to manufacture the robot"
          ]},
          { 
            type: "mediaShowcase", 
            title: "Robot Build", 
            items: [
              { label: "CAD Model", src: "/projects/rc-robot-cad.png", mediaType: "image" },
              { label: "Full Robot View", src: "/projects/rc-robot-full.jpg", mediaType: "image" },
              { label: "Clamp Open", src: "/projects/rc-robot-clamp-open.jpg", mediaType: "image" },
              { label: "Clamp Closed", src: "/projects/rc-robot-clamp-closed.jpg", mediaType: "image" }
            ],
            description: "The robot features a custom-designed clamp mechanism for reliably grasping and releasing the flag."
          }
        ]
      },
      {
        title: "Results",
        content: [
          { type: "callout", title: "Competition Success", text: "The robot demonstrated exceptional reliability, earning maximum points in the end-of-semester competition." }
        ]
      }
    ]
  },
  {
    id: 4,
    title: "4-Bar Linkage",
    category: "Mechanical Design",
    image: "/projects/4bar-linkage-board.png",
    year: "January 2025 - May 2025",
    role: "Mechanical Engineer",
    summary: "Designed, analyzed, manufactured, and tested a 4-bar linkage mechanism with optimized transmission angle and PID-controlled motor.",
    tech: ["SolidWorks", "ADAMS", "Stress Analysis", "PID Control", "Waterjetting", "Conventional Machining"],
    sections: [
      {
        title: "01. Design",
        content: [
          { type: "paragraph", text: "For a successful design, we optimized the transmission angle to maximize linkage speed. We determined the geometry of the linkage which meets this requirement, and maintained this geometry throughout the design process." },
          { type: "paragraph", text: "We modeled our design in SolidWorks, using cutouts in the linkage to decrease weight. An optimal 12:35 gear ratio was chosen based on inertia matching of the load and motor inertia to minimize the torque needed to power the linkage. Torque is transferred to the gears using a spring pin, and to the input using two screws." },
          { type: "image", src: "/placeholder.svg", alt: "Linkage geometry in leftmost and rightmost positions", caption: "Figure 1: Linkage geometry in leftmost and rightmost positions" },
          { type: "image", src: "/placeholder.svg", alt: "Transmission design detail view", caption: "Figure 2: Detail view of transmission design" }
        ]
      },
      {
        title: "02. Motion Analysis",
        content: [
          { type: "paragraph", text: "The linkage design was exported to ADAMS for motion analysis. Based on ADAMS results, the linkage takes 0.69s and 0.69W to move from 87 degrees from the leftmost to rightmost position. The linkage weighs 2.5kg based on the ADAMS model." },
          { type: "paragraph", text: "Note that the linkage accelerates until 3.5s, then decelerates until it reaches position 5. Therefore, the angular velocity, power, and torque graphs spike at 3.5s. Power is maximized at this time." },
          { type: "paragraph", text: "The ADAMS results are a theoretical model of a real life design. Therefore, a safety factor of 1.5 was used for power when determining how fast the linkage should go. This safety factor accounts for power losses to friction in the motor and the joints, which were not accounted for in the theoretical simulation." },
          { type: "image", src: "/placeholder.svg", alt: "ADAMS model of linkage", caption: "Figure 3: ADAMS model of linkage" },
          { type: "image", src: "/placeholder.svg", alt: "Angular Displacement, Angular Velocity, Torque, Power graphs", caption: "Figure 4: From left to right: Angular Displacement, Angular Velocity, Torque, Power" }
        ]
      },
      {
        title: "03. Stress Analysis",
        content: [
          { type: "paragraph", text: "Stress analysis was completed in each place torque gets transferred (spring pin, gear mesh, screws connecting gears to input). Each component was verified to have an adequate safety factor to ensure the linkage would not fail under operating loads." },
          { type: "image", src: "/placeholder.svg", alt: "Stress analysis sample calculation", caption: "Figure 5: Sample stress analysis — spring pin shear calculation" }
        ]
      },
      {
        title: "04. Manufacturing",
        content: [
          { type: "paragraph", text: "Detailed engineering drawings were produced for each part before physically creating them. Rather than going with a rectangular design, we removed unnecessary material and added curvature to improve aesthetics and reduce material waste." },
          { type: "image", src: "/placeholder.svg", alt: "Manufacturing drawing for base plate", caption: "Figure 6: Base plate manufacturing drawing" },
          { type: "image", src: "/placeholder.svg", alt: "Manufacturing plan", caption: "Figure 7: Manufacturing plan" }
        ]
      },
      {
        title: "05. Experimentation",
        content: [
          { type: "paragraph", text: "Below is a demo of the linkage CAD, as well as a video of our physical testing. We used PID for smooth control, and increased efficiency by incorporating two ways to hit target 4." },
          { type: "mediaShowcase", title: "4-Bar Linkage in Action", items: [
            { label: "Physical Demonstration", src: "/projects/4bar-linkage-real.mov", mediaType: "video" }
          ], description: "Video demonstration of the 4-bar linkage mechanism in operation." }
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
    company: "Boston Scientific",
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
