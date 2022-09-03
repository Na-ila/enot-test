import './dayBlock.scss';

import Checkbox from '@mui/material/Checkbox';

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

const Today = () => {
    return <div className='today_container'>
        <Checkbox {...label} defaultChecked style={{color: 'white'}}/>
        <div className="day_title">Today tasks:</div>
    </div>
}

export default Today