import MUIDataTable from "mui-datatables";
import Modal from '@material-ui/core/Modal';
import React, { useState } from 'react';
import Card from './Card';
import { useDispatch } from "react-redux";
import { getProductAction, getProductsAction } from "../../redux/actions/product.actions";

const Table = (props) => {
    const dispatch = useDispatch();
    const [open, setOpen] = useState(false);
    const { data = { rows: [] } } = props;
    const [currentQuery, setCurrentQuery] = useState({})
    // const columns = ["Name", "Description", "Price", "Serial", "Type"];
    const columns = [
        {
            name: "Name",
            options: {
              filter: false,
              sortThirdClickReset: true,
              customHeadRender: (columnMeta, updateDirection) => (
                <th key={0} onClick={() => updateDirection(0)} style={{ cursor: 'pointer' }}>
                  {columnMeta.name}
                </th>
              )
            }
        },
        {
            name: "Description",
            options: {
              filter: false,
              sortThirdClickReset: true,
              customHeadRender: (columnMeta, updateDirection) => (
                <th key={1} onClick={() => updateDirection(1)} style={{ cursor: 'pointer' }}>
                  {columnMeta.name}
                </th>
              )
            }
        },
        {
            name: "Price",
            options: {
              filter: false,
              sortThirdClickReset: true,
              customHeadRender: (columnMeta, updateDirection) => (
                <th key={2} onClick={() => updateDirection(2)} style={{ cursor: 'pointer' }}>
                  {columnMeta.name}
                </th>
              )
            }
        },
        {
            name: "Serial",
            options: {
              filter: false,
              sortThirdClickReset: true,
              customHeadRender: (columnMeta, updateDirection) => (
                <th key={3} onClick={() => updateDirection(3)} style={{ cursor: 'pointer' }}>
                  {columnMeta.name}
                </th>
              )
            }
        },
        {
            name: "Type",
            options: {
              filter: false,
              sortThirdClickReset: true,
              customHeadRender: (columnMeta, updateDirection) => (
                <th key={4} onClick={() => updateDirection(4)} style={{ cursor: 'pointer' }}>
                  {columnMeta.name}
                </th>
              )
            }
        },
    ]
    const [viewing, setViewing] = useState({});
    const viewProduct = (product) => {
        setViewing(product);
        dispatch(getProductAction(product._id));
        setOpen(!open);
    }
    const handleClose = () => {
        setOpen(false);
    }

    const options = {
        filter: false,
        selectableRowsHeader: false,
        selectableRows: 'single',
        selectableRowsHideCheckboxes: true,
        viewColumns: false,
        pagination: true,
        serverSide: true,
        print: false,
        sort: true,
        download: false,
        rowsPerPage: data.pageSize,
        count: data.total,
        rowsPerPageOptions: [10],
        textLabels: {
            toolbar: {
                search: "Search"
            }
        },
        onRowClick: (rowData, rowMeta) => {
            viewProduct(data.rows[rowMeta.rowIndex]);
        },
        onColumnSortChange: (changedColumn, direction) => {     
            setCurrentQuery({ ...currentQuery, sort: changedColumn.toLowerCase() });       
            dispatch(getProductsAction({ ...currentQuery, sort: changedColumn.toLowerCase() }));
        },
        onSearchChange: (searchText) => {
            if(searchText) {
                setCurrentQuery({ ...currentQuery, match: searchText });
                dispatch(getProductsAction({ ...currentQuery, match: searchText}));
            } else {
                delete currentQuery.match;
                setCurrentQuery({ ...currentQuery });
                dispatch(getProductsAction( ...currentQuery));
            }
        },
        onChangePage: (currentPage) => {
            setCurrentQuery({ ...currentQuery, page: (currentPage + 1) });
            dispatch(getProductsAction({ ...currentQuery, page: currentPage + 1 }))
        }
    };
    const getProducts = () => {
      if(data.rows) {
        return data.rows.map(item => {
            delete item.createdAt;
            return [item.name, item.description, item.price, item.serial, item.type];
        });
      }
      return [];
    }

    return (
    <>
        <MUIDataTable 
            title={"Product List"} 
            data={getProducts()} 
            columns={columns} 
            options={options} 
        />
        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="simple-modal-title"
            aria-describedby="simple-modal-description"
            >
            <Card data={viewing}/>
        </Modal>
    </>
    )
};

export default Table;