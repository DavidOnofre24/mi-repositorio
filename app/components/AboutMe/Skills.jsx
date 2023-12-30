import {
  DevicePhoneMobileIcon,
  CodeBracketIcon,
  CircleStackIcon,
  WrenchIcon,
} from "@heroicons/react/24/outline";
const skills = [
  {
    id: 1,
    id_dropdown: "mobile",
    icon: (
      <DevicePhoneMobileIcon
        className="w-36 h-36 text-[var(--bg-buttons)]"
        id="mobile"
        style={{
          WebkitBoxReflect:
            "below 3px linear-gradient(transparent, transparent, transparent, #04060f25)",
        }}
      />
    ),
    title: "Mobile",
    skills: [
      {
        id: 1,
        skill: "Flutter",
      },
      {
        id: 2,
        skill: "Dart",
      },
      {
        id: 3,
        skill: "Firebase",
      },
      {
        id: 4,
        skill: "CodeMagic",
      },
      {
        id: 5,
        skill: "SonarQube",
      },

    ],
  },
  {
    id: 2,
    id_dropdown: "frontend",
    title: "Mobile",
    icon: (
      <CodeBracketIcon
        className="w-36 h-36 text-[var(--bg-buttons)]"
        id="frontend"
        style={{
          WebkitBoxReflect:
            "below 3px linear-gradient(transparent, transparent, transparent, #04060f25)",
        }}
      />
    ),
    skills: [
      {
        id: 1,
        skill: "ReactJS",
      },
      {
        id: 2,
        skill: "CSS3",
      },
      {
        id: 3,
        skill: "JavaScript",
      },
      {
        id: 4,
        skill: "HTML5",
      },
      {
        id: 5,
        skill: "TailwindCSS",
      },
    ],
  },
  {
    id: 3,
    id_dropdown: "backend",
    title: "Backend",
    icon: (
      <CircleStackIcon
        className="w-36 h-36 text-[var(--bg-buttons)]"
        id="backend"
        style={{
          WebkitBoxReflect:
            "below 3px linear-gradient(transparent, transparent, transparent, #04060f25)",
        }}
      />
    ),
    skills: [
      {
        id: 1,
        skill: "PHP (Laravel)",
      },
      {
        id: 2,
        skill: "MySQL",
      },
      {
        id: 3,
        skill: "Python",
      },
      {
        id: 4,
        skill: "Java",
      },
    ],
  },

  {
    id: 4,
    id_dropdown: "tools",
    title: "Herramientas",
    icon: (
      <WrenchIcon
        className="w-36 h-36 text-[var(--bg-buttons)]"
        id="tools"
        style={{
          WebkitBoxReflect:
            "below 3px linear-gradient(transparent, transparent, transparent, #04060f25)",
        }}
      />
    ),
    skills: [
      {
        id: 1,
        skill: "GitHub",
      },
      {
        id: 2,
        skill: "Postman",
      },
      {
        id: 3,
        skill: "Codemagic",
      },
      {
        id: 4,
        skill: "Scrum",
      },
      {
        id: 5,
        skill: "Jira",
      },
    ],
  },
];

export const Skills = () => {
  return (
    <section className="mb-10">
      <div className="w-full flex flex-col justify-center items-center mt-10">
        <h1 className="text-4xl font-bold">Habilidades</h1>
        <span className="text-sm text-[var(--text-secondary)]">
          Mis conocimientos
        </span>
      </div>
      <div className="mt-5 grid grid-cols-1 md:grid-cols-2 ">
        {skills.map((skill) => (
          <div
            className="w-full flex justify-center flex-col items-center mt-5"
            key={skill.id}
          >
            <span className="h-48">{skill.icon}</span>
            <p className="text-lg flex gap-2 w-fit flex-wrap justify-center">
              {skill.skills.map((skill) => {
                return (
                  <span
                    className="bg-gray-500 p-2 rounded font-bold text-white"
                    key={skill.id}
                  >
                    {skill.skill}
                  </span>
                );
              })}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};
