import Content from "../Dashbord_layout/Content/Content";
import Radio from "../../utilities/Radio";
import NoData from "../Dashbord_layout/NoData/NoData";
import Table from "../Dashbord_layout/TableLayout";
import TabsFillter from "../../utilities/TabsFillter";
import { useState } from "react";
export default function PharmacyServices() {
  const [refrech, setrefrech] = useState(false);
  const [Export, setexport] = useState(false);
  const [valueRadio, setValueRadio] = useState(null);

  const handleRefrech = () => {
    setrefrech(!refrech);
  };
  const handleExport = () => {
    setexport(!Export);
  };

  const radioItems = [
    { value: "All Services", label: "All Services" },
    { value: "Last Services", label: "Last Services" },
  ];

  const columns = [
    "ID",
    "Name",
    "Description",
    "Location",
    "price",
    "Pharmacy Name",
    "Status",
    "Discount",
    " ",
  ];
  const rows = [
    {
      title: "Paracetamol",
      description: "good",
      clinic: "Mazah",
      price: "900.000",
      PharmacyName: "Ahmad",
      status: "Active",
      discount: "-",
    },
    {
      title: "Brofin",
      description: "good",
      clinic: "Zahera",
      price: "150.000",
      PharmacyName: "Rama",
      status: "Not Active",
      discount: "-",
    },
    {
      title: "Flagin",
      description: "Stomach sedative",
      clinic: "Zahera",
      price: "100.000",
      PharmacyName: "Shifaa",
      status: "Disable",
      discount: "-",
    },
  ];

  const points = [
    { name: "Edit service", type: "edit" },
    { name: "View service", type: "viwe" },
    { name: "Delete service", type: "delete" },
  ];

  return (
    <>
      <Content
        path={" Services / Pharmacy Services"}
        RefrechFun={handleRefrech}
        ExportFunc={handleExport}
        refrech={refrech}
        Export={Export}
      >
        {/* // must be as a commponent  */}
        <TabsFillter>
          <span className="ps-2 pe-5 py-1 border-[1px] border-solid border-myGray-100  flex items-center  justify-start rounded-lg   text-myGray-500">
            {rows.length} record
          </span>

          <Radio
            name="Services"
            items={radioItems}
            value={valueRadio}
            onChange={setValueRadio}
          />
        </TabsFillter>
        {rows.length >= 1 ? (
          <Table columns={columns} rows={rows} points={points} />
        ) : (
          <NoData></NoData>
        )}
      </Content>
    </>
  );
}