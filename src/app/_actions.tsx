"use server"

import { createAlumno } from "@/lib/alumno";
import { createDireccion } from "@/lib/direccion";
import { revalidatePath } from "next/cache";

export async function createAlumnoAction(nombre: string, apellidoPaterno: string, apellidoMaterno: string, escuelaId: number, direccionId: number) {
    await createAlumno(nombre, apellidoPaterno, apellidoMaterno, escuelaId, direccionId);
    revalidatePath("/");
}

export async function createDireccionAction(calle: string, numero: string, colonia: string, ciudad: string, estado: string, codigoPostal: string) {
    const direccion: any = await createDireccion(calle, numero, colonia, ciudad, estado, codigoPostal);
    revalidatePath("/");

    return direccion;
}

