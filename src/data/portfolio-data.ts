import { StaticImageData } from "next/image";

import placeholderImage from "@/public/img/placeholder.jpg";
import placeholderImage2 from "@/public/img/placeholder2.jpg";
import placeholderImage3 from "@/public/img/placeholder3.jpg";
import placeholderImage4 from "@/public/img/placeholder4.jpg";
import placeholderImage5 from "@/public/img/placeholder5.jpg";
import placeholderImage6 from "@/public/img/placeholder6.jpg";
import placeholderImage7 from "@/public/img/placeholder7.jpg";
import placeholderImage8 from "@/public/img/placeholder8.jpg";

export type ContentBlock =
  | {
      type: "heading";
      text: string;
    }
  | {
      type: "paragraph";
      text: string;
    }
  | {
      type: "bullets";
      items: string[];
    }
  | {
      type: "image";
      src: string;
      alt: string;
      caption?: string;
    }
  | {
      type: "video";
      src: string;
      caption?: string;
    }
  | {
      type: "gallery";
      images: { src: string; alt: string; caption?: string }[];
    }
  | {
      type: "quote";
      text: string;
      attribution?: string;
    }
  | {
      type: "callout";
      title: string;
      text: string;
    }
  | {
      type: "videoComparison";
      title: string;
      realVideo: string;
      modelVideo: string;
      description?: string;
    }
  | {
      type: "mediaShowcase";
      title: string;
      items: { label: string; src: string; mediaType: "image" | "video" }[];
      description?: string;
    }
  | {
    type: "sideImage";
    src: string;
    alt: string;
    caption?: string;
    paragraphs: string[];
    bullets?: string[];
  };

export interface Project {
  slug: string;
  title: string;
  category: string;
  role: string;
  year: string;
  tech: string[];
  image: string;
  summary: string;
  sections: {
    title: string;
    content: ContentBlock[];
  }[];
}

