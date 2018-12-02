import * as React from 'react';

export interface IOrderProps {
    action?: "Pickup" | "Drop Off";
    time?: string;
    date?: string;
    address?: string;
    subscription?: "One Time" | "Weekly" | "Biweekly" | "Semester";
    bagSize?: "Regular" | "Large";
    weekday?: "Mon" | "Tue" | "Wed" | "Thu" | "Fri" | "Sat" | "Sun";
    notes?: string;
}