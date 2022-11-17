import React from 'react';

import { WebApp, BackendApp } from './Apparance';

export default {
    title: 'Configuration/Apparance',
    component: WebApp, BackendApp,
    parameters: {
        // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
        layout: 'fullscreen',
    },
};

const WebTemplate = (args) => <WebApp {...args} />;
const BackendTemplate = (args) => <BackendApp {...args} />;

// More on interaction testing: https://storybook.js.org/docs/react/writing-tests/interaction-testing
export const Web = WebTemplate.bind({});
export const BackendTheme = BackendTemplate.bind({});