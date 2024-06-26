import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { Button, Grid, IconButton, Pagination, Tooltip } from "@mui/material";
import { ReactComponent as Trash } from "../../../assets/images/tableIcons/deleteIcon.svg";
import { ReactComponent as EditSvg } from "../../../assets/images/tableIcons/edit.svg";
import { ReactComponent as DownloadSvg } from "../../../assets/images/tableIcons/download.svg";
import { ReactComponent as ViewSvg } from "../../../assets/images/tableIcons/view.svg";

import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import NoDataImg from "../../../assets/images/tableIcons/notdatafound.png";

export default function CustomTable({
    rows,
    count,
    page,
    rowsPerPage,
    handleChangeRowsPerPage,
    handleChangePage,
    handleDelete,
    headers,
    handleView,
    handleEditNew,
    isView = true,
    isEdit = true,
    isDelete = true,
    handleDownload,
}) {
    const totalPages = Math.ceil(count / rowsPerPage);
    const [sorting, setSorting] = React.useState({
        field: "districtName",
        direction: "desc",
    });
    const handleSort = (field) => {
        if (sorting.field === field) {
            setSorting((prev) => ({
                ...prev,
                direction: prev.direction === "asc" ? "desc" : "asc",
            }));
        } else {
            setSorting({ field, direction: "asc" });
        }
    };

    const sortedRows = rows?.slice().sort((a, b) => {
        const aValue = a[sorting.field];
        const bValue = b[sorting.field];
        if (sorting.direction === "asc") {
            return aValue?.localeCompare(bValue);
        } else {
            return bValue?.localeCompare(aValue);
        }
    });

    const renderSortBtn = (data) => {
        if (data.sort) {
            if (data.field === sorting.field) {
                return (
                    <IconButton onClick={() => handleSort(data.field)}>
                        {sorting.direction == "asc" ? (
                            <ArrowDropUpIcon />
                        ) : (
                            <ArrowDropDownIcon />
                        )}
                    </IconButton>
                );
            } else {
                return (
                    <IconButton onClick={() => handleSort(data.field)}>
                        <ArrowDropDownIcon />
                    </IconButton>
                );
            }
        } else return null;
    };
    return (
        <>
            <TableContainer>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead sx={{ background: "#E9F4EE" }}>
                        <TableRow>
                            {headers?.map((data, index) => {
                                return (
                                    <TableCell className="table-cell-header" width={data.width}>
                                        {data.name}
                                        {renderSortBtn(data)}
                                    </TableCell>
                                );
                            })}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {sortedRows && sortedRows.length > 0 ? (
                            sortedRows?.map((row, index) => {
                                return (
                                    <TableRow key={index}>
                                        {headers?.map((column) => {
                                            const value = row[column.field];

                                            if (column.field === "Action") {
                                                return (
                                                    <TableCell align="left">
                                                        <div className="actionIcon">
                                                            {/* pdf button  */}
                                                            {handleDownload && (
                                                                <Tooltip title="Download Pdf">
                                                                    <IconButton
                                                                        aria-label="view"
                                                                        color="primary"
                                                                        onClick={() => handleDownload(row)}
                                                                    >
                                                                        <DownloadSvg />
                                                                    </IconButton>
                                                                </Tooltip>
                                                            )}
                                                            {isEdit && (
                                                                <Tooltip title="Edit">
                                                                    <IconButton
                                                                        onClick={() => handleEditNew(row)}
                                                                    >
                                                                        <EditSvg />
                                                                    </IconButton>
                                                                </Tooltip>
                                                            )}
                                                            {isDelete && (
                                                                <Tooltip title="Delete">
                                                                    <IconButton onClick={() => handleDelete(row)}>
                                                                        <Trash />
                                                                    </IconButton>
                                                                </Tooltip>
                                                            )}
                                                            {isView && (
                                                                <Tooltip title="View">
                                                                    <IconButton onClick={() => handleView(row)}>
                                                                        <ViewSvg />
                                                                    </IconButton>
                                                                </Tooltip>
                                                            )}
                                                        </div>
                                                    </TableCell>
                                                );
                                            } else if (column.field === "status") {
                                                return (
                                                    <TableCell align="left">
                                                        <Button
                                                            className={
                                                                value == "Active"
                                                                    ? "activeBadge"
                                                                    : "inActiveBadge"
                                                            }
                                                        >
                                                            {value}
                                                        </Button>
                                                    </TableCell>
                                                );
                                            } else {
                                                return <TableCell align="left">{value}</TableCell>;
                                            }
                                        })}
                                    </TableRow>
                                );
                            })
                        ) : (
                            // <TableRow hover role="checkbox" align="center">
                            //   <TableCell colSpan={9} className="buttonCell">
                            //     No records found
                            //   </TableCell>
                            // </TableRow>
                            <></>
                        )}
                    </TableBody>
                </Table>
                {sortedRows.length === 0 && (
                    <Grid
                        sx={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                        }}
                        className="no-data-found-dic"
                    >
                        <img src={NoDataImg} alt="no data" />
                    </Grid>
                )}
            </TableContainer>
            <Pagination
                variant="outlined"
                shape="rounded"
                component="div"
                count={totalPages}
                rowsPerPage={rowsPerPage}
                page={page}
                onChange={handleChangePage}
            />
        </>
    );
}
