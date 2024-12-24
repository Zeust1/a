import './teachers.css'
import { useEffect, useState } from 'react'
import Example from '../modal/modal.jsx'

const Teachers = () => {
    const [teachers, setTeachers] = useState([])
    const [page, setPage] = useState(1);
    const [limit, setLimit] = useState(5);
    useEffect(()=>{
            const fetchTeachers = async () => {
                const res = await fetch(`http://localhost:8080/api/v1/teachers?page=${page}&limit=${limit}`)
                const data = await res.json()
                if(!res) throw new Error('fetch data fail')
                try {
                    setTeachers(data.data)
                } catch (error) {
                    console.log(error.message)
                }
            }
            fetchTeachers()
    },[page, limit])
    return(
        <div className='teachers-table'>
            <Example/>
            <table>
                <thead>
                    <tr>
                        <td>Mã</td>
                        <td>Giáo viên</td>
                        <td>Trình độ (cao nhất)</td>
                        <td>Bộ môn</td>
                        <td>TT Công tác</td>
                        <td>Địa chỉ</td>
                        <td>Trạng thái</td>
                        <td>Hành động</td>
                    </tr>
                </thead>
                <tbody>
                    {teachers.map((teacher) => (
                        <tr key={teacher._id}>
                            <td>{teacher.code}</td>
                            <td className='teacher-info'>
                                <div>
                                    <img style={{width: '50px', height: '50px'}} src="https://engineering.unl.edu/images/staff/Kayla-Person.jpg"/>
                                </div>
                                <div style={{lineHeight: "20px"}}>
                                    <p style={{fontWeight: "bold"}}>{teacher.userId[0].name}</p>
                                    <p style={{fontStyle: "italic"}}>{teacher.userId[0].email}</p>
                                    <p style={{fontStyle: "italic"}}>{teacher.userId[0].phoneNumber}</p>
                                </div>
                            </td>
                            <td>
                                <p>Bậc: {teacher.degrees[0].type}</p>
                                <p>Chuyên ngành: {teacher.degrees[0].major}</p>
                            </td>
                            <td>N/A</td>
                            <td>{teacher.teacherPositionsId[0].name}</td>
                            <td>{teacher.userId[0].address}</td>
                            <td>{teacher.teacherPositionsId[0].isActive === true? 'Đang hoạt động' : 'Đang công tác'}</td>
                            <td><button>chi tiết</button></td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <div>
                <button onClick={() => setPage((prev) => Math.max(prev - 1, 1))}>
                    Previous
                </button>
                <span> Page: {page} </span>
                <button onClick={() => setPage((prev) => prev + 1)}>Next</button>
                <select onChange={(e) => setLimit(e.target.value)}>
                    <option value="5">5</option>
                    <option value="10">10</option>
                </select>
            </div>
        </div>
    )
}

export default Teachers