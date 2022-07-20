import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getCadastItems} from "../../redux/cadastReducer";
import CadastItem from "./CadastItem";
import SearchBar from "../SearchBar";
import preloader from "../../img/hug.gif";
import TableComponent from "../Table";
import MyModal from "../MyModal";

const Main = (props) => {
    const cadastItems = useSelector(state => state.cadast.items);
    const isFetching = useSelector(state => state.cadast.isFetching);
    const cadastItemData = useSelector(state => state.cadastItemData.items);
    const dataIsFetching = useSelector(state => state.cadastItemData.isFetching)
    const modalVisible = useSelector(state => state.cadastItemData.visible);



    // useEffect(() => {
    //     dispatch(getCadastItems())
    // }, [])

    return (
        <div className='main'>
            <SearchBar/>
            {
                dataIsFetching === false
                ? <MyModal data={cadastItemData} visible={modalVisible}/>
                    : <div className='main__preloader'><img alt='#' src={preloader}/></div>
            }
            {
                isFetching === false
                ? <TableComponent cadastItems={cadastItems}/>
                : <div className='main__preloader'><img alt='#' src={preloader}/></div>
            }

        </div>
    );
};

export default Main;