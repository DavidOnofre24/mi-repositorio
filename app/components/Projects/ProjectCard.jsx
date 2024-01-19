import { IconBrandApple, IconBrandGithub, IconBrandGooglePlay, IconWorld } from "@tabler/icons";
import Image from "next/image";
import SimpleSlider from "../Slider";
import Carousel from "../Slider";

const projectsInfo = [
  {
    id: 1,
    proyecto_title: "Manzana verde App",
    proyecto_description:
      "Aplicacion movil que sirve para ordenar comida de un restaurante, permite ver el menu, agregar productos al carrito y realizar el pago.",
    proyecto_url_github: null,
    images: ['/images/manzana/m1.webp', '/images/manzana/m2.webp', '/images/manzana/m3.webp'],
    apple_url: "https://apps.apple.com/co/app/manzana-verde-comida-sana/id1542798197",
    google_url: "https://play.google.com/store/apps/details?id=la.manzana_verde_app",
    proyecto_tecnologias: [
      "Flutter",
      "Dart",
      "CodeMagic",
      "Clean Architecture",
      "SOLID",
      "BLOC",
      "Clean code",
      "Google maps",
      "Pruebas unitarias",
      "Pruebas de integración",
      "Firebase",
    ],
  },
  {
    id: 2,
    proyecto_title: "Xisfo app",
    proyecto_description:
      "Todo un ecosistema financiero al alcance. Monetiza tus plataformas digitales, recibe tu dinero seguro y fácil, paga y transfiere gratis entre billeteras Xisfo App. Paga en comercios aliados y recibe Cashback por tus transacciones.",
    apple_url: "https://apps.apple.com/co/app/xisfo/id6446699058",
    google_url: "https://play.google.com/store/apps/details?id=com.xisfo.fintech&hl=es&gl=US",
    images: ['/images/xisfo/x1.webp', '/images/xisfo/x2.webp', '/images/xisfo/x3.webp'],
    proyecto_tecnologias: [
      "Flutter",
      "Firebase",
      "Metamap",
      "BLOC",
      "Clean code",
    ],
  },
  {
    id: 3,
    proyecto_title: "Manzanos (app de repartidores)",
    proyecto_description:
      "Aplicacion movil que sirve para que los repartidores puedan ver los pedidos que tienen asignados, ver la ruta para llegar al destino y poder marcar el pedido como entregado.",
    google_url: "https://play.google.com/store/apps/details?id=pe.manzanaverde.manzanos&hl=es&gl=US",
    proyecto_tecnologias: ["Flutter", "Firebase", "GRPC", "BLOC", "Clean code", "Socket.io", "Google maps"],
    images: ['/images/manzano/z1.webp', '/images/manzano/z2.webp', '/images/manzano/z3.webp']
  },
];

export const ProjectCard = () => {
  return (
    <section>



      {projectsInfo.map((project) => (
        <div
          key={project.id}
          className="flex flex-col items-center mt-10 justify-center border-2 rounded-lg shadow-lg md:flex-row-reverse md:border-none md:shadow-none md:relative md:h-96 border-[var(--hover-nav)] "
        >

          <div className="rounded-t w-full h-auto p-10 md:p-0 md:w-3/5 md:h-96 object-cover md:absolute md:right-0 md:rounded">
            <Carousel images={project.images} />
          </div>

          <div className="flex flex-col items-center mt-2 md:absolute md:left-0 md:w-full md:items-start last:border-red-500 ">
            <h1 className="text-3xl font-bold text-center md:w-2/5 md:text-4xl md:text-start">
              {project.proyecto_title}
            </h1>
            <p className="text-start p-6 md:bg-[var(--bg-buttons)] md:rounded-lg md:text-lg md:w-1/2 md:mt-6 font-bold md:text-white md:shadow-xl md:shadow-[var(--nav-shadow)]">
              {project.proyecto_description}
            </p>
            <ul className="flex flex-wrap gap-2 p-4 justify-start mt-3 md:justify-center md:w-2/5 md:mt-3">
              {project.proyecto_tecnologias.map((tecnologia) => (
                <li
                  key={tecnologia}
                  className="bg-gray-500 p-1 rounded font-bold text-white text-sm"
                >
                  {tecnologia}
                </li>
              ))}
            </ul>
            <div className="flex justify-center gap-5 md:justify-end md:w-2/5 md:mt-3 md:pr-5 mb-5 md:mb-0">
              {project.apple_url && <a
                href={project.apple_url}
                target="_blank"
                rel="noreferrer"
                aria-label="apple"
              >
                <IconBrandApple className="h-10 w-10 hover:scale-125 hover:text-[var(--bg-buttons)]" />
              </a>}
              {project.google_url && <a
                href={project.google_url}
                target="_blank"
                rel="noreferrer"
                aria-label="google"
              >
                <IconBrandGooglePlay className="h-10 w-10 hover:scale-125 hover:text-[var(--bg-buttons)]" />
              </a>}
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};
export default ProjectCard;
