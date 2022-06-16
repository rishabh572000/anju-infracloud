import { Button, Modal, Input } from 'antd';
import { useState } from 'react';

const Popup = () => {
  const [isModalVisible, setIsModalVisible] = useState(true);
  const [name, setName] = useState('');


  const handleOk = () => {
    localStorage.setItem('name', name);
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <>
      <Modal title="Basic Modal" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
      <Input placeholder="What's Your Name" onChange={(e)=> setName(e.target.value)} />
      </Modal>
    </>
  );
};

export default Popup;