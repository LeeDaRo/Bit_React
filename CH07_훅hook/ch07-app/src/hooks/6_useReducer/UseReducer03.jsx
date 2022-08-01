import React, { useState } from 'react';
import { useReducer } from 'react';
import Student from './Student';

const reducer = (state, action) => {
  switch (action.type) {
    case 'add-student':
      const name = action.payload;

      const newStudent = {
        id: Date.now(),
        name: name,
        isHere: false
      };

      return {
        count: state.count + 1,
        students: [...state.students, newStudent]
      };


    case 'delete-student':
      return {
        count: state.count - 1,
        students: state.students.filter(student => student.id !== action.payload)
      };

    case 'check-student':
      return {
        count: state.count,
        students: state.students.map((student) => {
          if (student.id === action.payload) {
            return { ...student, isHere: !student.isHere }
          };
          return student;
        })
      };

    default:
      break;
  }
}

const intitialState = {
  count: 1,
  students: [
    {
      id: Date.now(),
      name: 'chur',
      isHere: false,
    },
  ]
};

const UseReducer03 = () => {
  const [name, setName] = useState('');

  const [studentsInfo, dispatch] = useReducer(reducer, intitialState);

  return (
    <div className='container'>
      <div className="alert alert-info">
        <div>
          <i className="fa-solid fa-book"></i>
          &nbsp;출석부
        </div>
        <hr />
        <p>총 학생수 : {studentsInfo.count} 명</p>
        <div>
          <input className='form-control' type="text" placeholder='이름을 입력해주세요.' spellCheck='false' onChange={(e) => { setName(e.target.value) }} />
        </div>
        <button className='btn btn-success mt-3' onClick={(e) => {

          if (name.replace(' ', '') === '') {
            alert('이름을 입력해주세요');
            return;
          }

          dispatch({ type: 'add-student', payload: name })
        }
        }>추가</button>
      </div>
      {
        studentsInfo.students.map(student => {
          return <Student key={student.id} name={student.name} id={student.id} isHere={student.isHere} dispatch={dispatch} />
        })
      }

    </div>
  );
};

export default UseReducer03;