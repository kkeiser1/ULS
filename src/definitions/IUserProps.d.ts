import * as React from 'react';

export interface IUserProps {
    fname: string;
    lname: string;
    username: string;
    email: string;
    pickupAddress?: string;
    billingAddress: string;

}