export const featuredProjects: Project[] = [
  {
    slug: "generative-garments",
    title: "Generative Garments",
    category: "Creative Coding",
    role: "Concept, Code",
    year: "2023",
    tech: ["TouchDesigner", "AI", "Marvelous Designer"],
    image: "img/generative-garments/featured.jpg",
    summary:
      "A series of experiments combining AI image generation with 3D fashion design, creating unique and surreal garments.",
    sections: [
      {
        title: "Concept",
        content: [
          {
            type: "paragraph",
            text: "The project explores the intersection of artificial intelligence and fashion design. By using AI to generate textures and patterns, and then applying them to 3D models of clothing, I was able to create garments that would be impossible to produce through traditional methods.",
          },
          {
            type: "image",
            src: "img/generative-garments/concept.jpg",
            alt: "AI generated texture",
            caption: "AI generated texture",
          },
          {
            type: "paragraph",
            text: "The goal was to push the boundaries of what is possible in fashion design, and to explore the potential of AI as a tool for creativity. The project also raises questions about the role of the designer in the age of AI, and whether AI can be considered a true creative partner.",
          },
        ],
      },
      {
        title: "Process",
        content: [
          {
            type: "paragraph",
            text: "The process began with generating textures and patterns using AI. I used a variety of AI models, including Stable Diffusion, to create a wide range of textures and patterns. These were then applied to 3D models of clothing using Marvelous Designer.",
          },
          {
            type: "image",
            src: "img/generative-garments/marvelous-designer.jpg",
            alt: "3D model of a garment in Marvelous Designer",
            caption: "3D model of a garment in Marvelous Designer",
          },
          {
            type: "paragraph",
            text: "The 3D models were then rendered using Cinema 4D and Octane Render. The final step was to composite the rendered images with additional effects and textures using After Effects.",
          },
        ],
      },
      {
        title: "Outcome",
        content: [
          {
            type: "image",
            src: "img/generative-garments/outcome.jpg",
            alt: "Final result",
            caption: "Final result",
          },
          {
            type: "paragraph",
            text: "The final result is a series of unique and surreal garments that showcase the potential of AI as a tool for creativity. The project was featured in a number of online publications, and was also exhibited at a gallery in Los Angeles.",
          },
        ],
      },
    ],
  },
  {
    slug: "computational-simulations-of-multibody-systems",
    title: "Computational Simulations of Multibody Systems",
    category: "Research",
    role: "Concept, Code, Simulations",
    year: "2022",
    tech: ["C++", "OpenGL", "CMake", "Blender"],
    image: "img/multibody/featured.png",
    summary:
      "A real-time multibody simulation software, capable of simulating thousands of bodies and joints. Includes a custom physics engine, collision detection, and OpenGL rendering.",
    sections: [
      {
        title: "Overview",
        content: [
          {
            type: "paragraph",
            text: "This project involved the development of a real-time multibody simulation software using C++ and OpenGL. The primary goal was to create a robust and efficient simulation environment capable of handling a large number of rigid bodies and joints. The software features a custom physics engine, collision detection algorithms, and real-time rendering capabilities.",
          },
          {
            type: "image",
            src: "img/multibody/overview.png",
            alt: "Multibody Simulation",
            caption: "Simulation of a complex mechanical system.",
          },
        ],
      },
      {
        title: "Key Features",
        content: [
          {
            type: "heading",
            text: "Custom Physics Engine",
          },
          {
            type: "paragraph",
            text: "The physics engine was built from scratch to provide accurate and stable simulations. It supports various types of joints, including revolute, prismatic, and spherical joints. The engine uses a Verlet integration scheme for time integration, which offers good stability and performance.",
          },
          {
            type: "heading",
            text: "Collision Detection",
          },
          {
            type: "paragraph",
            text: "An efficient collision detection system was implemented to handle interactions between rigid bodies. The system uses a combination of bounding volume hierarchies (BVH) and Gilbert-Johnson-Keerthi (GJK) algorithm to quickly identify and resolve collisions.",
          },
          {
            type: "heading",
            text: "OpenGL Rendering",
          },
          {
            type: "paragraph",
            text: "The simulation is rendered in real-time using OpenGL. The rendering system supports various visual effects, such as shadows, lighting, and textures. The software also includes a user interface for controlling the simulation parameters and viewing the results.",
          },
        ],
      },
      {
        title: "Technical Details",
        content: [
          {
            type: "heading",
            text: "Implementation",
          },
          {
            type: "bullets",
            items: [
              "C++ was used as the primary programming language due to its performance and control over hardware resources.",
              "OpenGL was used for real-time rendering of the simulation.",
              "CMake was used for cross-platform build management.",
            ],
          },
          {
            type: "heading",
            text: "Physics Engine",
          },
          {
            type: "bullets",
            items: [
              "Verlet integration for time integration.",
              "Support for revolute, prismatic, and spherical joints.",
              "Constraint-based dynamics for joint constraints.",
            ],
          },
          {
            type: "heading",
            text: "Collision Detection",
          },
          {
            type: "bullets",
            items: [
              "Bounding Volume Hierarchy (BVH) for broad-phase collision detection.",
              "Gilbert-Johnson-Keerthi (GJK) algorithm for narrow-phase collision detection.",
            ],
          },
        ],
      },
      {
        title: "Challenges and Solutions",
        content: [
          {
            type: "heading",
            text: "Challenge: Real-Time Performance",
          },
          {
            type: "paragraph",
            text: "Simulating a large number of rigid bodies and joints in real-time required careful optimization of the code. The physics engine and collision detection algorithms were optimized to reduce the computational cost.",
          },
          {
            type: "heading",
            text: "Solution",
          },
          {
            type: "bullets",
            items: [
              "Optimized data structures for storing rigid bodies and joints.",
              "Parallelization of the physics engine using multi-threading.",
              "Use of SIMD instructions for vector operations.",
            ],
          },
          {
            type: "heading",
            text: "Challenge: Stability",
          },
          {
            type: "paragraph",
            text: "The simulation had to be stable, meaning that it should not explode or exhibit other undesirable behaviors. This required careful tuning of the simulation parameters and the use of appropriate numerical methods.",
          },
          {
            type: "heading",
            text: "Solution",
          },
          {
            type: "bullets",
            items: [
              "Use of Verlet integration for time integration.",
              "Constraint-based dynamics for joint constraints.",
              "Appropriate choice of simulation parameters.",
            ],
          },
        ],
      },
      {
        title: "Applications",
        content: [
          {
            type: "paragraph",
            text: "The software can be used for a variety of applications, such as:",
          },
          {
            type: "bullets",
            items: [
              "Robotics",
              "Game development",
              "Engineering simulations",
            ],
          },
          {
            type: "image",
            src: "img/multibody/application.png",
            alt: "Robotics Simulation",
            caption: "Simulation of a robotic arm.",
          },
        ],
      },
      {
        title: "Future Work",
        content: [
          {
            type: "paragraph",
            text: "Future work could include:",
          },
          {
            type: "bullets",
            items: [
              "Adding support for soft bodies.",
              "Improving the collision detection system.",
              "Adding support for more types of joints.",
              "Adding a scripting interface.",
            ],
          },
        ],
      },
    ],
  },
  {
    slug: "generative-ai-assisted-game-design",
    title: "Generative AI Assisted Game Design",
    category: "Research",
    role: "Concept, Code, Simulations",
    year: "2024",
    tech: ["Python", "AI", "Machine Learning", "Game Design"],
    image: "img/ai-game-design/featured.png",
    summary:
      "A novel approach to game design using generative AI to create game levels, characters, and storylines.",
    sections: [
      {
        title: "Concept",
        content: [
          {
            type: "paragraph",
            text: "The project explores the use of generative AI to assist in the game design process. By using AI to generate game levels, characters, and storylines, I was able to create games that would be impossible to produce through traditional methods.",
          },
          {
            type: "image",
            src: "img/ai-game-design/concept.png",
            alt: "AI generated game level",
            caption: "AI generated game level",
          },
          {
            type: "paragraph",
            text: "The goal was to push the boundaries of what is possible in game design, and to explore the potential of AI as a tool for creativity. The project also raises questions about the role of the designer in the age of AI, and whether AI can be considered a true creative partner.",
          },
        ],
      },
      {
        title: "Process",
        content: [
          {
            type: "paragraph",
            text: "The process began with training AI models to generate game levels, characters, and storylines. I used a variety of AI models, including Generative Adversarial Networks (GANs) and Transformers, to create a wide range of game assets. These were then assembled into playable games using the Unity game engine.",
          },
          {
            type: "image",
            src: "img/ai-game-design/process.png",
            alt: "AI generated game character",
            caption: "AI generated game character",
          },
          {
            type: "paragraph",
            text: "The games were then tested and refined based on player feedback. The final step was to release the games to the public.",
          },
        ],
      },
      {
        title: "Outcome",
        content: [
          {
            type: "image",
            src: "img/ai-game-design/outcome.png",
            alt: "Final result",
            caption: "Final result",
          },
          {
            type: "paragraph",
            text: "The final result is a series of unique and innovative games that showcase the potential of AI as a tool for game design. The project was featured in a number of online publications, and was also exhibited at a game development conference.",
          },
        ],
      },
    ],
  },
];

