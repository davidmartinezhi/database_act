import { Alumno } from "@prisma/client";

/**
 * Props for the AlumnoItem component
 */
type AlumnoItemProps = {
    alumno: Alumno;
}

/**
 * Card component that displays information about a student
 * @param alumno - The student object to display information for
 * @returns A JSX element that displays the student information
 */
const Card = ({alumno} : any) => {

    const nombreCompleto = alumno.nombre + " " + alumno.apellidoPaterno + " " + alumno.apellidoMaterno;
    const direccionCompleta = alumno.direccion.calle + " " + alumno.direccion.numero + " " + alumno.direccion.colonia + " " + alumno.direccion.ciudad + " " + alumno.direccion.estado + " " + alumno.direccion.codigoPostal;

    return (
        <li key={alumno.id} className="bg-white rounded-lg shadow-md p-4 mb-4">
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
        </li>
    );
}

export default Card;
