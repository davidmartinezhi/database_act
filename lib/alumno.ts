import prisma from "./prisma";



/**
 * Retrieves all the students from the database.
 * @returns {Promise<{alumnos: Alumno[]}|{error: string}>} An object containing an array of students or an error.
 */
export async function getAlumnos() {
    try {
        const alumnos = await prisma.alumno.findMany({
            include: {
                escuela: true,
                direccion: true
            },
        });
        return { alumnos };
    } catch (error: unknown) {
        return { error: error as string };
    }
}


export async function createAlumno(nombre: string, apellidoPaterno: string, apellidoMaterno: string, escuelaId: number, direccionId: number) {
    try{
        const alumno = await prisma.alumno.create({data: {nombre, apellidoPaterno, apellidoMaterno, escuelaId, direccionId}});
        return alumno;
    }catch(error){
        return {error};
    }
}
