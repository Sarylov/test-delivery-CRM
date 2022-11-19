import React, { FC, useEffect, useState } from "react";
import { TableLayoutProps } from "./TableLayout.props";
import "./TableLayout.module.css";
import { Button, Modal } from "antd";
import Table from "../../Table/Table";

function TableLayout<T>({ columns, data, form, ...props }: TableLayoutProps) {
  // открыть модальное окно для добавления
  const [openModalAddRow, setopenModalAddRow] = useState<boolean>(false);
  // открыть модальное окно для редактирования
  const [openModalEditRow, setOpenModalEditRow] = useState<boolean>(false);
  // данные из строки таблицы готовы для изменения
  const [dataEdit, setDataEdit] = useState<T | null>(null);
  // данные для добавления в бд
  const [dataAdd, setDataAdd] = useState<T | null>(null);

  const clickRowTable = (row: T): void => {
    setDataEdit(row);
    setOpenModalEditRow(true);

    showModal("edit");
  };

  // функция для открытия модального окна
  const showModal = (modalName: "add" | "edit") => {
    switch (modalName) {
      case "add":
        setopenModalAddRow(true);
        break;
      case "edit":
        setOpenModalEditRow(true);
        break;
    }
  };

  // функция для закрытия модального окна
  const hideModal = (modalName: "add" | "edit") => {
    switch (modalName) {
      case "add":
        setopenModalAddRow(false);
        break;
      case "edit":
        setOpenModalEditRow(false);
        break;
    }
  };

  const addCourier = () => {
    console.log("add c");
  };

  const modalAdd = (): JSX.Element => {
    return (
      <>
        <Modal
          title="Добавить"
          open={true}
          maskClosable={true}
          onCancel={() => hideModal("add")}
          cancelButtonProps={{ style: { display: "none" } }}
          okButtonProps={{ style: { display: "none" } }}
        >
          {form({ click: addCourier, hideModal: () => hideModal("add") })}
        </Modal>
      </>
    );
  };

  const modalEdit = (): JSX.Element => {
    return (
      <>
        <Modal
          title="Редактировать"
          open={true}
          maskClosable={true}
          onCancel={() => hideModal("edit")}
          cancelButtonProps={{ style: { display: "none" } }}
          okButtonProps={{ style: { display: "none" } }}
        >
          {form({
            click: addCourier,
            hideModal: () => hideModal("edit"),
            editData: dataEdit,
          })}
        </Modal>
      </>
    );
  };

  return (
    <div {...props}>
      <div>
        {openModalAddRow && modalAdd()}
        {openModalEditRow && modalEdit()}

        <Button className="btn-add" type="primary" onClick={() => showModal("add")}>
          добавить
        </Button>

        <Table
          columns={columns}
          data={data}
          pag={false}
          clickRow={clickRowTable}
        />
      </div>
    </div>
  );
}

export default TableLayout;
