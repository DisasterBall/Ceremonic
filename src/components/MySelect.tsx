import { useEffect, useState } from 'react'
import Select from 'react-select'

import style from './css/mySelect.module.css'

import { useAppDispatch, useAppSelector } from '../hook';
import { addProviderServiceName } from '../store/authProviderSlice';

type Ioptions = {
    value: string,
    label: string,
}[]



const MySelect: React.FC = () => {

    const dispatch = useAppDispatch()

    const [currentService, setCurrentService] = useState('')
    const [options, setOptions] = useState<Ioptions>([]);

    const getValue = () => {
        return currentService ? options.find(b => b.value === currentService) : ''
    }

    const onChange = (newValue: null | any) => {
        if(newValue){
            setCurrentService(newValue.value)
            dispatch(addProviderServiceName(newValue.value))
        }else{
            setCurrentService('')
            dispatch(addProviderServiceName(currentService))
        }
    }
    
    const arrayService: string[] = useAppSelector(state => state.authProviderInfo.arrayServiceName)

    const formattedData = () => {
        if (Array.isArray(arrayService)) {
            const formattedOptions = arrayService.map((option: string) => ({
                value: option,
                label: option
            }));
            setOptions(formattedOptions);
        }
    };

    useEffect(() => {
        formattedData();
    }, []);

    return(
        <Select options={options} onChange={onChange} classNamePrefix={style.mySelect__control}
        value={getValue()} isClearable isSearchable placeholder='Ваші послуги'/>
    )
}
export default MySelect