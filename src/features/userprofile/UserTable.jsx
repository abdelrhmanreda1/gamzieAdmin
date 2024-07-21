import React, { useMemo, useState, useEffect } from "react";
import { useTable, usePagination } from "react-table";
import styled from "styled-components";
import { GiTwoCoins } from "react-icons/gi";
import { Link, useNavigate } from "react-router-dom";
import BlockedIcon from "/blocked.svg";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
const StyledCoins = styled(GiTwoCoins)`
  color: gold;
  font-size: 20px;
  padding-top: 5px;
`;

const TableContainer = styled.div`
  width: 100%;
  height: calc(100vh - 230px);
  padding: 20px;
  border-radius: var(--border-radius-lg);
`;

const StyledTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  height: 100%;
  box-shadow: 0 2px 8px var(--shadow-md);
  border-radius: 8px;
  overflow: scroll;
  background-color: var(--color-grey-0);
`;

const Container = styled.div`
  height: 100%;
  overflow-y: scroll;
  width: 100%;
  &::-webkit-scrollbar {
    width: 3px;
  }

  &::-webkit-scrollbar-track {
    background: none;
  }

  &::-webkit-scrollbar-thumb {
    background-color: none;
    border-radius: 6px;
    border: none;
  }
`;

const TableHead = styled.thead`
  background-color: #9d86be;
  color: rgb(230 224 224);
  font-size: 19px;
  width: 100%;
  height: 60px;
  position: sticky;
  top: 0;
  left: 0;
  z-index: 1;
`;

const TableRow = styled.tr`
  border-bottom: 2px solid #613d99;
  opacity: ${(props) => (props.status === "deleted" ? "40%" : 1)};

  &:nth-child(even) {
    background-color: transparent;
  }
`;

const BodyTable = styled.tbody``;

const TableCell = styled.td`
  padding: 12px;
  font-size: 14px;
  text-align: center;
  color: ${(props) => (props.points ? "#613d99" : "inherit")};
`;

const PaginationContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  width: 98%;
`;

const Pagination = styled.div`
  display: flex;
  gap: 5px;
  background-color: var(--color-grey-200);
  padding: 2px 4px;
  border-radius: var(--border-radius-md);
  button {
    padding: 5px 10px;
    border: none;
    font-size: 14px;
    background-color: transparent;
    color: rgb(92, 45, 145);
    cursor: pointer;

    &:disabled {
      cursor: not-allowed;
    }

    &.active {
      background-color: #cbc2db;
      border-radius: var(--border-radius-lg);
      color: var(--color-grey-0);
      border: none;
      outline: none;
      padding: 6px 12px;
    }
    &:focus {
      outline: none;
    }
  }
`;

const ImageName = styled.div`
  position: relative;
  display: inline-block;
  width: 35px;
  height: 35px;
  background-image: url("/1.svg");
  background-size: cover;

  &::after {
    content: "";
    position: absolute;
    top: -1px;
    right: -5px;
    width: 14px;
    height: 14px;
    border-radius: 50%;
    background-color: ${(props) => (props.status === "online" ? "#02c60a" : props.status === "offline" ? "#cecece" : "transparent")};
    ${(props) =>
      props.status === "blocked" &&
      `
      content: url(${BlockedIcon});
    `}
  }
`;

const Profile = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
`;

const ProfileName = styled.span`
  font-size: 17px;
  width: 44%;
  font-weight: 600;
`;

const StyleButtonAction = styled.button`
  background-color: #7959a1;
  padding: 6px 15px;
  border-radius: var(--border-radius-lg);
  color: var(--color-grey-0);
  border: 2px solid #7b59a1;
  &:focus {
    outline: none;
  }
  &:hover {
    background-color: #7457a9;
  }
`;

const ShowingInfo = styled.div`
  font-size: 14px;
  color: rgb(175, 169, 180);
`;

const PageSizeSelector = styled.div`
  display: flex;
  justify-content: center;
`;

const Select = styled.select`
  margin-left: 5px;
  padding: 5px;
  font-size: 14px;
  width: 160px;
  border: none;
  text-align: center;
  outline: none;
  color: rgb(230 224 224);
  background-color: transparent;
  cursor: pointer;
  &:focus {
    outline: none;
  }
`;

const Option = styled.option`
  background-color: #fff;
  border: 1px solid #5c2d91;
  color: #5c2d91;
  cursor: pointer;
  padding: 40px 20px;
