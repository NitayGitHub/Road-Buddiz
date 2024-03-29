import { useEffect } from "react";
import {
    Dialog,
    DialogTitle,
    DialogContent,
    ListItemButton,
    ListItemIcon,
    ListItemText,
} from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import MapComponent from './MapComponent.jsx';
import '../styles/RequestsPage.css';
import { useState } from "react";

const VolLocationDialog = ({ volLocation, status }) => {
    const [volLocationDialogState, setVolLocationDialogState] = useState(false)
    const handleVolLocationDialogClose = () => {
        setVolLocationDialogState(false)
    }

    useEffect(() => {
        if (volLocation) console.log('location updated', volLocation);
    }, [volLocation])

    return (
        <>
            <div>
                <ListItemButton
                    disabled={status === "נסגר"} // Disable if status is "נסגר"
                    sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', gap: '2em' }}
                    onClick={() => {
                        if (status !== "נסגר") { // Open dialog only if status is not "נסגר"
                            setVolLocationDialogState(true)
                        }
                    }}
                >
                    <ListItemText primary={"מיקום מתנדב"} />
                    <ListItemIcon sx={{ minWidth: '0' }}>
                        <LocationOnIcon />
                    </ListItemIcon>
                </ListItemButton>

                <Dialog open={volLocationDialogState} onClose={handleVolLocationDialogClose}>
                    <DialogTitle>מיקום מתנדב</DialogTitle>
                    <DialogContent>
                        <MapComponent location={volLocation}/>
                    </DialogContent>
                </Dialog>
            </div>
        </>
    );
};

export default VolLocationDialog;
