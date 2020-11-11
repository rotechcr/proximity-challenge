import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@material-ui/core';
import { setList, getList } from '../../actions/products';
import { dbProducts } from '../../services/firebase';
import Row from '../product_row';

function Products() {
  const dispatch = useDispatch();

  const list = useSelector(getList);

  useEffect(() => {
    const unsubscribe = dbProducts.onSnapshot(({ docs }) => {
      if (docs) {
        const data = docs
          .map((obj) => {
            return { ...obj.data(), id: obj.id };
          })
          .sort((a, b) =>
            a.dateSent > b.dateSent ? -1 : a.dateSent < b.dateSent ? 1 : 0
          );
        dispatch(setList(data));
      }
    });

    return () => {
      unsubscribe();
    };
  }, [dispatch]);

  return (
    <div>
      <TableContainer>
        <Table aria-label="products table">
          <TableHead>
            <TableRow>
              <TableCell />
              <TableCell>Fecha de salida</TableCell>
              <TableCell>Nombre</TableCell>
              <TableCell>Placa</TableCell>
              <TableCell>Estado</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {list.map((row) => (
              <Row key={row.id} data={row} />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}

export default Products;
