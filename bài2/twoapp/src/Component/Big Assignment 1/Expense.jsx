import React, { useState } from 'react';

const Expense = () => {
  const [chiTieu, setChiTieu] = useState([]);
  const [nam, setNam] = useState(2023);

  const [ten, setTen] = useState('');
  const [soTien, setSoTien] = useState('');
  const [ngay, setNgay] = useState('');

  const [hienForm, setHienForm] = useState(false);

  const themChiTieu = () => {
    const chiTieuMoi = {
      id: chiTieu.length + 1,
      ten,
      soTien,
      ngay
    };

    setChiTieu([...chiTieu, chiTieuMoi]);
    setTen('');
    setSoTien('');
    setNgay('');
    setHienForm(false);
  }

  const xoaChiTieu = (id) => {
    setChiTieu(chiTieu.filter(ct => ct.id !== id));
  }

  const chiTieuLoc = chiTieu.filter(ct => {
    return new Date(ct.ngay).getFullYear() === nam;
  });

  let tongSoTien = 0;
  chiTieuLoc.forEach(ct => {
    tongSoTien += parseInt(ct.soTien);
  });

  return (
    <div className="app">
      <h1>Theo dõi chi tiêu</h1>

      <div className="loc">
        <select
          value={nam}
          onChange={(e) => setNam(e.target.value)}
        >
          <option value="2021">2021</option>
          <option value="2022">2022</option>
          <option value={2023}>2023</option>
          <option value="2024">2024</option>
        </select>
      </div>

      <div className="bieu-do">
        
        <p>Tổng: {tongSoTien}</p>
      </div>

      <div className="chi-tieu">
        <button onClick={() => setHienForm(true)}>Thêm chi tiêu</button>
        
        {chiTieuLoc.map(ct => (
          <div key={ct.id} className="chi-tieu">
            <div>{ct.ten}</div>
            <div>{ct.soTien}</div>
            <div>{ct.ngay}</div>
            <button onClick={() => xoaChiTieu(ct.id)}>X</button>
          </div>
        ))}
      </div>

      {hienForm && (
        <div className="form">
          <input
            value={ten}
            onChange={(e) => setTen(e.target.value)}
            placeholder="Tên chi tiêu"
          />
          <input
            value={soTien}
            onChange={(e) => setSoTien(e.target.value)}
            placeholder="Số tiền"
          />
          <input
            value={ngay}
            onChange={(e) => setNgay(e.target.value)}
            type="date"
          />
          <button onClick={themChiTieu}>Thêm</button>
          <button onClick={() => setHienForm(false)}>Huỷ</button>
        </div>
      )}

    </div>
  );
    
};

export default Expense;