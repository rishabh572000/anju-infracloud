import { Space, Table, Tag, Button } from 'antd';
import useFetchDataApi from './useFetchDataApi';




const TableData = (props) => {
  const columns = [
    {
      title: 'Id',
      dataIndex: props.id,
      key: props.id,
      render: (text) => <a>{text}</a>,
    },
    {
      title: props.nameman,
      dataIndex: props.nameman,
      key: props.nameman,
    },
    {
      title: "What's Says",
      dataIndex: 'body',
      key: 'body',
    },
  ];
  const [data] = useFetchDataApi(props?.url);
  return(
    <>
    <Table columns={columns} dataSource={data} pagination={{ pageSize: 10}}/>
    </>
  )
}

export default TableData;
