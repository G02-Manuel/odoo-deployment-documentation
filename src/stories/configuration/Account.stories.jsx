import React from 'react';

import { Accounting } from './Account';

export default {
    title: 'Configuration/Accounting',
    component: Accounting,
    parameters: {
        // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
        layout: 'fullscreen',
    },
};

const Template = (args) => <Accounting {...args} />;

// More on interaction testing: https://storybook.js.org/docs/react/writing-tests/interaction-testing
export const ChartAccount = Template.bind({});