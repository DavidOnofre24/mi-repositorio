import { IconFolder, IconBrandGithub, IconWorld } from "@tabler/icons";
const othersProjects = [
  {
    id: 6,
    proyecto_title: "Mini Marketplace",
    proyecto_description:
      "Aplicación móvil que tiene un login con Firebase, permite crear, editar y ver productos",
    proyecto_url_github:
      "https://github.com/DavidOnofre24/Mini-marketplace",
    proyecto_tecnologias: [
      {
        id: 1,
        tecnologia: "Flutter",
      },
      {
        id: 2,
        tecnologia: "Dart",
      },
      {
        id: 3,
        tecnologia: "Firebase",
      },
      {
        id: 4,
        tecnologia: "Bloc",
      },
      {
        id: 5,
        tecnologia: "Provider",
      }
    ],
  },
  {
    id: 1,
    proyecto_title: "App de películas",
    proyecto_description:
      "Aplicación móvil que permite buscar películas, ver sus detalles y sus actores, además de poder agregarlas a favoritos.",
    proyecto_url_github: "https://github.com/DavidOnofre24/peliculas",
    proyecto_tecnologias: [
      {
        id: 1,
        tecnologia: "Flutter",
      },
      {
        id: 2,
        tecnologia: "Dart",
      },
      {
        id: 3,
        tecnologia: "Provider",
      },
    ],
  },
  {
    id: 4,
    proyecto_title: "BandasApp",
    proyecto_description:
      "Aplicación móvil que permite votar por tu banda favorita en tiempo real por medio de sockets.",
    proyecto_url_github:
      "https://github.com/DavidOnofre24/BandasApp",
    proyecto_tecnologias: [
      {
        id: 1,
        tecnologia: "Flutter",
      },
      {
        id: 2,
        tecnologia: "Dart",
      },
      {
        id: 3,
        tecnologia: "Socket.io",
      },
      {
        id: 4,
        tecnologia: "Provider",
      },
    ],
  },
  {
    id: 3,
    proyecto_title: "Aplicación de noticias",
    proyecto_description:
      "Aplicación móvil donde se pueden ver noticias de diferentes categorías, paginación y consumo de una API.",
    proyecto_url_github:
      "https://github.com/DavidOnofre24/NoticiasApp",
    proyecto_tecnologias: [
      {
        id: 1,
        tecnologia: "Flutter",
      },
      {
        id: 2,
        tecnologia: "Dart",
      },
      {
        id: 3,
        tecnologia: "Consumo de API",
      },
      {
        id: 4,
        tecnologia: "Provider",
      },
    ],
  },
  {
    id: 5,
    proyecto_title: "Ricky & Morty App",
    proyecto_description:
      "App móvil que permite buscar personajes de la serie Rick y Morty, filtrar por características, ver sus detalles y agregarlos a favoritos.",
    proyecto_url_github:
      "https://github.com/DavidOnofre24/rick_and_morty",
    proyecto_tecnologias: [
      {
        id: 1,
        tecnologia: "Flutter",
      },
      {
        id: 2,
        tecnologia: "Dart",
      },
      {
        id: 3,
        tecnologia: "Bloc",
      },
      {
        id: 4,
        tecnologia: "Consumo de API",
      }
    ],
  },
  {
    id: 2,
    proyecto_title: "App libros",
    proyecto_description:
      "Aplicación móvil que permite buscar libros, ver sus detalles.",
    proyecto_url_github: "https://github.com/DavidOnofre24/libros",
    proyecto_tecnologias: [
      {
        id: 1,
        tecnologia: "Flutter",
      },
      {
        id: 2,
        tecnologia: "Dart",
      }
    ],
  },
]


export const OthersProjects = () => {
  return (
    <section>
      <div className="w-full flex flex-col justify-center items-center mt-40">
        <h1 className="text-4xl font-bold">Otros proyectos interesantes</h1>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3 bg">
        {othersProjects.map((project) => (
          <div
            key={project.id}
            className="border mt-5 rounded-lg border-[var(--hover-nav)] shadow-2xl shadow-[var(--nav-shadow)] p-5"
          >
            <div className="flex justify-between items-center">
              <IconFolder className="w-14 h-14 text-[var(--bg-buttons)]" />
              <div className="flex gap-3">
                <a
                  href={project.proyecto_url_github}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="github"
                >
                  <IconBrandGithub className="h-10 w-10 text-[var(--text-secondary)] hover:scale-125 hover:text-[var(--bg-buttons)] cursor-pointer" />
                </a>
                {project.proyecto_url_web && (
                  <a
                    href={project.proyecto_url_web}
                    target="_blank"
                    rel="noreferrer"
                    aria-label="web"
                  >
                    <IconWorld className="h-10 w-10 text-[var(--text-secondary)] hover:scale-125 hover:text-[var(--bg-buttons)] cursor-pointer" />
                  </a>
                )}
              </div>
            </div>
            <h1 className="text-3xl font-bold mt-4 text-center">
              {project.proyecto_title}
            </h1>
            <p className="text-lg mt-3">{project.proyecto_description}</p>
            <div className="flex flex-row justify-center items-center mt-4 gap-4 font-bold flex-wrap">
              {project.proyecto_tecnologias.map((tecnologia) => (
                <div
                  key={tecnologia.id}
                  className="bg-[var(--bg-buttons)] text-white rounded-lg px-3 py-1"
                >
                  {tecnologia.tecnologia}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
