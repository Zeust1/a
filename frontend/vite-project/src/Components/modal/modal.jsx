import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import axios from 'axios'

function Example() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

    const [formData, setFormData] = useState({
      name: '',
      phonenumber: '',
      code: '',
      birhday: '',
      email: '',
      address: '',
      type: '',
      school: '',
      major: '',
      status: '',
      isGraduated: '',
  });

    // Hàm để xử lý thay đổi input
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
  };

    // Hàm để xử lý submit form
    const handleSubmit = async (e) => {
      e.preventDefault();
      try {
        const response = await axios.post('http://localhost:8080/api/v1/teachers',formData)
      } catch (error) {
          console.error('Error:', error);
      }
  };

  return (
    <div>
      <Button variant="primary" onClick={handleShow} style={{width: "100px", height: "40px", backgroundColor: "#6A88D3", border: "none", borderRadius: "10px", fontWeight: "bold", fontSize: "large"}}>
        Tạo mới
      </Button>

      <Modal show={show} onHide={handleClose} style={{position: "absolute", top: "10%", left: "calc(50% - 30vw)", backgroundColor: "#F3EFFF", width: "60vw", height: "auto", borderRadius: "10px", boxShadow: "box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;"}}>
        <Modal.Body>
          <div style={{ width: "100%",display: "flex",gap: "50px", alignItems: "center", justifyContent: "center"}}>
            <div>
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRENNOmQMQKCTAc_Ry2oMXYhWHdelZUyjfwjg&s" alt="img" />
            </div>
            <div>
              <h3>Thông tin cá nhân</h3><br /><br /><br />
              <form onSubmit={handleSubmit} style={{display: "grid", gridTemplateColumns: "1fr 1fr", gap: "20px"}}>
                <div style={{display: "flex", flexDirection: "column", justifyContent: "flex-start", gap: "10px"}}>
                  <label>Họ và tên</label>
                  <input type="text" name='name' value={formData.name} onChange={handleChange} style={{height: "30px", width: "300px"}}/>
                </div>
                <div style={{display: "flex", flexDirection: "column", justifyContent: "flex-start", gap: "10px"}}>
                  <label>Số điện thoại</label>
                  <input type="text" name='phonenumber' value={formData.phonenumber} onChange={handleChange} style={{height: "30px", width: "300px"}}/>
                </div>
                <div style={{display: "flex", flexDirection: "column", justifyContent: "flex-start", gap: "10px"}}>
                  <label>Số CCCD</label>
                  <input type="text" name='code' value={formData.code} onChange={handleChange} style={{height: "30px", width: "300px"}}/>
                </div>
                <div style={{display: "flex", flexDirection: "column", justifyContent: "flex-start", gap: "10px"}}>
                  <label>Ngày sinh</label>
                  <input type="date" name='birhday' value={formData.birhday} onChange={handleChange} style={{height: "30px", width: "300px"}}/>
                </div>
                <div style={{display: "flex", flexDirection: "column", justifyContent: "flex-start", gap: "10px"}}>
                  <label>Email</label>
                  <input type="text" name='email' value={formData.email} onChange={handleChange} style={{height: "30px", width: "300px"}}/>
                </div>
                <div style={{display: "flex", flexDirection: "column", justifyContent: "flex-start", gap: "10px"}}>
                  <label>Địa chỉ</label>
                  <input type="text" name='address' value={formData.address} onChange={handleChange} style={{height: "30px", width: "300px"}}/>
                </div>
                <div style={{display: "flex", flexDirection: "column", justifyContent: "flex-start", gap: "10px"}}>
                  <label>Bậc</label>
                  <input type="text" name='type' value={formData.type} onChange={handleChange} style={{height: "30px", width: "300px"}}/>
                </div>                
                <div style={{display: "flex", flexDirection: "column", justifyContent: "flex-start", gap: "10px"}}>
                  <label>Trường</label>
                  <input type="text" name='school' value={formData.school} onChange={handleChange} style={{height: "30px", width: "300px"}}/>
                </div>                
                <div style={{display: "flex", flexDirection: "column", justifyContent: "flex-start", gap: "10px"}}>
                  <label>Chuyên ngành</label>
                  <input type="text" name='major' value={formData.major} onChange={handleChange} style={{height: "30px", width: "300px"}}/>
                </div>                
                <div style={{display: "flex", flexDirection: "column", justifyContent: "flex-start", gap: "10px"}}>
                  <label>Trạng thái</label>
                  <input type="text" name='status' value={formData.status} onChange={handleChange} style={{height: "30px", width: "300px"}}/>
                </div>
                <div style={{display: "flex", flexDirection: "column", justifyContent: "flex-start", gap: "10px"}}>
                  <label>Tốt nghiệp</label>
                  <input type="text" name='isGraduated' value={formData.isGraduated} onChange={handleChange} style={{height: "30px", width: "300px"}}/>
                </div>
                <button type="submit" onClick={handleClose}  style={{width: "70px", height: "40px", backgroundColor: "#6A88D3", border: "none", borderRadius: "10px"}}>Lưu</button>
              </form>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default Example;