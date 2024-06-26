import React from "react";
import CustomButton from "app/components/button/CustomButton";
const MasterHeader = ({
  headerName,
  addBtnName,
  handleAddBtn,
  handleSearch,
  searchQuery,
  hideAddBtn,
}) => {
  return (
    <>
      <div className="headingbox">
        <span>{headerName}</span>
        <div className="searchBx">
          {!hideAddBtn && (
            <CustomButton
              variant="contained"
              buttonClassName="customButton"
              onClick={() => handleAddBtn()}
            >
              <>
                <span>{addBtnName}</span>
              </>
            </CustomButton>
          )}
        </div>
      </div>
    </>
  );
};

export default MasterHeader;
