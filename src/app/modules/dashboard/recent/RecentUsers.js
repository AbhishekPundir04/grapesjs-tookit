import React, { useEffect } from "react";
import MasterBody from "../../../components/MasterComponent/MasterBody/MasterBody";
import { EventHeader } from "../../../../constants/TableConstants/TableHeader";
import { useDispatch, useSelector, } from "react-redux";
import { getEventList } from "../../../redux/slices/PlacesSlice.js/eventSlice";
import moment from "moment";

export default function RecentUsers() {
  const [page, setPage] = React.useState(1);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const dispatch = useDispatch()

  const {eventList} = useSelector((state)=>state.events)
  console.log("eventList",eventList)
  const payload = {
    page: page,
    rowsPerPage: rowsPerPage,
  }


  useEffect(() => {
    dispatch(getEventList()
    )
  },dispatch,page,rowsPerPage)

  const rows = [
    {
      id: "001",
      user_name: "Saral Sanghvi",
      email_address: "saralsanghvi@gmail.com",
      contact_number: "+91 3362750157 ",
      reg_date: "4 April 2024",
      status: "Active",
    },
    {
      id: "002",
      user_name: "Aapti Rajan",
      email_address: "aptirajan@gmail.com",
      contact_number: "+91 3362750157 ",
      reg_date: "4 April 2024",
      status: "Active",
    },
    {
      id: "003",
      user_name: "Pranav Bava",
      email_address: "pranav.bava@gmail.com",
      contact_number: "+91 3362750157 ",
      reg_date: "4 April 2024",
      status: "Inactive",
    },
    {
      id: "004",
      user_name: "Rati Roy",
      email_address: "ratiroy@gmail.com",
      contact_number: "+91 3362750157 ",
      reg_date: "4 April 2024",
      status: "Active",
    },
  ];


  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };
  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };
  const structuredRow = (societyList, currentPage, rowsPerPage) => {
    let data = societyList?.map((data, index) => {
      const sno = (currentPage - 1) * rowsPerPage + index + 1;
      return {
        id: sno,
        name: data?.name_en,
        image_url: <img src={data?.image} width={100} alt={data?.name_en} />,
        created_at: moment(data?.created_at).format("DD/MM/YYYY"),
        updated_at: moment(data?.updated_at).format("DD/MM/YYYY"),
        status: data?.is_active == true ? "Active" : "Inactive",
        address: data?.address,
        start_date: moment(data?.start_date).format("DD/MM/YYYY"),
        end_date: moment(data?.end_date).format("DD/MM/YYYY"),
        rowsData: data,
      };
    });
    return data;
  };
  return (
    <div className="recentContainer">
      <p
        className="boldLetters"
        style={{ textAlign: "left", marginBottom: 10 }}
      >
        Recent Registered Users
      </p>
      <MasterBody
        tableHeader={EventHeader}
        handleEdit={(row) => { }}
        handleView={(row) => { }}
        paginationCount={4}
        page={page}
        rowsPerPage={rowsPerPage}TableHeader
        handleChangePage={handleChangePage}
        handleChangeRowsPerPage={handleChangeRowsPerPage}
        rowsData={structuredRow(eventList?.rows, page, rowsPerPage)}
      />
    </div>
  );
}
