import React from 'react';

import { Accounting, NCFGeneration } from './Account';

export default {
    title: 'Configuration/Accounting',
    component: Accounting, NCFGeneration,
    parameters: {
        // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
        layout: 'fullscreen',
    },
};

const Template = (args) => <Accounting {...args} />;
const Template2 = (args) => <NCFGeneration{...args} />;

// More on interaction testing: https://storybook.js.org/docs/react/writing-tests/interaction-testing
export const ChartAccount = Template.bind({});
export const NCFGenerate = Template2.bind({});