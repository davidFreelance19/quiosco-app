import { useEffect, useCallback } from "react";
import Layout from "layout/Layout";
import useQuiosco from "hooks/useQuiosco";
import { formatearDinero } from "helpers";
export default function total() {
  const { pedido, nombre, setNombre, colocarOrden, total } = useQuiosco();
  const comprobarPedido = useCallback(() => {
    return pedido.length === 0 || nombre === "";
  }, [pedido, nombre]);
  useEffect(() => {
    comprobarPedido();
  }, [pedido, comprobarPedido]);

  return (
    <Layout pagina="Total y Confirmar Pedido">
      <h1 className="text-4xl font-black">Total y Confirmar Pedido</h1>
      <p className="text-2xl my-5">Confirma tu pedido a continuación</p>
      <form onSubmit={colocarOrden}>
        <div>
          <label
            className="block uppercas text-slate-800 font-bold text-xl"
            htmlFor="nombre"
          >
            Nombre
          </label>
          <input
            id="nombre"
            type="text"
            className="w-full mt-3 bg-gray-200 lg:w-1/3 p-2 rounded-md"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
          />
        </div>
        <div className="mt-10">
          <p className="text-2xl">
            Total a pagar:{" "}
            <span className="fon-bold">{formatearDinero(total)}</span>
          </p>
        </div>

        <div className="mt-6">
          <input
            value="Confirmar Pedido"
            className={`${
              comprobarPedido()
                ? "bg-indigo-100"
                : "bg-indigo-600 hover:cursor-pointer"
            } w-full px-5 py-2 rounded-md lg:w-auto uppercase font-bold text-white  text-center `}
            type="submit"
            disabled={comprobarPedido()}
          />
        </div>
      </form>
    </Layout>
  );
}
