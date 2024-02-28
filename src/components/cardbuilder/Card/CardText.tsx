import React, { type FC } from 'react';
import Box from '@mui/material/Box';
import escapeHTML from 'escape-html';
import type { TextLine } from './cardHelper';

interface CardTextProps {
    className?: string;
    textLine: TextLine;
}

const CardText: FC<CardTextProps> = ({ className, textLine }) => {
    const { title, titleAction } = textLine;
    const renderCardText = () => {
        if (titleAction) {
            return (
                <a
                    className='itemAction textActionButton'
                    href={titleAction.url}
                    title={titleAction.title}
                    {...titleAction.dataAttributes}
                >
                    {escapeHTML(titleAction.title)}
                </a>
            );
        } else {
            return title;
        }
    };

    return <Box className={className}>{renderCardText()}</Box>;
};

export default CardText;
