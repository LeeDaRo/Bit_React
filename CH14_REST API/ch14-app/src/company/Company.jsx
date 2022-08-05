import axios from 'axios';
import React, { useEffect, useState } from 'react';

const Company = () => {
  const SERVER_URL = 'http://localhost:8080/company';
  const [companys, setCompanys] = useState(
    {
      "name": "",
      "address": ""
    }
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(companys.name, companys.address);

    axios.post(`${SERVER_URL}/insert`, companys)
      .then((res) => { console.log(res.data) })
      .catch();

  }

  return (
    <div className='container mt-5'>
      <h2>Company</h2>
      <hr />
      <form action="" method="post" onSubmit={handleSubmit}>
        <input className='form-control w-50 mb-2' type="text" placeholder='Company_name' name='name' onChange={(e) => { setCompanys({ ...companys, name: e.target.value }) }} />
        <input className='form-control w-50 mb-2' type="text" placeholder='Company_address' name='address' onChange={(e) => { setCompanys({ ...companys, address: e.target.value }) }} />
        <button className="btn btn-info " type='submit'>Submit</button>
      </form>
    </div>
  );
};

export default Company;