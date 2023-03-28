import { Button, Card, Menu, Table, Tag } from 'antd';
import { SettingOutlined } from '@ant-design/icons';
import { DownOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Dropdown, message, Space } from 'antd';
import { useQuery } from 'react-query';
import customerApis from '../apis/customerApis';
function Home() {
  const { isLoading, error, data } = useQuery('repoData', customerApis.getData);
  console.log(isLoading, error, data);
  function createOrUpdateModalOpen(value: any) {
    debugger;
  }
  const columns = [
    {
      title: 'Account Title',
      dataIndex: 'AccountTitle',
      key: 'AccountTitle'+Math.random(),
      with:150,
    },
    {
      title: 'Actions',
      width: 150,
      render: (text: string, item: any) => (
        <Dropdown
          menu={{
            items,
            onClick: () => createOrUpdateModalOpen({ id: item.Id }),
          }}
        >
          <a onClick={(e) => e.preventDefault()}>
            <Space>
              <Button type="ghost" icon={<SettingOutlined />}>
                {'Actions'}
              </Button>
            </Space>
          </a>
        </Dropdown>
      ),
    },
  ];

  const items: MenuProps['items'] = [
    {
      label: 'Edit',
      key: '1',
    },
    {
      label: 'Delete',
      key: '2',
    },
  ];
  return (
    <Card>
      <h1 className="text-2xl text-center">Customer Portal Registration</h1>
      <Table
        dataSource={data?.data.Data.Result}
        columns={columns}
        className="pt-10"
        bordered
      />
    </Card>
  );
}

export default Home;
