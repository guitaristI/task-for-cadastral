import Table from 'react-bootstrap/Table';
import {NavLink} from "react-bootstrap";
import {useDispatch} from "react-redux";
import {getCadastItemData} from "../redux/cadastItemDataReducer";

function TableComponent(props) {

    const dispatch = useDispatch();
    function getCadastData(num) {
        dispatch(getCadastItemData(num))
    }

    return (
        <>
            <Table striped bordered hover>
                <thead>
                <tr>
                    <th>#</th>
                    <th>Кад. номер</th>
                    <th>Тип</th>
                    <th>Адрес</th>
                </tr>
                </thead>
                <tbody>
                {
                    props.cadastItems.map((item, index) =>
                        <tr key={item.objectId}>
                            <td>{index + 1}</td>
                            <td onClick={() => getCadastData(item.objectCn)} className='cadast-number'>{item.objectCn}</td>
                            <td>{item.objectType === 'parcel' ? <p>Земельный участок</p> :
                                item.objectType === 'flat' ? <p>Квартира</p> :
                                    item.objectType === 'building' ? <p>Здание</p> :
                                        item.objectType === 'construction' ? <p>Сооружение</p> :
                                            item.objectType
                            }</td>
                            <td>{item.addressNotes}</td>
                        </tr>
                    )
                }
                </tbody>
            </Table>
        </>

    );
}

export default TableComponent;