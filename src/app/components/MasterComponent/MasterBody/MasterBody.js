import { Grid } from "@mui/material";
import React from "react";
import CustomTable from "../../CustomTable/CustomTable";

const MasterBody = ({
  rowsData,
  page,
  rowsPerPage,
  handleView,
  handleEdit,
  handleDelete,
  tableHeader,
  paginationCount,
  handleChangePage,
  handleChangeRowsPerPage,
  createBillButton,
  children,
  isView,
  isEdit,
  isDelete,
}) => {
  return (
    <Grid
      bgcolor={"white"}
      p={"0px"}
      borderRadius={"10px"}
      boxShadow={" 0px 0px 1px 1px #e0e4e9"}
    >
      {children}

      <CustomTable
        handleView={(row) => {
          handleView(row);
        }}
        isDelete={isDelete}
        isEdit={isEdit}
        isView={isView}
        handleEditNew={(row) => {
          handleEdit(row);
        }}
        headers={tableHeader}
        rows={rowsData ?? []}
        page={page}
        rowsPerPage={rowsPerPage}
        handleDelete={(row) => {
          handleDelete(row);
        }}
        createBillButton={createBillButton}
        count={paginationCount}
        handleChangePage={handleChangePage}
        handleChangeRowsPerPage={handleChangeRowsPerPage}
      />
    </Grid>
  );
};

export default MasterBody;
