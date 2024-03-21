import './Filter.scss';

const Filter = ({value, onChange}) => {
    return (<div className='Filter'>
            <h3>Find contact by name</h3>
            <input type='text' name='filter' value={value} onChange={onChange}></input>
        </div>
    )
}

export default Filter;