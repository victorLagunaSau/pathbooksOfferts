import SeoHead from "../components/SeoHead";
import Layout from "../components/Layout/Layout";
import Home001 from "../components/Home001";
import ModuleDivision01 from "../components/ModuleDivision01";

export default function Home() {
    return (
        <>
            <SeoHead title='Maestros-Pathbooks'/>
            <Layout>
                <Home001/>
                <ModuleDivision01/>

            </Layout>
        </>

    );
}