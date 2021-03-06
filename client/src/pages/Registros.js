import { useRouteMatch, Switch, Route, useHistory } from 'react-router';
import FormsPrincipales from '../components/forms/FormsPrincipales';
import FormAsig from "../components/forms/FormAsig";
import Inventario from "../components/tablas/Inventario";
import ArticulosByUser from '../components/tablas/ArticulosByUser';
import NavbarRegistros from '../components/navbars/NavbarRegistros';
import BotonVolver from '../components/BotonVolver';


const Registros = () => {
  const body = document.querySelector('body');
  body.style.backgroundColor = '#fcdcc1';
  const { path } = useRouteMatch();
  const router = useHistory();


  const isLogin = JSON.parse(window.localStorage.getItem('user-access')) || false;

  !isLogin?.acceso && router.push('/');

  return (
    <>
      <BotonVolver />
      <NavbarRegistros />

      <Switch>
        <Route path={`${path}/usuarioArticulos`} exact component={ArticulosByUser} />
        <Route path={`${path}/inventario`} exact component={Inventario} />
        <Route path={`${path}/formAsignacion`} exact component={FormAsig} />
        <Route path={`${path}`} exact component={FormsPrincipales} />
      </Switch>
    </>
  )
}

export default Registros;