`;

const FilterContainer = styled.div`
  display: flex;
  margin: 13px 10px 23px 10px;

  .react-datepicker {
    border: none;
    box-shadow: var(--shadow-md);
  }
  .react-datepicker__header {
    background-color: #fff;
  }
  .react-datepicker__header h2 {
    background-color: #f5eefa;
    padding: 3px;
    font-size: 10px;
    color: var(--color-grey-600);
  }
  .react-datepicker__navigation--next {
    font-size: 5px;
    &:focus {
      outline: none;
      background: none;
      border: none;
    }
  }
  .react-datepicker__navigation--previous {
    font-size: 5px;
    &:focus {
      outline: none;
      background: none;
      border: none;
    }
  }
  .react-datepicker__navigation span {
    font-size: 15px;
    cursor: pointer;
  }
  .react-datepicker__day {
    color: var(--color-grey-700);
  }
  .react-datepicker__day-names {
    padding: 7px 0px;
    font-size: 9px;
  }
  .react-datepicker__day-name {
    color: var(--color-grey-700);
  }
  .react-datepicker__day--selected {
    background-color: #e9b3d2;
    color: #fff;
    border-radius: 50%;
  }

  .react-datepicker__day--keyboard-selected {
    background-color: #e9b3d2;
    color: #fff;
    border-radius: 50%;
  }

  .react-datepicker__day:hover {
    background-color: #e9b3d2;
    color: #fff;
    border-radius: 50%;
  }

  .react-datepicker-popper {
    z-index: 2000 !important;
  }
  .react-datepicker-popper {
    z-index: 2000 !important;
  }
`;
const FilterUsres = styled.div`
  font-size: 15px;
`;
const FilterUsresLabel = styled.label`
  margin: 0px 10px 0px 20px;
`;
const FilterUsresInput = styled.input`
  border: none;
  padding: 5px 9px;
  border-radius: 9px;
  cursor: pointer;
  background-color: var(--color-grey-300);
  color: var(--color-grey-600);
  &:focus {
    outline: none;
  }
`;

const DateDisplay = styled.div`
  background-color: #9d86be;
  color: white;
  padding: 10px;
  border-radius: 5px;
  position: absolute;
  top: 0;
  right: 0;
  z-index: 10;
  font-size: 14px;
  display: ${(props) => (props.show ? "block" : "none")};
`;
const CustomDatePicker = styled(DatePicker)`
  background-color: var(--color-grey-300);
  border: none;
  padding: 5px 9px;
  border-radius: 9px;
  color: var(--color-grey-600);
  cursor: pointer;
  z-index: 1000;

  &:focus {
    outline: none;
  }
