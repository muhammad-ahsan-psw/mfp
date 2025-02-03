import { mount } from 'marketing/MarketingApp';
// import { mount } from '../../../marketing/src/bootstrap';
import React, {useEffect, useState} from 'react';
import { useRef } from 'react';

// export default () => {
export const MarketingApp = () => {
    const ref = useRef(null);

    useEffect(() => {
        mount(ref.current);
    });

    return <div ref={ref}></div>
}