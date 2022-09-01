import './header.scss';

import IconButton from '@mui/material/IconButton';
import SettingsIcon from '@mui/icons-material/Settings';

const Header = () => {
  const openSwitch = () => {};

  return (
    <div className="container">
      <h1>To Do</h1>
      <IconButton onClick={openSwitch} className="settings">
        <SettingsIcon style={{ color: 'white' }} />
      </IconButton>
    </div>
  );
};

export default Header;
