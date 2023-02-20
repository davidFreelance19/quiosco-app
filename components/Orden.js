import { formatearDinero } from "helpers";
import axios from "axios";
import { toast } from "react-toastify";
import Image from "next/image";
export default function Orden({ orden }) {
  const { id, nombre, total, pedido } = orden;
  const completarOrden = async () => {
    try {
      await axios.post(`/api/ordenes/${id}`);
      toast.success("Orden Lista!");
    } catch (error) {
      toast.error('Hubo un error');
    }
  };
  return (
    <div className="border p-10 spacey-5">
      <h3 className="text-2xl font-black">Orden: {id}</h3>
      <p className="text-lg font-bold my-5">Cliente: {nombre}</p>
      <div>
        {pedido.map((platillo) => (
          <div
            key={platillo.id}
            className="py-3 flex border-b last-of-type:border-0 items-center"
          >
            <div className="w-32">
              <Image
                width={400}
                height={500}
                src={`/assets/img/${platillo.image}.jpg`}
                alt={`Imagen platillo ${platillo.nombre}`}
              />
            </div>
            <div className="p-5 space-y-2">
              <h4 className="text-xl text-amber-500 font-bold">
                {platillo.nombre}
              </h4>
              <p className="text-lg font-bold">Cantidad: {platillo.cantidad}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="md:flex md:items-center md:justify-between my-10">
        <p className="font-black mt-5 text-amber-500 text-3xl">
          Total a pagar: {formatearDinero(total)}
        </p>
        <button
          className="bg-indigo-600 mt-5 md:mt-0 hover:bg-indigo-800 rounded-lg uppercase text-white font-bold py-3 px-10"
          type="button"
          onClick={completarOrden}
        >
          Completar Orden
        </button>
      </div>
    </div>
  );
}
