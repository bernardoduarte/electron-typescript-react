import { GlobalStyle } from './styles/GlobalStyle'

import { Admin, Resource, ListGuesser } from "react-admin";
import jsonServerProvider from "ra-data-json-server";

const dataProvider = jsonServerProvider('https://jsonplaceholder.typicode.com');

export const App = () => (
  <>
    <GlobalStyle />
    <Admin dataProvider={dataProvider}>
      <Resource name="users" list={ListGuesser} />
    </Admin>
  </>
);