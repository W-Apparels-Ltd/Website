import React from 'react';
import logo from '../images/wapparels_logo.jpeg'
const PrintFast = () => {
  return (
    <>
    {/*pdf */}
    <div style={{width:'100%' , height:window.innerHeight}}        className='print'>
          <div className='flex justify-center'>
            <img className='me-1 w-12 rounded-full' src={logo} alt="" />
            <h1>W. Apparels Ltd.</h1>
          </div>
          <div>
          <table class="table-normal">
            
            <tbody>
              <tr>
                <td>The Sliding Mr. Bones (Next Stop, Pottersville)</td>
                <td>Malcolm Lockyer</td>
                <td>1961</td>
              </tr>
              <tr>
                <td>Witchy Woman</td>
                <td>The Eagles</td>
                <td>1972</td>
              </tr>
              <tr>
                <td>Shining Star</td>
                <td>Earth, Wind, and Fire</td>
                <td>1975</td>
              </tr>
            </tbody>
          </table>
          </div>
    </div>
    {/*pdf */}
    </>
  );
};

export default PrintFast;