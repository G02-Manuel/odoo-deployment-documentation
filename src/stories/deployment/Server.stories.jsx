import React from 'react';

import { ServerMethod, EnviromentMethod } from './Server';

export default {
    title: 'Deployment/Server',
    component: ServerMethod, EnviromentMethod,
    parameters: {
        // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
        layout: 'fullscreen',
    },
};

const ServerTemplate = (args) => <ServerMethod {...args} />;
const EnviromentTemplate = (args) => <EnviromentMethod {...args} />;

// More on interaction testing: https://storybook.js.org/docs/react/writing-tests/interaction-testing
export const Configuration = ServerTemplate.bind({});

export const GeneralEnviroment = EnviromentTemplate.bind({});
