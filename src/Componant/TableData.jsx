import { Space, Table, Tag } from 'antd';
import useFetchDataApi from './useFetchDataApi';
const columns = [
  {
    title: 'Id',
    dataIndex: 'id',
    key: 'name',
    render: (text) => <a>{text}</a>,
  },
  {
    title: 'Title',
    dataIndex: 'title',
    key: 'age',
  },
  {
    title: 'Discription',
    dataIndex: 'body',
    key: 'address',
  },
];


const TableData = (props) => {
  const [data] = useFetchDataApi(props.url);
  return(
    <>
    <Table columns={columns} dataSource={data}/>
    </>
  )
}

export default TableData;
