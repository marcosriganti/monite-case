'use client';

import {useContext} from "react";
import Notification from "@/components/notification";
import {NotificationContext} from "../notification-provider";

const NotificationStatus = () => {
    const {message, state, setMessage} = useContext(NotificationContext);
    if (!message) {
        return null;
    }
    return (
        <Notification message={message} state={state} onClose={(ev) => {
            ev.preventDefault();
            setMessage(null);
        }} />
    );
};

export default NotificationStatus;