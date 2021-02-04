import React from "react";
import { Input } from "antd";
import { SearchOutlined } from "@ant-design/icons";

const { Search: AntdSearch } = Input;

const Search = () => {
  const onSearch = (value) => console.log(value);
  return (
    <AntdSearch
      placeholder="Search vehicles"
      onSearch={onSearch}
      style={{ width: 258 }}
      prefix={<SearchOutlined />}
    />
  );
};

export default Search;
