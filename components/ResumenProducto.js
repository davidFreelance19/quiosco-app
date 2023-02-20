import { formatearDinero } from "helpers";
import Image from "next/image";
import useQuiosco from "hooks/useQuiosco";
export default function ResumenProducto({ producto }) {
  const { handleEditarCantides, handleEliminarProducto } = useQuiosco();
  return (
    <div className="shadow p-5 flex items-center gap-10 mb-3">
      <div className="md:w-1/6">
        <Image
          width={300}
          height={400}
          alt="imagen producto"
          src={`/assets/img/${producto.image}.jpg`}
        />
      </div>

      <div className="md:w-4/6">
        <p className="text-3xl font-bold">{producto.nombre}</p>
        <p className="text-xl font-bold mt-2">Cantidad: {producto.cantidad}</p>
        <p className="text-xl font-bold mt-2 text-amber-500">
          Precio:
          {formatearDinero(producto.precio)}
        </p>
        <p className="text-md  mt-2 text-gray-700">
          Subtotal:
          {formatearDinero(producto.precio * producto.cantidad)}
        </p>
      </div>
      <div>
        <button
          type="button"
          className="flex px-5 py-2 rounded-md font-bold text-white w-full bg-sky-700  uppercase shadow-lg justify-center"
          onClick={() => handleEditarCantides(producto.id)}
        >
          Editar
        </button>
        <button
          type="button"
          className="flex px-5 py-2 rounded-md font-bold text-white w-full bg-red-700 lg:md-auto uppercase shadow-lg mt-5"
          onClick={() => handleEliminarProducto(producto.id)}
        >
          Eliminar
        </button>
      </div>
    </div>
  );
}
