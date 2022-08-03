import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';

const Myimg = styled.img`
  width: 50px;
  border-radius: 50%;

`;

const Test = () => {
  const [posts, setPosts] = useState([]);

  // useEffect(() => {
  //   axios({
  //     method: 'get',
  //     url: 'https://jsonplaceholder.typicode.com/photos',
  //   })
  //   .then((res) => {
  //     setPosts(res.data);
  //   })
  // }, []);

  useEffect(() => {

    axios.get('https://jsonplaceholder.typicode.com/photos')
      .then((res) => { setPosts(res.data); })
      .catch((error) => { console.log(error) });
  }, []);

  return (
    <>
      <div className='d-flex' style={{ alignItems: 'center' }}>
        <img src='./images/images.jpg' style={{ width: 100, height: 100, borderRadius: 100 }} />
        <div className='d-flex ms-3'>
          <input className='form-control me-2' />
          <button className='btn btn-danger'>Search</button>
        </div>
      </div>

      <div className='container'>
        <span style={{ color: '#999' }}>{`total :${posts.length} `}</span>
        <hr />
        <table className='table text-light' style={{ fontSize: '1rem' }}>
          <thead>
            <tr>
              <th scope='col'>No</th>
              <th scope='col'>ID</th>
              <th scope='col'>TITLE</th>
              <th scope='col'>URL</th>
            </tr>
          </thead>
          <tbody>
            {posts.map((post, idx) => {
              return (
                <tr key={idx}>
                  <th scope='row'>{post.id}</th>
                  <td><Myimg src={`${post.thumbnailUrl}`} alt='' /></td>
                  <td>{post.title}</td>
                  <td><td><a href={post.url}>{post.url}</a></td></td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Test;

// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import styled from 'styled-components';

// const MyImg = styled.img`
//   width: 50px;
//   border-radius: 50%;
// `

// const Test = () => {
//   const [data, setData] = useState([]);

//   useEffect(() => {
//     axios.get("https://jsonplaceholder.typicode.com/photos/")
//       .then((res) => {
//         setData(res.data)
//       });

//     // axios({
//     //   method="get",
//     //   url="https://jsonplaceholder.typicode.com/photos/"
//     // });
//   }, []);

//   return (
//     <>
//       <div className="d-flex align-items-center mt-5">
//         <img src="https://cdn.pixabay.com/photo/2017/08/25/18/48/watercolor-2681039__340.jpg" alt="" style={{ width: 100, height: 100, borderRadius: 100 }} />
//         <div className="d-flex">
//           <input type="text" className="form-control ms-3" />
//           <button className="btn btn-danger ms-3">Search</button>
//         </div>
//       </div>

//       <div className="container mt-3">
//         <span style={{ color: '#999' }}>Total : 12345 gun</span>
//         <hr />
//         <table className="table table-light" style={{ fontSize: '1rem' }}>
//           <thead>
//             <tr>
//               <th scope="col">Album</th>
//               <th scope="col">Id</th>
//               <th scope="col">Title</th>
//               <th scope="col">Url</th>
//             </tr>
//           </thead>
//           <tbody>
//             {data.map((dummy, idx) => {
//               return (
//                 <tr key={idx}>
//                   <td>{dummy.albumId}</td>
//                   <td>
//                     {/* <a href={dummy.thumbnailUrl}>{dummy.thumbnailUrl}</a> */}

//                     <MyImg src={dummy.thumbnailUrl} alt="" />
//                   </td>
//                   <td>{dummy.title}</td>
//                   <td><a href={dummy.url}>{dummy.url}</a></td>
//                 </tr>
//               )
//             })}
//           </tbody>
//         </table>
//       </div>
//     </>
//   );
// };

// export default Test;