import React from 'react';
import { Enviroment } from './Environment';

export default {
    title: 'Deployment/Enviroment',
    component: Enviroment,
    parameters: {
        // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
        layout: 'fullscreen',
    },
};

const Template = (args) => <Enviroment {...args} />;

// More on interaction testing: https://storybook.js.org/docs/react/writing-tests/interaction-testing
export const ServerEnviroment = Template.bind({});
