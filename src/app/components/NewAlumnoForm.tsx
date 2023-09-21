"use client"

import { useRef } from "react";
import { createAlumnoAction, createDireccionAction } from "../_actions";



/**
 * Component for creating a new student form.
 * @returns JSX.Element
 */
const NewAlumnoForm = () => {

    const formRef = useRef<HTMLFormElement>(null);

    async function action(data: FormData) {
        const nombre = data.get("nombre")?.toString();
        const apellidoP = data.get("apellidoP")?.toString();
        const apellidoM = data.get("apellidoM")?.toString();

        const calle = data.get("calle")?.toString();
        const numero = data.get("numero")?.toString();
        const colonia = data.get("colonia")?.toString();
        const ciudad = data.get("ciudad")?.toString();
        const estado = data.get("estado")?.toString();
        const codigoP = data.get("codigoP")?.toString();

        const universidad = parseInt(data.get("universidad")!.toString());

        const dir: any = await createDireccionAction(calle!, numero!, colonia!, ciudad!, estado!, codigoP!);
        await createAlumnoAction(nombre!, apellidoP!, apellidoM!, universidad!, dir.id);

        //reset form
        formRef?.current?.reset();
    }
    
    return (
        <form ref={formRef} action={action} className="bg-white p-8 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-4">Información Alumno</h2>
            <div className="space-y-4">
                <input type="text" name="nombre" placeholder="Nombre" className="w-full p-2 rounded border"/>
                <input type="text" name="apellidoP" placeholder="Apellido Paterno" className="w-full p-2 rounded border"/>
                <input type="text" name="apellidoM" placeholder="Apellido Materno" className="w-full p-2 rounded border"/>
            </div>

            <h2 className="text-2xl font-semibold my-4">Dirección</h2>
            <div className="space-y-4">
                <input type="text" name="calle" placeholder="Calle" className="w-full p-2 rounded border"/>
                <input type="text" name="numero" placeholder="Numero" className="w-full p-2 rounded border"/>
                <input type="text" name="colonia" placeholder="Colonia" className="w-full p-2 rounded border"/>
                <input type="text" name="ciudad" placeholder="Ciudad" className="w-full p-2 rounded border"/>
                <input type="text" name="estado" placeholder="Estado" className="w-full p-2 rounded border"/>
                <input type="text" name="codigoP" placeholder="Código Postal" className="w-full p-2 rounded border"/>
            </div>

            <h2 className="text-2xl font-semibold my-4">Universidad</h2>
            <select name="universidad" className="w-full p-2 rounded border">
                <option value="1">Tec de Monterrey</option>
                <option value="2">UANL</option>
            </select>

            <button type="submit" className="mt-6 bg-blue-500 text-white p-2 rounded hover:bg-blue-600">
                Agregar Alumno
            </button>
        </form>
    );
};

export default NewAlumnoForm;
