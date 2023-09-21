"use client"

import { useRef } from "react";
import { createAlumnoAction, createDireccionAction } from "../_actions";



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
        <form ref={formRef} action={action}>
            <h2 className="mb-2 mt-5 font-medium">Información Alumno</h2>
            <input type="text" name="nombre" placeholder="Nombre" id="" className="rounded border border-slate-400 px-2 py-0.5"/>
            <input type="text" name="apellidoP"  placeholder="Apellido Paterno" id="" className="rounded border border-slate-400 px-2 py-0.5"/>
            <input type="text" name="apellidoM" placeholder="Apellido Materno" id="" className="rounded border border-slate-400 px-2 py-0.5"/>

            <h2 className="mb-2 mt-5 font-medium">Dirección</h2>
            <input type="text" name="calle"  placeholder="Calle" id="" className="rounded border border-slate-400 px-2 py-0.5"/>
            <input type="text" name="numero" placeholder="Numero" id="" className="rounded border border-slate-400 px-2 py-0.5"/>
            <input type="text" name="colonia"  placeholder="Colonia" id="" className="rounded border border-slate-400 px-2 py-0.5"/>
            <input type="text" name="ciudad" placeholder="Ciudad" id="" className="rounded border border-slate-400 px-2 py-0.5"/>
            <input type="text" name="estado" placeholder="Estado" id="" className="rounded border border-slate-400 px-2 py-0.5"/>
            <input type="text" name="codigoP" placeholder="Código Postal" id="" className="rounded border border-slate-400 px-2 py-0.5"/>

            <h2 className="mb-2 mt-5 font-medium">Universidad</h2>
            <select name="universidad" id="universidad" className="rounded border border-slate-400 px-2 py-0.5">
                <option value="1">Escuela Tec de Monterrey</option>
                <option value="2">UANL</option>
            </select>
            <br/>
            <button
                type="submit"
                className="mt-5 bg-slate-700 px-2 py-1 text-sm text-white"
            >
                Agregar Alumno
            </button>
        </form>
    );
};

export default NewAlumnoForm;
