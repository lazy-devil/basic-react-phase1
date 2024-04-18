import Item from "../Item/Item";
import './Transaction.css'
import { v4 as uuidv4 } from 'uuid'

const Transaction = () => {

    const data = [
        { title: 'ค่ารักษาพยาบาล', amount: 2000 },
        { title: 'ค่าน้ำมัน', amount: 5000 },
        { title: 'ค่าเช่าบ้าน', amount: 80000 },
        { title: 'เงินเดือน', amount: 7000 },
        { title: 'จ่ายค่าประกัน', amount: 300 },
        { title: 'ค่าเดินทาง', amount: 800 },
    ]

    return (
        <ul className="item-list">
            {data.map((element: any) => {
                return <Item {...element} key={uuidv4()} />
            })}
        </ul>
    );
}

export default Transaction