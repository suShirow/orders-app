export interface ItemType {
  "Region": string;
  "Country": string;
  "Item Type": string;
  "Sales Channel": string;
  "Order Priority": string;
  "Order Date": string;
  "Order ID": string;
  "id": string;
  "Ship Date": string;
  "Units Sold": string;
  "Unit Price": string;
  "Unit Cost": string;
  "Total Revenue": string;
  "Total Cost": string;
  "Total Profit": string;
  "Nric": string;
}

export const columns = [
    {field: "Country", headerName: 'Country' , width: 150,},
    {field: "Item Type", headerName: "Item Type", width: 150,},
    {field: "Sales Channel", headerName: "Sales Channel", width: 150,},
    {field: "Order Priority", headerName: "Order Priority", width: 150,},
    {field: "Order Date", headerName: "Order Date", width: 150,},
    {field: "id", headerName: "Order ID", width: 150,},
    {field: "Ship Date", headerName: "Ship Date", width: 150,},
    {field: "Units Sold", headerName: "Units Sold", width: 150,},
    {field: "Unit Price", headerName: "Unit Price", width: 150,},
    {field: "Unit Cost", headerName: "Unit Cost", width: 150,},
    {field: "Total Revenue", headerName: "Total Revenue", width: 150,},
    {field: "Total Cost", headerName: "Total Cost", width: 150,},
    {field: "Total Profit", headerName: "Total Profit", width: 150,},
  { field: "Nric", headerName: "Nric", width: 150,}
  ]

export interface ItemState {
  payload: ItemType[];
  page: number;
  search: string;
}

export interface CartState {
  items: ItemType[];
}
