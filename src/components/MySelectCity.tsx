import { useEffect, useState } from 'react'
import Select from 'react-select'

import style from './css/mySelectCity.module.css'

const options = [{
    value: 'Київ',
    label: 'Київ'
},{
    value: 'Харків',
    label: 'Харків'
},{
    value: 'Одеса',
    label: 'Одеса'
},{
    value: 'Львів',
    label: 'Львів'
}]

type ChildProps = {
    city: string;
    setCity?: (city: string) => void;
}

const MySelectCity: React.FC<ChildProps> = ({city, setCity}) => {

    const containerClassName = style["mySelectCity-container"]

    const [currentCity, setCurrentCity] = useState<string>(city)

    const getValue = () => {
        return currentCity ? options.find(b => b.value === currentCity) : ''
    }

    const onChange = (newValue: null | any) => {
        if(newValue){
            setCurrentCity(newValue.value)
            if(typeof setCity === 'function'){
                setCity(newValue.value)
            }
        }else{
            setCurrentCity('')
        }
    }

    return(
        <Select options={options} onChange={onChange} className={containerClassName} classNamePrefix={style.mySelectCity__control}
        value={getValue()} isClearable isSearchable placeholder='Місто'/>
    )
}
export default MySelectCity