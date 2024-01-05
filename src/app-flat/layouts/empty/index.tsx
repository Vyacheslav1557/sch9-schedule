import React from 'react';

type Props = {
    children: React.ReactNode
}

const EmptyLayout: React.FC<Props> = props => {
    return (
        <>
            {props.children}
        </>
    );
};

export {EmptyLayout};