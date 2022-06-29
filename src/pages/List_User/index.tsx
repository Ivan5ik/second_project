import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { Card } from "antd";
import InfiniteScroll from "react-infinite-scroll-component";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

import UserList from "../../services/userService";
import { ModalAnt } from "../../components/ModalAnt";
import { StoreContext } from "../../store";

import useStyles from "./style";

interface IResults {
  info: IInfo;
  results: IUser;
}
interface IInfo {
  seed: string;
  results: number;
  page: number;
  version: string;
}
export interface IUser {
  cell: string;
  dob: IDob;
  email: string;
  gender: string;
  id: IID;
  location: ILocation;
  login: ILogin;
  name: IName;
  nat: string;
  phone: string;
  picture: IPicture;
  registered: IRegistered;
}

interface IDob {
  date: string;
  age: number;
}
interface IID {
  name: string;
  value: number;
}
interface ILocation {
  city: string;
  coordinates: ICoordinates;
  country: string;
  postCode: number;
  state: string;
  street: IStreet;
  timezone: ITimezone;
}

interface ICoordinates {
  latitude: string;
  longitude: string;
}
interface IStreet {
  number: number;
  name: string;
}
interface ITimezone {
  offset: string;
  description: string;
}

interface ILogin {
  md5: string;
  password: string;
  salt: string;
  sha1: string;
  sha256: string;
  username: string;
  uuid: string;
}
interface IName {
  first: string;
  last: string;
  title: string;
}
interface IPicture {
  large: string;
  medium: string;
  thumbnail: string;
}
interface IRegistered {
  age: number;
  date: string;
}

const ListUser = () => {
  const classes = useStyles();

  const [currentPage, setCurrentPage] = useState(1);
  const [userList, setUserList] = useState<any>([]);
  const [modalUser, setModalUser] = useState<number>(0);

  const countView = 10; // will useState if do pagination
  const { t } = useTranslation();
  const { Meta } = Card;
  const context = React.useContext(StoreContext);

  useEffect(() => {
    UserList.user(countView, currentPage).then((response: any) =>
      setUserList(userList.concat(response.data.results))
    );

    setCurrentPage(currentPage + 1);
  }, []);

  const handleFunc = () => {
    UserList.user(countView, currentPage).then((response: any) =>
      setUserList(userList.concat(response.data.results))
    );

    setCurrentPage(currentPage + 1);
  };
  console.log(userList);

  //modal for ModalAnt
  const showModal = (index: number) => {
    context.setModalVisible(true);
    setModalUser(index);
  };

  const reorder = (list: any, startIndex: number, endIndex: number) => {
    const result = Array.from(list);
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);

    return result;
  };

  const onDragEnd = (result: any) => {
    console.log(result);

    setUserList(
      reorder(userList, result.source.index, result.destination.index)
    );
  };

  return (
    <>
      <div className={classes.root}>
        <DragDropContext onDragEnd={onDragEnd}>
          <Droppable droppableId="droppable">
            {(provided, snapshot) => (
              <div {...provided.droppableProps} ref={provided.innerRef}>
                <InfiniteScroll
                  dataLength={userList.length}
                  next={handleFunc}
                  hasMore={true}
                  loader={<h4>Loading...</h4>}
                >
                  {userList.map((user: IUser, index: number) => (
                    <Draggable
                      draggableId={user.cell}
                      key={user.phone}
                      index={index}
                    >
                      {(provided, snapshot) => (
                        <div
                          key={user.cell}
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                        >
                          <Card
                            key={index}
                            hoverable
                            cover={
                              <img alt="userPicture" src={user.picture.large} />
                            }
                            className={classes.cardAnt}
                            onClick={() => showModal(index)}
                          >
                            <Meta
                              key={index}
                              className={classes.metaAnt}
                              title={
                                <div key={user.email}>
                                  {user.name.first} {user.name.last}
                                </div>
                              }
                              description={
                                <>
                                  <div key={user.cell}>Email: {user.email}</div>
                                  <div key={user.email}>
                                    {t("phone")}: {user.phone}
                                  </div>
                                  <div key={user.phone}>
                                    {t("form.age")}: {user.dob.age}
                                  </div>
                                </>
                              }
                            />
                          </Card>
                        </div>
                      )}
                    </Draggable>
                  ))}
                </InfiniteScroll>
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        </DragDropContext>
      </div>

      <ModalAnt userList={userList} modalUser={modalUser} />
    </>
  );
};
export { ListUser };
