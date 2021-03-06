import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const MessageHeader = (props)=>{

    return (
        <div>
            <TableRow >
                <TableCell style={{fontSize:"1em"}} align="right">Sender</TableCell>
                <TableCell style={{fontSize:"1em"}} align="right">Description</TableCell>
          </TableRow>
        </div>
    )
};


export default MessageHeader;