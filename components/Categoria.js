import Image from "next/image";
import useQuiosco from "hooks/useQuiosco";
export default function Categoria({ categoria }) {
  const { handleClickCategoria, categoriaSeleccionada } = useQuiosco();
  const { nombre, icono, id } = categoria;
  return (
    <div
      className={`${
        categoriaSeleccionada?.id === id ? "bg-amber-400" : ""
      } flex items-center gap-4 w-full border p-5 hover:bg-amber-400 hover:cursor-pointer`}
      onClick={() => handleClickCategoria(id)}
    >
      <Image
        alt="img-categoria"
        width={70}
        height={70}
        src={`/assets/img/icono_${icono}.svg`}
      />
      <button className="text-2xl font-bold" type="button">
        {nombre}
      </button>
    </div>
  );
}
