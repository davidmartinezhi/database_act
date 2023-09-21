import { Alumno } from "@prisma/client";

type AlumnoItemProps = {
    alumno: Alumno;
}

const Card = ({alumno}: AlumnoItemProps) => {

    let nombreCompleto = alumno.nombre + " " + alumno.apellidoPaterno + " " + alumno.apellidoMaterno;

    return (
        <li key={alumno.id}>
            {nombreCompleto}
        </li>
    );
}

export default Card;