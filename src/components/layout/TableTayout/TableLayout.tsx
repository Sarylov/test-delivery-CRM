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
    showModal("edit");
  };

  useEffect(() => {
    // вызываем модальное окно если есть данные для изменения
    dataEdit && setOpenModalEditRow(true);
    console.log(dataEdit);
  }, [dataEdit]);

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

  return (
    <div {...props}>
      <div>
        <Modal
          title="Добавить"
          open={openModalAddRow}
          maskClosable={true}
          onCancel={() => hideModal("add")}
          cancelButtonProps={{ style: { display: "none" } }}
          okButtonProps={{ style: { display: "none" } }}
        >
          {form({ click: addCourier, hideModal: () => hideModal("add") })}
        </Modal>

        <Modal
          title="Редактировать"
          open={openModalEditRow}
          maskClosable={true}
          onCancel={() => hideModal("edit")}
          cancelButtonProps={{ style: { display: "none" } }}
          okButtonProps={{ style: { display: "none" } }}
        >
          {form({ click: addCourier, hideModal: () => hideModal("edit") })}
        </Modal>

        <Button type="primary" onClick={() => showModal("add")}>
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