export const allProjects: Project[] = [
  ...featuredProjects,
  {
    slug: "fluid-simulation",
    title: "Real-time Fluid Simulation on GPU",
    category: "Research",
    role: "Concept, Code, Simulations",
    year: "2021",
    tech: ["C++", "OpenGL", "CUDA"],
    image: "img/fluid/featured.png",
    summary:
      "A real-time fluid simulation software, capable of simulating millions of particles. Includes a custom SPH physics engine, collision detection, and OpenGL rendering.",
    sections: [
      {
        title: "Overview",
        content: [
          {
            type: "paragraph",
            text: "This project involved the development of a real-time fluid simulation software using C++ and OpenGL. The primary goal was to create a robust and efficient simulation environment capable of handling a large number of particles. The software features a custom SPH physics engine, collision detection algorithms, and real-time rendering capabilities.",
          },
          {
            type: "image",
            src: "img/fluid/overview.png",
            alt: "Fluid Simulation",
            caption: "Simulation of a complex fluid system.",
          },
        ],
      },
      {
        title: "Key Features",
        content: [
          {
            type: "heading",
            text: "Custom SPH Physics Engine",
          },
          {
            type: "paragraph",
            text: "The physics engine was built from scratch to provide accurate and stable simulations. It uses the Smoothed-Particle Hydrodynamics (SPH) method to simulate the behavior of fluids. The engine supports various physical effects, such as viscosity, surface tension, and gravity.",
          },
          {
            type: "heading",
            text: "Collision Detection",
          },
          {
            type: "paragraph",
            text: "An efficient collision detection system was implemented to handle interactions between fluid particles and solid objects. The system uses a combination of bounding volume hierarchies (BVH) and signed distance fields (SDF) to quickly identify and resolve collisions.",
          },
          {
            type: "heading",
            text: "OpenGL Rendering",
          },
          {
            type: "paragraph",
            text: "The simulation is rendered in real-time using OpenGL. The rendering system supports various visual effects, such as shadows, lighting, and reflections. The software also includes a user interface for controlling the simulation parameters and viewing the results.",
          },
        ],
      },
      {
        title: "Technical Details",
        content: [
          {
            type: "heading",
            text: "Implementation",
          },
          {
            type: "bullets",
            items: [
              "C++ was used as the primary programming language due to its performance and control over hardware resources.",
              "OpenGL was used for real-time rendering of the simulation.",
              "CUDA was used for parallelizing the physics engine on the GPU.",
            ],
          },
          {
            type: "heading",
            text: "Physics Engine",
          },
          {
            type: "bullets",
            items: [
              "Smoothed-Particle Hydrodynamics (SPH) method for simulating fluids.",
              "Support for viscosity, surface tension, and gravity.",
              "Verlet integration for time integration.",
            ],
          },
          {
            type: "heading",
            text: "Collision Detection",
          },
          {
            type: "bullets",
            items: [
              "Bounding Volume Hierarchy (BVH) for broad-phase collision detection.",
              "Signed Distance Fields (SDF) for narrow-phase collision detection.",
            ],
          },
        ],
      },
      {
        title: "Challenges and Solutions",
        content: [
          {
            type: "heading",
            text: "Challenge: Real-Time Performance",
          },
          {
            type: "paragraph",
            text: "Simulating a large number of particles in real-time required careful optimization of the code. The physics engine and collision detection algorithms were optimized to reduce the computational cost.",
          },
          {
            type: "heading",
            text: "Solution",
          },
          {
            type: "bullets",
            items: [
              "Parallelization of the physics engine using CUDA.",
              "Optimized data structures for storing particles and collision objects.",
              "Use of SIMD instructions for vector operations.",
            ],
          },
          {
            type: "heading",
            text: "Challenge: Stability",
          },
          {
            type: "paragraph",
            text: "The simulation had to be stable, meaning that it should not explode or exhibit other undesirable behaviors. This required careful tuning of the simulation parameters and the use of appropriate numerical methods.",
          },
          {
            type: "heading",
            text: "Solution",
          },
          {
            type: "bullets",
            items: [
              "Use of Verlet integration for time integration.",
              "Appropriate choice of simulation parameters.",
              "Use of artificial viscosity to damp oscillations.",
            ],
          },
        ],
      },
      {
        title: "Applications",
        content: [
          {
            type: "paragraph",
            text: "The software can be used for a variety of applications, such as:",
          },
          {
            type: "bullets",
            items: [
              "Visual effects in movies and games",
              "Engineering simulations",
              "Scientific research",
            ],
          },
          {
            type: "image",
            src: "img/fluid/application.png",
            alt: "Visual Effects Simulation",
            caption: "Simulation of a water splash.",
          },
        ],
      },
      {
        title: "Future Work",
        content: [
          {
            type: "paragraph",
            text: "Future work could include:",
          },
          {
            type: "bullets",
            items: [
              "Adding support for more complex fluid behaviors, such as turbulence and multiphase flow.",
              "Improving the collision detection system to handle more complex geometries.",
              "Adding a scripting interface for controlling the simulation.",
            ],
          },
        ],
      },
    ],
  },
  {
    slug: "deformable-object-simulation",
    title: "Real-time Deformable Object Simulation",
    category: "Research",
    role: "Concept, Code, Simulations",
    year: "2020",
    tech: ["C++", "OpenGL"],
    image: "img/deformable/featured.png",
    summary:
      "A real-time deformable object simulation software, capable of simulating thousands of triangles. Includes a custom FEM physics engine, collision detection, and OpenGL rendering.",
    sections: [
      {
        title: "Overview",
        content: [
          {
            type: "paragraph",
            text: "This project involved the development of a real-time deformable object simulation software using C++ and OpenGL. The primary goal was to create a robust and efficient simulation environment capable of handling a large number of triangles. The software features a custom FEM physics engine, collision detection algorithms, and real-time rendering capabilities.",
          },
          {
            type: "image",
            src: "img/deformable/overview.png",
            alt: "Deformable Object Simulation",
            caption: "Simulation of a complex deformable object.",
          },
        ],
      },
      {
        title: "Key Features",
        content: [
          {
            type: "heading",
            text: "Custom FEM Physics Engine",
          },
          {
            type: "paragraph",
            text: "The physics engine was built from scratch to provide accurate and stable simulations. It uses the Finite Element Method (FEM) to simulate the behavior of deformable objects. The engine supports various material models, such as linear elasticity, corotational elasticity, and plasticity.",
          },
          {
            type: "heading",
            text: "Collision Detection",
          },
          {
            type: "paragraph",
            text: "An efficient collision detection system was implemented to handle interactions between deformable objects and solid objects. The system uses a combination of bounding volume hierarchies (BVH) and signed distance fields (SDF) to quickly identify and resolve collisions.",
          },
          {
            type: "heading",
            text: "OpenGL Rendering",
          },
          {
            type: "paragraph",
            text: "The simulation is rendered in real-time using OpenGL. The rendering system supports various visual effects, such as shadows, lighting, and textures. The software also includes a user interface for controlling the simulation parameters and viewing the results.",
          },
        ],
      },
      {
        title: "Technical Details",
        content: [
          {
            type: "heading",
            text: "Implementation",
          },
          {
            type: "bullets",
            items: [
              "C++ was used as the primary programming language due to its performance and control over hardware resources.",
              "OpenGL was used for real-time rendering of the simulation.",
            ],
          },
          {
            type: "heading",
            text: "Physics Engine",
          },
          {
            type: "bullets",
            items: [
              "Finite Element Method (FEM) for simulating deformable objects.",
              "Support for linear elasticity, corotational elasticity, and plasticity.",
              "Implicit integration for time integration.",
            ],
          },
          {
            type: "heading",
            text: "Collision Detection",
          },
          {
            type: "bullets",
            items: [
              "Bounding Volume Hierarchy (BVH) for broad-phase collision detection.",
              "Signed Distance Fields (SDF) for narrow-phase collision detection.",
            ],
          },
        ],
      },
      {
        title: "Challenges and Solutions",
        content: [
          {
            type: "heading",
            text: "Challenge: Real-Time Performance",
          },
          {
            type: "paragraph",
            text: "Simulating a large number of triangles in real-time required careful optimization of the code. The physics engine and collision detection algorithms were optimized to reduce the computational cost.",
          },
          {
            type: "heading",
            text: "Solution",
          },
          {
            type: "bullets",
            items: [
              "Optimized data structures for storing triangles and collision objects.",
              "Use of SIMD instructions for vector operations.",
              "Use of iterative solvers for solving the linear system of equations.",
            ],
          },
          {
            type: "heading",
            text: "Challenge: Stability",
          },
          {
            type: "paragraph",
            text: "The simulation had to be stable, meaning that it should not explode or exhibit other undesirable behaviors. This required careful tuning of the simulation parameters and the use of appropriate numerical methods.",
          },
          {
            type: "heading",
            text: "Solution",
          },
          {
            type: "bullets",
            items: [
              "Use of implicit integration for time integration.",
              "Appropriate choice of simulation parameters.",
              "Use of damping to dissipate energy.",
            ],
          },
        ],
      },
      {
        title: "Applications",
        content: [
          {
            type: "paragraph",
            text: "The software can be used for a variety of applications, such as:",
          },
          {
            type: "bullets",
            items: [
              "Visual effects in movies and games",
              "Engineering simulations",
              "Surgical simulations",
            ],
          },
          {
            type: "image",
            src: "img/deformable/application.png",
            alt: "Surgical Simulation",
            caption: "Simulation of a surgical procedure.",
          },
        ],
      },
      {
        title: "Future Work",
        content: [
          {
            type: "paragraph",
            text: "Future work could include:",
          },
          {
            type: "bullets",
            items: [
              "Adding support for more complex material models, such as hyperelasticity and fracture.",
              "Improving the collision detection system to handle self-collisions.",
              "Adding a scripting interface for controlling the simulation.",
            ],
          },
        ],
      },
    ],
  },
];
