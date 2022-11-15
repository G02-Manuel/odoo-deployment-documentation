import React from 'react';

import { Server, Enviroment } from './Server';

export default {
    title: 'Deployment/Server',
    component: Server, Enviroment,
    parameters: {
        // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
        layout: 'fullscreen',
    },
};

const Template = (args) => <Server {...args} />;
const Template2 = (args) => <Enviroment {...args} />;

// More on interaction testing: https://storybook.js.org/docs/react/writing-tests/interaction-testing
export const Configuration = Template.bind({});

export const GeneralEnviroment = Template2.bind({});
