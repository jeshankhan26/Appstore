import React from 'react';

const Resources = () => {
    const resources = [
        {
          name: "React (Vite)",
          description: "A fast development environment for React using Vite.",
          link: "https://vitejs.dev/guide/",
        },
        {
          name: "Tailwind CSS",
          description: "A utility-first CSS framework for rapid UI development.",
          link: "https://tailwindcss.com/docs/installation",
        },
        {
          name: "DaisyUI",
          description: "Tailwind CSS component library for fast UI design.",
          link: "https://daisyui.com/docs/install/",
        },
        {
          name: "React Icons",
          description: "Popular icon packs as React components.",
          link: "https://react-icons.github.io/react-icons/",
        },
        {
          name: "React Router",
          description: "Routing library for React to handle navigation.",
          link: "https://reactrouter.com/en/main/start/overview",
        },
        {
          name: "Context API",
          description: "React's way of sharing global data without props drilling.",
          link: "https://react.dev/learn/passing-data-deeply-with-context",
        },
        {
          name: "Provider Pattern",
          description: "Used with Context API to provide data to components.",
          link: "https://react.dev/reference/react/createContext",
        },
        {
          name: "useState Hook",
          description: "Manage local state in functional components.",
          link: "https://react.dev/reference/react/useState",
        },
        {
          name: "useEffect Hook",
          description: "Perform side effects in functional components.",
          link: "https://react.dev/reference/react/useEffect",
        },
        {
          name: "Firebase Authentication",
          description: "Authentication service by Firebase for apps.",
          link: "https://firebase.google.com/docs/auth",
        },
      ];
    return (
        <>
        <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6 text-center">👨‍💻 Developer Resources</h1>
      <ul className="space-y-4">
        {resources.map((resource, idx) => (
          <li
            key={idx}
            className="p-4 bg-base-200 rounded-box border border-base-300 hover:shadow-lg transition"
          >
            <h2 className="text-xl font-semibold">{resource.name}</h2>
            <p className="text-sm mb-2">{resource.description}</p>
            <a
              href={resource.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary underline"
            >
              Visit {resource.name}
            </a>
          </li>
        ))}
      </ul>
    </div>
            
        </>
    );
};

export default Resources;