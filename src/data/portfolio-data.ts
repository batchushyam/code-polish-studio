export const PERSONAL_INFO = {
  name: "Shyam Batchu",
  role: "Shyam's Engineering Portfolio",
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
  | { type: "video"; src: string; caption?: string }
  | { type: "videoComparison"; title: string; realVideo: string; modelVideo: string; description?: string }
  | { type: "mediaShowcase"; title: string; items: { label: string; src: string; mediaType: "image" | "video" }[]; description?: string }
  | { type: "sideImage"; src: string; alt: string; caption?: string; paragraphs: string[]; bullets?: string[] };

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
  summary: string;
  tech: string[];
  sections: ProjectSection[];
}

export const PROJECTS: Project[] = [
  {
    id: 1,
    title: "Autonomous IV Monitor",
    category: "Medical Device",
    image: "/projects/iv-monitor.jpeg",
    year: "September 2024 - Present",
    role: "Engineering Lead",
    summary: "Leading a 10-member engineering team creating a low-cost, autonomous IV drip monitoring device to improve patient outcomes in under-resourced hospitals. Traveled to Komfo Anokye Teaching Hospital (KATH) in Kumasi, Ghana to test out the device and get feedback.",
    tech: ["SolidWorks", "3D Printing", "Circuit Design", "Medical Device"],
    sections: [
      {
        title: "The Problem",
        content: [
          { type: "sideImage", src: "/projects/drip-chamber.jpg", alt: "IV Setup showing drip chamber and roller clamp", caption: "The completed device mounted on an IV pole with the drip chamber sensor attached", paragraphs: [
            "In under-resourced hospitals across developing nations like Ghana, IV drip monitoring relies almost entirely on manual labor. To administer fluids, nursing staff are forced to assess IV rates by eye, counting drops over a set period and manually adjusting a roller clamp to restrict or release the tubing.",
            "While assessing IV rates by eye is standard practice in these regions, this method is highly susceptible to error and presents two major challenges:"
          ], bullets: [
            "Time-Intensive Setup: Nurses must spend valuable time manually calculating and calibrating the milliliters of fluid delivered per hour.",
            "Lack of Continuous Monitoring: A manual setup only ensures accuracy at the exact moment it is calibrated. There are no alarms to alert staff if the bag empties, a patient moves their arm and occludes the flow, the clamp loses tension, or the setup is accidentally bumped."
          ]},
          { type: "paragraph", text: "Although automated infusion pumps eliminate these risks, they typically cost thousands of dollars, completely pricing out these hospitals. It is common for entire medical units to lack a single pump. To bridge this critical gap, our team partnered with KATH Hospital in Ghana to understand their specific on-the-ground challenges and engineer a reliable, cost-effective device to modernize IV monitoring." }
        ]
      },
      {
        title: "The Process before Travel",
        content: [
          { 
            type: "sideImage", 
            src: "/projects/circuitbreadboard.png", 
            alt: "proof of concept breadboard", 
            caption: "The initial proof of concept circuit built on a breadboard. A test tube was used to mimic a drip chamber and foam housing was used to hold the IR light and phototransistor", 
            paragraphs: [
              "My first semester on the team I was a member of the engineering subteam and worked on the proof of concept circuit in order to create a device that monitored flow rate. This proof of concept worked by having a phototransisitor on one side of the drip chamber, and a IR light on the other side of the drip chamber. Everytime a drop came through, the IR light beam was disrupted which sent current down the phototransistor. This current thenwent through a voltage follower to ensure the full voltage passed through the circuit, a high pass filter which filter out low frequency signals and noise (an IV drop disrupts the beam very quickly leading to a high frequency signal), and finally a comparator which acts as a switch and counts drips by producing a square wave.",
            ]
          },
          { type: "paragraph", text: "My next semester on the team, I became an Engineering Lead and was responsible for designing and manufacturing the housing for all of the components. The major responsibilities included a component that would hold the IR light and phototransistor in place and attach to a drip chamber and a component that would attach to an IV pole and hold the PCB, batteries, and screen. Drip chambers are a small, transluscent cylinder in IV sets that connect the IV bag to tubing that allow for medical personnel to estimate the rate of fluid administration by counting the drops. I was responsible for creaing something that would hold the IR light and phototransistor in place across the drip chamber. The solution I came up with was a ring that slides onto the drip chamber and holds the IR light and phototransistor using a press-fit design." },
          { type: "gallery", images: [
            { src: "/projects/CAD_RING.png", alt: "CAD of Ring", caption: "CAD of ring that houses two sensors that slides onto drip chamber" },
            { src: "/projects/RING_IRL.png", alt: "picture of Ring on drip chamber", caption: "Ring slid onto drip chamber" },
          ]},
          { type: "paragraph", text: "The next thing I designed and created was the main housing of the device that held the screen, pcb, and batteries. The main challenge behind this was the PCB and screen. They were connected using a short ribbon cable that came with the screen we purchased. On the PCB our team designed, it had the ribbon cable connector being on the short side of the PCB. However, the screen had the ribbon cable connector on the long side which led to misalignment between the two parts. Another challenge was that the screen had to be on the outside of the housing to be interacted with while the PCB had to be on the inside of the housing in order to be protected. I had to come up with a solution to overcome these difficulties. I designed this piece using SolidWorks and 3-d printed it. It leaves a gap for the components on the pcb to be connected, and is designed to be easy to screw in the PCB and screen into the housing. The screen a bezel piece was created to keep it in place. To attach this housing to an IV pole, I initially thought of using a 3-d printed press-fit design. However, I quickly learned that press-fits didn't work well when weaker material (filament) is used to press-fit against stronger material (steel of IV pole). I then pivoted this and bought a stand was supposed to be used on cameras to attach it to the housing. With all of the parts of housing finished and manufactured, the device was now ready for travel to KATH in order to get feedback from nurses, doctors, and engineers." },
          { type: "video", src: "/projects/full_assembly_flow.mp4", caption: "Full assembly of the device" },
          { type: "paragraph", text: "The device works by first showing the setup interface which is shown directly below. The nurse sets the prescribed drip rate (which is based on what prescription is given) and chooses the correct gtts/mL (drops per mL which changes depending on what IV setup is used). Once they have the correct settings, they click start which takes them to the monitoring interface." },
          { type: "image", src: "/projects/device-on-iv-pole.jpeg", alt: "Autonomous IV Monitor device mounted on an IV pole", caption: "The device mounted on an IV pole with the setup interface" },
          { type: "paragraph", text: " The monitoring interface shows the flow rate in mL/hour, a graph showing the history of the flow rate, and an indicator that apperas every time a drop passes through. At this stage there is no alarm that goes off when flow rate deviates from the prescribed rate, but an alarm will be added in the next iteration of the device." },
          { type: "image", src: "/projects/monitor_interface.jpeg", alt: "Autonomous IV Monitor device mounted on an IV pole", caption: "The device mounted on an IV pole with the monitoring interface" },

        ]
      },
      {
        title: "Travel",
        content: [
          { type: "sideImage", src: "/projects/team-ghana.jpg", alt: "Team at KATH Hospital in Kumasi, Ghana", paragraphs: ["Over winter break, I traveled along with my team to Kumasi, Ghana in order to get feedback from hospital leadership, hospital engineers, nurses, and doctors from various wards. While we were in Ghana, not everything went to plan with the device, and a lot quick thinking and problem solving had to happen."] },
          {  type: "paragraph", text: "For our field testing in Ghana, we traveled with two identical prototypes. However, we quickly hit a major hurdle with the IR light solder joints failing on both units due to the mechanical stress of travel. With both prototypes broken, we had no functioning prototype and all of the tools that would be used to solve this were back in Ann Arbor. To fix this, I traveled to a electronics component store across the city and bought a portable soldering iron. However, when we tried to solder the wire back to the IR light, we found that it wasn't going to work because the leads had sheared off at the very base of the IR bulb (not where it was previously soldered) making a standard solder impossible. When we tried to heat up the metal wire part of the IR light, the plastic on the IR light would melt before the metal part breaking the IR bulb. In order to connect the wire back to the IR light, I had the idea of taping a circular disk of solder while it was pressed down against the metal wire and then soldering the wire on to the disk instead of directly to the IR bulb. This ended up working, and we were able to repair the prototypes." },
          { type: "paragraph", text: "Another big issue that we discovered while in Ghana was that our device didn't work outside. We had spent all of our time prototyping in the basement of an engineering building, that we never thought about how environmental factors would impact the device. This was a big issue as we actually found out that anywhere somewhat close to a window our device wouldn't work because sunlight would saturate the phototransistor with infrared light. After some quick thinking, a granola bar wrapper was used to create a small pinhole that only direct IR light from our IR bulb would go through. A granola bar wrapper was used because it was easily accessible to us and it was made of aluminum foil which is an excellent blocker of IR radiation. With this pinhole addition, we were able to alter our device to now work outside and next to windows! Navigating the device failing under a tight timeframe in Ghana was stressful, but sucessfully pivoting into a working solution was incredibly rewarding." },
          { type: "paragraph", text: " While at the hospital, I led interviews and presented the device to groups of medical staff. Based on our design ethnography research, I identified the following key takeaways:"},
          
          { type: "bullets", items: [
            "Creating a ring for different sized drip chambers: Initially this device was designed for use in the emergency wards of hospitals, but other hospitals units expressed a lot of interest regarding our device during interviews. However, the current ring only fit one size drip chamber which didn't work for other IV setups like blood transfusions or pediatric wards which use a different sized drip chamber. To make this device viable for other hospital units a ring that was adjustable and fit different drip chambers became a priority",
            "Battery life is a priority: The touchscreen looked and worked great, but during our interviews we found that the lifetime of the device was very important to hospital staff. The touchscreen drained energy so a shift in how the user interacts with the device has to be made",
            "Future development gap: While our device effectively fills the need for low-cost monitoring, staff feedback highlighted the value of active flow control found in infusion pumps. This presents an opportunity for a separate, future project: building a device that physically controls the flow rate while remaining cheaper than current market options. While disrupting a highly-iterated market is very difficult, operating as a student project team gives the unique advantage of zero R&D overhead that gives us the freedom to explore solutions that traditional companies can't"
          ]}
         
        ]
      },
      {
        title: "Post-Travel",
        content: [
          { type: "paragraph", text: " As of February 2026, I am currently working on creating a ring that works on drip chambers of different sizes using a spring loaded system (that also protects weak joints and works near sunlight), re-doing the housing with buttons instead of a touchscreen, and creating a peristaltic motor proof-of-concept to control the flow rate of infusion pumps. This section will be updated as progress is made." },          
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
            realVideo: "/projects/trebuchet-real.mp4", 
            modelVideo: "/projects/trebuchet-model.mp4",
            description: "This is a simulation of a trebuchet launch using a recursive multibody dynamics framework in MATLAB. The trebuchet is modeled using four rigid bodies (ground, counterweight, projectile, and arm) and three rotational joints between them. Each body is assigned precise mass and inertia tensors (I) based on its geometry (cylinder, cuboid, and sphere) to ensure realistic rotational dynamics. There are two distinct phases in this simulation: before the projectile loses contact with the ground and after the projectile loses contact with the ground. In the initial phase, the projectile is restricted to a 1D path along the ground. This is mathematically enforced through a unilateral vertical constraint. Using the system\u2019s Jacobian (J) and bias acceleration (\u03C3), I constructed an augmented system of equations. This allowed the solver to calculate the Lagrange multiplier (\u03BB), representing the normal force. Once the normal force was negative (the ground is pulling the projectile downwards which is not feasible), the projectile lifts off and the second phase begins. Once contact is lost (indicated by a small pause in the simulation for visualization purposes), the projectile behaves as a free-swinging pendulum. The equations of motion shift to a purely inertial form (Mq\u0308 = f + g). The simulation ends when the relative joint angle between the projectile and the arm reaches 45\u00B0 (\u03C0/4) which is the point of release for trebuchets."
          },
          { 
            type: "mediaShowcase", 
            title: "Bipedal Robot", 
            items: [
              { label: "Walking Gait", src: "/projects/biped-walking.mp4", mediaType: "video" },
              { label: "Running Gait", src: "/projects/biped-running.mp4", mediaType: "video" }
            ],
            description: "In this project, I created a 7-DOF bipedal robot simulation by developing and implementing diverse kinematic joint classes to handle complex mechanical constraints. I modeled the robot\u2019s mobility using a Floating Base architecture, centered on a Virtual 3-DOF Joint that maps global x, y, and pitch coordinates into the system's generalized state. To achieve realistic locomotion, I integrated two distinct physical joint types: Revolute Joints at the hips to manage angular leg-swing and Translational (Prismatic) Joints for the knees to simulate telescoping leg extensions. By programming these joints within a recursive outward-pass framework, I ensured that the position, velocity, and acceleration of each successive link were accurately propagated through the branched kinematic chain. This modular approach allowed for the seamless translation of high-level trajectory data into coordinated walking and running gaits, demonstrating a deep understanding of how specific joint constraints define robot topology and movement."
          },
          { type: "heading", text: "Hopping Robot" },
          { type: "image", src: "/projects/hopping-robot-diagram.png", alt: "Model Diagram of Hopping Robot", caption: "Model diagram of the hopping robot" },
          { type: "video", src: "/projects/hopping-aligned.mp4", caption: "Aligned Drop" },
          { type: "video", src: "/projects/hopping-crooked.mp4", caption: "Crooked Drop" },
          { type: "image", src: "/projects/hopping-coordinates.png", alt: "Generalized Coordinates", caption: "Generalized coordinates of the hopping robot" },
          { type: "paragraph", text: "The robot is modeled as a 5-DOF system using a floating-base approach. To simplify the kinematics of the complex hip joint (which requires both rotation and translation), I implemented a massless pelvis trick. This allows the system to be modeled as a serial chain using standard joint classes: Virtual 3-DOF Joint manages the main body\u2019s x, y, and pitch (\u03B8). Revolute Joint (\u03B3) attaches the body to the pelvis for hip rotation. Translational Joint (\u0394L) attaches the pelvis to the leg for telescoping movement. Parallel Elasticity: A virtual spring force (stiffness k = 800) is applied along the leg extension joint to model the hopping energy storage. Multi-Phase Simulation & Impact Logic: The simulation captures the non-linear transitions between different physical states. Flight Phase (Unconstrained): The robot moves under gravity until a custom event function (footContact) detects the foot crossing the ground threshold (y = 0). Plastic Impact: Upon contact, I calculated the instantaneous change in generalized velocities (q\u0307\u207A) using a discrete impact map. This accounts for the sudden loss of energy and ensures the velocities are consistent with the new ground constraint. Stance Phase (Constrained): The foot is locked to the ground via a 2D constraint Jacobian (J). I utilized the KKT (Augmented Mass Matrix) approach to solve for both the robot\u2019s accelerations and the ground reaction forces (\u03BB). Contact Transition Logic: A critical component of this project was the automated transition back to flight. By monitoring the vertical component of the Lagrange multiplier (\u03BB), the simulation identifies the exact moment the spring force overcomes gravity and the ground pushes the robot back into the air. When \u03BB reaches zero, the footLossOfContact event triggers, reverting the system to unconstrained flight dynamics." },
          { type: "heading", text: "Teacup Ride" },
          { type: "video", src: "/projects/teacup-real.mp4", caption: "Real World Teacup Ride" },
          { type: "video", src: "/projects/teacup-model.mp4", caption: "Teacup Ride Model Simulation" },
          { type: "image", src: "/projects/teacup-position.png", alt: "Position of Rider", caption: "Position of rider over time" },
          { type: "image", src: "/projects/teacup-acceleration.png", alt: "Acceleration of Rider", caption: "Acceleration of rider over time" },
          { type: "paragraph", text: "This project involved the kinematic analysis and simulation of a teacup ride, modeled as a series of three nested rigid bodies (A, B, and C) undergoing simultaneous relative rotations. By defining angular velocities in a hierarchical fashion,where each body's motion is relative to its parent frame, I successfully modeled the propagation of motion from the central turntable to a rider at the end. I implemented recursive algorithms to calculate the absolute position, velocity, and acceleration of the rider (Point D) by accounting for centripetal and Coriolis effects across multiple reference frames. The simulation was executed through a custom numerical integration loop, updating orientation matrices and position vectors over a 15-second trajectory. To simulate the physical experience of a passenger, I performed frame transformations to map the inertial accelerations back into the rider's body-fixed reference frame. By plotting the c\u2081 and c\u2083 acceleration components, I was able to simulate  what an onboard accelerometer (or the rider\u2019s own body) would feel. The different accelerations that the rider feels during the ride is what makes the teacup ride fun, and by mapping it out you can see the impact of what changing the angular velocity or lengths of one of the components will have on the rider's experience." }
        ]
      }
    ]
  },
  {
    id: 3,
    title: "Remote Controlled Robot",
    category: "Robotics",
    image: "/projects/rc-robot-subsystems.png",
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
          { type: "paragraph", text: "The lead screw subsystem elevated and lowered the clamp using a planetary gearbox, a lead screw attached to the gearbox with a spring pin, and three guiding rods. A lead screw mechanism was chosen for its \"self-locking\" capabilities. The platform holding the clamping mechanism wouldn't fall down on its own because of the leadscrew." },
          { type: "heading", text: "Drivetrain Subsystem" },
          { type: "paragraph", text: "The drivetrain subsystem used a double gearbox, two front wheels, and a caster wheel. A caster wheel was chosen instead of two back wheels because it allowed for spinning in place, which was a major advantage on the playing field." }
        ]
      },
      {
        title: "Final Product",
        content: [
          { type: "bullets", items: [
            "Produced 3D CAD Models and detailed engineering drawings for assembly using SolidWorks",
            "Utilized 3D Printing, Waterjetting, and Conventional Machining in order to manufacture the robot"
          ]},
          { type: "image", src: "/projects/rc-robot-cad.png", alt: "CAD Model", caption: "CAD Model" },
          { type: "image", src: "/projects/rc-robot-full.jpg", alt: "Full Robot View", caption: "Full Robot View" },
          { type: "gallery", images: [
            { src: "/projects/rc-robot-clamp-open.jpg", alt: "Clamp Open", caption: "Clamp Open" },
            { src: "/projects/rc-robot-clamp-closed.jpg", alt: "Clamp Closed", caption: "Clamp Closed" }
          ]},
          { type: "paragraph", text: "The robot features a custom-designed clamp mechanism for reliably grasping and releasing the flag." }
        ]
      },
      {
        title: "Results",
        content: [
          { type: "paragraph", text: "The robot demonstrated exceptional reliability, completing all of its tasks in the end-of-semester competition. If I could change one thing about this design, I would add bearings on the platform that has the clamping mechanism. This would ensure that the platform remained level the entire time and didn't slant (as you can see in the photos above). " }
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
    role: "Team Project",
    summary: "Designed, analyzed, manufactured, and tested a 4-bar linkage mechanism with optimized transmission angles and PID-controlled motor.",
    tech: ["SolidWorks", "ADAMS", "Stress Analysis", "PID Control", "Waterjetting", "Conventional Machining"],
    sections: [
      {
        title: "Context",
        content: [
          { type: "paragraph", text: "Our team was tasked with creating a mechatronic system capable of detecting zombies (targets) and firing an LED at the corresponding photosensor. The goal was to prioritize the furthest targets using proximity sensors and navigate a 4-bar linkage across the playing field with high speed and precision." },
        ]
      },      
      {
        title: "Design and Geometry Optimization",
        content: [
          { 
            type: "sideImage", 
            src: "/projects/lengths_of_coupler.png", 
            alt: "proof of concept breadboard", 
            caption: "Input, Follower, and Coupler linkage lengths", 
            paragraphs: [
              "We selected a design that optimized link lengths for a balance of weight and transmission angle. The final linkage consists of aluminum links (Input: 7.17\", Follower: 7.02\") and a lightweight 3D-printed PLA flashlight mount. The entire moving mechanism weighs only 160 grams to minimize inertia.",
              "A transmission ratio of 1.33 was chosen after comparing inertia matching and light beam resolution requirements. This ratio ensures the motor could resolve 0.1875\u00B0 per encoder count, providing the necessary precision to hit targets. We utilized a gear-driven system over belts or chains to maximize efficiency and eliminate slippage."
            ]
          },
          { type: "gallery", images: [
            { src: "/projects/transmission.png", alt: "Isometric view of Transmission", caption: "Isometric View of 4:3 gear transmission" },
            { src: "/projects/close_up_spring_pin.png", alt: "Close up of transmission", caption: "Detailed view of gears interacting and spring pin coupling" },
          ]},
          { type: "paragraph", text: "There were four different targets that our four-bar linkage had to hit as seen in the figures below which show " },

          { type: "gallery", images: [
            { src: "/projects/firstpositionlinkage.png", alt: "First position of linkage", caption: "Linkage pointing at the first target" },
            { src: "/projects/secondpositionlinkage.png", alt: "Second position of linkage", caption: "Linkage pointing at the second target" },
            { src: "/projects/thirdpositionlinkage.png", alt: "Third position of linkage", caption: "Linkage pointing at the third target" },
            { src: "/projects/fourthpositionlinkage.png", alt: "Fourth position of linkage", caption: "Linkage pointing at the fourth target (has to point at mirror due to barrier around sensor)" },
          ]},
        ]
      },
      {
        title: "Dynamic Analysis (ADAMS)",
        content: [
          { type: "paragraph", text: "To get from the first position to the fourth position, the angle swept by the input link is equal to 97.53 degrees. The design in SolidWorks was exported to MSC ADAMS to simulate this 97.53-degree sweep. By iterating through acceleration magnitudes, we optimized the sweep time to 0.48 seconds. This timing kept the peak power consumption at 0.875 kW, safely within the motor's operating limits while providing the dynamic response needed for high-speed gameplay. Shown above in the design section was the final design chosen, but multiple different designs that emphasized different things (input length, transmission angle, sweep angle) were put through ADAMS in order to find the most optimal design. The ADAMS simulations helped our team compare different designs. Below are four graphs that were obtained from the design and when the sweep time is 0.48 seconds and each show a different value vs. time." },
          { type: "gallery", images: [
            { src: "/projects/anglepositionadams.png", alt: " Angular Position vs. Time of Input Link", caption: " Angular Position vs. Time of Input Link" },
            { src: "/projects/angularvelocityadams.png", alt: "Angular Velocity vs. Time of Input Link ", caption: "Angular Velocity vs. Time of Input Link" },
            { src: "/projects/poweradams.png", alt: "Power versus Time of Simulation", caption: "Power versus Time of Simulation" },
            { src: "/projects/torqueadams.png", alt: "Torque vs Time of Simulation", caption: "Torque vs Time of Simulation" },
            
          ]},
          { type: "paragraph", text: "The main value that was compared in ADAMS from different linkage setups was sweep time while keeping the peak power delivered from the motor under 1 kW. " },

        ]
      },
      {
        title: "Stress and Failure Analysis",
        content: [
          { type: "paragraph", text: "We performed failure analysis on critical torque transfer points. While the gear teeth showed a healthy safety factor of >3.0, the motor shaft spring pin was identified as a weak point with a safety factor of 1.16. Real-world testing confirmed this, as the pin eventually failed due to fatigue under cyclic loading. This was a key learning point that led us to recommend hardened steel pins for future iterations." },
          { type: "image", src: "/projects/stress-calc.png", alt: "Stress analysis on spring pin", caption: " Shear stress analysis on the 1050 steel spring pin." }
        ]
      },
      {
        title: "Manufacturing",
        content: [
          { type: "paragraph", text: "Detailed engineering drawings were created for each part before they were manufactured. Waterjets, mills, lathes, and 3-D printers were all used in order to manufacture different parts which gave great exposure to different types of manufacturing methods." },
          { type: "image", src: "/projects/FollowerDrawing.png", alt: "Manufacturing drawing for follower link", caption: "Manufacturing drawing for follower link" },
          { type: "image", src: "/projects/FollowerManufacturingPlan.png", alt: "Manufacturing plan", caption: "Manufacturing plan for follower link" },
          { type: "paragraph", text: "A video showing how all of the components integrate together was also made and shown below."},
          { type: "video", src: "/projects/Final.mp4", caption: "Assembly video showing how all components integrate together" }
        ]
      },
      {
        title: "Programming and Results",
        content: [
          { type: "paragraph", text: "Control was implemented using an Arduino-based PID loop combined with PWM. This allowed the system to correct for overshoot caused by the linkage's inertia. The system successfully used proximity sensor data to calculate target urgency, providing a reliable closed-loop response to real-time target movement." },
          { type: "video", src: "/projects/4bar-linkage-real.mov", caption: "The final system successfully identifying and targeting the furthest zombie and moving flashlight to point at the corresponding photosensor." }
        ]
      }
    ]
  },
  {
    id: 5,
    title: "Lane Keeping Assist System on Highways",
    category: "Modeling",
    image: "/projects/lka.png",
    year: "January 2026 - Present",
    role: "Individual Project",
    summary: "Using a dynamic bicycle model to represent vehicle handling. Creating a control system to minimize  lateral error (distance from lane center) and error yaw angle deviation while maintaining stability.",
    tech: ["MatLab", "Simulink", "Control Systems", "Vehicle Modeling"],
    sections: [
      {
        title: "Coming Soon",
        content: [
          { type: "paragraph", text: "As of February 2026, I'm currently working on this project and will update this page as progress is being made." },
        ]
      }
    ]
  },
  {
    id: 6,
    title: "Mounting Solutions for Dopplers (Senior capstone project) ",
    category: "Design",
    image: "/projects/Doppler.jpg",
    year: "January 2026 - Present",
    role: "Team Project",
    summary: "Mounting solution for Doppler to birthing patient for low-resource clinical settings.",
    tech: ["Design Ethnography", "Prototyping", "3-D printing"],
    sections: [
      {
        title: "Research Focus",
        content: [
          { type: "paragraph", text: "For my senior capstone project, I'm creating a mounting solution that attaches Dopplers to birthing patients for reliable, extended monitoring. It is meant for low-resource clinical settings. As of February 2026, I'm currently working on the project and will update this page as progress is being made." },
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
    desc: "Directed an experiment with industry-grade equipment to model boat vibrations. Created LabVIEW/MATLAB programs for data acquisition to identify vibration patterns."
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