import React, { FC } from "react";
import { Modal } from "antd";

import { StoreContext } from "../../store";

interface IModal {
  userList: any;
  modalUser: number;
}

const ModalAnt: FC<IModal> = (props) => {
  const { userList, modalUser } = props;

  const context = React.useContext(StoreContext);

  const handleOk = () => {
    context.setModalVisible(false);
  };

  const handleCancel = () => {
    context.setModalVisible(false);
  };
  const infouser = userList.length === 0 ? "" : userList[modalUser];

  return (
    <div>
      <Modal
        title="ALL INFROM"
        visible={context.modalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <div>Cell : {infouser.cell}</div>
        <div>
          Dob - date: {infouser.dob && infouser.dob.date}, age:
          {infouser.dob && infouser.dob.age}
        </div>
        <div>Email : {infouser.email}</div>
        <div>Gender : {infouser.gender}</div>
        <div>
          ID - name:{infouser.id && infouser.id.name}, value:
          {infouser.id && infouser.id.value}
        </div>
        {/* <div>
          Location - city : {infouser.location && infouser.location.city},
          coordinates - latitude:
          {infouser.location.coordinates.latitude}, longitude:
          {infouser.location.coordinates.longitude}, country:{" "}
          {infouser.location.country}, postcode: {infouser.location.postCode},
          postCode: {infouser.location.postCode}, state:{" "}
          {infouser.location.state}, street - Number:{" "}
          {infouser.location.street.number}
          name:{infouser.location.street.name}
          timezone - : offset{infouser.location.timezone.offset}, description:{" "}
          {infouser.location.timezone.description}
        </div> */}
        <div>
          Login - uuid:{infouser.login && infouser.login.uuid}, username:
          {infouser.login && infouser.login.username}, md5:{" "}
          {infouser.login && infouser.login.md5}, password:{" "}
          {infouser.login && infouser.login.password}, salt:{" "}
          {infouser.login && infouser.login.salt}, sha1:{" "}
          {infouser.login && infouser.login.sha1}, sha256:{" "}
          {infouser.login && infouser.login.sha256}
        </div>
        <div>
          Name - title: {infouser.name && infouser.name.title}, first:{" "}
          {infouser.name && infouser.name.first}, last:{" "}
          {infouser.name && infouser.name.last}
        </div>
        <div>Nat: {infouser.nat}</div>
        <div>Phone: {infouser.phone}</div>
        <div>
          Registered - date: {infouser.registered && infouser.registered.date},
          age: {infouser.registered && infouser.registered.age}
        </div>
      </Modal>
    </div>
  );
};
export { ModalAnt };
