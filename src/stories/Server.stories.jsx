import React from 'react';

import { Server } from './Server';

export default {
    title: 'Deployment/Server',
    component: Server,
    parameters: {
        // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
        layout: 'fullscreen',
    },
};

const Template = (args) => <Server {...args} />;

// More on interaction testing: https://storybook.js.org/docs/react/writing-tests/interaction-testing
export const ServerConfiguration = Template.bind({});
