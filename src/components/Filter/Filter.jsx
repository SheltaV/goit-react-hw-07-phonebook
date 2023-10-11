import { useDispatch, useSelector } from "react-redux";
import { addFilter } from "redux/filterReducer";
import { selectFilter } from "redux/selectors";

export const Filter = () => {
    const dispatch = useDispatch()
    const filter = useSelector(selectFilter)

    return (<div>
        <p>Find contacts by name</p>
        <input type="text" value={filter} onChange={evt => dispatch(addFilter(evt.target.value))} />
    </div>)
}