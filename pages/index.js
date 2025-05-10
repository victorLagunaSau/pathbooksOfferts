import SeoHead from "../components/SeoHead";
import Layout from "../components/Layout/Layout";

export default function Home() {
    return (
        <>
            <SeoHead title='Maestros-Pathbooks'/>
            <Layout>
                <main className="min-h-screen flex flex-col items-center justify-center px-4 py-12 bg-base-100">
                    <section className="text-center max-w-3xl">
                        <h1 className="text-4xl md:text-6xl font-bold text-primary">
                            Bienvenido a <span className="text-blue-700">Pathbooks Offerts</span>
                        </h1>
                        <p className="mt-6 text-lg md:text-xl text-gray-500">
                            Historias interactivas y promociones exclusivas para todos tus dispositivos.
                        </p>
                        <div className="mt-8 space-x-4">
                            <button className="btn btn-primary">Explora nuestras promos</button>
                            <button className="btn btn-outline btn-secondary">Saber más</button>
                        </div>
                    </section>
                </main>
            </Layout>
        </>

    );
}