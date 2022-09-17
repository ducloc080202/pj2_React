import React, { useContext } from 'react';
import Navbar from '../components/Navbar';
import Header from '../components/Header';
import Context from '../components/data/Context'

function Report() {
    const state=useContext(Context)
    console.log(state[0].fullData);
    return ( 
        <div className="mainContainer">
        <Navbar/>
        <div className="main">
            <Header
                status='Báo cáo'
            />
            <div className='content'>
                <div className='content_table'>
                    <table className='content_report'>
                        <thead>
                             <tr>
                                <th>ID</th>
                                <th>Trạng thái hoạt động</th>
                                <th>Lực nén</th>
                                <th>Số lần nén còn lại</th>
                                <th>Thời gian giữ</th>
                            </tr>
                        </thead>
                        <tbody>
                           
                            {state[0].fullData.map((item, i) => (
                                <tr key={i}>
                                    <td>{item.id}</td>
                                    <td>{item.state?'true':'false'}</td>
                                    <td>{item.pressure}</td>
                                    <td>{item.pushCount}</td>
                                    <td>{item.time}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
         </div>
    </div>
     );
}

export default Report;