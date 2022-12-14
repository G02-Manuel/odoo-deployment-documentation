import React from 'react';

import { Install } from './Install';

export default {
    title: 'B. Deployment/Install',
    component: Install,
    parameters: {
        // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
        layout: 'fullscreen',
    },
};

const InstallTemplate = (args) => <Install {...args} />;

// More on interaction testing: https://storybook.js.org/docs/react/writing-tests/interaction-testing
export const InstallWithScript = InstallTemplate.bind({});