import { React, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./carts.scss";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import { useSelector, useDispatch } from "react-redux";
import { RMV, ADD, DLT } from "../../redux/actions/action";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import validator from "validator";

import Empty from "../../assets/IMG_Empty.png";

const Carts = () => {
  const getCart = useSelector((state) => state.cartreducer.carts);
  const dispatch = useDispatch();

  const [total, setTotal] = useState(0);
  const [data, setData] = useState([]);

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAD] = useState("");

  const add = (e) => {
    dispatch(ADD(e));
  };
  const dltOne = (id) => {
    dispatch(DLT(id));
  };
  const dlt = (id) => {
    dispatch(RMV(id));
  };
  const VND = new Intl.NumberFormat("vi-VN", {
    style: "currency",
    currency: "VND",
  });

  const notifySuccess = (message) =>
    toast.success(message, {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });

  const notifyWarn = (message) =>
    toast.warn(message, {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });

  const validatePhoneNumber = (number) => {
    const isValidPhoneNumber = validator.isMobilePhone(number);
    return isValidPhoneNumber;
  };

  const order = (e) => {
    if (name === "" || phone === "" || address === "") {
      e.preventDefault();
      notifyWarn("Điền đầy đủ thông tin");
    } else if (!validatePhoneNumber(phone)) {
      notifyWarn("Số điện thoại không đúng");
      e.preventDefault();
    } else {
      notifySuccess("Đặt hàng thành công");
      setName("");
      setPhone("");
      setAD("");
    }
  };
  useEffect(() => {
    setData(getCart);
    const sum = () => {
      let price = 0;
      getCart.map((ele) => {
        return ele?.price
          ? (price = price + parseInt(ele.price) * ele.qty)
          : (price = price + parseInt(ele.priceSale) * ele.qty);
      });
      price = price + "000";
      setTotal(VND.format(price));
    };

    sum();
  }, [getCart]);

  return (
    <div className="cartContainer">
      <ToastContainer />

      {data.length === 0 ? (
        <div className="emptyCart">
          <h3>Bạn chưa chọn sản phẩm.</h3>
          <img src={Empty} alt="empty" />
          <p>Hãy nhanh tay chọn ngay sản phẩm yêu thích.</p>
        </div>
      ) : (
        <div className="wrapper">
          <div className="cartList">
            <h3>CHI TIẾT ĐƠN HÀNG</h3>
            <table>
              <tr>
                <th></th>
                <th>SẢN PHẨM</th>
                <th>GIÁ</th>
                <th>SỐ LƯỢNG</th>
                <th>TỔNG</th>
              </tr>
              {getCart?.map((item) => {
                return (
                  <tr>
                    <td className="btnDel">
                      <HighlightOffIcon onClick={() => dlt(item.id)} />
                    </td>
                    <td className="product">
                      <Link to={`/details/${item.id}`}>
                        <img src={item.image1} alt="product" width={100} />
                      </Link>
                      <p className="itemTitle">
                        <p className="titleProduct">{item.title}</p>
                        <p>Size: {item.size}</p>
                      </p>
                    </td>
                    <td className="donGia">{item.price || item.priceSale} đ</td>
                    <td className="soLg">
                      <span>
                        <button onClick={() => dltOne(item.id)}>-</button>
                      </span>
                      <span>{item.qty}</span>
                      <span>
                        <button onClick={() => add(item)}>+</button>
                      </span>
                    </td>
                    <td className="total">
                      {VND.format(
                        item.priceSale
                          ? parseInt(item.priceSale) * item.qty + "000"
                          : parseInt(item.price) * item.qty + "000"
                      )}
                    </td>
                  </tr>
                );
              })}
            </table>
            <div className="checkout">
              <span>Thành tiền:</span> {total}
            </div>
          </div>
          <div className="address">
            <h3>NGƯỜI MUA/NHẬN HÀNG</h3>
            <Form onSubmit={order}>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Tên*</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Tên người nhận"
                  onChange={(e) => {
                    setName(e.target.value);
                  }}
                  value={name}
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Điện thoại liên lạc*</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Số điện thoại"
                  onChange={(e) => {
                    setPhone(e.target.value);
                  }}
                  value={phone}
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Nhận hàng tại nhà/công ty/bưu điện*</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Địa chỉ nhận hàng"
                  onChange={(e) => {
                    setAD(e.target.value);
                  }}
                  value={address}
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Ghi chú</Form.Label>
                <Form.Control as="textarea" />
              </Form.Group>
              <Button variant="primary" type="submit">
                ĐẶT HÀNG
              </Button>
            </Form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Carts;
