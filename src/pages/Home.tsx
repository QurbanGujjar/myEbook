import { Button, Card, Menu, Table, Tag } from 'antd';
import { SettingOutlined } from '@ant-design/icons';
import { DownOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Dropdown, message, Space } from 'antd';
import { useQuery } from 'react-query';
import { getData } from '../apis/loginApis';

function Home() {
  const { isLoading, error, data } = useQuery('repoData', getData);
  console.log(isLoading, error, data);

  function createOrUpdateModalOpen(value: any) {
    debugger;
  }
  const dataSource = [
    {
      key: '1',
      firstName: 'tabiat',
      lastName: 'sabz pars',
      userName: 'tabiat',
      partyName: 'tabiat check',
    },
    {
      key: '2',
      firstName: 'Bilal',
      lastName: 'khan',
      userName: 'bilal khan',
      partyName: 'hannan tejarat',
    },
    {
      key: '3',
      firstName: 'jaan',
      lastName: 'zaib',
      userName: 'jaan zaib',
      partyName: 'unknown',
    },
  ];

  const columns = [
    {
      title: 'Account Title',
      dataIndex: 'AccountTitle',
      key: 'AccountTitle',
    },

    // {
    //   title: 'IsActive',
    //   dataIndex: 'isActive',
    //   key: 'isActive',
    //   width: 150,
    //   render: (text: boolean) =>
    //     text === true ? (
    //       <Tag color="#2db7f5">{'Yes'}</Tag>
    //     ) : (
    //       <Tag color="red">{'No'}</Tag>
    //     ),
    // },
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
