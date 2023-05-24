import { BrowserRouter, Route, Routes } from "react-router-dom";
import Inicio from "./paginas/Inicio";
import SobreMim from "./paginas/Sobre Mim";
import Menu from "componentes/Menu";
import Rodape from "componentes/Rodape";
import PaginaPadrao from "componentes/PaginaPadrao";

function AppRoutes() {
    return (
        <BrowserRouter>
            <Menu />
            <Routes>
                <Route path="/" element={<PaginaPadrao />}>
                    <Route path="/" element={<Inicio />} />
                    <Route path="/sobremim" element={<SobreMim />} />
                </Route>
                {/* Demonstração do uso de <Outlet / no index.jsx da <PaginaPadra />>
                
                    Na rota "/", a estrutura a ser renderizada é:
                    <PaginaPadrao>
                        <Inicio />
                    <PaginaPadrao />

                    Na rota "/sobremim", a estrutura a ser renderizada é:
                    <PaginaPadrao>
                        <Sobremim />
                    <PaginaPadrao />
                */}
                <Route path="*" element={<div>Página não encontrada</div>} />
            </Routes>
            <Rodape />
        </BrowserRouter>
    );
}

export default AppRoutes;
