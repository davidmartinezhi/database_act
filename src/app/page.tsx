import Image from "next/image";
import { getAlumnos } from "../../lib/alumno";
import Card from "@/components/Card";
import NewAlumnoForm from "@/app/components/NewAlumnoForm";

/**
 * Renders the home page with a list of students and a form to add new students.
 * @returns The JSX element for the home page.
 */
export default async function Home() {
  const { alumnos } = await getAlumnos();
  return (
    <section className="bg-gray-100 py-12">
      <div className="container mx-auto px-4">
        <NewAlumnoForm />

        <h1 className="text-2xl font-semibold mb-6 mt-10 border-b-2 border-gray-300 pb-2">
          Alumnos
        </h1>

        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {alumnos?.map((alumno) => (
            <Card alumno={alumno} />
          ))}
        </ul>
      </div>
    </section>
  );
}
