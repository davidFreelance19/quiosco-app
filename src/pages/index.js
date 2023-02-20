import Head from "next/head";
import Image from "next/image";
import Layout from "layout/Layout";
import useQuiosco from "hooks/useQuiosco";
import Producto from "components/Producto";
export default function Home() {
  const { categoriaSeleccionada } = useQuiosco();
  return (
    <Layout pagina={`Menu ${categoriaSeleccionada?.nombre}`}>
      <h1 className="text-4xl font-black mt-10">
        {categoriaSeleccionada?.nombre}
      </h1>
      <p className="text-2xl my-5">
        Elige y personaliza tu pedido a continuación
      </p>
      <div className="grid gap-4 grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
        {categoriaSeleccionada?.productos?.map((producto) => (
          <Producto key={producto.id} producto={producto} />
        ))}
      </div>
    </Layout>
  );
}
