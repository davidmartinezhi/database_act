import prisma from "./prisma";

export async function createDireccion(calle: string, numero: string, colonia: string, ciudad: string, estado: string, codigoPostal: string) {
    try{
        const direccion = await prisma.direccion.create({data: {calle, numero, colonia, ciudad, estado, codigoPostal}});
        return direccion;
    }catch(error){
        return {error};
    }
}