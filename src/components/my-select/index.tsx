import { Select } from "antd";

const MySelect = (props: any) => {
  return (
    <div>
      <Select
        {...props}
        style={{ width: "200px" }}
        options={[{ label: "选项一", value: 1 }]}
      />
    </div>
  );
};

export default MySelect;
