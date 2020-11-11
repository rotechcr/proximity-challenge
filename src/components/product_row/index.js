import { Fragment, useState } from 'react';
import PropTypes from 'prop-types';
import {
  Box,
  Collapse,
  IconButton,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from '@material-ui/core';
import { KeyboardArrowDown, KeyboardArrowUp } from '@material-ui/icons';
import { withStyles } from '@material-ui/core/styles';
import { format } from 'date-fns';

const SecTableCell = withStyles({
  root: {
    borderBottom: 'none',
    textAlign: 'center',
    width: '25%',
  },
})(TableCell);

function Row({ data }) {
  const [expanded, setExpanded] = useState(false);

  const formatDate = (date) => format(new Date(date), 'yyyy/MM/dd hh:mm a');

  const getStatusDic = (status) => {
    const dic = {
      transit: 'En tránsito',
      pending: 'Pendiente',
      completed: 'Realizado',
      returned: 'Devuelto',
    };
    return dic[status] || 'No identificado';
  };

  return (
    <Fragment>
      <TableRow aria-label="primary info">
        <TableCell>
          <IconButton
            aria-label="expand row btn"
            size="small"
            onClick={() => setExpanded(!expanded)}
          >
            {expanded ? <KeyboardArrowUp /> : <KeyboardArrowDown />}
          </IconButton>
        </TableCell>
        <TableCell>{formatDate(data.dateSent)}</TableCell>
        <TableCell>{data.name}</TableCell>
        <TableCell>{data.tracking}</TableCell>
        <TableCell>{getStatusDic(data.status)}</TableCell>
      </TableRow>
      <TableRow aria-label="secondary info">
        <TableCell
          style={{
            backgroundColor: '#F5F5F5',
            paddingBottom: 0,
            paddingTop: 0,
          }}
          colSpan={5}
        >
          <Collapse in={expanded} timeout="auto" unmountOnExit>
            <Box margin={1}>
              <Table size="small">
                <TableHead>
                  <TableRow>
                    <SecTableCell>Fecha de llegada</SecTableCell>
                    <SecTableCell>Imagen</SecTableCell>
                    <SecTableCell>Nombre del Receptor</SecTableCell>
                    <SecTableCell>Dirección del Receptor</SecTableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  <TableRow>
                    <SecTableCell>
                      {formatDate(data.dateDelivered)}
                    </SecTableCell>
                    <SecTableCell>
                      <img
                        style={{ width: 100, borderRadius: '5%' }}
                        src={data.image}
                        alt={data.name}
                      />
                    </SecTableCell>
                    <SecTableCell>{data.recipientName}</SecTableCell>
                    <SecTableCell>{data.recipientAddress}</SecTableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </Fragment>
  );
}

Row.propTypes = {
  data: PropTypes.shape({
    dateDelivered: PropTypes.string.isRequired,
    dateSent: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    recipientAddress: PropTypes.string.isRequired,
    recipientName: PropTypes.string.isRequired,
    status: PropTypes.string.isRequired,
    tracking: PropTypes.string.isRequired,
  }).isRequired,
};

export default Row;
