import React, { Component } from 'react'
import DataTable from "react-data-table-component";
import movies from './Movies';
const columns = [
    {
      name: "Title",
      selector: "title",
      sortable: true,
      style: {
        fontSize:'18px'
      }
    },
    {
      name: "Directior",
      selector: "director",
      sortable: true,
      style: {
        fontSize:'18px'
      }
    },
    {
      name: "Runtime (m)",
      selector: "runtime",
      sortable: true,
      right: true
    },
    {
        name: "Title",
        selector: "title",
        sortable: true
      },
      {
        name: "Directior",
        selector: "director",
        sortable: true
      },
      {
        name: "Runtime (m)",
        selector: "runtime",
        sortable: true,
        right: true
      }
  ];

  const customStyles = {
    headRow: {
      style: {
        backgroundColor: '#dc3545'// override the row height
      }
    } ,
    headCells: {
        style:{
            color:'#f8f9fa',
            fontSize:'20px'
        }
    }
};
  

class AdvancedDatatable extends Component {
      

    render() {
        const handleOnclickRow =({ selectedRows }) => console.log(selectedRows);

        return (
           // <div className="container">
           <DataTable
          title="Movies Table " 
          columns={columns}
          data={movies}
          defaultSortField="title"
         // sortIcon={<SortIcon />}
          pagination
          selectableRows
          onSelectedRowsChange={handleOnclickRow}
          customStyles={customStyles}
          noContextMenu // comment this to show itemas selected as alert at the top of table
          fixedHeader
          fixedHeaderScrollHeight="500px"

        /> 
                
           // </div>
        )
    }
}
export default AdvancedDatatable;