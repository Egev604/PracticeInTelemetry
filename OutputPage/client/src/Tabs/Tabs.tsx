import * as React from 'react';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import {NavLink} from "react-router-dom";
import { useLocation } from "react-router-dom";
export default function CenteredTabs() {
    const location = useLocation();
    const [value, setValue] = React.useState(0);

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };
    React.useEffect(() => {
        if (location.pathname.startsWith('/Post')) {
            setValue(0);
        } else if (location.pathname.startsWith('/Todos')) {
            setValue(1);
        }
    }, [location]);
    return (
        <Box sx={{ width: '100%', bgcolor: 'background.paper' }}>
            <Tabs value={value} onChange={handleChange} centered>
                <Tab label="Post" component={NavLink} to={"/Post"}/>
                <Tab label="Todos" component={NavLink} to={"/Todos"}/>
            </Tabs>
        </Box>
    );
}