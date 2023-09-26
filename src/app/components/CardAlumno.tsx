"use client";
import { Alumno } from "@prisma/client";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Divider,
} from "@nextui-org/react";

/**
 * Props for the AlumnoItem component
 */
type AlumnoItemProps = {
  alumno: Alumno;
};

/**
 * Card component that displays information about a student
 * @param alumno - The student object to display information for
 * @returns A JSX element that displays the student information
 */
const CardAlumno = ({ alumno }: any) => {
  const nombreCompleto =
    alumno.nombre + " " + alumno.apellidoPaterno + " " + alumno.apellidoMaterno;
  const direccionCompleta =
    alumno.direccion.calle +
    " " +
    alumno.direccion.numero +
    " " +
    alumno.direccion.colonia +
    " " +
    alumno.direccion.ciudad +
    " " +
    alumno.direccion.estado +
    " " +
    alumno.direccion.codigoPostal;

  return (
    <li key={alumno.id}>
      {/*
               <div className="flex flex-col space-y-2">
        <div className="flex items-center space-x-2">
          <h2 className="font-semibold text-lg">Nombre:</h2>
          <p className="text-gray-700">{nombreCompleto}</p>
        </div>
        <div className="flex items-center space-x-2">
          <h2 className="font-semibold text-lg">Escuela:</h2>
          <p className="text-gray-700">{alumno["escuela"].nombre}</p>
        </div>
        <div className="flex items-center space-x-2">
          <h2 className="font-semibold text-lg">Dirección:</h2>
          <p className="text-gray-700">{direccionCompleta}</p>
        </div>
      </div>
         */}

      <Card className="max-w-[400px]">
        <CardHeader className="mx-2">
          
            <p className="text-md">{nombreCompleto}</p>
         
        </CardHeader>
        <Divider />
        <CardBody>
          <p className="text-small text-default-500">Dirección</p>
          <p className="text-md">{direccionCompleta}</p>
        </CardBody>
        <Divider />
        <CardFooter className="flex justify-center items-center">
          <p className="text-md">{alumno["escuela"].nombre}</p>
        </CardFooter>
      </Card>
    </li>
  );
};

export default CardAlumno;
