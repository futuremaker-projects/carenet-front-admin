import React, {useEffect, useState} from 'react';

const CountDown = () => {
    const [time, setTime] = useState(300);

    useEffect(() => {
        let timer = setInterval(() => {
            setTime((time) => {
                if (time === 0) {
                    clearInterval(timer);
                    return 0;
                } else return time - 1;
            });
        }, 1000);
    }, []);

    return (
        <div>
            <p>
                {`${Math.floor(time / 60)}`.padStart(2, 0)}:{`${time % 60}`.padStart(2, 0)}
            </p>
        </div>
    );
};

export default CountDown;