`;

const UserTable = () => {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [filteredData, setFilteredData] = useState([]);
  const [showDate, setShowDate] = useState(null);

  const data = useMemo(
    () => [
      { id: 1, profile: "محمد احمد", email: "AAA1@gmail.com", phone: "+20 012 345678", points: 2000, status: "online", date: "2024-07-01" },
      { id: 2, profile: "مصطفي احمد", email: "AAA1@gmail.com", phone: "+20 012 345678", points: 2000, status: "offline", date: "2024-07-02" },
      { id: 3, profile: "عبدالرحمن احمد", email: "AAA1@gmail.com", phone: "+20 012 345678", points: 2000, status: "blocked", date: "2024-07-03" },
      { id: 4, profile: "محمد احمد", email: "AAA1@gmail.com", phone: "+20 012 345678", points: 2000, status: "deleted", date: "2024-07-04" },
      { id: 5, profile: "محمد احمد", email: "AAA1@gmail.com", phone: "+20 012 345678", points: 2000, status: "online", date: "2024-07-05" },
      { id: 6, profile: "محمد احمد", email: "AAA1@gmail.com", phone: "+20 012 345678", points: 2000, status: "offline", date: "2024-07-06" },
      { id: 7, profile: "محمد احمد", email: "AAA1@gmail.com", phone: "+20 012 345678", points: 2000, status: "blocked", date: "2024-07-07" },
      { id: 8, profile: "محمد احمد", email: "AAA1@gmail.com", phone: "+20 012 345678", points: 2000, status: "deleted", date: "2024-07-08" },
      { id: 9, profile: "محمد احمد", email: "AAA1@gmail.com", phone: "+20 012 345678", points: 2000, status: "online", date: "2024-07-09" },
      { id: 10, profile: "محمد احمد", email: "AAA1@gmail.com", phone: "+20 012 345678", points: 2000, status: "offline", date: "2024-07-10" },
      { id: 12, profile: "محمد احمد", email: "AAA1@gmail.com", phone: "+20 012 345678", points: 2000, status: "blocked", date: "2023-11-12" },
      { id: 13, profile: "محمد احمد", email: "AAA1@gmail.com", phone: "+20 012 345678", points: 2000, status: "blocked", date: "2023-11-13" },
      { id: 14, profile: "محمد احمد", email: "AAA1@gmail.com", phone: "+20 012 345678", points: 2000, status: "blocked", date: "2023-11-14" },
    ],
    []
  );

  useEffect(() => {
    const filtered = data.filter((user) => {
      const userDate = new Date(user.date);
      const start = startDate ? new Date(startDate) : null;
      const end = endDate ? new Date(endDate) : null;

      if (start && end) {
        return userDate >= start && userDate <= end;
      } else if (start) {
        return userDate >= start;
      } else if (end) {
        return userDate <= end;
      } else {
        return true;
      }
    });

    setFilteredData(filtered);
  }, [startDate, endDate, data]);

  const [pageSize, setPageSize] = useState(6);
  const navigate = useNavigate();

  const columns = useMemo(
    () => [
      {
        Header: "الاسم",
        accessor: "profile",
        Cell: ({ row }) => (
          <Link to={`/profile/${row.original.profile}`}>
            <Profile>
              <ImageName status={row.original.status} />
              <ProfileName>{row.original.profile}</ProfileName>
              <DateDisplay show={showDate === row.id}>{row.original.date}</DateDisplay>
            </Profile>
          </Link>
        ),
      },
      { Header: "البريد الالكتروني", accessor: "email" },
      { Header: "الهاتف", accessor: "phone" },
      {
        Header: "النقاط",
        accessor: "points",
        Cell: ({ value }) => (
          <>
            {value} <StyledCoins />
          </>
        ),
      },
      {
        Header: (
          <PageSizeSelector>
            <Select
              value={pageSize}
              onChange={(e) => {
                setPageSize(Number(e.target.value));
              }}
            >
              {[5, 10, 20, 30, 40, 50].map((size) => (
                <Option key={size} value={size}>
                  {`عرض 1 إلى ${size} بيانات`}
                </Option>
              ))}
            </Select>
          </PageSizeSelector>
        ),
        accessor: "action",
        Cell: ({ row }) => <StyleButtonAction onClick={() => navigate(`/profile/${row.original.profile}`)}>اذهب للصفحه الشحصيه</StyleButtonAction>,
      },
    ],
    [pageSize, navigate, showDate]
  );

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page,
    prepareRow,
    canPreviousPage,
    canNextPage,
    pageOptions,
    gotoPage,
    nextPage,
    previousPage,
    setPageSize: setTablePageSize,
    state: { pageIndex },
  } = useTable(
    {
      columns,
      data: filteredData,
      initialState: { pageIndex: 0, pageSize },
    },
    usePagination
  );

  useEffect(() => {
    setTablePageSize(pageSize);
  }, [pageSize, setTablePageSize]);

  return (
    <TableContainer>
      <FilterContainer>
        <FilterUsres>
          <FilterUsresLabel>تصفية المستخدمين من:</FilterUsresLabel>
          <CustomDatePicker selected={startDate} onChange={(date) => setStartDate(date)} dateFormat="yyyy-MM-dd" placeholderText="اختر تاريخ" />
        </FilterUsres>
        <FilterUsres>
          <FilterUsresLabel>إلى:</FilterUsresLabel>
          <CustomDatePicker selected={endDate} onChange={(date) => setEndDate(date)} dateFormat="yyyy-MM-dd" placeholderText="اختر تاريخ" />
        </FilterUsres>
      </FilterContainer>
      <Container>
        <StyledTable {...getTableProps()}>
          <TableHead>
            {headerGroups.map((headerGroup) => (
              <TableRow {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map((column) => (
                  <TableCell {...column.getHeaderProps()}>{column.render("Header")}</TableCell>
                ))}
              </TableRow>
            ))}
          </TableHead>

          <BodyTable {...getTableBodyProps()}>
            {page.map((row) => {
              prepareRow(row);
              return (
                <TableRow {...row.getRowProps()} status={row.original.status} onMouseEnter={() => setShowDate(row.original.id)} onMouseLeave={() => setShowDate(null)}>
                  {row.cells.map((cell) => (
                    <TableCell {...cell.getCellProps()} points={cell.column.id === "points"}>
                      {cell.render("Cell")}
                    </TableCell>
                  ))}
                </TableRow>
              );
            })}
          </BodyTable>
        </StyledTable>
      </Container>
      <PaginationContainer>
        <Pagination>
          <button onClick={() => previousPage()} disabled={!canPreviousPage}>
            {"<"}
          </button>
          {pageOptions.map((pageNumber) => (
            <button key={pageNumber} onClick={() => gotoPage(pageNumber)} className={pageIndex === pageNumber ? "active" : ""}>
              {pageNumber + 1}
            </button>
          ))}
          <button onClick={() => nextPage()} disabled={!canNextPage}>
            {">"}
          </button>
        </Pagination>

        <ShowingInfo>
          عرض {page.length} من {filteredData.length}
        </ShowingInfo>
      </PaginationContainer>
    </TableContainer>
  );
};

export default UserTable;
