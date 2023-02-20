import Image from "next/image";
import useQuiosco from "hooks/useQuiosco";
import { formatearDinero } from "/helpers/index";
export default function Producto({ producto }) {
  const { handleSetProducto, handleChangeModal } = useQuiosco();
  const { nombre, image, precio } = producto;
  return (
    <div className="border p-3">
      <Image
        src={`/assets/img/${image}.jpg`}
        alt="image-producto"
        width={300}
        height={300}
      />
      <div className="p-5">
        <h3 className="font-bold text-2xl">{nombre}</h3>
        <p className="mt-5 font-black text-4xl text-amber-500">
          {formatearDinero(precio)}
        </p>
        <button
          type="button"
          className="bg-indigo-600 text-white font-bold w-full mt-5 p-3 uppercase hover:bg-indigo-800"
          onClick={() => {
            handleChangeModal();
            handleSetProducto(producto);
          }}
        >
          Agregar
        </button>
      </div>
    </div>
  );
}
