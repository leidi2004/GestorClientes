import { Nav } from '../../components/Layout/Nav/Nav';
import { Customer } from '../../components/Customer/Customer/Customer';
import { useParams } from 'react-router-dom';
import { useGetClienteQuery } from "../../features/apiSlice"

export const CustomerDetails = () => {
  const { identificacion } = useParams();
  const { data: cliente } = useGetClienteQuery(identificacion);
	return (
		<main>
			<Nav />
			{cliente ? <Customer cliente={cliente} /> : <p>Loading...</p>}
		</main>
	);
};
