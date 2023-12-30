import { IconCalendar } from "@tabler/icons";

const educationHistory = [
  {
    id: 1,
    title: "Universidad Antonio Jose Camacho",
    text: "Ingeniería en Sistemas",
    date: "Febrero 2018 - Diciembre 2022",
  },
];
const workHistory = [
  {
    id: 1,
    title: "Anurotec S.A.S",
    text: "Desarrollador móvil flutter",
    date: "Febrero 2020 - Septiembre 2022",
  },
  {
    id: 2,
    title: "Manzana Verde S.A.S",
    text: "Desarrollador móvil flutter",
    date: "Septiembre 2022  - Julio 2023",
  },
  {
    id: 3,
    title: "Grupo Nethexa",
    text: "Desarrollador fullstack",
    date: "Actualidad",
  },
];
export const TimeLine = ({ showEducation }) => {
  return (
    <section className="flex flex-col w-full">
      <ol className="items-center sm:flex flex-col md:flex-row mt-10 ">
        {(showEducation ? workHistory : educationHistory).map((item) => (
          <li
            className="relative mb-6 sm:mb-0 w-full md:h-40 flex flex-col even:items-end even:text-end md:even:items-start md:even:text-start"
            key={item.id}
          >
            <div className="flex items-center md:w-full">
              <div className="z-10 flex items-center justify-center w-8 h-9 bg-gray-200 rounded-full ring-0 sm:ring-8 ring-[var(--background)] shrink-0">
                <IconCalendar className="text-black" />
              </div>
              <div className="hidden w-full h-0.5 bg-[var(--bg-buttons)] md:flex" />
            </div>
            <div className="mt-3 sm:pr-8">
              <h1 className="text-base font-bold">{item.title}</h1>
              <time className="block mb-2 text-xs font-normal leading-none text-[var(--text-secondary)]">
                {item.date}
              </time>
              <p className="text-sm font-bold">{item.text}</p>
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
};
