import Image from "next/image";
import { getAlumnos } from "../../lib/alumno";
import Card from "@/components/Card";
import NewAlumnoForm from "@/app/components/NewAlumnoForm";

export default async function Home() {
  const { alumnos } = await getAlumnos();
  return (
    <section className="py-20">
      <div className="container">
        <NewAlumnoForm />

        <h1 className="mb-5 mt-10 w-fit border-b pb-2 pt-2 text-xl">Alumnos</h1>

        <ul>
          {alumnos?.map((alumno) => (
            <Card alumno={alumno} />
          ))}
        </ul>
      </div>
    </section>
  );
}
